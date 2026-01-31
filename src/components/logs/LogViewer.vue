<template>
  <div class="viewer">
    <table class="tbl">
      <thead>
        <tr>
          <th v-for="c in columns" :key="c.key" :style="{ width: c.width || 'auto' }">{{ c.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in rows" :key="r.id || i">
          <td v-for="c in columns" :key="c.key">
            <slot :name="`cell-${c.key}`" :row="r" :value="r[c.key]">
              {{ r[c.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="rows.length === 0" class="empty">暂无日志</div>
  </div>
</template>

<script setup>
defineProps({
  columns: { type: Array, default: () => [] },
  rows: { type: Array, default: () => [] }
});
</script>

<style scoped>
.viewer{ width:100%; }
.tbl{ width:100%; border-collapse: collapse; font-size:12px; }
th, td{ padding: 8px 10px; border-bottom:1px solid rgba(var(--accent-rgb),.08); }
th{ text-align:left; color: rgba(var(--text-rgb),.8); font-weight:600; }
tr:hover td{ background: rgba(var(--accent-rgb),.04); }
.empty{ margin-top:10px; color: rgba(var(--text-rgb),.6); font-size:12px; }
</style>
