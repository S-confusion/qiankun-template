import {
  registerMicroApps,
  start,
  initGlobalState,
  setDefaultMountApp,
} from "qiankun";

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
    props: {},
  },
]);
setDefaultMountApp("/micro-app-vue");

// 注册微应用通信示例
const initialState = {};
const actions = initGlobalState(initialState);

export {
  start, // 导出 qiankun 的启动函数
  actions, // 导出通信示例
};
