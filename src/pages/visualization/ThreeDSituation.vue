<template>
  <div class="grid">
    <SCard
      title="三维态势可视化（Three.js 渲染）"
      subtitle="鼠标拖动旋转 / 滚轮缩放 / 右键平移（OrbitControls）"
    >
      <div class="wrap">
        <div class="panel">
          <div class="row">
            <span class="s-badge"><span class="s-dot s-dot--ok"></span> Render: OK</span>
            <span class="s-badge"><span class="s-dot"></span> 目标总数：{{ objects.length }}</span>
            <span class="s-badge"><span class="s-dot"></span> 动态：{{ dynamicCount }}</span>
            <span class="s-badge"><span class="s-dot s-dot--warn"></span> 静态：{{ staticCount }}</span>
          </div>

          <div class="actions">
            <button class="s-btn" @click="spawnStatic">生成静态目标</button>
            <button class="s-btn s-btn--primary" @click="spawnDynamic">生成动态目标</button>
            <button class="s-btn s-btn--ghost" @click="spawnBatch">批量生成(5)</button>
            <button class="s-btn" @click="paused = !paused">{{ paused ? "继续仿真" : "暂停仿真" }}</button>
            <button class="s-btn s-btn--danger" @click="clear">清空</button>
          </div>

          <div class="metrics">
            <div class="metric">
              <div class="k">任务建议响应</div>
              <div class="v">{{ metrics.suggestMs }} ms</div>
            </div>
            <div class="metric">
              <div class="k">链路时延</div>
              <div class="v">{{ metrics.latencyMs }} ms</div>
            </div>
            <div class="metric">
              <div class="k">识别误差</div>
              <div class="v">±{{ metrics.errXY }} m / ±{{ metrics.errZ }} m</div>
            </div>
            <div class="metric">
              <div class="k">航迹规划</div>
              <div class="v">{{ metrics.pathAlgo }}</div>
            </div>
          </div>

          <div class="list" :class="{ 'is-empty': objects.length === 0 }">
            <div v-if="objects.length === 0" class="empty">暂无目标，点击“生成静态目标/动态目标”</div>
            <div v-for="o in objects" :key="o.id" class="item" :data-motion="o.motion">
              <div class="item__head">
                <div class="id">{{ o.id }}</div>
                <div class="tags">
                  <span class="tag">{{ o.motion === "DYNAMIC" ? "动态" : "静态" }}</span>
                  <span class="tag">{{ o.type }}</span>
                </div>
              </div>
              <div class="coords">
                <span>x {{ fmt(o.x) }}</span>
                <span>y {{ fmt(o.y) }}</span>
                <span>z {{ fmt(o.z) }}</span>
                <span class="spd">v {{ fmt(o.speed) }} m/s</span>
              </div>
              <div class="mini-map" aria-hidden="true">
                <span class="dot" :style="{ left: mapPos(o.x), top: mapPos(o.z) }"></span>
              </div>
            </div>
          </div>

          <div class="tips">
            <div class="tip"><span class="k">左键拖动</span><span class="v">旋转</span></div>
            <div class="tip"><span class="k">滚轮</span><span class="v">缩放</span></div>
            <div class="tip"><span class="k">右键拖动</span><span class="v">平移</span></div>
          </div>
        </div>

        <div class="viewport" ref="mountEl">
          <div class="hud">
            <div class="hud__line">统一任务态势图 | 地下水监测网络 | 3D 联动展示</div>
            <div class="hud__line">时间：{{ metrics.now }}</div>
          </div>
        </div>
      </div>
    </SCard>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";
import SCard from "../../components/ui/SCard.vue";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const objects = ref([]);
const mountEl = ref(null);
const paused = ref(false);

const metrics = ref({
  suggestMs: 86,
  latencyMs: 42,
  errXY: 0.6,
  errZ: 0.3,
  pathAlgo: "A* / RRT / PSO",
  now: ""
});

