<template>
  <div class="matrix">
    <table>
      <thead>
        <tr>
          <th>功能</th>
          <th v-for="r in roles" :key="r">{{ r }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows" :key="i">
          <td class="name">{{ row.name }}</td>
          <td v-for="r in roles" :key="r">
            <span class="pill" :data-on="row[r] ? 'on' : 'off'">
              {{ row[r] ? '允许' : '只读' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  roles: { type: Array, default: () => ["admin","operator","auditor"] },
  rows: { type: Array, default: () => [] }
});
</script>

<style scoped>
.matrix table{ width:100%; border-collapse: collapse; font-size:12px; }
.matrix th, .matrix td{ padding: 8px 10px; border-bottom:1px solid rgba(var(--accent-rgb),.08); }
.matrix th{ text-align:left; color: rgba(var(--text-rgb),.8); }
.name{ font-weight:600; }
.pill{
  padding: 3px 8px; border-radius:999px;
  border:1px solid rgba(var(--accent-rgb),.16);
  background: rgba(var(--panel-rgb),.6);
}
.pill[data-on="on"]{ border-color: rgba(var(--ok-rgb),.35); }
</style>
