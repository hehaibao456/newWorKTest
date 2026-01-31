import { defineStore } from "pinia";
import { mockUsers } from "../mock/users.js";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: ""
  }),
  getters: {
    isAuthed: (s) => !!s.token,
    role: (s) => s.user?.role || "guest",
    displayName: (s) => s.user?.name || "未登录"
  },
  actions: {
    login({ username, password }) {
      const u = mockUsers.find(x => x.username === username && x.password === password);
      if (!u) throw new Error("账号或口令错误");
      this.user = { id: u.id, name: u.name, role: u.role };
      this.token = `sess_${u.id}_${Date.now()}`;
    },
    logout() {
      this.user = null;
      this.token = "";
    }
  }
});
