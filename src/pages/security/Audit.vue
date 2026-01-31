<template>
  <div class="grid">
    <SCard title="审计留痕" subtitle="关键操作全链路记录">
      <div class="actions">
        <button class="s-btn s-btn--primary" @click="add">新增审计事件</button>
        <button class="s-btn" @click="refresh">刷新</button>
        <button class="s-btn s-btn--danger" @click="clear">清空</button>
      </div>

      <div class="table">
        <div class="thead">
          <span>时间</span><span>操作者</span><span>事件</span><span>详情</span>
        </div>
        <div class="trow" v-for="(a, i) in audits" :key="i">
          <span class="t">{{ a.time }}</span>
          <span>{{ a.user }}</span>
          <span>{{ a.event }}</span>
          <span class="d">{{ a.detail }}</span>
        </div>
      </div>
    </SCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SCard from "../../components/ui/SCard.vue";

const audits = ref([
  { time: new Date().toLocaleString(), user: "系统管理员", event: "TASK_APPROVE", detail: "审批通过：地下水监测巡检" },
  { time: new Date().toLocaleString(), user: "指挥操作员", event: "FORMATION_APPLY", detail: "应用队形：V 型编队" }
]);

function add() {
  audits.value.unshift({
    time: new Date().toLocaleString(),
    user: "审计专员",
    event: "LOG_EXPORT",
    detail: "导出系统日志（审计留痕）"
  });
}

function refresh() {
  audits.value = [...audits.value];
}

function clear() {
  audits.value = [];
}
</script>

<style scoped>
.grid{ display:grid; grid-template-columns: 1fr; gap: 14px; }
.actions{ display:flex; gap: 10px; flex-wrap:wrap; margin-bottom: 10px; }
.table{ border:1px solid rgba(var(--accent-rgb),.12); border-radius: 12px; overflow:hidden; }
.thead,.trow{ display:grid; grid-template-columns: 160px 120px 160px 1fr; gap: 10px; padding: 10px; }
.thead{ background: rgba(var(--panel-rgb),.9); font-weight:600; }
.trow{ border-top:1px solid rgba(var(--accent-rgb),.08); }
.t{ font-family: var(--mono); }
.d{ color: var(--muted); }
</style>
