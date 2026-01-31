<template>
  <Teleport to="body">
    <div v-if="open" class="s-modal" @click.self="onMask">
      <div class="panel">
        <div class="head">
          <div class="title">{{ title }}</div>
          <button class="close" @click="emit('close')">×</button>
        </div>
        <div class="body"><slot /></div>
        <div v-if="$slots.footer" class="foot"><slot name="footer" /></div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, default: "" },
  closeOnMask: { type: Boolean, default: true }
});

const emit = defineEmits(["close"]);

function onMask(){
  if (props.closeOnMask) emit("close");
}
</script>

<style scoped>
.s-modal{
  position: fixed; inset:0; z-index: 2000;
  display:flex; align-items:center; justify-content:center;
  background: rgba(var(--text-rgb),.35);
  backdrop-filter: blur(2px);
}
.panel{
  width: min(680px, calc(100vw - 24px));
  border-radius: 14px;
  border: 1px solid rgba(var(--accent-rgb),.18);
  background: linear-gradient(180deg, rgba(var(--panel2-rgb),.95), rgba(var(--panel-rgb),.98));
  box-shadow: 0 30px 80px rgba(var(--text-rgb),.25);
}
.head{
  padding: 12px 14px;
  display:flex; justify-content:space-between; align-items:center;
  border-bottom: 1px solid rgba(var(--accent-rgb),.1);
}
.title{ font-size: 14px; letter-spacing:.1em; color: var(--text); }
.close{
  border: 1px solid rgba(255,255,255,.2);
  background: transparent;
  color: var(--text);
  width: 28px; height: 28px; border-radius: 8px; cursor:pointer;
}
.body{ padding: 14px; color: rgba(var(--text-rgb),.9); font-size:12px; }
.foot{ padding: 12px 14px; border-top: 1px solid rgba(var(--accent-rgb),.1); display:flex; justify-content:flex-end; gap:10px; }
</style>
