<script setup>
import { ref, defineProps } from 'vue'
import actions from "@/utils/action"; // 引入


const loginOut = () => {
  actions.setGlobalState({ token: '' });
}
</script>

<template>

  <div class="card">
    m- home
    <button @click="loginOut">子应用退出登录</button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
