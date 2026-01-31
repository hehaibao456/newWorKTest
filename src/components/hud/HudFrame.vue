<template>
  <div class="hud">
    <div class="hud__head" v-if="title || $slots.header">
      <div class="hud__title">{{ title }}</div>
      <div class="hud__extra"><slot name="header" /></div>
    </div>
    <div class="hud__body"><slot /></div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: "" }
});
</script>

<style scoped>
.hud{
  border: 1px solid rgba(var(--accent-rgb),.18);
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(var(--panel2-rgb),.75), rgba(var(--panel-rgb),.6));
  box-shadow: inset 0 0 0 1px rgba(var(--accent-rgb),.06);
  padding: 10px;
}
.hud__head{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
.hud__title{ font-size:12px; letter-spacing:.14em; color: rgba(var(--text-rgb),.9); }
.hud__extra{ font-size:11px; color: rgba(var(--text-rgb),.65); }
.hud__body{ font-size:12px; color: rgba(var(--text-rgb),.85); }
</style>
