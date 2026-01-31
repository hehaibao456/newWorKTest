<template>
  <div class="grid">
    <SCard title="智能航迹规划（算法库）" subtitle="不少于 3 种算法，支持快速航线规划与队形设置">
      <div class="row">
        <div class="box">
          <div class="k">算法选择</div>
          <div class="chips">
            <label class="chip" v-for="a in algos" :key="a.id">
              <input type="checkbox" v-model="a.on" />
              <span>{{ a.name }}</span>
            </label>
          </div>
        </div>
        <div class="box">
          <div class="k">环境模型</div>
          <select class="s-select" v-model="env">
            <option value="MOUNTAIN">高寒山地</option>
            <option value="PLAIN">平原</option>
            <option value="URBAN">城镇边界</option>
          </select>
        </div>
        <div class="box">
          <div class="k">约束条件</div>
          <select class="s-select" v-model="constraint">
            <option value="SAFE">避障优先</option>
            <option value="FAST">速度优先</option>
            <option value="ENERGY">能耗优先</option>
          </select>
        </div>
      </div>

      <div class="actions">
        <button class="s-btn s-btn--primary" @click="plan">生成航线</button>
        <button class="s-btn" @click="saveFormation">保存队形</button>
        <button class="s-btn s-btn--ghost" @click="loadFormation">载入队形</button>
      </div>

      <div class="route">
        <div class="route__head">
          <span class="s-badge"><span class="s-dot"></span> 航线节点：{{ route.nodes }}</span>
          <span class="s-badge"><span class="s-dot s-dot--ok"></span> 预计时长：{{ route.eta }} min</span>
          <span class="s-badge"><span class="s-dot s-dot--warn"></span> 预估能耗：{{ route.energy }}%</span>
        </div>
        <div class="route__body">
          <div class="item" v-for="(p, i) in route.points" :key="i">
            <span class="i">#{{ i + 1 }}</span>
            <span class="t">{{ p }}</span>
          </div>
          <div v-if="route.points.length === 0" class="empty">请点击“生成航线”</div>
        </div>
      </div>
    </SCard>

    <SCard title="队形库（≥3）" subtitle="支持快速设置、存储与复用">
      <div class="formations">
        <div class="f-card" v-for="f in formations" :key="f.id" :data-active="f.id === activeId">
          <div class="name">{{ f.name }}</div>
          <div class="meta">{{ f.desc }}</div>
          <div class="ops">
            <button class="s-btn" @click="applyFormation(f)">应用</button>
            <button class="s-btn s-btn--ghost" @click="previewFormation(f)">预览</button>
          </div>
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

const algos = ref([
  { id: "A*", name: "A*", on: true },
  { id: "RRT", name: "RRT", on: true },
  { id: "PSO", name: "PSO", on: false },
  { id: "GA", name: "遗传算法", on: false }
]);

const env = ref("MOUNTAIN");
const constraint = ref("SAFE");
const route = ref({ nodes: 0, eta: 0, energy: 0, points: [] });

const formations = ref([
  { id: "V", name: "V 型编队", desc: "固定翼 1 + 旋翼 4，覆盖优先" },
  { id: "LINE", name: "一字阵", desc: "长距通信稳定、对齐航线" },
  { id: "CIRCLE", name: "环形阵", desc: "重点区域回旋采样" }
]);

const activeId = ref("V");

function plan() {
  const algoUsed = algos.value.filter((a) => a.on).map((a) => a.name).join(" / ") || "A*";
  const base = env.value === "MOUNTAIN" ? 8 : env.value === "PLAIN" ? 6 : 7;
  const penalty = constraint.value === "SAFE" ? 2 : constraint.value === "FAST" ? -1 : 1;

  route.value = {
    nodes: 6 + base,
    eta: 18 + base + penalty,
    energy: 32 + base * 2,
    points: [
      `起点：监测井-01 → 采样窗口 A`,
      `航段：河谷走廊避障 + 高差修正`,
      `中继：补给区-03 低空盘旋`,
      `航段：坡面避障 + 视距链路`,
      `终点：监测井-08 回执上传`
    ]
  };

  logs.push("INFO", "PATH_PLAN", "生成航线规划", {
    algorithms: algoUsed,
    env: env.value,
    constraint: constraint.value
  });
}

function saveFormation() {
  logs.push("AUDIT", "FORMATION_SAVE", "保存队形", { id: activeId.value });
}

function loadFormation() {
  logs.push("INFO", "FORMATION_LOAD", "载入队形", { id: activeId.value });
}

function applyFormation(f) {
  activeId.value = f.id;
  logs.push("AUDIT", "FORMATION_APPLY", "应用队形", { id: f.id });
}

function previewFormation(f) {
  logs.push("INFO", "FORMATION_PREVIEW", "预览队形", { id: f.id });
}
</script>

<style scoped>
.grid{
  display:grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 14px;
}
.row{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.box .k{
  font-size:12px;
  color: var(--muted);
  letter-spacing:.12em;
  margin-bottom:6px;
}
.chips{ display:flex; flex-wrap:wrap; gap:8px; }
.chip{
  display:inline-flex;
  align-items:center;
  gap:6px;
  border:1px solid rgba(var(--accent-rgb),.2);
  background: rgba(var(--panel-rgb),.85);
  padding:6px 10px;
  border-radius: 999px;
  font-size:12px;
}
.actions{ margin-top: 12px; display:flex; gap: 10px; flex-wrap:wrap; }

.route{ margin-top: 12px; }
.route__head{ display:flex; gap:8px; flex-wrap:wrap; margin-bottom:8px; }
.route__body{ border:1px solid rgba(var(--accent-rgb),.12); background: rgba(var(--panel-rgb),.7); border-radius: 12px; padding: 10px; }
.item{ display:flex; gap:10px; padding:6px 4px; }
.i{ font-family: var(--mono); opacity:.7; }
.t{ font-family: var(--mono); }
.empty{ opacity:.6; padding: 6px; }

.formations{ display:grid; gap:10px; }
.f-card{ border:1px solid rgba(var(--accent-rgb),.12); background: rgba(var(--panel-rgb),.8); border-radius: 12px; padding: 10px; }
.f-card[data-active="true"]{ border-color: rgba(var(--accent-rgb),.35); box-shadow: 0 0 0 3px rgba(var(--accent-rgb),.08); }
.name{ font-weight:600; }
.meta{ margin-top:4px; color: var(--muted); font-size:12px; }
.ops{ margin-top:8px; display:flex; gap:8px; flex-wrap:wrap; }

@media (max-width: 980px){
  .grid{ grid-template-columns: 1fr; }
}
</style>
