<template>
  <select class="s-select" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
  </select>
</template>

<script setup>
defineProps({
  options: { type: Array, default: () => [] },
  modelValue: { type: [String, Number], default: "" }
});
defineEmits(["update:modelValue"]);
</script>
