<template>
  <div class="panel">
    <div class="head">
      <div class="brand">{{ brand }}</div>
      <div class="desc">{{ desc }}</div>
    </div>

    <div class="body">
      <label class="lbl">账号</label>
      <input class="s-input" :value="username" @input="emit('update:username', $event.target.value)" placeholder="请输入账号" />

      <label class="lbl" style="margin-top:10px;">口令</label>
      <input class="s-input" type="password" :value="password" @input="emit('update:password', $event.target.value)" placeholder="请输入口令" />

      <div class="actions">
        <button class="s-btn s-btn--primary" @click="emit('submit')">进入系统</button>
        <button class="s-btn" @click="emit('fill')">填充管理员</button>
      </div>

      <div v-if="hint" class="hint">{{ hint }}</div>
      <div v-if="error" class="err">{{ error }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  brand: { type: String, default: "SR·U-FLEET" },
  desc: { type: String, default: "无人集群仿真验证平台 · 应用场景系统" },
  hint: { type: String, default: "内置账号：admin/admin123 · ops/ops123 · audit/audit123" },
  username: { type: String, default: "" },
  password: { type: String, default: "" },
  error: { type: String, default: "" }
});
const emit = defineEmits(["update:username","update:password","submit","fill"]);
</script>

<style scoped>
.panel{ border:1px solid rgba(var(--accent-rgb),.15); border-radius:14px; padding:16px; background: rgba(var(--panel-rgb),.55); }
.head{ border-bottom:1px solid rgba(var(--accent-rgb),.1); padding-bottom:10px; }
.brand{ font-family: var(--mono); letter-spacing:.2em; font-weight:800; }
.desc{ margin-top:6px; color: var(--muted); font-size:12px; }
.body{ padding-top:12px; }
.lbl{ font-size:12px; color: rgba(var(--text-rgb),.8); letter-spacing:.1em; }
.actions{ margin-top:12px; display:flex; gap:10px; }
.actions .s-btn{ flex:1; }
.hint{ margin-top:10px; font-size:12px; color: rgba(var(--text-rgb),.7); }
.err{ margin-top:10px; font-size:12px; color: rgba(255,210,215,.95); }
</style>
