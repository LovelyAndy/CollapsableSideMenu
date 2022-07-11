<template>
  <div class="app">
    <Sidebar />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
  import Sidebar from "./components/Sidebar.vue"
</script>

<style lang="scss">
  :root {
    --primary: #4272ce;
    --primary-alt: #2d5ab2;
    --highlight: #5489ef;
    --light: #ffffff;
    --sidebar-width: 200px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Fira sans", sans-serif;
  }
  body {
    background: var(--light);
  }
  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }
  .app {
    display: flex;
    main {
      flex: 1 1 0;
      padding: 2rem;
      @media (max-width: 1024px) {
        padding-left: 6rem;
      }
    }
  }
</style>
