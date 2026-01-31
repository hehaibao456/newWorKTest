<template>
  <div class="grid">
    <!-- 左：综合态势与 KPI -->
    <section class="s-panel panel">
      <div class="panel__head">
        <div>
          <div class="s-title">指挥控制中心 · 一站式管理</div>
          <div class="s-subtitle">态势 / 网络 / 视频 / 日志 / 决策闭环（对标招标指标）</div>
        </div>
        <div class="badges">
          <span class="s-badge"><span class="s-dot s-dot--ok"></span> NODES: {{ sim.nodeCount }}</span>
          <span class="s-badge"><span class="s-dot"></span> LINKS: {{ sim.linkCount }}</span>
          <span class="s-badge"><span class="s-dot s-dot--warn"></span> LATENCY: MIX</span>
        </div>
      </div>

      <div class="hero">
        <div class="hero__box">
          <div class="k">项目</div>
          <div class="v">地下水环境监管平台（二期）</div>
        </div>
        <div class="hero__box">
          <div class="k">实飞编队</div>
          <div class="v">5 架（固定翼≥1）</div>
        </div>
        <div class="hero__box">
          <div class="k">通信距离</div>
          <div class="v">≥ 2 km</div>
        </div>
        <div class="hero__box">
          <div class="k">部署效率</div>
          <div class="v">≤ 15 min</div>
        </div>
      </div>

      <div class="kpis">
        <div class="kpi">
          <div class="k">建议响应</div>
          <div class="v">{{ kpi.suggest }} ms</div>
        </div>
        <div class="kpi">
          <div class="k">链路时延</div>
          <div class="v">{{ kpi.latency }} ms</div>
        </div>
        <div class="kpi">
          <div class="k">识别误差</div>
          <div class="v">±{{ kpi.errXY }} m / ±{{ kpi.errZ }} m</div>
        </div>
        <div class="kpi">
          <div class="k">任务闭环</div>
          <div class="v">{{ kpi.loop }} ms</div>
        </div>
      </div>

      <div class="actions">
        <button class="s-btn s-btn--primary" @click="initSituation">初始化编队态势</button>
        <button class="s-btn" @click="simulate">联动演示</button>
        <button class="s-btn" @click="pushLog">写入运行日志</button>
        <button class="s-btn s-btn--danger" @click="clearAll">清空</button>
      </div>

      <div class="note">
        <div class="s-title" style="font-size:12px;">运行策略（对标指标）</div>
        <ul>
          <li>分层式、模块化架构：任务/通信/节点/可视化四大模块联动。</li>
          <li>统一数据标准：位置/状态/指令/反馈/安全，条目≥20。</li>
          <li>智能规划：A* / RRT / PSO / GA 多算法快速航线与队形存储。</li>
          <li>强健壮性：通信受限仍自组网维持编队，并支持自动返航。</li>
        </ul>
      </div>

      <div class="scanlines"></div>
    </section>

    <!-- 右：视频回传墙 + 通道选择 -->
    <section class="s-panel panel">
      <div class="panel__head">
        <div class="s-title">视频流回传墙（联调）</div>
        <div class="s-subtitle">多通道 / 帧率 / 时延可视</div>
      </div>

      <div class="channel">
        <div class="k">通道选择</div>
        <div class="chips">
          <button
            v-for="c in channels"
            :key="c.id"
            class="chip"
            :class="{ active: c.id === activeChannel }"
            @click="activeChannel = c.id"
          >
            {{ c.name }}
          </button>
        </div>
      </div>

      <div class="videoWall">
        <div v-for="i in 4" :key="i" class="feed" :data-active="activeChannel === i">
          <div class="feed__hdr">
            <span class="s-badge"><span class="s-dot"></span> CH-{{ i }}</span>
            <span class="s-badge"><span class="s-dot s-dot--ok"></span> 25 fps</span>
            <span class="s-badge"><span class="s-dot"></span> 68 ms</span>
            <span class="s-badge"><span class="s-dot"></span> 1.2 Mbps</span>
          </div>
          <div class="feed__body">
            <div class="scan"></div>
            <div class="txt">UAV VIDEO {{ i }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联动地图 + 任务态势线 -->
    <section class="s-panel panel panel--map">
      <div class="panel__head">
        <div class="s-title">联动地图 / 任务态势线</div>
        <div class="s-subtitle">地下水监测任务态势 · 编队链路可视化</div>
      </div>

      <div class="map">
        <div class="map__grid"></div>
        <div class="map__hud">任务态势联动 | 节点：{{ sim.nodeCount }} | 链路：{{ sim.linkCount }}</div>
        <div class="map__legend">
          <span class="lg"><i class="dot lg--leader"></i> 固定翼/领航</span>
          <span class="lg"><i class="dot lg--wing"></i> 旋翼/编队</span>
          <span class="lg"><i class="line lg--ok"></i> 低时延</span>
          <span class="lg"><i class="line lg--warn"></i> 中时延</span>
          <span class="lg"><i class="line lg--bad"></i> 高时延</span>
        </div>
        <svg class="map__svg" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
          <line
            v-for="(l, i) in routeLines"
            :key="i"
            class="route"
            :class="`route--${l.level}`"
            :x1="l.x1"
            :y1="l.y1"
            :x2="l.x2"
            :y2="l.y2"
          />
          <circle
            v-for="(p, i) in routeDots"
            :key="i"
            class="dot"
            :class="p.role === 'leader' ? 'dot--leader' : 'dot--wing'"
            :cx="p.x"
            :cy="p.y"
            r="2.4"
          />
          <text
            v-for="(p, i) in routeDots"
            :key="`t-${i}`"
            class="nodeLabel"
            :x="p.x + 2.2"
            :y="p.y - 2.2"
          >{{ p.id }}</text>
        </svg>
        <div v-if="routeDots.length === 0" class="map__empty">暂无态势节点，请点击“初始化编队态势”</div>
      </div>
    </section>

    <!-- 系统日志 -->
    <section class="s-panel panel panel--logs">
      <div class="panel__head">
        <div class="s-title">系统日志（最近 50 条）</div>
        <div class="s-subtitle">审计留痕 / 支持导出</div>
      </div>

      <div class="logList">
        <div v-if="logs.latest.length === 0" class="empty">暂无日志</div>
        <div v-for="it in logs.latest" :key="it.id" class="logItem">
          <div class="meta">
            <span class="lvl" :data-lvl="it.level">{{ it.level }}</span>
            <span class="ts">{{ it.ts }}</span>
            <span class="act">{{ it.action }}</span>
          </div>
          <div class="detail">{{ it.detail }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useSimStore } from "../../store/sim.store.js";
import { useLogsStore } from "../../store/logs.store.js";

const sim = useSimStore();
const logs = useLogsStore();

const kpi = ref({ suggest: 86, latency: 42, errXY: 0.6, errZ: 0.3, loop: 140 });
const channels = ref([
  { id: 1, name: "CH-1" },
  { id: 2, name: "CH-2" },
  { id: 3, name: "CH-3" },
  { id: 4, name: "CH-4" }
]);
const activeChannel = ref(1);
let timer = null;

const mapOffset = ref({ x: 0, y: 0 });

const routeDots = computed(() => {
  if (!sim.nodes || sim.nodes.length === 0) return [];
  const count = sim.nodes.length;
  const cols = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / cols);
  const left = 22;
  const right = 78;
  const top = 20;
  const bottom = 40;
  const dx = cols > 1 ? (right - left) / (cols - 1) : 0;
  const dy = rows > 1 ? (bottom - top) / (rows - 1) : 0;
  return sim.nodes.map((n, i) => {
    const r = Math.floor(i / cols);
    const c = i % cols;
    return { x: left + c * dx, y: top + r * dy, id: n.id, role: n.role };
  });
});
const nodePosMap = computed(() => {
  const map = new Map();
  sim.nodes?.forEach((n, i) => {
    const p = routeDots.value[i];
    if (p) map.set(n.id, p);
  });
  return map;
});
const routeLines = computed(() => {
  if (!sim.links || sim.links.length === 0) return [];
  const map = nodePosMap.value;
  return sim.links
    .map((l) => {
      const a = map.get(l.a);
      const b = map.get(l.b);
      if (!a || !b) return null;
      const level = l.delay <= 30 ? "ok" : l.delay <= 60 ? "warn" : "bad";
      return { x1: a.x, y1: a.y, x2: b.x, y2: b.y, level };
    })
    .filter(Boolean);
});

