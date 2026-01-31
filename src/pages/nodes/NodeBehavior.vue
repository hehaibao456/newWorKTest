<template>
  <div class="grid">
    <SCard title="协同决策 / 无中心抗损" subtitle="分布式协调决策，单节点损坏自动补位">
      <div class="row">
        <div class="box">
          <div class="k">协同模式</div>
          <select class="s-select" v-model="mode">
            <option value="DISTRIBUTED">分布式协同</option>
            <option value="LEADER">主从协同</option>
            <option value="HYBRID">混合协同</option>
          </select>
        </div>
        <div class="box">
          <div class="k">抗损策略</div>
          <select class="s-select" v-model="strategy">
            <option value="AUTO">自动补位</option>
            <option value="REPLAN">重新规划</option>
            <option value="HOLD">保持队形</option>
          </select>
        </div>
        <div class="box">
          <div class="k">协同范围</div>
          <select class="s-select" v-model="scope">
            <option value="LOCAL">近域协同</option>
            <option value="REGION">区域协同</option>
            <option value="CROSS">跨域协同</option>
          </select>
        </div>
      </div>

      <div class="actions">
        <button class="s-btn s-btn--primary" @click="run">启动协同</button>
        <button class="s-btn" @click="damage">模拟损坏</button>
        <button class="s-btn s-btn--ghost" @click="recover">补位恢复</button>
        <button class="s-btn s-btn--danger" @click="reset">重置</button>
      </div>

      <div class="events">
        <div class="evt" v-for="(e, i) in events" :key="i">
          <span class="t">{{ e.t }}</span>
          <span class="k">{{ e.k }}</span>
          <span class="v">{{ e.v }}</span>
        </div>
        <div v-if="events.length === 0" class="empty">点击“启动协同”</div>
      </div>
    </SCard>

    <SCard title="节点状态与角色" subtitle="节点分工与补位状态">
      <div class="matrix">
        <div class="head">
          <span>节点</span><span>状态</span><span>角色</span><span>动作</span>
        </div>
        <div class="row" v-for="n in nodes" :key="n.id">
          <span>{{ n.id }}</span>
          <span :class="['state', n.state]">{{ n.state }}</span>
          <span>{{ n.role }}</span>
          <button class="s-btn" @click="promote(n)">补位</button>
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

const mode = ref("DISTRIBUTED");
const strategy = ref("AUTO");
const scope = ref("LOCAL");

const events = ref([]);
const nodes = ref([
  { id: "UAV-01", state: "OK", role: "固定翼" },
  { id: "UAV-02", state: "OK", role: "旋翼" },
  { id: "UAV-03", state: "OK", role: "旋翼" },
  { id: "UAV-04", state: "OK", role: "旋翼" },
  { id: "UAV-05", state: "OK", role: "旋翼" }
]);

function now() { return new Date().toLocaleTimeString(); }

function run() {
  events.value = [
    { t: now(), k: "协同启动", v: mode.value },
    { t: now(), k: "抗损策略", v: strategy.value },
    { t: now(), k: "协同范围", v: scope.value }
  ];
  logs.push("INFO", "NODE_SYNC", "启动协同决策", { mode: mode.value, strategy: strategy.value, scope: scope.value });
}

function damage() {
  const target = nodes.value[2];
  target.state = "ERROR";
  events.value.unshift({ t: now(), k: "损坏", v: `${target.id} 节点失效` });
  logs.push("WARN", "NODE_DOWN", "节点失效", { id: target.id });
}

function recover() {
  const target = nodes.value[2];
  target.state = "OK";
  events.value.unshift({ t: now(), k: "补位", v: `${target.id} 补位完成` });
  logs.push("AUDIT", "NODE_RECOVER", "补位恢复", { id: target.id });
}

function promote(n) {
  n.state = "OK";
  events.value.unshift({ t: now(), k: "补位", v: `${n.id} 补位完成` });
}

function reset() {
  nodes.value.forEach((n) => (n.state = "OK"));
  events.value = [];
}
</script>

<style scoped>
.grid{ display:grid; grid-template-columns: 1.2fr .8fr; gap: 14px; }
.row{ display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
.box .k{ font-size:12px; color: var(--muted); letter-spacing:.12em; margin-bottom:6px; }
.actions{ margin-top: 12px; display:flex; gap: 10px; flex-wrap:wrap; }

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
}
</style>
