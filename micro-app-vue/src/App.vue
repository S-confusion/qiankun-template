<script setup>
import { onMounted } from "vue";
import actions from "@/utils/action"; // 引入
onMounted(() => {
  /**
   * 注册一个观察者函数
   * @param state 变更后的状态
   * @param prevState: 变更前的状态
   */
  actions.onGlobalStateChange(
    (state, prevState) => {
      console.log("微应用观察者 -组件：token 改变前的值为 ", prevState.token);
      console.log(
        "微应用观察者 -组件：token 改变后的值为 ",
        state.token
      );
    }
  );
});

</script>

<template>
  <div class="app">
    <router-view></router-view>
    <router-link to="/">tohome</router-link>
    <router-link to="/about">toabout</router-link>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;
}
</style>