// 全局视图无需额外缩放

function initSituation() {
  sim.reset();
  sim.nodes = [
    { id: "UAV-01", type: "fixed-wing", role: "leader", lat: 34.27, lon: 108.95, alt: 320, bat: 92 },
    { id: "UAV-02", type: "multirotor", role: "wing", lat: 34.271, lon: 108.948, alt: 305, bat: 88 },
    { id: "UAV-03", type: "multirotor", role: "wing", lat: 34.269, lon: 108.952, alt: 310, bat: 85 },
    { id: "UAV-04", type: "multirotor", role: "wing", lat: 34.272, lon: 108.953, alt: 300, bat: 83 },
    { id: "UAV-05", type: "multirotor", role: "wing", lat: 34.268, lon: 108.947, alt: 298, bat: 81 }
  ];
  sim.links = [
    { a: "UAV-01", b: "UAV-02", delay: 24, rssi: -62 },
    { a: "UAV-01", b: "UAV-03", delay: 31, rssi: -66 },
    { a: "UAV-02", b: "UAV-04", delay: 18, rssi: -59 },
    { a: "UAV-03", b: "UAV-05", delay: 45, rssi: -70 }
  ];

  logs.push("INFO", "SIM_SEED", "初始化编队态势（固定翼≥1 + 编队链路）", {
    nodes: sim.nodes.length,
    links: sim.links.length
  });
}

