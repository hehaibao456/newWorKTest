<template>
  <div class="grid">
    <SCard title="队形库管理（≥3）" subtitle="支持存储 / 复用 / 导入不同机型坐标数据">
      <div class="toolbar">
        <button class="s-btn s-btn--primary" @click="create">新建队形</button>
        <button class="s-btn" @click="importData">导入机型坐标</button>
        <button class="s-btn s-btn--ghost" @click="exportData">导出队形</button>
      </div>

      <div class="cards">
        <div class="card" v-for="f in formations" :key="f.id" :data-active="f.id === activeId">
          <div class="name">{{ f.name }}</div>
          <div class="meta">{{ f.desc }}</div>
          <div class="ops">
            <button class="s-btn" @click="apply(f)">应用</button>
            <button class="s-btn" @click="preview(f)">预览</button>
            <button class="s-btn s-btn--ghost" @click="save(f)">保存</button>
          </div>
        </div>
      </div>
    </SCard>

    <SCard title="编队详情" subtitle="固定翼/旋翼混编，支持≥5架">
      <div class="table">
        <div class="thead">
          <span>节点</span><span>类型</span><span>坐标</span><span>状态</span>
        </div>
        <div class="trow" v-for="n in nodes" :key="n.id">
          <span>{{ n.id }}</span>
          <span>{{ n.type }}</span>
          <span>{{ n.pos }}</span>
          <span :class="['state', n.state]">{{ n.state }}</span>
        </div>
      </div>
    </SCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SCard from "../../components/ui/SCard.vue";
import { useLogsStore } from "../../store/logs.store.js";

const logs = useLogsStore();

const formations = ref([
  { id: "V", name: "V 型编队", desc: "固定翼 1 + 旋翼 4，覆盖优先" },
  { id: "LINE", name: "一字阵", desc: "长距通信稳定、对齐航线" },
  { id: "CIRCLE", name: "环形阵", desc: "重点区域回旋采样" }
]);

const activeId = ref("V");

const nodes = ref([
  { id: "UAV-01", type: "固定翼", pos: "(0,0,0)", state: "OK" },
  { id: "UAV-02", type: "旋翼", pos: "(1,0,1)", state: "OK" },
  { id: "UAV-03", type: "旋翼", pos: "(-1,0,1)", state: "OK" },
  { id: "UAV-04", type: "旋翼", pos: "(2,0,2)", state: "OK" },
  { id: "UAV-05", type: "旋翼", pos: "(-2,0,2)", state: "OK" }
]);

function apply(f) {
  activeId.value = f.id;
  logs.push("AUDIT", "FORMATION_APPLY", "应用队形", { id: f.id });
}

function preview(f) {
  logs.push("INFO", "FORMATION_PREVIEW", "预览队形", { id: f.id });
}

function save(f) {
  logs.push("AUDIT", "FORMATION_SAVE", "保存队形", { id: f.id });
}

function create() {
  logs.push("INFO", "FORMATION_NEW", "新建队形", {});
}

function importData() {
  logs.push("INFO", "FORMATION_IMPORT", "导入坐标数据", { models: ["FixedWing", "Rotor"] });
}

function exportData() {
  logs.push("INFO", "FORMATION_EXPORT", "导出队形", { id: activeId.value });
}
</script>

<style scoped>
.grid{ display:grid; grid-template-columns: 1.1fr .9fr; gap: 14px; }
.toolbar{ display:flex; gap:10px; flex-wrap:wrap; margin-bottom: 12px; }
.cards{ display:grid; gap:10px; }
.card{ border:1px solid rgba(var(--accent-rgb),.12); background: rgba(var(--panel-rgb),.85); border-radius: 12px; padding: 10px; }
.card[data-active="true"]{ border-color: rgba(var(--accent-rgb),.35); box-shadow: 0 0 0 3px rgba(var(--accent-rgb),.08); }
.name{ font-weight:600; }
.meta{ margin-top:4px; color: var(--muted); font-size:12px; }
.ops{ margin-top:8px; display:flex; gap:8px; flex-wrap:wrap; }

.table{ border:1px solid rgba(var(--accent-rgb),.12); border-radius: 12px; overflow:hidden; }
.thead,.trow{ display:grid; grid-template-columns: .8fr .8fr 1fr .6fr; gap: 10px; padding: 10px; }
.thead{ background: rgba(var(--panel-rgb),.9); font-weight:600; }
.trow{ border-top:1px solid rgba(var(--accent-rgb),.08); }
.state.OK{ color: var(--ok); }
.state.WARN{ color: var(--warn); }
.state.ERROR{ color: var(--danger); }

@media (max-width: 980px){
  .grid{ grid-template-columns: 1fr; }
}
</style>
