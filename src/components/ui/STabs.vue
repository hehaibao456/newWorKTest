<template>
  <div class="tabs">
    <button
      v-for="t in tabs"
      :key="t.value"
      class="tab"
      :class="{ active: modelValue === t.value }"
      @click="$emit('update:modelValue', t.value)"
    >
      {{ t.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  tabs: { type: Array, default: () => [] },
  modelValue: { type: String, default: "" }
});
defineEmits(["update:modelValue"]);
</script>

<style scoped>
.tabs{
  display:flex;
  gap: 8px;
  flex-wrap:wrap;
}
.tab{
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid rgba(var(--accent-rgb),.12);
  background: rgba(var(--panel-rgb),.35);
  color: rgba(var(--text-rgb),.85);
  cursor:pointer;
}
.tab.active{
  border-color: rgba(var(--accent-rgb),.35);
  box-shadow: 0 0 0 3px rgba(var(--accent-rgb),.08);
}
</style>