const dynamicCount = computed(() => objects.value.filter(o => o.motion === "DYNAMIC").length);
const staticCount = computed(() => objects.value.filter(o => o.motion === "STATIC").length);

let renderer = null;
let scene = null;
let camera = null;
let controls = null;
let rafId = 0;
let clock = null;
let spawnedMeshes = [];
let ro = null;
let resizeTimer = null;

const BOUNDS = 10;

function rnd(n = 100) {
  return Math.floor(Math.random() * n);
}

function pickType(motion) {
  if (motion === "STATIC") return Math.random() > 0.5 ? "监测井" : "补给区";
  return Math.random() > 0.5 ? "固定翼" : "旋翼";
}

function buildMesh(motion) {
  const mat = new THREE.MeshStandardMaterial({
    color: motion === "DYNAMIC" ? 0x1F8E8C : 0x2C9B6D,
    roughness: 0.6,
    metalness: 0.1
  });
  if (motion === "STATIC") {
    const g = new THREE.CylinderGeometry(0.15, 0.15, 0.4, 16);
    return new THREE.Mesh(g, mat);
  }
  const g = new THREE.SphereGeometry(0.18, 18, 18);
  return new THREE.Mesh(g, mat);
}

function makeTarget(motion) {
  const id = (motion === "DYNAMIC" ? "DYN-" : "STA-") + String(Date.now()).slice(-6);
  const type = pickType(motion);
  const x = rnd(800) / 100 - 4;
  const y = rnd(80) / 100 + 0.2;
  const z = rnd(800) / 100 - 4;
  const speed = motion === "DYNAMIC" ? rnd(60) / 10 + 2 : 0;
  const heading = rnd(360);
  const vx = motion === "DYNAMIC" ? Math.cos(heading) * speed * 0.03 : 0;
  const vz = motion === "DYNAMIC" ? Math.sin(heading) * speed * 0.03 : 0;

  return { id, type, motion, x, y, z, speed, vx, vz };
}

function spawnStatic() {
  addTarget("STATIC");
}

function spawnDynamic() {
  addTarget("DYNAMIC");
}

function spawnBatch() {
  for (let i = 0; i < 3; i++) addTarget("DYNAMIC");
  for (let i = 0; i < 2; i++) addTarget("STATIC");
}

function addTarget(motion) {
  const t = makeTarget(motion);
  objects.value.unshift(t);

  if (scene) {
    const mesh = buildMesh(motion);
    mesh.position.set(t.x, t.y, t.z);
    mesh.userData = { id: t.id, motion, vx: t.vx, vz: t.vz };
    scene.add(mesh);
    spawnedMeshes.push(mesh);
  }
}

function clear() {
  objects.value = [];
  if (scene && spawnedMeshes.length) {
    spawnedMeshes.forEach((m) => {
      scene.remove(m);
      m.geometry?.dispose?.();
      if (m.material) {
        const mats = Array.isArray(m.material) ? m.material : [m.material];
        mats.forEach((mat) => mat.dispose?.());
      }
    });
    spawnedMeshes = [];
  }
  nextTick(() => {
    renderer?.__onResize?.();
  });
}

