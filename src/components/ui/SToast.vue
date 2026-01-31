<template>
  <div class="s-toast">
    <div v-for="t in items" :key="t.id" class="toast" :data-type="t.type || 'info'">
      <div class="title">{{ t.title || '提示' }}</div>
      <div class="msg">{{ t.message }}</div>
      <button class="close" @click="emit('close', t.id)">×</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, default: () => [] }
});
const emit = defineEmits(["close"]);
</script>

<style scoped>
.s-toast{
  position: fixed; right: 16px; top: 16px; z-index: 2100;
  display:flex; flex-direction:column; gap:10px;
}
.toast{
  width: 280px;
  border-radius: 12px;
  border: 1px solid rgba(var(--accent-rgb),.18);
  background: rgba(var(--panel-rgb),.9);
  color: var(--text);
  padding: 10px 12px 10px 12px;
  position: relative;
}
.toast[data-type="warn"]{ border-color: rgba(var(--warn-rgb),.45); }
.toast[data-type="error"]{ border-color: rgba(var(--danger-rgb),.5); }
.toast[data-type="ok"]{ border-color: rgba(var(--ok-rgb),.5); }
.title{ font-size:12px; letter-spacing:.08em; }
.msg{ font-size:12px; opacity:.85; margin-top:4px; }
.close{
  position:absolute; top:6px; right:6px;
  width: 22px; height: 22px;
  border-radius: 6px; border: 1px solid rgba(255,255,255,.2);
  background: transparent; color: var(--text);
  cursor:pointer;
}
</style>
