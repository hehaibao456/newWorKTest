<template>
  <div class="layer">
    <div v-for="(l, i) in links" :key="l.id || i" class="link">
      <div class="meta">
        <span class="id">{{ l.a }} ↔ {{ l.b }}</span>
        <span class="val">{{ l.delay }}ms / {{ l.rssi }}dBm</span>
      </div>
      <div class="bar">
        <div class="fill" :style="{ width: `${Math.min(100, Math.max(10, 100 - l.delay))}%` }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  links: { type: Array, default: () => [] }
});
</script>

<style scoped>
.layer{ display:grid; gap:8px; }
.link{ border:1px solid rgba(var(--accent-rgb),.12); border-radius:10px; padding:8px; background: rgba(var(--panel-rgb),.6); }
.meta{ display:flex; justify-content:space-between; font-size:11px; color: rgba(var(--text-rgb),.8); }
.bar{ margin-top:6px; height:6px; background: rgba(var(--accent-rgb),.08); border-radius:999px; overflow:hidden; }
.fill{ height:100%; background: linear-gradient(90deg, rgba(var(--accent-rgb),.75), rgba(var(--accent-rgb),.15)); }
</style>
