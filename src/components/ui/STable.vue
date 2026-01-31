<template>
  <div class="wrap">
    <table class="s-table">
      <thead>
        <tr>
          <th v-for="c in columns" :key="c.key" :style="{ width: c.width || 'auto' }">
            {{ c.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, idx) in rows" :key="r.id || idx">
          <td v-for="c in columns" :key="c.key">
            <slot :name="`cell-${c.key}`" :row="r" :value="r[c.key]">
              {{ r[c.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="rows.length===0" class="empty">暂无数据</div>
  </div>
</template>

<script setup>
defineProps({
  columns: { type: Array, default: () => [] },
  rows: { type: Array, default: () => [] }
});
</script>

<style scoped>
.wrap{ width:100%; }
.empty{ margin-top:10px; color: rgba(var(--text-rgb),.55); font-size:12px; }
</style>
