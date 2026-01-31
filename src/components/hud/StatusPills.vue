<template>
  <div class="pills">
    <span v-for="p in items" :key="p.label" class="pill" :data-type="p.type || 'info'">
      <span class="dot"></span>
      {{ p.label }}: {{ p.value }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, default: () => [] }
});
</script>

<style scoped>
.pills{ display:flex; gap:8px; flex-wrap:wrap; }
.pill{
  display:inline-flex; align-items:center; gap:6px;
  padding: 4px 8px; border-radius:999px;
  border:1px solid rgba(var(--accent-rgb),.18);
  background: rgba(var(--panel-rgb),.6);
  font-size:11px; color: rgba(var(--text-rgb),.9);
}
.pill[data-type="warn"]{ border-color: rgba(var(--warn-rgb),.35); }
.pill[data-type="error"]{ border-color: rgba(var(--danger-rgb),.35); }
.pill[data-type="ok"]{ border-color: rgba(var(--ok-rgb),.35); }
.dot{ width:6px; height:6px; border-radius:50%; background: rgba(var(--accent-rgb),.9); }
.pill[data-type="warn"] .dot{ background: var(--warn); }
.pill[data-type="error"] .dot{ background: var(--danger); }
.pill[data-type="ok"] .dot{ background: var(--ok); }
</style>
