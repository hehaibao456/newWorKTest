<template>
  <div class="wrap" :class="{ 'is-collapsed': navCollapsed }">
    <aside class="nav s-panel" :class="{ 'is-collapsed': navCollapsed }">
      <div class="nav__top">
        <div class="logo">SR·U-FLEET</div>
        <button
          class="nav__toggle"
          type="button"
          @click="navCollapsed = !navCollapsed"
          :title="navCollapsed ? '展开菜单' : '收起菜单'"
        >
          <span v-if="navCollapsed">»</span>
          <span v-else>«</span>
        </button>
        <div class="tag">无人集群仿真验证平台 · 地下水环境监测应用场景</div>
      </div>

      <div class="nav__scroll">
        <div class="nav__group">
          <div class="nav__label">总览</div>
          <RouterLink class="nav__item" to="/app/command" title="指挥控制中心">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v4H4zM4 10h10v10H4zM16 10h4v10h-4z"/></svg>
            <span class="nav__text">指挥控制中心</span>
          </RouterLink>
        </div>

        <div class="nav__group">
          <div class="nav__label">任务生成</div>
          <RouterLink class="nav__item" to="/app/mission/task" title="任务建议 / 动态分配">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v2H4zM4 11h16v2H4zM4 17h10v2H4zM18 16l3 3-3 3"/></svg>
            <span class="nav__text">任务建议 / 动态分配</span>
          </RouterLink>
          <RouterLink class="nav__item" to="/app/mission/planner" title="智能航迹规划（算法）">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18l6-6 4 4 6-8"/><path d="M4 6h4"/></svg>
            <span class="nav__text">智能航迹规划（算法）</span>
          </RouterLink>
          <RouterLink class="nav__item" to="/app/mission/loop" title="决策快速闭环（≥2）">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 0 1 13-6"/><path d="M20 4v6h-6"/><path d="M20 12a8 8 0 0 1-13 6"/><path d="M4 20v-6h6"/></svg>
            <span class="nav__text">决策快速闭环（≥2）</span>
          </RouterLink>
        </div>

        <div class="nav__group">
          <div class="nav__label">通信网络</div>
          <RouterLink class="nav__item" to="/app/network/monitor" title="网络状态监测（分层时延）">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20h18"/><path d="M6 16v-6"/><path d="M12 16V8"/><path d="M18 16v-10"/></svg>
            <span class="nav__text">网络状态监测（分层时延）</span>
          </RouterLink>
          <RouterLink class="nav__item" to="/app/network/resilience" title="自组网健壮性 / 返航">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h6"/><path d="M14 6l6 6-6 6"/><path d="M6 6h6"/><path d="M6 18h6"/></svg>
            <span class="nav__text">自组网健壮性 / 返航</span>
          </RouterLink>
        </div>

        <div class="nav__group">
          <div class="nav__label">节点行为</div>
          <RouterLink class="nav__item" to="/app/nodes/behavior" title="协同决策 / 无中心抗损">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l4 4-4 4-4-4z"/><path d="M4 20l4-4"/><path d="M20 20l-4-4"/></svg>
            <span class="nav__text">协同决策 / 无中心抗损</span>
          </RouterLink>
          <RouterLink class="nav__item" to="/app/nodes/formations" title="队形库（≥3）/ 存储">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h4v4H5zM15 7h4v4h-4zM10 13h4v4h-4z"/></svg>
            <span class="nav__text">队形库（≥3）/ 存储</span>
          </RouterLink>
        </div>

        <div class="nav__group">
          <div class="nav__label">可视化</div>
          <RouterLink class="nav__item" to="/app/viz/3d" title="三维态势（简洁直观）">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l9 4.5-9 4.5-9-4.5z"/><path d="M21 7.5v9L12 21l-9-4.5v-9"/></svg>
            <span class="nav__text">三维态势（简洁直观）</span>
          </RouterLink>
        </div>

        <div class="nav__group">
          <div class="nav__label">标准与能力</div>
          <RouterLink class="nav__item" to="/app/standards/unified" title="统一数据标准（≥20条）">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h10"/></svg>
            <span class="nav__text">统一数据标准（≥20条）</span>
          </RouterLink>
          <RouterLink class="nav__item" to="/app/recognition/targets" title="目标识别（≥10目标）">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>
            <span class="nav__text">目标识别（≥10目标）</span>
          </RouterLink>
          <RouterLink class="nav__item" to="/app/flighttest/scenario" title="实飞测试配置">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12l18-6-6 18-2-7z"/></svg>
            <span class="nav__text">实飞测试配置</span>
          </RouterLink>
        </div>

        <div class="nav__group">
          <div class="nav__label">安全与日志</div>
          <RouterLink class="nav__item" to="/app/security/users" title="身份认证 / 权限">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M4 20c1.5-4 14.5-4 16 0"/></svg>
            <span class="nav__text">身份认证 / 权限</span>
          </RouterLink>
          <RouterLink class="nav__item" to="/app/security/audit" title="审计留痕">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h9l3 3v13H6z"/><path d="M9 12h6"/><path d="M9 16h4"/></svg>
            <span class="nav__text">审计留痕</span>
          </RouterLink>
          <RouterLink class="nav__item" to="/app/logs/system" title="系统日志管理">
            <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v4H5z"/><path d="M5 11h14v8H5z"/></svg>
            <span class="nav__text">系统日志管理</span>
          </RouterLink>
        </div>
      </div>

      <div class="nav__bottom">
        <div class="user s-badge">
          <span class="s-dot"></span>
          <span>{{ auth.displayName }}</span>
          <span style="opacity:.65">/</span>
          <span style="opacity:.8">{{ auth.role }}</span>
        </div>

        <button class="s-btn s-btn--danger nav__logout" @click="logout">
          <svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h10v16H4z"/><path d="M14 12h6"/><path d="M18 9l3 3-3 3"/></svg>
          <span class="nav__text">退出登录</span>
        </button>
      </div>

      <div class="scanlines"></div>
    </aside>

    <main class="main">
      <header class="topbar s-panel">
        <div class="topbar__left">
          <div class="s-title">陕西省地下水环境监测网络体系建设项目(二期)地下水环境监管平台建设(二次)</div>
          <div class="s-subtitle">
            应用场景系统：任务生成 / 通信网络 / 节点行为 / 可视化（对标招标指标）
          </div>
        </div>
        <div class="topbar__right">
          <span class="s-badge pulse"><span class="s-dot"></span> SYSTEM ONLINE</span>
          <span class="s-badge"><span class="s-dot s-dot--ok"></span> AUTH OK</span>
        </div>
      </header>

      <section class="content">
        <div class="content-inner">
          <router-view />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/auth.store.js";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const router = useRouter();
