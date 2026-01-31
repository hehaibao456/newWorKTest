<template>
  <div class="grid">
    <SCard title="系统总览（运行入口）" subtitle="按按钮触发运行事件 → 写入系统日志 → 可在日志页统一追溯">
      <div class="kpis">
        <span class="s-badge"><span class="s-dot s-dot--ok"></span> 页面数：6</span>
        <span class="s-badge"><span class="s-dot"></span> 日志条数：{{ logs.items.length }}</span>
        <span class="s-badge"><span class="s-dot s-dot--warn"></span> 最近动作：{{ lastAction }}</span>
      </div>

      <div class="actions">
        <button class="s-btn" @click="seed('SYS_BOOT', '系统初始化完成')">写入启动日志</button>
        <button class="s-btn" @click="seed('SIM_TICK', '仿真推进一步（记录）')">仿真推进</button>
        <button class="s-btn s-btn--danger" @click="seed('ALERT', '发现异常：链路抖动', 'WARN')">写入告警</button>
      </div>

      <div class="cards">
        <RouterLink class="navcard" to="/network/mesh-resilience">
          <div class="t">Mesh Resilience</div>
          <div class="d">受限通信/中断/自愈策略验证</div>
        </RouterLink>

        <RouterLink class="navcard" to="/nodes/formation-library">
          <div class="t">Formation Library</div>
          <div class="d">编队模板库：复制/下发（运行）</div>
        </RouterLink>

        <RouterLink class="navcard" to="/nodes/node-behavior">
          <div class="t">Node Behavior</div>
          <div class="d">节点行为规则：触发条件/动作（执行）</div>
        </RouterLink>

        <RouterLink class="navcard" to="/vis/3d-situation">
          <div class="t">3D Situation</div>
          <div class="d">Three.js 视口：鼠标拖拽/选中/航迹</div>
        </RouterLink>

        <RouterLink class="navcard" to="/logs/system">
          <div class="t">System Logs</div>
          <div class="d">全系统留痕：筛选/搜索/清空</div>
        </RouterLink>
      </div>

      <template #footer>
        <div class="foot">
          <span class="s-badge"><span class="s-dot"></span> 查看路径：先点按钮写日志 → 去日志页看追溯</span>
        </div>
      </template>
    </SCard>

    <SCard title="最近日志（摘要）" subtitle="仅展示前 8 条">
      <div class="mini">
        <div v-if="logs.items.length === 0" class="empty">暂无日志</div>
        <div class="line" v-for="(x,i) in logs.items.slice(0, 8)" :key="i">
          <span class="ts">{{ x.ts }}</span>
          <span class="lvl" :class="x.level === 'WARN' ? 'warn' : ''">{{ x.level }}</span>
          <span class="act">{{ x.action }}</span>
          <span class="det">{{ x.detail }}</span>
        </div>
      </div>
    </SCard>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import SCard from "../../components/ui/SCard.vue";
import { useLogsStore } from "../../store/logs.store.js";

const logs = useLogsStore();

const lastAction = computed(() => logs.items[0]?.action ?? "-");

function seed(action, detail, level = "INFO") {
  logs.push(level, action, detail, { page: "Overview" });
}
</script>

<style scoped>
.kpis {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.navcard {
  border: 1px solid var(--s-border);
  background: var(--s-bg-soft);
  border-radius: 14px;
  padding: 12px;
  text-decoration: none;
  color: inherit;
  display: block;
}
.navcard:hover {
  background: rgba(255, 255, 255, 0.06);
}
.t {
  font-weight: 900;
}
.d {
  opacity: 0.75;
  margin-top: 6px;
  line-height: 1.4;
  font-size: 12px;
}
.mini {
  border: 1px solid var(--s-border);
  border-radius: 12px;
  overflow: hidden;
}
.line {
  display: grid;
  grid-template-columns: 160px 60px 160px 1fr;
  gap: 10px;
  padding: 10px;
}
.line + .line {
  border-top: 1px solid var(--s-border);
}
.ts {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 12px;
  opacity: 0.85;
}
.lvl {
  font-weight: 800;
}
.lvl.warn {
  color: var(--warn);
}
.act {
  font-weight: 700;
}
.det {
  opacity: 0.9;
}
.empty {
  opacity: 0.7;
  padding: 14px;
  text-align: center;
}
@media (max-width: 980px) {
  .cards {
    grid-template-columns: 1fr;
  }
  .line {
    grid-template-columns: 140px 60px 1fr;
  }
  .det {
    grid-column: 1 / -1;
  }
}
</style>
