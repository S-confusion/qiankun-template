<script setup>
import HelloWorld from './components/HelloWorld.vue'
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
