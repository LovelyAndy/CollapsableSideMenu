<template>
  <div class="app">
    <Sidebar v-model:collapsed="collapsed" @change="changeLanguage" />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "vue"
  import Sidebar from "./components/Sidebar.vue"
  const selectedLanguage = ref<String>("English")
  function changeLanguage(lang: string) {
    console.log(selectedLanguage.value)
    selectedLanguage.value = lang
  }
  const collapsed = ref(false)
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
