<template>
  <div class="grid">
    <SCard title="目标识别能力展示" subtitle="不少于 10 个目标识别能力，误差满足指标">
      <div class="row">
        <div class="box">
          <div class="k">目标数量</div>
          <select class="s-select" v-model="count">
            <option value="10">≥ 10</option>
            <option value="12">12（加分）</option>
          </select>
        </div>
        <div class="box">
          <div class="k">识别类型</div>
          <select class="s-select" v-model="type">
            <option value="air">空中目标</option>
            <option value="surface">地表目标</option>
          </select>
        </div>
        <div class="box">
          <div class="k">误差标准</div>
          <select class="s-select" v-model="standard">
            <option value="A">水平 ±1m / 垂直 ±0.5m</option>
            <option value="B">水平 ±0.8m / 垂直 ±0.3m</option>
          </select>
        </div>
      </div>

      <div class="actions">
        <button class="s-btn s-btn--primary" @click="simulate">生成识别结果</button>
        <button class="s-btn" @click="reset">重置</button>
      </div>

      <div class="table">
        <div class="thead">
          <span>目标</span><span>类型</span><span>水平误差</span><span>垂直误差</span><span>速度误差</span>
        </div>
        <div class="trow" v-for="t in targets" :key="t.id">
          <span>{{ t.id }}</span>
          <span>{{ t.type }}</span>
          <span>{{ t.errXY }} m</span>
          <span>{{ t.errZ }} m</span>
          <span>{{ t.errV }} m/s</span>
        </div>
      </div>
    </SCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SCard from "../../components/ui/SCard.vue";

const count = ref("10");
const type = ref("air");
const standard = ref("A");
const targets = ref([]);

function simulate() {
  const n = Number(count.value);
  targets.value = Array.from({ length: n }).map((_, i) => ({
    id: `T-${String(i + 1).padStart(2, "0")}`,
    type: type.value === "air" ? "空中" : "地表",
    errXY: (0.2 + Math.random() * 0.8).toFixed(2),
    errZ: (0.1 + Math.random() * 0.5).toFixed(2),
    errV: (0.2 + Math.random() * 0.8).toFixed(2)
  }));
}

function reset() {
  targets.value = [];
}
</script>

<style scoped>
.grid{ display:grid; grid-template-columns: 1fr; gap: 14px; }
.row{ display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
.box .k{ font-size:12px; color: var(--muted); letter-spacing:.12em; margin-bottom:6px; }
.actions{ margin-top: 12px; display:flex; gap: 10px; flex-wrap:wrap; }

.table{ margin-top: 12px; border:1px solid rgba(var(--accent-rgb),.12); border-radius: 12px; overflow:hidden; }
.thead,.trow{ display:grid; grid-template-columns: .6fr .6fr .8fr .8fr .8fr; gap: 10px; padding: 10px; }
.thead{ background: rgba(var(--panel-rgb),.9); font-weight:600; }
.trow{ border-top:1px solid rgba(var(--accent-rgb),.08); }
</style>
