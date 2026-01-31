<template>
  <div class="radar">
    <div class="ring"></div>
    <div class="ring ring2"></div>
    <div class="cross"></div>
    <div class="sweep"></div>
    <div
      v-for="p in points"
      :key="p.id || p.name"
      class="dot"
      :style="{ left: `${p.x}%`, top: `${p.y}%` }"
      :data-type="p.type || 'uav'"
      :title="p.name"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  points: { type: Array, default: () => [] }
});
</script>

<style scoped>
.radar{
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 1px solid rgba(var(--accent-rgb),.25);
  background: radial-gradient(circle at center, rgba(var(--accent-rgb),.08), transparent 60%);
  overflow: hidden;
}
.ring{ position:absolute; inset: 16px; border-radius:50%; border:1px dashed rgba(var(--accent-rgb),.15); }
.ring2{ inset: 38px; }
.cross:before, .cross:after{
  content: ""; position:absolute; left:50%; top:0; width:1px; height:100%; background: rgba(var(--accent-rgb),.12);
}
.cross:after{ top:50%; left:0; width:100%; height:1px; }
.sweep{
  position:absolute; inset:-20%;
  background: conic-gradient(from 0deg, rgba(var(--accent-rgb),.25), transparent 35%);
  animation: sweep 3.2s linear infinite;
}
.dot{
  position:absolute; width:6px; height:6px; border-radius:50%;
  transform: translate(-50%, -50%);
  background: var(--accent); box-shadow: 0 0 8px rgba(var(--accent-rgb),.6);
}
.dot[data-type="target"]{ background: var(--warn); box-shadow: 0 0 8px rgba(var(--warn-rgb),.6); }
@keyframes sweep{ to{ transform: rotate(360deg); } }
</style>
