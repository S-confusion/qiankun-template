import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 9000, //这里的端口是必须和父应用配置的子应用端口一致
    overlay: {
      warning: false,
      errors: false,
    },
  },
});
