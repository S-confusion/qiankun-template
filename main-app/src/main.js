import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { registerMicroApps, setDefaultMountApp, start } from "qiankun";

registerMicroApps([
  {
    name: "MicroAppReact", // app name registered
    entry: "http://localhost:9002/micro-app-react/",
    container: "#microApp",
    activeRule: "/micro-app-react",
  },
  {
    name: "MicroAppVue",
    entry: "http://localhost:9001/micro-app-vue/",
    container: "#microApp",
    activeRule: "/micro-app-vue",
  },
]);

setDefaultMountApp("/micro-app-react");
start();

createApp(App).mount("#app");
