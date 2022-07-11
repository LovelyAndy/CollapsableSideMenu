<template>
  <aside :class="`${sidebarIsOpen ? 'is-open' : ''} wrapper`">
    <router-link class="logo" to="/">
      <img class="icon" src="../assets/Optimo_SQLogo.svg" alt="Optimo Icon" />
    </router-link>
    <div class="menu-toggle-button-wrap">
      <button class="menu-toggle-button" @click="toggleSidebar">
        <img class="icon" src="../assets/Collapse-Btn.svg" alt="Open Icon" />
      </button>
      <div class="menu">
        <router-link class="button" to="/videos">
          <img class="icon" src="../assets/videos-icon.svg" alt="Videos Icon" />
          <span class="text">Videos</span>
        </router-link>
        <router-link class="button" to="/annotator">
          <img class="icon" src="../assets/annotator-icon.svg" alt="Annotator Icon" />
          <span class="text">Annotator</span>
        </router-link>
        <router-link class="button" to="/training">
          <img class="icon" src="../assets/training-icon.svg" alt="Training Icon" />
          <span class="text">Training</span>
        </router-link>
        <router-link class="button" to="/inference">
          <img class="icon" src="../assets/inference-icon.svg" alt="Inference Icon" />
          <span class="text">Inference</span>
        </router-link>
        <router-link class="button" to="/work-insights">
          <img class="icon" src="../assets/work-insights-icon.svg" alt="Work Insights Icon" />
          <span class="text">Work Insights</span>
        </router-link>
      </div>
    </div>
    <div class="flex"></div>
    <div class="menu">
      <router-link class="button" to="/settings">
        <img style="width: 20px" class="icon" src="../assets/languages.svg" alt="My Account Icon" />
        <span class="text">English</span>
      </router-link>
    </div>
    <div class="menu">
      <router-link class="button" to="/settings">
        <img
          style="background-color: #fff; padding: 6px; border-radius: 50%; width: 38px"
          class="icon"
          src="../assets/profile.svg"
          alt="My Account Icon"
        />
        <span class="text">My Account</span>
      </router-link>
    </div>
  </aside>
</template>
<script lang="ts" setup>
  import { ref } from "vue"

  const sidebarIsOpen = ref<Boolean>(true)
  function toggleSidebar() {
    sidebarIsOpen.value = !sidebarIsOpen.value
  }
</script>
<style lang="scss" scoped>
  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    color: var(--light);
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;
    transition: 0.2s ease-in-out;
    z-index: 1000;
    .flex {
      flex: 1 1 0%;
    }
    .logo {
      width: 34px;
      margin-bottom: 1rem;
      // img {
      //   width: 34px;
      // }
    }

    .menu-toggle-button {
      position: absolute;
      top: 10px;
      right: -5%;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      // margin-left: 2rem;
      // top: 100;
      // right: 5;
      z-index: 10;
      transition: 0.2s ease-in-out;
      .icon {
        width: 34px;
        // font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }
      &:hover {
        .icon {
          color: var(--primary);
          // transform: translateX(0.5rem);
        }
      }
    }
    .button .text {
      opacity: 0;
      transition: 0.3s ease-out;
    }
    .menu {
      margin: 0 -1rem;
      .button {
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: 0.2s ease-in-out;
        padding: 0.5rem 1rem;
        // width: 34px;
        .icon {
          width: 34px;
          // font-size: 2rem;
          margin-right: 1rem;
          color: var(--light);
          transition: 0.2s ease-in-out;
        }
        .text {
          color: var(--light);
          transition: 0.2s ease-in-out;
        }
        &:hover {
          background-color: var(--highlight);
          .icon,
          .text {
            color: var(--light);
          }
        }
        &.router-link-exact-active {
          background-color: var(--highlight);
          // border-right: 5px solid var(--primary);
          .icon,
          .text {
            color: var(--light);
          }
        }
      }
    }
    .footer {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      p {
        font-size: 0.875rem;
        color: var(--grey);
      }
    }
    &.is-open {
      width: var(--sidebar-width);

      .menu-toggle-button {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
      .button .text {
        opacity: 1;
      }
      .button {
        .icon {
          margin-right: 1rem;
        }
      }
      .footer {
        opacity: 0;
      }
    }
    @media (max-width: 1024px) {
      position: absolute;
      z-index: 99;
    }
  }
</style>
