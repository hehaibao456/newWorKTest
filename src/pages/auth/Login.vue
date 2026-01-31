<template>
  <div class="login s-panel">
    <div class="scanlines"></div>

    <div class="head">
      <div class="brand">SR·U-FLEET</div>
      <div class="desc">无人集群仿真验证平台 · 应用场景系统（纯 Vue 前端）</div>
      <div class="hint">内置账号：admin/admin123 · ops/ops123 · audit/audit123</div>
    </div>

    <div class="form">
      <label class="lbl">账号</label>
      <input class="s-input" v-model="username" placeholder="请输入账号" />

      <label class="lbl" style="margin-top:10px;">口令</label>
      <input class="s-input" v-model="password" type="password" placeholder="请输入口令" />

      <div class="row">
        <button class="s-btn s-btn--primary" @click="onLogin">进入系统</button>
        <button class="s-btn" @click="fillAdmin">填充管理员</button>
      </div>

      <div v-if="err" class="err">
        <span class="dot"></span>
        {{ err }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../store/auth.store.js";
import { useLogsStore } from "../../store/logs.store.js";

const username = ref("");
const password = ref("");
const err = ref("");

const router = useRouter();
const auth = useAuthStore();
const logs = useLogsStore();

function fillAdmin(){
  username.value = "admin";
  password.value = "admin123";
}

async function onLogin(){
  err.value = "";
  try{
    auth.login({ username: username.value.trim(), password: password.value });
    logs.push("AUDIT", "AUTH_LOGIN", `用户登录：${auth.displayName}`, { role: auth.role });
    router.push("/app/command");
  }catch(e){
    err.value = e?.message || "登录失败";
    logs.push("WARN", "AUTH_FAIL", `登录失败：${username.value}`, {});
  }
}
</script>

<style scoped>
.login{
  width: min(520px, calc(100vw - 28px));
  padding: 18px 18px 16px;
  position:relative;
  overflow:hidden;
}
.head{ padding: 8px 6px 14px; border-bottom:1px solid rgba(var(--accent-rgb),.10); }
.brand{
  font-family: var(--mono);
  letter-spacing:.22em;
  font-weight:800;
}
.desc{ margin-top:6px; font-size:12px; color: var(--muted); }
.hint{ margin-top:10px; font-size:12px; color: rgba(var(--text-rgb),.72); }

.form{ padding: 14px 6px 6px; }
.lbl{ font-size:12px; color: rgba(var(--text-rgb),.78); letter-spacing:.10em; }
.row{ margin-top: 14px; display:flex; gap: 10px; }
.row .s-btn{ flex:1; }

.err{
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(var(--danger-rgb),.25);
  background: rgba(var(--danger-rgb),.08);
  color: rgba(255,210,215,.95);
  display:flex;
  align-items:center;
  gap:10px;
  font-size:12px;
}
.dot{
  width:8px;height:8px;border-radius:50%;
  background: var(--danger);
  box-shadow: 0 0 16px rgba(var(--danger-rgb),.55);
}
</style>
