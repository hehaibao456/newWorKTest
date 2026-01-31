<template>
  <div class="timeline">
    <div v-for="(e, i) in items" :key="e.id || i" class="evt" :data-level="e.level || 'INFO'">
      <div class="ts">{{ e.time }}</div>
      <div class="dot"></div>
      <div class="txt">
        <div class="act">{{ e.action }}</div>
        <div class="msg">{{ e.message }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, default: () => [] }
});
</script>

<style scoped>
.timeline{ display:grid; gap:10px; }
.evt{ display:grid; grid-template-columns: 120px 10px 1fr; gap:10px; align-items:start; }
.ts{ font-family: var(--mono); font-size:11px; opacity:.7; }
.dot{ width:8px;height:8px;border-radius:50%; background: var(--accent); margin-top:4px; }
.evt[data-level="WARN"] .dot{ background: var(--warn); }
.evt[data-level="ERROR"] .dot{ background: var(--danger); }
.evt[data-level="AUDIT"] .dot{ background: var(--ok); }
.act{ font-weight:700; font-size:12px; }
.msg{ font-size:12px; opacity:.8; margin-top:4px; }
</style>
