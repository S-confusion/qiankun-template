import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import actions from "./utils/action";
let instance = null;

function render(props = {}) {
  instance = createApp(App); // 必须放到函数里面，否则会提示重新创建
  const { container, parentActions } = props;

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

  // parentStoreData.value = props.parentStore
  // if (parentActions) {
  //   actions.setActions(parentActions);
  // }
  actions.setActions(props);
}
// some code
renderWithQiankun({
  mount(props) {
    console.log("viteapp mount", props);
    props.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("微应用观察者-main：token 改变前的值为 ", prevState.token);
      console.log("微应用观察者-main：token 改变后的值为 ", state.token);
    });
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