function simulate() {
  kpi.value.suggest = 70 + Math.round(Math.random() * 40);
  kpi.value.latency = 30 + Math.round(Math.random() * 60);
  kpi.value.errXY = (0.4 + Math.random() * 0.7).toFixed(2);
  kpi.value.errZ = (0.2 + Math.random() * 0.4).toFixed(2);
  kpi.value.loop = 120 + Math.round(Math.random() * 80);
  logs.push("INFO", "KPI_SIM", "关键 KPI 联动刷新", { ...kpi.value });
}

function clearAll() {
  sim.reset();
  logs.push("AUDIT", "SIM_CLEAR", "清空态势与任务数据", {});
}

function pushLog() {
  logs.push("INFO", "HEALTH_CHECK", "系统自检通过：分层链路/统一标准/权限模块在线", { ok: true });
}

onMounted(() => {
  timer = setInterval(simulate, 4000);
});

onBeforeUnmount(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
.grid{
  display:grid;
  grid-template-columns: 1.25fr 1fr;
  grid-template-rows: auto auto auto;
  gap: var(--space-5);
  padding-bottom: 10px;
}
.panel{ padding: var(--space-5); position:relative; overflow:hidden; }
.panel__head{ display:flex; align-items:flex-start; justify-content:space-between; gap: var(--space-4); padding-bottom: var(--space-4); border-bottom: 1px solid rgba(var(--accent-rgb),.10); }
.badges{ display:flex; gap: var(--space-2); flex-wrap:wrap; justify-content:flex-end; }

.hero{ margin-top: var(--space-4); display:grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-3); }
.hero__box{ border: 1px solid rgba(var(--accent-rgb),.12); background: rgba(var(--panel-rgb),.35); border-radius: 12px; padding: var(--space-3) var(--space-3); }
.k{ font-size: 12px; color: var(--muted); letter-spacing:.12em; }
.v{ margin-top: 6px; font-family: var(--mono); font-size: 12px; color: rgba(var(--text-rgb),.92); }

.kpis{ margin-top: var(--space-4); display:grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-3); }
.kpi{ border: 1px solid rgba(var(--accent-rgb),.12); background: rgba(var(--panel-rgb),.6); border-radius: 12px; padding: var(--space-3); }
.kpi .k{ font-size:12px; color: var(--muted); }
.kpi .v{ margin-top:6px; font-weight:600; }

.actions{ margin-top: var(--space-4); display:flex; gap: var(--space-3); flex-wrap:wrap; }
.actions .s-btn{ flex: 1; min-width: 160px; }

.note{ margin-top: var(--space-4); border: 1px solid rgba(var(--accent-rgb),.10); background: rgba(var(--panel-rgb),.6); border-radius: 12px; padding: var(--space-3) var(--space-4); }
.note ul{ margin: 8px 0 0; padding-left: 18px; color: rgba(var(--text-rgb),.78); font-size: 12px; line-height: 1.6; }

.channel{ margin-top: var(--space-4); display:flex; align-items:center; gap: var(--space-3); }
.chips{ display:flex; gap: var(--space-2); flex-wrap:wrap; }
.chip{ border:1px solid rgba(var(--accent-rgb),.2); background: rgba(var(--panel-rgb),.8); border-radius: 999px; padding: 6px 10px; cursor:pointer; }
.chip.active{ border-color: rgba(var(--accent-rgb),.5); box-shadow: 0 0 0 2px rgba(var(--accent-rgb),.12); }

.videoWall{ margin-top: var(--space-4); display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-3); }
.feed{ border: 1px solid rgba(var(--accent-rgb),.12); background: rgba(var(--panel-rgb),.35); border-radius: 12px; overflow:hidden; }
.feed[data-active="true"]{ border-color: rgba(var(--accent-rgb),.35); box-shadow: 0 0 0 3px rgba(var(--accent-rgb),.08); }
.feed__hdr{ padding: var(--space-2); display:flex; gap: var(--space-2); flex-wrap:wrap; }
.feed__body{
  height: 150px;
  position:relative;
  background: radial-gradient(400px 200px at 40% 30%, rgba(var(--accent-rgb),.08), transparent 60%),
              linear-gradient(180deg, rgba(0,0,0,.0), rgba(0,0,0,.25));
}
.scan{ position:absolute; inset:0; background: repeating-linear-gradient(90deg, rgba(255,255,255,.04), rgba(255,255,255,.04) 1px, transparent 1px, transparent 6px); animation: scan 2.4s linear infinite; opacity:.2; }
@keyframes scan{ 0%{ transform: translateX(-20%);} 100%{ transform: translateX(20%);} }
.txt{ position:absolute; left: 10px; bottom: 10px; font-family: var(--mono); font-size: 12px; letter-spacing:.12em; color: rgba(var(--text-rgb),.85); }

