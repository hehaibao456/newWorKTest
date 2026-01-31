import { defineStore } from "pinia";
import { nowISO } from "../utils/time.js";

const LS_KEY = "sys_logs_v1";
const MAX_ITEMS = 2000;

function safeParse(json, fallback) {
  try {
    const v = JSON.parse(json);
    return Array.isArray(v) ? v : fallback;
  } catch {
    return fallback;
  }
}

function genId() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function genTraceId() {
  // 16~24位十六进制，真实系统里一般来自链路追踪（这里本地生成）
  const a = Math.random().toString(16).slice(2);
  const b = Math.random().toString(16).slice(2);
  return (a + b).slice(0, 18);
}

function persist(items) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

function load() {
  if (typeof localStorage === "undefined") return [];
  return safeParse(localStorage.getItem(LS_KEY) || "[]", []);
}

/**
 * 规范化日志模型（建议你后端也按这个结构走）
 * {
 *   id, time, level, module, action,
 *   operator, ip, traceId,
 *   result, message,
 *   meta: {}
 * }
 */
export const useLogsStore = defineStore("logs", {
  state: () => ({
    items: load()
  }),

  getters: {
    latest: (s) => s.items.slice(-50).reverse()
  },

  actions: {
    /** 统一入口：直接添加完整日志对象 */
    add(entry) {
      const item = {
        id: entry.id || genId(),
        time: entry.time || nowISO(),
        level: entry.level || "INFO", // INFO/WARN/ERROR/AUDIT
        module: entry.module || "SYSTEM", // AUTH/NETWORK/NODE/POLICY/TASK/SYSTEM...
        action: entry.action || "UNKNOWN",
        operator: entry.operator || "system",
        ip: entry.ip || "-",
        traceId: entry.traceId || genTraceId(),
        result: entry.result || "-", // success/fail/timeout/denied...
        message: entry.message || "",
        meta: entry.meta || {}
      };
      // 兼容旧字段：前端表格仍使用 ts/detail
      item.ts = item.time;
      item.detail = item.message;

      this.items.push(item);

      // 控制容量，防止无限增长
      if (this.items.length > MAX_ITEMS) {
        this.items.splice(0, this.items.length - MAX_ITEMS);
      }

      persist(this.items);
    },

    /**
     * 兼容旧用法：push(level, action, detail, meta)
     * 也支持 push({ ...entry })
     */
    push(levelOrEntry, action, message, meta = {}) {
      if (typeof levelOrEntry === "object" && levelOrEntry) {
        this.add(levelOrEntry);
        return;
      }

      // 旧版映射：detail -> message, meta 原样保留
      this.add({
        level: levelOrEntry,
        action,
        message,
        meta
      });
    },

    clear() {
      this.items = [];
      persist(this.items);
    },

    /** 导入（接后端分页时也能复用） */
    replaceAll(list) {
      this.items = Array.isArray(list) ? list : [];
      persist(this.items);
    }
  }
});
