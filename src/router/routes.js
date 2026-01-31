import BlankLayout from "../layouts/BlankLayout.vue";
import MainLayout from "../layouts/MainLayout.vue";

import Login from "../pages/auth/Login.vue";

import CommandCenter from "../pages/overview/CommandCenter.vue";

import TaskGenerator from "../pages/mission/TaskGenerator.vue";
import Planner from "../pages/mission/Planner.vue";
import ClosedLoopLab from "../pages/mission/ClosedLoopLab.vue";

import NetworkMonitor from "../pages/network/NetworkMonitor.vue";
import MeshResilience from "../pages/network/MeshResilience.vue";

import NodeBehavior from "../pages/nodes/NodeBehavior.vue";
import FormationLibrary from "../pages/nodes/FormationLibrary.vue";

import ThreeDSituation from "../pages/visualization/ThreeDSituation.vue";

import UnifiedDataStandard from "../pages/standards/UnifiedDataStandard.vue";

import FlightTestScenario from "../pages/flighttest/FlightTestScenario.vue";
import TargetRecognition from "../pages/recognition/TargetRecognition.vue";

import UsersRoles from "../pages/security/UsersRoles.vue";
import Audit from "../pages/security/Audit.vue";

import SystemLogs from "../pages/logs/SystemLogs.vue";

export default [
  { path: "/", redirect: "/app/command" },

  {
    path: "/auth",
    component: BlankLayout,
    children: [{ path: "login", name: "Login", component: Login }]
  },

  {
    path: "/app",
    component: MainLayout,
    children: [
      { path: "command", name: "CommandCenter", component: CommandCenter },

      { path: "mission/task", name: "TaskGenerator", component: TaskGenerator },
      { path: "mission/planner", name: "Planner", component: Planner },
      { path: "mission/loop", name: "ClosedLoopLab", component: ClosedLoopLab },

      { path: "network/monitor", name: "NetworkMonitor", component: NetworkMonitor },
      { path: "network/resilience", name: "MeshResilience", component: MeshResilience },

      { path: "nodes/behavior", name: "NodeBehavior", component: NodeBehavior },
      { path: "nodes/formations", name: "FormationLibrary", component: FormationLibrary },

      { path: "viz/3d", name: "ThreeDSituation", component: ThreeDSituation },

      { path: "standards/unified", name: "UnifiedDataStandard", component: UnifiedDataStandard },

      { path: "flighttest/scenario", name: "FlightTestScenario", component: FlightTestScenario },
      { path: "recognition/targets", name: "TargetRecognition", component: TargetRecognition },

      { path: "security/users", name: "UsersRoles", component: UsersRoles },
      { path: "security/audit", name: "Audit", component: Audit },

      { path: "logs/system", name: "SystemLogs", component: SystemLogs }
    ]
  },

  { path: "/:pathMatch(.*)*", redirect: "/app/command" }
];