function initThree() {
  const el = mountEl.value;
  if (!el) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xEAF4F1);

  camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200);
  camera.position.set(3.8, 2.6, 4.8);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(el.clientWidth, el.clientHeight);
  renderer.setClearColor(0xEAF4F1, 1);
  el.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.screenSpacePanning = true;
  controls.target.set(0, 0, 0);
  controls.update();
  controls.maxPolarAngle = Math.PI / 2.05;
  controls.minDistance = 2.0;
  controls.maxDistance = 20.0;

  const hemi = new THREE.HemisphereLight(0xE6F2EE, 0xC7DCD4, 0.8);
  scene.add(hemi);
  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const dir = new THREE.DirectionalLight(0xffffff, 0.9);
  dir.position.set(4, 6, 3);
  scene.add(dir);

  const axes = new THREE.AxesHelper(2.5);
  scene.add(axes);

  const gridMain = new THREE.GridHelper(20, 20, 0xA8C4BA, 0xC7DCD4);
  gridMain.material.opacity = 0.7;
  gridMain.material.transparent = true;
  scene.add(gridMain);

  const gridFine = new THREE.GridHelper(20, 40, 0xC7DCD4, 0xE6F2EE);
  gridFine.material.opacity = 0.45;
  gridFine.material.transparent = true;
  scene.add(gridFine);

  const g = new THREE.PlaneGeometry(20, 20);
  const gm = new THREE.MeshStandardMaterial({ color: 0xCFE1DA, roughness: 0.95, metalness: 0.05 });
  const ground = new THREE.Mesh(g, gm);
  ground.name = "ground";
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.8;
  scene.add(ground);

  clock = new THREE.Clock();

  const tick = () => {
    rafId = requestAnimationFrame(tick);

    if (!paused.value) {
      const dt = Math.min(clock.getDelta(), 0.033);
      spawnedMeshes.forEach((m) => {
        if (m.userData.motion !== "DYNAMIC") return;
        m.position.x += m.userData.vx * dt * 60;
        m.position.z += m.userData.vz * dt * 60;
        if (m.position.x > BOUNDS || m.position.x < -BOUNDS) m.userData.vx *= -1;
        if (m.position.z > BOUNDS || m.position.z < -BOUNDS) m.userData.vz *= -1;
      });

      objects.value = objects.value.map((o) => {
        if (o.motion !== "DYNAMIC") return o;
        const mesh = spawnedMeshes.find((m) => m.userData.id === o.id);
        if (!mesh) return o;
        return {
          ...o,
          x: mesh.position.x,
          y: mesh.position.y,
          z: mesh.position.z
        };
      });
    }

    controls?.update();
    renderer.render(scene, camera);
  };
  tick();

  const onResize = () => {
    if (!renderer || !camera || !mountEl.value) return;
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const w = mountEl.value.clientWidth;
      const h = mountEl.value.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }, 220);
  };

  window.addEventListener("resize", onResize);
  renderer.__onResize = onResize;
  ro = new ResizeObserver(onResize);
  ro.observe(el);
}

function disposeThree() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;

  if (renderer?.__onResize) window.removeEventListener("resize", renderer.__onResize);
  ro?.disconnect();
  ro = null;
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = null;

  controls?.dispose();
  controls = null;

  if (scene) {
    scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose?.();
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        mats.forEach((m) => m.dispose?.());
      }
    });
  }

  if (renderer) {
    renderer.dispose();
    const dom = renderer.domElement;
    dom?.parentNode?.removeChild(dom);
  }

  renderer = null;
  scene = null;
  camera = null;
  spawnedMeshes = [];
}

let metricTimer = null;

onMounted(() => {
  initThree();
  metricTimer = setInterval(() => {
    metrics.value.suggestMs = 70 + rnd(40);
    metrics.value.latencyMs = 30 + rnd(50);
    metrics.value.errXY = (0.4 + Math.random() * 0.7).toFixed(2);
    metrics.value.errZ = (0.2 + Math.random() * 0.4).toFixed(2);
    metrics.value.now = new Date().toLocaleString();
  }, 1000);
});

onBeforeUnmount(() => {
  disposeThree();
  if (metricTimer) clearInterval(metricTimer);
});

function fmt(n) {
  const num = Number(n);
  if (Number.isNaN(num)) return "-";
  return num.toFixed(2);
}

function mapPos(v) {
  const num = Number(v);
  if (Number.isNaN(num)) return "50%";
  const pct = ((num + BOUNDS) / (BOUNDS * 2)) * 100;
  const clamped = Math.max(4, Math.min(96, pct));
  return `${clamped}%`;
}
</script>

<style scoped>
.wrap {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 12px;
}

