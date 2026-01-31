export const unifiedStandards = {
  framework: {
    name: "统一信息框架（位置/状态/指令/反馈/视频/链路/任务/审计）",
    version: "SR-UFLEET-STD/1.0",
    note: "用于多源融合与异构互操作的数据交互标准（项目版）"
  },
  entries: [
    { key: "POS_LAT", type: "position", desc: "纬度（WGS84）", unit: "deg" },
    { key: "POS_LON", type: "position", desc: "经度（WGS84）", unit: "deg" },
    { key: "POS_ALT", type: "position", desc: "高度", unit: "m" },
    { key: "POS_VX", type: "position", desc: "速度X", unit: "m/s" },
    { key: "POS_VY", type: "position", desc: "速度Y", unit: "m/s" },
    { key: "POS_VZ", type: "position", desc: "速度Z", unit: "m/s" },

    { key: "STA_BAT", type: "state", desc: "电量", unit: "%" },
    { key: "STA_MODE", type: "state", desc: "飞行模式", unit: "-" },
    { key: "STA_RTH", type: "state", desc: "返航状态", unit: "bool" },
    { key: "STA_FAIL", type: "state", desc: "故障码", unit: "-" },
    { key: "STA_TEMP", type: "state", desc: "设备温度", unit: "°C" },

    { key: "CMD_ARM", type: "command", desc: "解锁/上锁", unit: "bool" },
    { key: "CMD_TAKEOFF", type: "command", desc: "起飞", unit: "-" },
    { key: "CMD_GOTO", type: "command", desc: "航点导航", unit: "latlonalt" },
    { key: "CMD_FORM", type: "command", desc: "队形切换", unit: "id" },
    { key: "CMD_SPLIT", type: "command", desc: "编队拆分组合", unit: "schema" },
    { key: "CMD_RTH", type: "command", desc: "自动返航", unit: "-" },

    { key: "FBK_ACK", type: "feedback", desc: "指令回执", unit: "code" },
    { key: "FBK_PROGRESS", type: "feedback", desc: "任务进度", unit: "%" },
    { key: "FBK_ETA", type: "feedback", desc: "预计到达/完成时间", unit: "s" },

    { key: "NET_RSSI", type: "link", desc: "链路信号强度", unit: "dBm" },
    { key: "NET_DELAY", type: "link", desc: "链路时延", unit: "ms" },
    { key: "NET_ROUTE", type: "link", desc: "路由路径", unit: "list" },

    { key: "VID_CH", type: "video", desc: "视频通道号", unit: "-" },
    { key: "VID_FPS", type: "video", desc: "帧率", unit: "fps" },

    { key: "TASK_ID", type: "task", desc: "任务ID", unit: "-" },
    { key: "TASK_TYPE", type: "task", desc: "任务类型", unit: "-" },
    { key: "TASK_RULE", type: "task", desc: "预设规则集", unit: "-" },

    { key: "AUD_USER", type: "audit", desc: "操作用户", unit: "-" },
    { key: "AUD_OP", type: "audit", desc: "操作类型", unit: "-" },
    { key: "AUD_TS", type: "audit", desc: "操作时间", unit: "-" }
  ]
};
