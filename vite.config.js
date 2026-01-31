import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    base: "/netWorkTest/", // ⚠️ 改成你的仓库名  
  plugins: [vue()],
  server: {
    port: 5555,
    strictPort: true
  }
});
