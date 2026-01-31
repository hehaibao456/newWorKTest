<template>
  <div class="grid">
    <SCard title="网络状态监测（分层时延）" subtitle="分层架构：低时延链路 / 高时延链路 / 标准接口交互">
      <div class="row">
        <div class="box">
          <div class="k">链路层级</div>
          <select class="s-select" v-model="layer">
            <option value="LOW">低时延（站内）</option>
            <option value="MID">中时延（区域）</option>
            <option value="HIGH">高时延（跨域）</option>
          </select>
        </div>
        <div class="box">
          <div class="k">网状拓扑</div>
          <select class="s-select" v-model="topo">
            <option value="MESH">自组网 Mesh</option>
            <option value="STAR">星型</option>
            <option value="HYBRID">混合</option>
          </select>
        </div>
        <div class="box">
          <div class="k">通信策略</div>
          <select class="s-select" v-model="policy">
            <option value="AUTO">自动调度</option>
            <option value="SAFE">可靠性优先</option>
            <option value="FAST">延迟优先</option>
          </select>
        </div>
      </div>

      <div class="actions">
        <button class="s-btn s-btn--primary" @click="probe">开始探测</button>
        <button class="s-btn" @click="refresh">刷新状态</button>
        <button class="s-btn s-btn--danger" @click="reset">重置</button>
      </div>

      <div class="stat">
        <div class="pill">
          <div class="k">平均时延</div>
          <div class="v">{{ status.latency }} ms</div>
        </div>
        <div class="pill">
          <div class="k">可用性</div>
          <div class="v">{{ status.availability }}%</div>
        </div>
        <div class="pill">
          <div class="k">链路抖动</div>
          <div class="v">{{ status.jitter }} ms</div>
        </div>
        <div class="pill">
          <div class="k">丢包率</div>
          <div class="v">{{ status.loss }}%</div>
        </div>
      </div>

      <div class="table">
        <div class="thead">
          <span>链路</span><span>层级</span><span>时延</span><span>状态</span>
        </div>
        <div class="trow" v-for="l in links" :key="l.id">
          <span>{{ l.name }}</span>
          <span>{{ l.level }}</span>
          <span>{{ l.latency }} ms</span>
          <span :class="['state', l.state]">{{ l.state }}</span>
        </div>
      </div>
    </SCard>

    <SCard title="多源信息融合" subtitle="统一数据标准、状态一致性校验">
      <div class="fusion">
        <div class="f-card" v-for="f in fusion" :key="f.id">
          <div class="name">{{ f.name }}</div>
          <div class="meta">{{ f.desc }}</div>
          <div class="state">{{ f.state }}</div>
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

const layer = ref("LOW");
const topo = ref("MESH");
const policy = ref("AUTO");

const status = ref({ latency: 0, availability: 0, jitter: 0, loss: 0 });
const links = ref([]);
const fusion = ref([
  { id: 1, name: "位置信息", desc: "统一坐标系与时间戳", state: "OK" },
  { id: 2, name: "状态信息", desc: "任务/电量/链路", state: "OK" },
  { id: 3, name: "指令/反馈", desc: "CMD / ACK / PROGRESS", state: "OK" }
]);

function probe() {
  status.value = {
    latency: 32 + Math.round(Math.random() * 40),
    availability: 98,
    jitter: 5 + Math.round(Math.random() * 6),
    loss: 0.5
  };
  links.value = [
    { id: 1, name: "地面站 ↔ 中继", level: "低时延", latency: 18, state: "OK" },
    { id: 2, name: "中继 ↔ 编队", level: "中时延", latency: 42, state: "OK" },
    { id: 3, name: "编队 ↔ 编队", level: "高时延", latency: 68, state: "WARN" }
  ];
  logs.push("INFO", "NET_PROBE", "网络探测", { layer: layer.value, topo: topo.value, policy: policy.value });
}

function refresh() {
  probe();
}

function reset() {
  status.value = { latency: 0, availability: 0, jitter: 0, loss: 0 };
  links.value = [];
}
</script>

<style scoped>
.grid{ display:grid; grid-template-columns: 1.2fr .8fr; gap: 14px; }
.row{ display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
.box .k{ font-size:12px; color: var(--muted); letter-spacing:.12em; margin-bottom:6px; }
.actions{ margin-top: 12px; display:flex; gap: 10px; flex-wrap:wrap; }

.stat{ margin-top: 12px; display:grid; grid-template-columns: repeat(4,1fr); gap:10px; }
.pill{ border:1px solid rgba(var(--accent-rgb),.12); background: rgba(var(--panel-rgb),.85); border-radius: 12px; padding: 10px; }
.pill .k{ font-size:12px; color: var(--muted); }
.pill .v{ margin-top:6px; font-weight:600; }

.table{ margin-top: 12px; border:1px solid rgba(var(--accent-rgb),.12); border-radius: 12px; overflow:hidden; }
.thead,.trow{ display:grid; grid-template-columns: 1.4fr .8fr .6fr .6fr; gap: 10px; padding: 10px; }
.thead{ background: rgba(var(--panel-rgb),.9); font-weight:600; }
.trow{ border-top:1px solid rgba(var(--accent-rgb),.08); }
.state.OK{ color: var(--ok); }
.state.WARN{ color: var(--warn); }
.state.ERROR{ color: var(--danger); }

.fusion{ display:grid; gap:10px; }
.f-card{ border:1px solid rgba(var(--accent-rgb),.12); background: rgba(var(--panel-rgb),.8); border-radius: 12px; padding: 10px; display:flex; justify-content:space-between; }
.name{ font-weight:600; }
.meta{ color: var(--muted); font-size:12px; }

@media (max-width: 980px){
  .grid{ grid-template-columns: 1fr; }
  .stat{ grid-template-columns: 1fr 1fr; }
}
</style>
