<template>
  <div class="bar" :title="`${value}%`">
    <div class="fill" :style="{ width: clamp + '%' }"></div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  value: { type: Number, default: 0 }
});

const clamp = computed(() => Math.max(0, Math.min(100, Number(props.value || 0))));
</script>

<style scoped>
.bar{
  height: 10px;
  border-radius: 999px;
  border: 1px solid rgba(var(--accent-rgb),.14);
  background: rgba(var(--panel-rgb),.45);
  overflow:hidden;
}
.fill{
  height:100%;
  background: linear-gradient(90deg, rgba(var(--accent-rgb),.55), rgba(var(--accent-rgb),.18));
}
</style>
