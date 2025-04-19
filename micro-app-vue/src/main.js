import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// const app = createApp(App);
// app.use(router);
// app.mount("#app");
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let instance = null;

function render(props = {}) {
  instance = createApp(App); // 必须放到函数里面，否则会提示重新创建
  const { container } = props;

  instance.use(router);
  //   instance.use(store);
  instance.mount(
    container
      ? container.querySelector("#microApp")
      : document.getElementById("microApp")
  );
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log("我正在作为子应用运行");
  }
}
// some code
renderWithQiankun({
  mount(props) {
    console.log("viteapp mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props) {
    console.log("vite被卸载了");
    instance.unmount();
    // instance._container.innerHTML = ''
    // history.destroy() // 不卸载  router 会导致其他应用路由失败
    // instance = null
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
