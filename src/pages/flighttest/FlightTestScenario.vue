<template>
  <div class="grid">
    <SCard title="实飞测试配置" subtitle="对标招标条款：编队构型 / 通信距离 / 探测误差 / 展开撤收时间">
      <div class="row">
        <div class="box">
          <div class="k">编队构型</div>
          <select class="s-select" v-model="fleet">
            <option value="5">5 架（固定翼≥1）</option>
            <option value="6">6 架（加分）</option>
            <option value="7">7 架（加分）</option>
          </select>
        </div>
        <div class="box">
          <div class="k">通信距离</div>
          <select class="s-select" v-model="range">
            <option value="2">≥ 2 km</option>
            <option value="3">≥ 3 km</option>
          </select>
        </div>
        <div class="box">
          <div class="k">展开/撤收</div>
          <select class="s-select" v-model="deploy">
            <option value="15">≤ 15 min</option>
            <option value="12">≤ 12 min</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="box">
          <div class="k">抗风能力</div>
          <select class="s-select" v-model="wind">
            <option value="6">≥ 6 级（阵风 7）</option>
            <option value="7">≥ 7 级</option>
          </select>
        </div>
        <div class="box">
          <div class="k">续航</div>
          <select class="s-select" v-model="endurance">
            <option value="40">空载 ≥ 40 min</option>
            <option value="50">空载 ≥ 50 min</option>
          </select>
        </div>
        <div class="box">
          <div class="k">环境适应</div>
          <select class="s-select" v-model="temp">
            <option value="-20~50">-20℃ ~ 50℃</option>
          </select>
        </div>
      </div>

      <div class="actions">
        <button class="s-btn s-btn--primary" @click="run">生成测试方案</button>
        <button class="s-btn" @click="reset">重置</button>
      </div>

      <div class="kpis">
        <div class="kpi"><div class="k">水平误差</div><div class="v">±{{ err.xy }} m</div></div>
        <div class="kpi"><div class="k">垂直误差</div><div class="v">±{{ err.z }} m</div></div>
        <div class="kpi"><div class="k">速度误差</div><div class="v">±{{ err.v }} m/s</div></div>
        <div class="kpi"><div class="k">探测范围</div><div class="v">≥ 10 km</div></div>
      </div>
    </SCard>

    <SCard title="实飞参数表（可编辑）" subtitle="支持参数化展示与演示调整">
      <div class="table">
        <div class="thead">
          <span>指标</span><span>值</span><span>备注</span>
        </div>
        <div class="trow" v-for="(p, i) in params" :key="i">
          <input class="cell" v-model="p.name" />
          <input class="cell" v-model="p.value" />
          <input class="cell" v-model="p.note" />
        </div>
      </div>
      <div class="actions">
        <button class="s-btn" @click="addParam">新增参数</button>
        <button class="s-btn s-btn--ghost" @click="removeParam">删除末行</button>
      </div>
    </SCard>

    <SCard title="机型库（可编辑）" subtitle="固定翼 / 旋翼 机型数据演示">
      <div class="table table--models">
        <div class="thead">
          <span>机型</span><span>翼展/尺寸</span><span>续航</span><span>防护等级</span>
        </div>
        <div class="trow" v-for="(m, i) in models" :key="i">
          <input class="cell" v-model="m.name" />
          <input class="cell" v-model="m.size" />
          <input class="cell" v-model="m.endurance" />
          <input class="cell" v-model="m.ip" />
        </div>
      </div>
      <div class="actions">
        <button class="s-btn" @click="addModel">新增机型</button>
        <button class="s-btn s-btn--ghost" @click="removeModel">删除末行</button>
      </div>
    </SCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SCard from "../../components/ui/SCard.vue";

const fleet = ref("5");
const range = ref("2");
const deploy = ref("15");
const wind = ref("6");
const endurance = ref("40");
const temp = ref("-20~50");

const err = ref({ xy: 0.8, z: 0.3, v: 0.5 });

const params = ref([
  { name: "通信距离", value: "≥ 2 km", note: "支持自组网" },
  { name: "部署效率", value: "≤ 15 min", note: "展开/撤收" },
  { name: "探测误差", value: "±1m / ±0.5m", note: "水平/垂直" }
]);

const models = ref([
  { name: "固定翼 A型", size: "2.5 m", endurance: "≥ 40 min", ip: "IPX4" },
  { name: "旋翼 B型", size: "0.9 m", endurance: "≥ 35 min", ip: "IPX4" }
]);

function run() {
  err.value = {
    xy: (0.6 + Math.random() * 0.4).toFixed(2),
    z: (0.2 + Math.random() * 0.3).toFixed(2),
    v: (0.3 + Math.random() * 0.7).toFixed(2)
  };
}

function reset() {
  err.value = { xy: 0.8, z: 0.3, v: 0.5 };
}

function addParam() {
  params.value.push({ name: "新指标", value: "", note: "" });
}
function removeParam() {
  if (params.value.length > 0) params.value.pop();
}

function addModel() {
  models.value.push({ name: "新机型", size: "", endurance: "", ip: "" });
}
function removeModel() {
  if (models.value.length > 0) models.value.pop();
}
</script>

<style scoped>
.grid{ display:grid; grid-template-columns: 1fr; gap: 14px; }
.row{ display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
.box .k{ font-size:12px; color: var(--muted); letter-spacing:.12em; margin-bottom:6px; }
.actions{ margin-top: 12px; display:flex; gap: 10px; flex-wrap:wrap; }
.kpis{ margin-top: 12px; display:grid; grid-template-columns: repeat(4,1fr); gap:10px; }
.kpi{ border:1px solid rgba(var(--accent-rgb),.12); background: rgba(var(--panel-rgb),.85); border-radius: 12px; padding: 10px; }
.kpi .k{ font-size:12px; color: var(--muted); }
.kpi .v{ margin-top:6px; font-weight:600; }

.table{ margin-top: 12px; border:1px solid rgba(var(--accent-rgb),.12); border-radius: 12px; overflow:hidden; }
.thead,.trow{ display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; padding: 10px; }
.table--models .thead,.table--models .trow{ grid-template-columns: 1.2fr 1fr 1fr .8fr; }
.thead{ background: rgba(var(--panel-rgb),.9); font-weight:600; }
.cell{ background: rgba(var(--panel-rgb),.9); border:1px solid rgba(var(--accent-rgb),.16); border-radius: 8px; padding: 6px 8px; color: var(--text); }

@media (max-width: 980px){
  .row{ grid-template-columns: 1fr; }
  .kpis{ grid-template-columns: 1fr 1fr; }
}
</style>
