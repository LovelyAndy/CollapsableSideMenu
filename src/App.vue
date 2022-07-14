<template>
  <div class="app">
    <Sidebar @change="changeLanguage" />
    {{ selectedLanguage }}
    <div :style="{ 'margin-left': sidebarWidth }">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue"
  import Sidebar from "./components/Sidebar.vue"
  import { sidebarWidth } from "./components/state"
  const selectedLanguage = ref<String>("English")
  function changeLanguage(lang: string) {
    console.log(selectedLanguage.value)
    selectedLanguage.value = lang
  }
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
