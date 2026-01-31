<template>
  <div class="scanlines"></div>
</template>

<script setup></script>

<style scoped>
.scanlines{
  position:absolute; inset:0;
  pointer-events:none;
  background:
    repeating-linear-gradient(0deg, rgba(255,255,255,.04), rgba(255,255,255,.04) 1px, transparent 1px, transparent 3px),
    radial-gradient(1200px 400px at 10% 10%, rgba(var(--accent-rgb),.08), transparent 40%);
  mix-blend-mode: screen;
  opacity:.25;
}
</style>
