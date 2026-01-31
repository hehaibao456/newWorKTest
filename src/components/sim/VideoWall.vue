<template>
  <div class="wall">
    <div v-for="(f, i) in feeds" :key="f.id || i" class="feed">
      <div class="hdr">
        <span class="tag">CH-{{ f.ch || i+1 }}</span>
        <span class="tag">{{ f.fps || 25 }} fps</span>
        <span class="tag">{{ f.delay || 28 }} ms</span>
      </div>
      <div class="body">
        <div class="noise"></div>
        <div class="label">{{ f.label || ('UAV VIDEO ' + (i+1)) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  feeds: { type: Array, default: () => [{},{},{},{}] }
});
</script>

<style scoped>
.wall{ display:grid; grid-template-columns: 1fr 1fr; gap:10px; }
.feed{ border:1px solid rgba(var(--accent-rgb),.12); border-radius:12px; overflow:hidden; background: rgba(var(--panel-rgb),.6); }
.hdr{ padding:8px; display:flex; gap:8px; flex-wrap:wrap; }
.tag{ font-size:11px; padding:2px 6px; border-radius:999px; border:1px solid rgba(var(--accent-rgb),.16); }
.body{ height: 140px; position:relative; background: radial-gradient(400px 200px at 40% 30%, rgba(var(--accent-rgb),.08), transparent 60%),
              linear-gradient(180deg, rgba(0,0,0,.0), rgba(0,0,0,.25)); }
.noise{ position:absolute; inset:0; background: repeating-linear-gradient(0deg, rgba(255,255,255,.05), rgba(255,255,255,.05) 1px, transparent 1px, transparent 3px); opacity:.12; }
.label{ position:absolute; left:10px; bottom:10px; font-family: var(--mono); font-size:11px; letter-spacing:.12em; color: rgba(var(--text-rgb),.8); }
</style>
