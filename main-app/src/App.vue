<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <div class="header">
      header 主应用header区域
    </div>
    <div id="microApp"></div>
  </div>

</template>

<style lang="less" scoped>
#app {
  width: 100vw;
  height: 100vh;

  .header {
    height: 40px;
    width: 100%;
    background: #fa0;
  }

}
</style>
