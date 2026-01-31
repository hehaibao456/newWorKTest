<template>
  <div class="grid">
    <SCard title="决策快速闭环实验室（≥2模式）" subtitle="建议 → 执行 → 回执 → 再分配，闭环验证">
      <div class="row">
        <div class="box">
          <div class="k">闭环模式</div>
          <select class="s-select" v-model="mode">
            <option value="MODE_A">模式 A：建议→执行→回执</option>
            <option value="MODE_B">模式 B：建议→审批→执行→回执</option>
            <option value="MODE_C">模式 C：建议→专家复核→执行</option>
          </select>
        </div>
        <div class="box">
          <div class="k">通信状态</div>
          <select class="s-select" v-model="link">
            <option value="OK">正常链路</option>
            <option value="LIMIT">受限链路</option>
            <option value="LOST">链路中断</option>
          </select>
        </div>
        <div class="box">
          <div class="k">闭环触发</div>
          <select class="s-select" v-model="trigger">
            <option value="AUTO">自动触发</option>
            <option value="MANUAL">人工触发</option>
          </select>
        </div>
      </div>

      <div class="actions">
        <button class="s-btn s-btn--primary" @click="runLoop">启动闭环</button>
        <button class="s-btn" @click="ack">回执 ACK</button>
        <button class="s-btn" @click="reassign">触发再分配</button>
        <button class="s-btn s-btn--danger" @click="reset">重置</button>
      </div>

      <div class="timeline">
        <div class="evt" v-for="(e, i) in events" :key="i">
          <span class="t">{{ e.t }}</span>
          <span class="k">{{ e.k }}</span>
          <span class="v">{{ e.v }}</span>
        </div>
        <div v-if="events.length === 0" class="empty">点击“启动闭环”开始验证</div>
      </div>
    </SCard>

    <SCard title="闭环指标" subtitle="状态驱动与规则触发下的实时评估">
      <div class="metrics">
        <div class="metric">
          <div class="k">闭环耗时</div>
          <div class="v">{{ kpi.loopMs }} ms</div>
        </div>
        <div class="metric">
          <div class="k">分配成功率</div>
          <div class="v">{{ kpi.assignRate }}%</div>
        </div>
        <div class="metric">
          <div class="k">自主保持编队</div>
          <div class="v">{{ kpi.formation }}</div>
        </div>
        <div class="metric">
          <div class="k">自组网状态</div>
          <div class="v">{{ kpi.mesh }}</div>
        </div>
      </div>

      <div class="notes">
        <div class="note">
          <div class="k">说明</div>
          <div class="v">链路受限时仍保持编队并自主完成任务，支持返航策略。</div>
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

const mode = ref("MODE_A");
const link = ref("OK");
const trigger = ref("AUTO");

const events = ref([]);
const kpi = ref({ loopMs: 0, assignRate: 0, formation: "稳定", mesh: "正常" });

function now() {
  return new Date().toLocaleTimeString();
}

function runLoop() {
  events.value = [
    { t: now(), k: "建议生成", v: `模式 ${mode.value}` },
    { t: now(), k: "链路状态", v: link.value },
    { t: now(), k: "闭环触发", v: trigger.value }
  ];
  kpi.value = { loopMs: 120 + Math.round(Math.random() * 80), assignRate: 96, formation: "稳定", mesh: link.value === "LOST" ? "自组网" : "正常" };
  logs.push("INFO", "LOOP_START", "启动闭环", { mode: mode.value, link: link.value, trigger: trigger.value });
}

function ack() {
  events.value.unshift({ t: now(), k: "回执", v: "ACK / PROGRESS / ETA" });
  logs.push("INFO", "LOOP_ACK", "回执闭环", {});
}

function reassign() {
  events.value.unshift({ t: now(), k: "再分配", v: "分配至近区低电量节点" });
  logs.push("AUDIT", "LOOP_REASSIGN", "触发再分配", {});
}

function reset() {
  events.value = [];
  kpi.value = { loopMs: 0, assignRate: 0, formation: "稳定", mesh: "正常" };
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
.actions{ margin-top: 12px; display:flex; gap: 10px; flex-wrap:wrap; }

.timeline{
  margin-top: 12px;
  border:1px solid rgba(var(--accent-rgb),.12);
  background: rgba(var(--panel-rgb),.7);
  border-radius: 12px;
  padding: 10px;
  max-height: 280px;
  overflow:auto;
}
.evt{ display:grid; grid-template-columns: 90px 90px 1fr; gap: 10px; padding: 6px 0; }
.t{ font-family: var(--mono); opacity:.7; }
.k{ font-weight:600; }
.empty{ opacity:.6; padding: 6px; }

.metrics{ display:grid; gap:10px; }
.metric{ border:1px solid rgba(var(--accent-rgb),.12); background: rgba(var(--panel-rgb),.85); border-radius: 12px; padding: 10px; }
.metric .k{ font-size:12px; color: var(--muted); }
.metric .v{ margin-top:6px; font-weight:600; }

.notes{ margin-top: 12px; }
.note{ border:1px solid rgba(var(--accent-rgb),.12); background: rgba(var(--panel-rgb),.7); border-radius: 12px; padding: 10px; }
.note .k{ font-size:12px; color: var(--muted); }
.note .v{ margin-top:6px; }

@media (max-width: 980px){
  .grid{ grid-template-columns: 1fr; }
}
</style>
