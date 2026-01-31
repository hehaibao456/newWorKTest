import { defineStore } from "pinia";
import { unifiedStandards } from "../mock/standards.js";

export const useStandardsStore = defineStore("standards", {
  state: () => ({
    framework: unifiedStandards.framework,
    entries: unifiedStandards.entries
  }),
  getters: {
    entryCount: (s) => s.entries.length
  }
});
