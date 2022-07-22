<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
  import SidebarLink from "./SidebarLink.vue"
  import { collapsed, toggleSidebar, sidebarWidth } from "./state"
  import LangDropdown from "./LangDropdown.vue"
  import MyAccountDropdown from "./MyAccountDropdown.vue"
  const emit = defineEmits(["change"])
  function changeLang(lang: any) {
    emit("change", lang)
  }
</script>

<template>
  <div class="_sidebar" :style="{ width: sidebarWidth }">
    <div class="_collapse-icon" :class="{ '_rotate-180': collapsed }" @click="toggleSidebar">
      <img src="../assets/chevron-left.svg" alt="Collapse Sidebar" />
    </div>
    <router-link style="text-decoration: none" to="/">
      <div class="_optimo-home-link">
        <img style="width: 34px" src="../assets/optiomo-logo.svg" alt="Optimo Logo" />
        <div v-if="!collapsed" class="_optimo-home-link-text">Home</div>
      </div>
    </router-link>

    <div class="_sidebar-links">
      <SidebarLink
        to="/videos"
        icon="videos-icon"
        label="Videos"
        :tooltipText="collapsed ? 'Videos' : ''"
        tooltipFlow="right"
      />
      <SidebarLink
        to="/annotator"
        icon="annotator-icon"
        label="Annotator"
        :tooltipText="collapsed ? 'Annotator' : ''"
        tooltipFlow="right"
      />
      <SidebarLink
        to="/training"
        icon="training-icon"
        label="Training"
        :tooltipText="collapsed ? 'Training' : ''"
        tooltipFlow="right"
      />
      <SidebarLink
        to="/inference"
        icon="inference-icon"
        label="Inference"
        :tooltipText="collapsed ? 'Inference' : ''"
        tooltipFlow="right"
      />
      <SidebarLink
        to="/work-insights"
        icon="work-insights-icon"
        label="Work Insights"
        :tooltipText="collapsed ? 'Work Insights' : ''"
        tooltipFlow="right"
      />
    </div>
    <div class="_dropdowns">
      <LangDropdown
        tabindex="0"
        :options="['English', 'Simplified Chinese', 'Traditional Chinese']"
        :default="'English'"
        @input="changeLang"
      />
      <MyAccountDropdown tabindex="0" />
    </div>
  </div>
</template>

<style lang="sass">
  \:root
    --sidebar-bg-color: #4272ce
    --sidebar-item-hover: #5489ef
    --sidebar-item-active: #5489ef
</style>

<style lang="sass" scoped>
  ._sidebar
    position: relative
    display: flex
    flex-direction: column
    height: 100vh
    width: auto
    padding: 0.5em
    color: white
    // background: linear-gradient(90deg, pink 50px, cyan 182px)
    background-color: var(--sidebar-bg-color)
    // background: linear-gradient(to left, red 75%, blue 0%)
    transition: 0.3s ease
    z-index: 1
    &::after
     content: ''
     position: absolute
     top: 0
     bottom: 0
     left: 0
     right: 0
     width: 50px
     height: 100%
     display: block
     background-color: #2d5ab2
     z-index: -1
  ._sidebar-links > *:not(:last-child)
      margin-bottom: 2em


  ._collapse-icon
    position: absolute
    top: 4em
    right: -12px
    display: inline-block
    background-color: #4b4bd9
    width: 1.5em
    height: 1.5em
    border: 0.25em solid #4b4bd9
    border-radius: 50%
    text-align: center
    cursor: pointer
    // padding: 0.75em
    // background: #4b4bd9
    // border-radius: 50%
    // transition: 0.2s linear
    // z-index: 5

  ._optimo-home-link
    position: relative
    display: flex
    align-items: center
    cursor: pointer
    user-select: none
    margin-top: 1em
    margin-bottom: 4em
    border-radius: 0.25em
    height: 1.5em
    color: white
    &-text
      flex: 1
      display: flex
      margin-left: 2rem
      text-align: left
      text-decoration: none
      font-size: 18px

  ._rotate-180
    transform: rotate(180deg)
    transition: 0.3s linear

  ._dropdowns
    margin-top: auto
    margin-bottom: 4em
</style>
