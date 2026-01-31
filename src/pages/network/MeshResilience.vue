<template>
  <div class="grid">
    <SCard title="自组网健壮性 / 断链返航" subtitle="分布式协调决策，通信受限仍保持编队与自主完成任务">
      <div class="row">
        <div class="box">
          <div class="k">断链场景</div>
          <select class="s-select" v-model="scenario">
            <option value="S1">S1：部分链路丢失</option>
            <option value="S2">S2：地面站失联</option>
            <option value="S3">S3：单节点损坏</option>
          </select>
        </div>
        <div class="box">
          <div class="k">处置策略</div>
          <select class="s-select" v-model="strategy">
            <option value="MESH">自组网维持编队</option>
            <option value="RETURN">自动返航</option>
            <option value="RELAY">临时中继</option>
          </select>
        </div>
        <div class="box">
          <div class="k">编队规模</div>
          <select class="s-select" v-model="fleet">
            <option value="5">5 架（固定翼≥1）</option>
            <option value="7">7 架（加分）</option>
          </select>
        </div>
      </div>

      <div class="actions">
        <button class="s-btn s-btn--primary" @click="simulate">启动仿真</button>
        <button class="s-btn" @click="autoHeal">自动补位</button>
        <button class="s-btn s-btn--ghost" @click="handover">中继切换</button>
        <button class="s-btn s-btn--danger" @click="reset">重置</button>
      </div>

      <div class="status">
        <div class="pill"><div class="k">自组网</div><div class="v">{{ stat.mesh }}</div></div>
        <div class="pill"><div class="k">返航策略</div><div class="v">{{ stat.rth }}</div></div>
        <div class="pill"><div class="k">编队保持</div><div class="v">{{ stat.formation }}</div></div>
        <div class="pill"><div class="k">通信距离</div><div class="v">{{ stat.range }} km</div></div>
      </div>

      <div class="events">
        <div class="evt" v-for="(e, i) in events" :key="i">
          <span class="t">{{ e.t }}</span>
          <span class="k">{{ e.k }}</span>
          <span class="v">{{ e.v }}</span>
        </div>
        <div v-if="events.length === 0" class="empty">点击“启动仿真”</div>
      </div>
    </SCard>

    <SCard title="节点抗损补位" subtitle="无中心抗损与分布式协同">
      <div class="matrix">
        <div class="head">
          <span>节点</span><span>状态</span><span>角色</span><span>动作</span>
        </div>
        <div class="row" v-for="n in nodes" :key="n.id">
          <span>{{ n.id }}</span>
          <span :class="['state', n.state]">{{ n.state }}</span>
          <span>{{ n.role }}</span>
          <button class="s-btn" @click="replace(n)">补位</button>
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

const scenario = ref("S1");
const strategy = ref("MESH");
const fleet = ref("5");

const stat = ref({ mesh: "待验证", rth: "待验证", formation: "待验证", range: 0 });
const events = ref([]);
const nodes = ref([
  { id: "UAV-01", state: "OK", role: "固定翼" },
  { id: "UAV-02", state: "OK", role: "旋翼" },
  { id: "UAV-03", state: "WARN", role: "旋翼" },
  { id: "UAV-04", state: "OK", role: "旋翼" },
  { id: "UAV-05", state: "OK", role: "旋翼" }
]);

function now() { return new Date().toLocaleTimeString(); }

function simulate() {
  stat.value = {
    mesh: strategy.value === "MESH" ? "正常" : "备用",
    rth: strategy.value === "RETURN" ? "触发" : "待命",
    formation: "稳定",
    range: 2.4
  };
  events.value = [
    { t: now(), k: "场景", v: scenario.value },
    { t: now(), k: "策略", v: strategy.value },
    { t: now(), k: "编队", v: `${fleet.value} 架` }
  ];
  logs.push("INFO", "MESH_SIM", "启动自组网仿真", { scenario: scenario.value, strategy: strategy.value, fleet: fleet.value });
}

function autoHeal() {
  events.value.unshift({ t: now(), k: "补位", v: "节点 UAV-03 自动补位完成" });
  logs.push("AUDIT", "MESH_HEAL", "自动补位", { id: "UAV-03" });
}

function handover() {
  events.value.unshift({ t: now(), k: "中继", v: "中继切换至 UAV-02" });
  logs.push("INFO", "MESH_RELAY", "中继切换", { id: "UAV-02" });
}

function replace(n) {
  n.state = "OK";
  events.value.unshift({ t: now(), k: "补位", v: `${n.id} 已补位` });
}

function reset() {
  stat.value = { mesh: "待验证", rth: "待验证", formation: "待验证", range: 0 };
  events.value = [];
}
</script>

<style scoped>
.grid{ display:grid; grid-template-columns: 1.2fr .8fr; gap: 14px; }
.row{ display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
.box .k{ font-size:12px; color: var(--muted); letter-spacing:.12em; margin-bottom:6px; }
.actions{ margin-top: 12px; display:flex; gap: 10px; flex-wrap:wrap; }

.status{ margin-top: 12px; display:grid; grid-template-columns: repeat(4,1fr); gap:10px; }
.pill{ border:1px solid rgba(var(--accent-rgb),.12); background: rgba(var(--panel-rgb),.85); border-radius: 12px; padding: 10px; }
.pill .k{ font-size:12px; color: var(--muted); }
.pill .v{ margin-top:6px; font-weight:600; }

.events{ margin-top: 12px; border:1px solid rgba(var(--accent-rgb),.12); border-radius: 12px; padding: 10px; max-height: 260px; overflow:auto; background: rgba(var(--panel-rgb),.7); }
.evt{ display:grid; grid-template-columns: 90px 90px 1fr; gap: 10px; padding: 6px 0; }
.t{ font-family: var(--mono); opacity:.7; }
.k{ font-weight:600; }
.empty{ opacity:.6; padding: 6px; }

.matrix{ border:1px solid rgba(var(--accent-rgb),.12); border-radius: 12px; overflow:hidden; }
.matrix .head, .matrix .row{ display:grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 10px; padding: 10px; }
.matrix .head{ background: rgba(var(--panel-rgb),.9); font-weight:600; }
.matrix .row{ border-top:1px solid rgba(var(--accent-rgb),.08); }
.state.OK{ color: var(--ok); }
.state.WARN{ color: var(--warn); }
.state.ERROR{ color: var(--danger); }

@media (max-width: 980px){
  .grid{ grid-template-columns: 1fr; }
  .status{ grid-template-columns: 1fr 1fr; }
}
</style>
