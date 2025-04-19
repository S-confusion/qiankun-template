import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
let root = null;

function render(props) {
  const { container } = props;
  root = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.getElementById("root")
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

renderWithQiankun({
  mount(props) {
    render(props);
  },
  bootstrap() {},
  unmount(props) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(
      container
        ? container.querySelector("#root")
        : document.getElementById("root")
    );
  },
});

// 如果是独立运行qiankunWindow.__POWERED_BY_QIANKUN__=undefined
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
