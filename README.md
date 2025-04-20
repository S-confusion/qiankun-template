# qiankun-template
## 主应用：vite+vue3+qiankun
## 子应用1：vite+vue3+vite-plugin-qiankun
## 子应用2：vite+react19+vite-plugin-qiankun
后续继续补充

## 问题点1
Qiankun框架默认不支持集成vite构建的微应用项目，微应用需使用vite-plugin-qiankun这个插件
主应用不受框架影响

## 问题点2  webpack和vite配置不同

### 问题代码：
在 src 目录新增 public-path.js：
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
以vite构建的微项目window中是拿不到__POWERED_BY_QIANKUN__

### 正确代码：
import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper';
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
从vite-plugin-qiankun中引入qiankunWindow再去判断环境

