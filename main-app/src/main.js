import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { registerMicroApps, setDefaultMountApp, start } from "qiankun";

registerMicroApps([
  {
    name: "MicroAppVue",
    entry: "http://localhost:9001/micro-app-vue/",
    container: "#microApp",
    activeRule: "/micro-app-vue",
  },
  {
    name: "MicroAppReact",
    entry: "http://localhost:9002/micro-app-react/",
    container: "#microApp",
    activeRule: "/micro-app-react",
  },
]);

setDefaultMountApp("/micro-app-react");
start();

createApp(App).mount("#app");
