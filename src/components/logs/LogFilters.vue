<template>
  <div class="filters">
    <input class="s-input" :value="kw" @input="emit('update:kw', $event.target.value)" placeholder="搜索 action / message / operator" />
    <select class="s-select" :value="level" @change="emit('update:level', $event.target.value)">
      <option v-for="l in levels" :key="l" :value="l">{{ l }}</option>
    </select>
    <button class="s-btn s-btn--primary" @click="emit('search')">查询</button>
    <button class="s-btn" @click="emit('reset')">重置</button>
  </div>
</template>

<script setup>
const props = defineProps({
  kw: { type: String, default: "" },
  level: { type: String, default: "ALL" },
  levels: { type: Array, default: () => ["ALL","INFO","WARN","ERROR","AUDIT"] }
});
const emit = defineEmits(["update:kw","update:level","search","reset"]);
</script>

<style scoped>
.filters{ display:flex; gap:10px; flex-wrap:wrap; }
.filters .s-input{ flex:1; min-width: 240px; }
.filters .s-select{ min-width: 120px; }
</style>
