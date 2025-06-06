import { defineConfig, loadEnv } from "vite";
import { fileURLToPath, URL } from "node:url";
// import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";
import path from "path";
// https://vite.dev/config/   {mode}
export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd());//process报错，未查明
  const env = loadEnv(mode, path.resolve());
  return {
    base: mode === "micro" ? env.VITE_APP_BASE_URL : "/",
    plugins: [
      // react({ fastRefresh: false }),//
      // 微应用名字，与主应用注册的微应用名字保持一致
      qiankun("MicroAppReact", {
        // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功, 单独运行没影响
        useDevMode: true, // useDevMode 开启时与热更新插件冲突
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      host: "0.0.0.0",
      port: 9002, //这里的端口是必须和父应用配置的子应用端口一致
      headers: {
        //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
        "Access-Control-Allow-Origin": "*",
      },
      overlay: {
        warning: false,
        errors: false,
      },
    },
    configureWebpack: {
      output: {
        library: `MicroAppReact`,
        libraryTarget: "umd", // 把微应用打包成 umd 库格式
        // jsonpFunction: `webpackJsonp_${name}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
      },
    },
  };
});
