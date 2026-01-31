<template>
  <div class="grid">
    <SCard
      title="任务建议与动态分配"
      subtitle="依据任务需求 + 规则集 + 实时态势，生成建议并估算时间指标"
    >
      <div class="row">
        <div class="box">
          <div class="k">任务类型</div>
          <select class="s-select" v-model="taskType">
            <option value="巡检">地下水监测巡检</option>
            <option value="应急">疑似污染应急排查</option>
            <option value="溯源">异常点位溯源</option>
          </select>
        </div>

        <div class="box">
          <div class="k">规则集</div>
          <select class="s-select" v-model="ruleSet">
            <option value="R1">R1：固定翼覆盖优先</option>
            <option value="R2">R2：旋翼精细盘旋采样</option>
            <option value="R3">R3：低电量优先近区</option>
          </select>
        </div>

        <div class="box">
          <div class="k">目标序列</div>
          <select class="s-select" v-model="targetSeq">
            <option value="T10">T10：10 个目标点（满足容量指标）</option>
            <option value="T12">T12：12 个目标点（加分展示）</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="box">
          <div class="k">算法库</div>
          <div class="chips">
            <label class="chip" v-for="a in algorithms" :key="a.id">
              <input type="checkbox" v-model="a.on" />
              <span>{{ a.name }}</span>
            </label>
          </div>
        </div>
        <div class="box">
          <div class="k">编队方案</div>
          <select class="s-select" v-model="formation">
            <option value="V">V 型（≥3）</option>
            <option value="LINE">一字阵</option>
            <option value="CIRCLE">环形阵</option>
          </select>
        </div>
        <div class="box">
          <div class="k">审批流</div>
          <select class="s-select" v-model="flow">
            <option value="FAST">快速（建议→执行）</option>
            <option value="AUDIT">标准（建议→审批→执行）</option>
            <option value="EXPERT">专家（建议→专家复核→执行）</option>
          </select>
        </div>
      </div>

      <div class="actions">
        <button class="s-btn s-btn--primary" @click="genPlan">生成任务建议</button>
        <button class="s-btn" @click="submitApprove">提交审批</button>
        <button class="s-btn" @click="approve">审批通过</button>
        <button class="s-btn" @click="applyAssign">应用动态分配</button>
        <button class="s-btn s-btn--danger" @click="reset">重置</button>
      </div>

      <div class="tips">
        <span class="s-badge"><span class="s-dot"></span> 实时估算：ETA / 总时长</span>
        <span class="s-badge"><span class="s-dot s-dot--ok"></span> 快速反应：规则触发 + 状态驱动</span>
        <span class="s-badge"><span class="s-dot s-dot--warn"></span> 闭环输出：ACK / PROGRESS / ETA</span>
      </div>
    </SCard>

    <SCard title="任务建议输出" subtitle="建议 → 审批 → 执行 → 回执闭环">
      <div class="out">
        <div class="line" v-for="(s, i) in suggestions" :key="i">
          <span class="idx">#{{ i + 1 }}</span>
          <span class="txt">{{ s }}</span>
        </div>
        <div v-if="suggestions.length === 0" class="empty">点击“生成任务建议”开始生成</div>
      </div>

      <div class="eta">
        <span class="s-badge"><span class="s-dot s-dot--warn"></span> 预计总时长：{{ eta.total }} min</span>
        <span class="s-badge"><span class="s-dot"></span> 预计完成时间：T+{{ eta.finish }} min</span>
        <span class="s-badge"><span class="s-dot s-dot--ok"></span> 流程状态：{{ flowState }}</span>
      </div>
    </SCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SCard from "../../components/ui/SCard.vue";
import { useLogsStore } from "../../store/logs.store.js";

const logs = useLogsStore();

const taskType = ref("巡检");
const ruleSet = ref("R1");
const targetSeq = ref("T10");
const formation = ref("V");
const flow = ref("STANDARD");

const algorithms = ref([
  { id: "A*", name: "A*", on: true },
  { id: "RRT", name: "RRT", on: true },
  { id: "PSO", name: "PSO", on: false },
  { id: "GA", name: "遗传算法", on: false }
]);

const suggestions = ref([]);
const eta = ref({ total: 0, finish: 0 });
const flowState = ref("待生成");

function genPlan() {
  const targets = targetSeq.value === "T10" ? 10 : 12;
  const base = taskType.value === "巡检" ? 26 : taskType.value === "应急" ? 18 : 22;

  const ruleBonus = ruleSet.value === "R1" ? 0 : ruleSet.value === "R2" ? 4 : -3;
  const algoUsed = algorithms.value.filter((a) => a.on).map((a) => a.name).join(" / ") || "A*";
  const total = Math.max(12, base + Math.round(targets * 0.8) + ruleBonus);

  suggestions.value = [
    `任务类型：${taskType.value}；目标序列：${targets} 点；规则集：${ruleSet.value}；编队：${formation.value}。`,
    `算法库：${algoUsed}；执行策略：固定翼覆盖 + 旋翼精细采样；自组网保持编队。`,
    `动态分配：低电量节点自动靠近；回执输出：ACK / PROGRESS / ETA。`,
    `时间估算：预计总时长 ${total} 分钟（含航线/编队重构/采样窗口）。`
  ];

  eta.value = { total, finish: total };
  flowState.value = "已生成建议";

  logs.push("INFO", "TASK_SUGGEST", "生成任务建议与时间估算", {
    taskType: taskType.value,
    ruleSet: ruleSet.value,
    targets,
    algorithms: algoUsed
  });
}

function submitApprove() {
  flowState.value = "待审批";
  logs.push("AUDIT", "TASK_SUBMIT", "提交审批", { flow: flow.value });
}

function approve() {
  flowState.value = "审批通过";
  logs.push("AUDIT", "TASK_APPROVE", "审批通过", { approver: "系统管理员" });
}

function applyAssign() {
  flowState.value = "执行中";
  suggestions.value.unshift("【已执行】动态分配下发：CMD_FORM / CMD_GOTO / FBK_ACK 进入闭环。");
  logs.push("AUDIT", "TASK_ASSIGN", "应用动态分配方案", { mode: "rule+state" });
}

function reset() {
  suggestions.value = [];
  eta.value = { total: 0, finish: 0 };
  flowState.value = "待生成";
}
</script>

<style scoped>
.grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
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
.actions .s-btn{ flex:1; min-width: 160px; }
.tips{ margin-top: 12px; display:flex; gap: 10px; flex-wrap:wrap; }

.out{ max-height: 360px; overflow:auto; padding-right: 6px; }
.line{
  display:flex; gap:10px;
  padding: 10px 10px;
  border: 1px solid rgba(var(--accent-rgb),.10);
  background: rgba(var(--panel-rgb),.6);
  border-radius: 12px;
  margin-bottom: 10px;
}
.idx{ font-family: var(--mono); color: rgba(var(--text-rgb),.7); }
.txt{ color: rgba(var(--text-rgb),.86); line-height:1.6; }
.empty{ color: rgba(var(--text-rgb),.55); font-size: 12px; padding: 10px 2px; }

.eta{ margin-top: 10px; display:flex; gap:10px; flex-wrap:wrap; }
</style>
