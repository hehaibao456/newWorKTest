<template>
  <div class="grid">
    <SCard title="用户与角色权限" subtitle="统一身份认证与权限控制">
      <div class="table">
        <div class="thead">
          <span>用户</span><span>角色</span><span>权限</span><span>状态</span>
        </div>
        <div class="trow" v-for="u in users" :key="u.id">
          <span>{{ u.name }}</span>
          <span>{{ u.role }}</span>
          <span>{{ u.perm }}</span>
          <span :class="['state', u.state]">{{ u.state }}</span>
        </div>
      </div>
    </SCard>

    <SCard title="权限矩阵" subtitle="功能 / 角色 / 操作控制">
      <div class="matrix">
        <div class="head"><span>功能</span><span>管理员</span><span>操作员</span><span>审计员</span></div>
        <div class="row" v-for="p in perms" :key="p.name">
          <span>{{ p.name }}</span>
          <span>{{ p.admin }}</span>
          <span>{{ p.operator }}</span>
          <span>{{ p.auditor }}</span>
        </div>
      </div>
    </SCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SCard from "../../components/ui/SCard.vue";

const users = ref([
  { id: 1, name: "系统管理员", role: "admin", perm: "全量权限", state: "OK" },
  { id: 2, name: "指挥操作员", role: "operator", perm: "任务/监控", state: "OK" },
  { id: 3, name: "审计专员", role: "auditor", perm: "审计/日志", state: "OK" }
]);

const perms = ref([
  { name: "任务建议/分配", admin: "✔", operator: "✔", auditor: "—" },
  { name: "航迹规划", admin: "✔", operator: "✔", auditor: "—" },
  { name: "网络监测", admin: "✔", operator: "✔", auditor: "—" },
  { name: "审计留痕", admin: "✔", operator: "—", auditor: "✔" },
  { name: "配置管理", admin: "✔", operator: "—", auditor: "—" }
]);
</script>

<style scoped>
.grid{ display:grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.table{ border:1px solid rgba(var(--accent-rgb),.12); border-radius: 12px; overflow:hidden; }
.thead,.trow{ display:grid; grid-template-columns: 1fr .8fr 1fr .6fr; gap: 10px; padding: 10px; }
.thead{ background: rgba(var(--panel-rgb),.9); font-weight:600; }
.trow{ border-top:1px solid rgba(var(--accent-rgb),.08); }
.state.OK{ color: var(--ok); }

.matrix{ border:1px solid rgba(var(--accent-rgb),.12); border-radius: 12px; overflow:hidden; }
.matrix .head, .matrix .row{ display:grid; grid-template-columns: 1.2fr .8fr .8fr .8fr; gap: 10px; padding: 10px; }
.matrix .head{ background: rgba(var(--panel-rgb),.9); font-weight:600; }
.matrix .row{ border-top:1px solid rgba(var(--accent-rgb),.08); }

@media (max-width: 980px){
  .grid{ grid-template-columns: 1fr; }
}
</style>
