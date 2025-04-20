<script setup>
import { onMounted } from "vue"
import { useUserStore } from '@/stores/user'
import { actions } from '@/qiankun';
const userStore = useUserStore()
// 调用同步 action
const handleLogin = () => {
  userStore.setUser({ id: 1, name: 'John Doe' })
}

// 调用异步 action
const loadUserData = () => {
  userStore.fetchUser({ id: 2, name: 'dany' })
}

const loginOut = () => {
  userStore.setUser({})
}


onMounted(() => {
  /**
   * 注册一个观察者函数
   * @param state 变更后的状态
   * @param prevState: 变更前的状态
   */
  actions.onGlobalStateChange((state, prevState) => {
    console.log("主应用观察者：token 改变前的值为 ", prevState.token);
    console.log("主应用观察者：token 改变后的值为 ", state.token);
    // 监听到子应用触发的退出登录
    if (!state.token && prevState.token) {
      loginOut()
    }
  });
});


</script>

<template>
  <div id="app">
    <div class="header">
      主应用header区域
      <div>用户信息{{ userStore.user }}</div>
      <button @click="handleLogin">同步登录</button>
      <button @click="loadUserData">异步登录</button>
      <button @click="loginOut">退出登录</button>
    </div>
    <div id="microApp"></div>
  </div>

</template>

<style lang="less" scoped>
#app {
  width: 100vw;
  height: 100vh;

  .header {
    height: 80px;
    width: 100%;
    background: #fa0;
  }

}
</style>
