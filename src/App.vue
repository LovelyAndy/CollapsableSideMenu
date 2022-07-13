<template>
  <div class="app">
    <Sidebar />
    <div :style="{ 'margin-left': sidebarWidth }">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Sidebar from "./components/Sidebar.vue"
  import { sidebarWidth } from "./components/state"
</script>

<style lang="sass">
  *
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: Arial, Helvetica, sans-serif
  .app
    display: flex
</style>