const navCollapsed = ref(false);

function logout() {
  auth.logout();
  router.push("/auth/login");
}
</script>

<style scoped>
.wrap{
  height:100dvh;
  min-height:100dvh;
  width:100vw;
  display:grid;
  grid-template-columns: 320px 1fr;
  gap: var(--space-5);
  padding: var(--space-5);
  overflow:hidden;
  transition: grid-template-columns .2s ease;
}
.wrap.is-collapsed{
  grid-template-columns: 86px 1fr;
}

.nav{
  position:relative;
  padding: var(--space-5);
  display:flex;
  flex-direction:column;
  overflow:hidden;
  transition: padding .2s ease;
}
.nav.is-collapsed{ padding: var(--space-3); }
.nav__top{
  padding: var(--space-2) var(--space-2) var(--space-5);
  border-bottom:1px solid rgba(var(--accent-rgb),.10);
  display:flex;
  align-items:center;
  gap: var(--space-2);
  flex-wrap:wrap;
}
.logo{ font-family: var(--mono); letter-spacing:.18em; font-weight:700; }
.tag{ margin-top:6px; font-size:12px; color: var(--muted); }
.nav__toggle{
  margin-left:auto;
  border: 1px solid rgba(var(--accent-rgb),.25);
  background: rgba(var(--panel-rgb),.7);
  color: var(--text);
  width: 28px;
  height: 28px;
  border-radius: 8px;
  cursor:pointer;
  font-size: 12px;
}
.nav.is-collapsed .tag,
.nav.is-collapsed .nav__label,
.nav.is-collapsed .nav__bottom .user span{
  display:none;
}
.nav.is-collapsed .nav__item{
  padding: 10px 8px;
  justify-content:center;
}
.nav.is-collapsed .nav__text{
  display:none;
}
.nav.is-collapsed .nav__group{ padding: var(--space-3) var(--space-2); }
.nav.is-collapsed .nav__bottom{ padding: var(--space-3) var(--space-2); }

