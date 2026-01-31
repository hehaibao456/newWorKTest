<template>
  <button
    class="s-btn"
    :class="[`s-btn--${variant}`, `s-btn--${size}`, { 'is-block': block, 'is-loading': loading }]"
    :disabled="disabled || loading"
    type="button"
  >
    <span v-if="loading" class="spinner" aria-hidden="true"></span>
    <span v-if="icon" class="icon" aria-hidden="true">{{ icon }}</span>
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: "default" }, // default/primary/ghost/danger
  size: { type: String, default: "md" }, // sm/md/lg
  icon: { type: String, default: "" },
  block: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
});
</script>

<style scoped>
.s-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid rgba(var(--accent-rgb),.18);
  background: rgba(var(--panel-rgb),.45);
  color: var(--text);
  font-size: 12px;
  letter-spacing:.06em;
  cursor:pointer;
  transition: border-color .15s ease, box-shadow .15s ease, transform .05s ease;
}
.s-btn:hover{ border-color: rgba(var(--accent-rgb),.45); box-shadow: 0 0 0 2px rgba(var(--accent-rgb),.12); }
.s-btn:active{ transform: translateY(1px); }
.s-btn[disabled]{ opacity:.6; cursor:not-allowed; }

.s-btn--primary{ background: linear-gradient(180deg, rgba(var(--accent-rgb),.25), rgba(var(--accent-rgb),.08)); border-color: rgba(var(--accent-rgb),.5); }
.s-btn--ghost{ background: transparent; border-style:dashed; }
.s-btn--danger{ background: rgba(var(--danger-rgb),.16); border-color: rgba(var(--danger-rgb),.4); }

.s-btn--sm{ padding: 6px 10px; font-size: 11px; }
.s-btn--lg{ padding: 10px 18px; font-size: 13px; }

.is-block{ width:100%; }

.spinner{
  width:12px;height:12px;border-radius:50%;
  border:2px solid rgba(255,255,255,.2);
  border-top-color: rgba(var(--accent-rgb),.8);
  animation: spin .8s linear infinite;
}
.icon{ font-family: var(--mono); opacity:.8; }

@keyframes spin{ to{ transform: rotate(360deg); } }
</style>
