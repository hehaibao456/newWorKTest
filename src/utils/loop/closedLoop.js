const MODES = {
  MODE_1: ["感知", "建议", "分配", "执行", "反馈"],
  MODE_2: ["感知", "建议", "分配", "执行", "反馈", "再规划"],
  MODE_3: ["感知", "威胁评估", "策略生成", "分配", "执行", "复盘"]
};

export function listLoopModes(){
  return Object.keys(MODES).map(k => ({ key: k, steps: MODES[k] }));
}

export function buildLoop(mode = "MODE_2"){
  return MODES[mode] || MODES.MODE_2;
}
