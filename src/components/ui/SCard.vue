<template>
  <section class="s-panel card" :class="{ tight }">
    <header v-if="title || $slots.header" class="head">
      <div class="left">
        <div v-if="title" class="s-title">{{ title }}</div>
        <div v-if="subtitle" class="s-subtitle">{{ subtitle }}</div>
      </div>
      <div class="right">
        <slot name="header" />
      </div>
    </header>

    <div class="body">
      <slot />
    </div>

    <div v-if="$slots.footer" class="foot">
      <slot name="footer" />
    </div>

    <div class="scanlines" />
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  tight: { type: Boolean, default: false }
});
</script>

<style scoped>
.card{ padding: 14px; position:relative; overflow:hidden; }
.card.tight{ padding: 10px; }
.head{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(var(--accent-rgb),.10);
}
.body{ padding-top: 12px; }
.foot{
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(var(--accent-rgb),.08);
}
</style>
