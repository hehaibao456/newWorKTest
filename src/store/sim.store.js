import { defineStore } from "pinia";
import { mockUavModels } from "../mock/uavModels.js";
import { mockFormations } from "../mock/formations.js";

export const useSimStore = defineStore("sim", {
  state: () => ({
    // 基础配置：满足“实飞测试 5机编队，至少一架固定翼”
    scenario: {
      name: "地下水环境监测 · 无人集群仿真验证",
      uavCount: 5,
      fixedWingMin: 1,
      commMaxKm: 2,
      deployMinutes: 15
    },

    // 数据来源（要求：≥2型号导入、≥3队形）
    uavModels: mockUavModels,
    formations: mockFormations,

    // 运行态势（后续逐页补齐）
    nodes: [],
    links: [],
    targets: [],
    missions: [],
    time: {
      t: 0,
      running: false,
      speed: 1
    }
  }),
  getters: {
    nodeCount: (s) => s.nodes.length,
    linkCount: (s) => s.links.length
  },
  actions: {
    reset() {
      this.nodes = [];
      this.links = [];
      this.targets = [];
      this.missions = [];
      this.time = { t: 0, running: false, speed: 1 };
    }
  }
});
