<template>
  <div class="grid">
    <SCard title="统一数据标准（≥20条）" subtitle="位置信息 / 状态 / 指令 / 反馈 / 设备 / 安全">
      <div class="table">
        <div class="thead">
          <span>编号</span><span>类型</span><span>字段</span><span>说明</span>
        </div>
        <div class="trow" v-for="(item, i) in items" :key="i">
          <span class="id">{{ item.id }}</span>
          <span>{{ item.type }}</span>
          <span class="field">{{ item.field }}</span>
          <span class="desc">{{ item.desc }}</span>
        </div>
      </div>
    </SCard>

    <SCard title="信息框架" subtitle="统一信息条目 + 交互标准接口">
      <div class="frame">
        <div class="block" v-for="b in blocks" :key="b.title">
          <div class="name">{{ b.title }}</div>
          <div class="meta">{{ b.desc }}</div>
          <div class="list">
            <span class="pill" v-for="p in b.items" :key="p">{{ p }}</span>
          </div>
        </div>
      </div>
    </SCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SCard from "../../components/ui/SCard.vue";

const items = ref([
  { id: "S01", type: "位置信息", field: "lat", desc: "纬度" },
  { id: "S02", type: "位置信息", field: "lon", desc: "经度" },
  { id: "S03", type: "位置信息", field: "alt", desc: "高度" },
  { id: "S04", type: "位置信息", field: "heading", desc: "航向" },
  { id: "S05", type: "状态信息", field: "battery", desc: "电量" },
  { id: "S06", type: "状态信息", field: "link", desc: "链路状态" },
  { id: "S07", type: "状态信息", field: "speed", desc: "速度" },
  { id: "S08", type: "状态信息", field: "health", desc: "健康度" },
  { id: "S09", type: "指令", field: "CMD_FORM", desc: "队形指令" },
  { id: "S10", type: "指令", field: "CMD_GOTO", desc: "航点指令" },
  { id: "S11", type: "指令", field: "CMD_RTH", desc: "返航指令" },
  { id: "S12", type: "反馈", field: "ACK", desc: "确认回执" },
  { id: "S13", type: "反馈", field: "PROGRESS", desc: "执行进度" },
  { id: "S14", type: "反馈", field: "ETA", desc: "预计时间" },
  { id: "S15", type: "设备", field: "model", desc: "机型" },
  { id: "S16", type: "设备", field: "payload", desc: "载荷" },
  { id: "S17", type: "安全", field: "auth", desc: "身份认证" },
  { id: "S18", type: "安全", field: "role", desc: "角色权限" },
  { id: "S19", type: "安全", field: "audit_id", desc: "审计链路" },
  { id: "S20", type: "任务", field: "task_id", desc: "任务编号" },
  { id: "S21", type: "任务", field: "target_seq", desc: "目标序列" },
  { id: "S22", type: "任务", field: "policy", desc: "规则集" }
]);

const blocks = ref([
  { title: "位置信息", desc: "统一坐标系与时间戳", items: ["lat", "lon", "alt", "heading"] },
  { title: "状态信息", desc: "任务 / 电量 / 链路 / 健康度", items: ["battery", "link", "speed", "health"] },
  { title: "指令与反馈", desc: "指令闭环 + 回执", items: ["CMD_FORM", "CMD_GOTO", "CMD_RTH", "ACK", "PROGRESS", "ETA"] },
  { title: "设备与安全", desc: "机型 / 载荷 / 权限", items: ["model", "payload", "auth", "role", "audit_id"] }
]);
</script>

<style scoped>
.grid{ display:grid; grid-template-columns: 1.2fr .8fr; gap: 14px; }
.table{ border:1px solid rgba(var(--accent-rgb),.12); border-radius: 12px; overflow:hidden; }
.thead,.trow{ display:grid; grid-template-columns: .6fr .8fr .8fr 1.2fr; gap: 10px; padding: 10px; }
.thead{ background: rgba(var(--panel-rgb),.9); font-weight:600; }
.trow{ border-top:1px solid rgba(var(--accent-rgb),.08); }
.id{ font-family: var(--mono); }
.field{ font-family: var(--mono); }
.desc{ color: var(--muted); }

.frame{ display:grid; gap:10px; }
.block{ border:1px solid rgba(var(--accent-rgb),.12); background: rgba(var(--panel-rgb),.8); border-radius: 12px; padding: 10px; }
.name{ font-weight:600; }
.meta{ color: var(--muted); font-size:12px; margin-top:4px; }
.list{ margin-top:8px; display:flex; flex-wrap:wrap; gap:6px; }
.pill{ border:1px solid rgba(var(--accent-rgb),.2); background: rgba(var(--panel-rgb),.9); padding:4px 8px; border-radius: 999px; font-size:12px; }

@media (max-width: 980px){
  .grid{ grid-template-columns: 1fr; }
}
</style>
