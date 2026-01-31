<template>
  <div class="layer">
    <div v-for="n in nodes" :key="n.id" class="node" :data-type="n.type">
      <div class="name">{{ n.id }}</div>
      <div class="meta">{{ n.type }} · {{ n.role }}</div>
      <div class="vals">
        <span>ALT {{ n.alt }}m</span>
        <span>BAT {{ n.bat }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  nodes: { type: Array, default: () => [] }
});
</script>

<style scoped>
.layer{ display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:8px; }
.node{
  border:1px solid rgba(var(--accent-rgb),.12);
  border-radius:10px;
  padding:8px;
  background: rgba(var(--panel-rgb),.6);
}
.node[data-type="fixed-wing"]{ border-color: rgba(var(--ok-rgb),.25); }
.name{ font-weight:700; }
.meta{ font-size:11px; opacity:.75; margin-top:4px; }
.vals{ margin-top:6px; display:flex; gap:10px; font-size:11px; }
</style>