.panel {
  border: 1px solid var(--s-border, rgba(255,255,255,.08));
  border-radius: 12px;
  padding: 12px;
  background: var(--s-bg-soft, rgba(255,255,255,.04));
  display: flex;
  flex-direction: column;
}

.actions{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  margin:10px 0 12px;
  align-items:center;
}
.actions .s-btn{
  white-space: nowrap;
  line-height: 1;
  padding: 9px 12px;
  min-width: 120px;
}

.metrics{
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap:10px;
  margin-bottom:12px;
}
.metric{
  border: 1px solid rgba(var(--accent-rgb), .18);
  background: rgba(var(--panel-rgb), .9);
  border-radius: 10px;
  padding: 8px 10px;
}
.metric .k{ font-size:12px; color: var(--muted); letter-spacing:.1em; }
.metric .v{ margin-top:6px; font-weight:600; }

.list {
  max-height: 260px;
  min-height: 260px;
  overflow: auto;
  flex: 1 1 auto;
}
.list.is-empty{
  border:1px dashed rgba(var(--accent-rgb), .18);
  border-radius: 12px;
  background:
    linear-gradient(180deg, rgba(var(--panel-rgb), .9), rgba(var(--panel-rgb), .65));
  display:flex;
  align-items:center;
  justify-content:center;
}
.empty { opacity:.7; padding: 10px; text-align:center; }

.item {
  display: grid;
  gap: 8px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(var(--accent-rgb), .12);
  background: rgba(var(--panel-rgb), .85);
}
.item + .item { margin-top: 8px; }
.item[data-motion="DYNAMIC"]{ border-color: rgba(var(--accent-rgb), .3); }
.item[data-motion="STATIC"]{ border-color: rgba(var(--ok-rgb), .3); }
.item__head{ display:flex; align-items:center; justify-content:space-between; gap:10px; }
.id { font-family: var(--mono); }
.tags{ display:flex; gap:6px; flex-wrap:wrap; }
.tag{
  font-size:12px;
  border:1px solid rgba(var(--accent-rgb), .2);
  background: rgba(var(--panel-rgb), .9);
  padding:2px 8px;
  border-radius: 999px;
}
.coords{
  display:grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap:8px;
  font-family: var(--mono);
  font-size: 12px;
  opacity:.85;
}
.coords span{ white-space: nowrap; }
.spd{ text-align:right; }
.mini-map{
  position: relative;
  height: 34px;
  border:1px dashed rgba(var(--accent-rgb), .2);
  border-radius: 8px;
  background:
    linear-gradient(90deg, rgba(var(--accent-rgb), .12) 1px, transparent 1px) 0 0/8px 100%,
    linear-gradient(0deg, rgba(var(--accent-rgb), .12) 1px, transparent 1px) 0 0/8px 100%;
}
.mini-map .dot{
  position:absolute;
  width:6px; height:6px;
  border-radius:50%;
  background: var(--accent);
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(var(--accent-rgb), .5);
}

.viewport {
  min-height: 360px;
  height: 100%;
  border: 1px dashed var(--s-border, rgba(255,255,255,.18));
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: rgba(var(--panel-rgb), .7);
}

.hud{
  position:absolute;
  left:12px;
  top:10px;
  z-index:2;
  background: rgba(var(--panel-rgb), .8);
  border: 1px solid rgba(var(--accent-rgb), .18);
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 12px;
}
.hud__line + .hud__line{ margin-top:4px; color: var(--muted); }

.row { display:flex; gap:10px; flex-wrap:wrap; margin-bottom:10px; }

.tips {
  margin-top: 10px;
  border-top: 1px solid var(--s-border, rgba(255,255,255,.08));
  padding-top: 10px;
  display: grid;
  gap: 6px;
  opacity: .85;
}

.tip { display:flex; justify-content: space-between; gap: 10px; }
.tip .k { opacity: .7; }
.tip .v { font-weight: 600; }

@media (max-width: 980px){
  .wrap{ grid-template-columns: 1fr; }
  .metrics{ grid-template-columns: 1fr; }
}
</style>
