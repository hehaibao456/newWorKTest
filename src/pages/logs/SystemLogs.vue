<template>
  <div class="grid">
    <SCard title="系统日志管理" subtitle="全链路日志 / 可追溯 / 可导出">
      <div class="actions">
        <button class="s-btn s-btn--primary" @click="pushLog">生成模拟日志</button>
        <button class="s-btn" @click="exportLog">导出日志</button>
        <button class="s-btn s-btn--danger" @click="clear">清空</button>
      </div>

      <div class="table">
        <div class="thead">
          <span>时间</span><span>级别</span><span>模块</span><span>事件</span>
        </div>
        <div class="trow" v-for="(l, i) in logs" :key="i">
          <span class="t">{{ l.time }}</span>
          <span :class="['lvl', l.level]">{{ l.level }}</span>
          <span>{{ l.module }}</span>
          <span class="msg">{{ l.msg }}</span>
        </div>
      </div>
    </SCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SCard from "../../components/ui/SCard.vue";

const logs = ref([
  { time: new Date().toLocaleString(), level: "INFO", module: "TASK", msg: "生成任务建议与时间估算" },
  { time: new Date().toLocaleString(), level: "AUDIT", module: "SEC", msg: "审批通过：地下水监测巡检" }
]);

function pushLog() {
  logs.value.unshift({
    time: new Date().toLocaleString(),
    level: "INFO",
    module: "NET",
    msg: "链路探测完成：低时延/中时延/高时延"
  });
}

function exportLog() {
  logs.value.unshift({
    time: new Date().toLocaleString(),
    level: "AUDIT",
    module: "LOG",
    msg: "日志导出：system-logs.csv"
  });
}

function clear() {
  logs.value = [];
}
</script>

<style scoped>
.grid{ display:grid; grid-template-columns: 1fr; gap: 14px; }
.actions{ display:flex; gap: 10px; flex-wrap:wrap; margin-bottom: 10px; }
.table{ border:1px solid rgba(var(--accent-rgb),.12); border-radius: 12px; overflow:hidden; }
.thead,.trow{ display:grid; grid-template-columns: 160px 90px 100px 1fr; gap: 10px; padding: 10px; }
.thead{ background: rgba(var(--panel-rgb),.9); font-weight:600; }
.trow{ border-top:1px solid rgba(var(--accent-rgb),.08); }
.t{ font-family: var(--mono); }
.msg{ color: var(--muted); }
.lvl.INFO{ color: var(--accent); }
.lvl.AUDIT{ color: var(--ok); }
.lvl.WARN{ color: var(--warn); }
.lvl.ERROR{ color: var(--danger); }
</style>