.panel--map{ grid-column: 1 / -1; }
.map{
  margin-top: var(--space-4);
  height: 260px;
  border:1px dashed rgba(var(--accent-rgb),.18);
  border-radius: 12px;
  position:relative;
  overflow:hidden;
  background:
    radial-gradient(120px 80px at 15% 15%, rgba(var(--accent-rgb), .08), transparent 60%),
    radial-gradient(180px 120px at 85% 25%, rgba(var(--accent-rgb), .06), transparent 60%),
    rgba(var(--panel-rgb),.6);
}
.map__grid{ position:absolute; inset:0; background:
  linear-gradient(90deg, rgba(var(--accent-rgb), .12) 1px, transparent 1px) 0 0/14px 100%,
  linear-gradient(0deg, rgba(var(--accent-rgb), .12) 1px, transparent 1px) 0 0/14px 100%; }
.map__hud{ position:absolute; left:10px; top:10px; font-size:12px; background: rgba(var(--panel-rgb),.92); border:1px solid rgba(var(--accent-rgb),.2); padding:4px 8px; border-radius: 8px; }
.map__legend{
  position:absolute;
  right:10px;
  top:10px;
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  font-size:12px;
  background: rgba(var(--panel-rgb),.92);
  border:1px solid rgba(var(--accent-rgb),.2);
  padding:4px 8px;
  border-radius: 8px;
}
.lg{ display:inline-flex; align-items:center; gap:6px; color: var(--muted); }
.lg .dot{ width:8px; height:8px; border-radius:50%; display:inline-block; }
.lg--leader{ background: var(--accent); box-shadow: 0 0 6px rgba(var(--accent-rgb), .45); }
.lg--wing{ background: rgba(var(--accent-rgb), .6); }
.lg .line{ width:16px; height:0; border-top:2px dashed; display:inline-block; }
.lg--ok{ border-color: rgba(var(--ok-rgb), .8); }
.lg--warn{ border-color: rgba(var(--warn-rgb), .8); }
.lg--bad{ border-color: rgba(var(--danger-rgb), .8); }
.map__svg{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  display:block;
}
.route{ stroke-width: 1.2; stroke-dasharray: 4 3; stroke-linecap: round; }
.route--ok{ stroke: rgba(var(--ok-rgb), .8); }
.route--warn{ stroke: rgba(var(--warn-rgb), .8); }
.route--bad{ stroke: rgba(var(--danger-rgb), .85); }
.dot{ fill: rgba(var(--accent-rgb), .75); stroke: rgba(var(--panel-rgb), .98); stroke-width: 0.8; }
.dot--leader{ fill: var(--accent); }
.nodeLabel{ font-size: 6px; fill: rgba(var(--text-rgb), .8); font-family: var(--mono); }
.map__empty{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color: var(--muted); }

.panel--logs{ grid-column: 1 / -1; }
.logList{ margin-top: var(--space-4); max-height: 260px; overflow:auto; padding-right: 6px; }
.empty{ color: rgba(var(--text-rgb),.55); font-size: 12px; padding: 10px 2px; }
.logItem{ padding: var(--space-3) var(--space-3); border: 1px solid rgba(var(--accent-rgb),.10); background: rgba(var(--panel-rgb),.6); border-radius: 12px; margin-bottom: var(--space-3); }
.meta{ display:flex; gap: var(--space-3); align-items:center; flex-wrap:wrap; font-family: var(--mono); font-size: 11px; color: rgba(var(--text-rgb),.75); }
.lvl{ padding: 3px 8px; border-radius: 999px; border: 1px solid rgba(var(--accent-rgb),.16); background: rgba(var(--panel-rgb),.6); }
.lvl[data-lvl="WARN"]{ border-color: rgba(var(--warn-rgb),.22); }
.lvl[data-lvl="ERROR"]{ border-color: rgba(var(--danger-rgb),.22); }
.lvl[data-lvl="AUDIT"]{ border-color: rgba(var(--ok-rgb),.22); }
.detail{ margin-top: 8px; color: rgba(var(--text-rgb),.82); font-size: 12px; line-height: 1.5; }

@media (max-width: 980px){
  .grid{ grid-template-columns: 1fr; }
  .hero{ grid-template-columns: 1fr 1fr; }
  .kpis{ grid-template-columns: 1fr 1fr; }
  .videoWall{ grid-template-columns: 1fr; }
}
</style>
