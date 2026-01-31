<template>
  <div class="canvas" ref="el"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";

const props = defineProps({
  nodes: { type: Array, default: () => [] },
  links: { type: Array, default: () => [] }
});

const el = ref(null);
let canvas = null;
let ctx = null;

function draw(){
  if (!ctx || !el.value) return;
  const styles = getComputedStyle(el.value);
  const panelRgb = styles.getPropertyValue("--panel-rgb").trim() || "248,242,227";
  const accentRgb = styles.getPropertyValue("--accent-rgb").trim() || "122,143,58";
  const okColor = styles.getPropertyValue("--ok").trim() || "#4F8F5A";
  const accentColor = styles.getPropertyValue("--accent").trim() || "#7A8F3A";
  const w = el.value.clientWidth;
  const h = el.value.clientHeight;
  canvas.width = w; canvas.height = h;
  ctx.clearRect(0,0,w,h);

  ctx.fillStyle = `rgba(${panelRgb}, .8)`;
  ctx.fillRect(0,0,w,h);

  // links
  ctx.strokeStyle = `rgba(${accentRgb}, .25)`;
  ctx.lineWidth = 1;
  props.links.forEach(l => {
    const a = props.nodes.find(n => n.id === l.a);
    const b = props.nodes.find(n => n.id === l.b);
    if (!a || !b) return;
    const ax = w/2 + (a.lon || 0) * 20;
    const ay = h/2 - (a.lat || 0) * 20;
    const bx = w/2 + (b.lon || 0) * 20;
    const by = h/2 - (b.lat || 0) * 20;
    ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
  });

  // nodes
  props.nodes.forEach(n => {
    const x = w/2 + (n.lon || 0) * 20;
    const y = h/2 - (n.lat || 0) * 20;
    ctx.beginPath();
    ctx.fillStyle = n.type === "fixed-wing" ? okColor : accentColor;
    ctx.arc(x, y, 4, 0, Math.PI*2);
    ctx.fill();
  });
}

let ro = null;

onMounted(() => {
  if (!el.value) return;
  canvas = document.createElement("canvas");
  ctx = canvas.getContext("2d");
  el.value.appendChild(canvas);
  draw();
  ro = new ResizeObserver(draw);
  ro.observe(el.value);
});

onBeforeUnmount(() => {
  ro?.disconnect();
  ro = null;
  if (canvas?.parentNode) canvas.parentNode.removeChild(canvas);
  canvas = null; ctx = null;
});

watch(() => [props.nodes, props.links], () => draw(), { deep: true });
</script>

<style scoped>
.canvas{
  width:100%; height:100%; min-height: 240px;
  border:1px dashed rgba(var(--accent-rgb),.2);
  border-radius: 10px;
  overflow:hidden; position:relative;
}
</style>