.nav__group{ padding: var(--space-4) var(--space-2); border-bottom:1px solid rgba(var(--accent-rgb),.06); }
.nav__label{
  font-size: 12px;
  letter-spacing:.16em;
  color: rgba(var(--text-rgb),.75);
  margin-bottom: var(--space-3);
}
.nav__item{
  display:flex;
  align-items:center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-3);
  border-radius: 12px;
  border: 1px solid rgba(var(--accent-rgb),.10);
  background: rgba(var(--panel-rgb),.35);
  margin-bottom: var(--space-3);
  transition: border-color .15s ease, box-shadow .15s ease;
}
.nav__icon{
  width:18px;
  height:18px;
  flex:0 0 18px;
  color: var(--text);
  opacity:.85;
}
.nav__icon path, .nav__icon circle, .nav__icon line{
  stroke: currentColor;
  fill: none;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.nav__text{ white-space: nowrap; }
.nav__item.router-link-active{
  border-color: rgba(var(--accent-rgb),.35);
  box-shadow: 0 0 0 3px rgba(var(--accent-rgb),.08);
}

.nav__scroll{
  flex: 1 1 auto;
  height: 0;
  min-height: 0;
  overflow-y:auto;
  overflow-x:hidden;
  overscroll-behavior: contain;
}

.nav__bottom{
  padding: var(--space-4) var(--space-2) 6px;
  display:flex;
  flex-direction:column;
  gap: var(--space-3);
  border-top:1px solid rgba(var(--accent-rgb),.08);
  background: linear-gradient(180deg, rgba(var(--panel2-rgb),.0), rgba(var(--panel2-rgb),.95));
}

.main{ display:flex; flex-direction:column; gap: var(--space-5); min-width:0; min-height:0; }
.topbar{
  padding: var(--space-4) var(--space-5);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: var(--space-5);
}
.topbar__left{
  min-width:0;
}
.topbar__left .s-title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.topbar__left .s-subtitle{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.topbar__right{
  display:flex;
  align-items:center;
  gap: var(--space-3);
  flex-wrap:wrap;
  justify-content:flex-end;
}
.content{
  flex: 1;
  min-height:0;
  overflow:auto;
  padding-right: 6px;
}
.content-inner{
  max-width: 1600px;
  width:100%;
  margin: 0 auto;
}

@media (max-width: 1100px){
  .wrap{ grid-template-columns: 86px 1fr; }
  .nav{ padding: var(--space-3); }
  .nav__top{ flex-wrap:nowrap; }
  .nav .tag,
  .nav .nav__label,
  .nav .nav__text,
  .nav .nav__bottom .user span{
    display:none;
  }
  .nav .nav__item{
    padding: var(--space-3) var(--space-2);
    justify-content:center;
  }
  .nav .nav__group{ padding: var(--space-3) var(--space-2); }
  .nav .nav__bottom{ padding: var(--space-3) var(--space-2); }
}

@media (prefers-reduced-motion: reduce){
  .wrap, .nav{ transition: none; }
}

</style>
