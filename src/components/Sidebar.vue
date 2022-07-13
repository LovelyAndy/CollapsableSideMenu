<script lang="ts">
  import SidebarLink from "./SidebarLink.vue"
  import { collapsed, toggleSidebar, sidebarWidth } from "./state"
  export default {
    props: {},
    components: { SidebarLink },
    setup() {
      return { collapsed, toggleSidebar, sidebarWidth }
    }
  }
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <SidebarLink to="/home" icon="videos-icon" label="Optimo" />
      <!-- <SidebarLink to="/home" icon="videos-icon"
        ><span class="sidebar-link-text" v-if="!collapsed">Hello</span></SidebarLink
      > -->
    </h1>

    <SidebarLink to="/videos" icon="videos-icon" label="Videos" />
    <SidebarLink to="/annotator" icon="videos-icon" label="Annotator" />
    <SidebarLink to="/training" icon="videos-icon" label="Training" />
    <SidebarLink to="/inference" icon="videos-icon" label="Inference" />
    <SidebarLink to="/work-insights" icon="videos-icon" label="Work Insights" />
    <!-- <SidebarLink to="/videos" icon="videos-icon"><span class="sidebar-link-text">Videos</span></SidebarLink>
    <SidebarLink to="/annotator" icon="annotator-icon"><span class="sidebar-link-text">Annotator</span></SidebarLink>
    <SidebarLink to="/training" icon="training-icon"><span class="sidebar-link-text">Training</span></SidebarLink>
    <SidebarLink to="/inference" icon="inference-icon"><span class="sidebar-link-text">Images</span></SidebarLink>
    <SidebarLink to="/work-insights" icon="work-insights-icon"
      ><span class="sidebar-link-text">Work Insights</span></SidebarLink
    > -->

    <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar"> >> </span>
  </div>
</template>

<style>
  :root {
    --sidebar-bg-color: #4272ce;
    --sidebar-item-hover: #5489ef;
    --sidebar-item-active: #5489ef;
  }
</style>

<style lang="sass" scoped>
  .sidebar
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
    // &::after
    //  content: ''
    //  position: relative
    //  top: -0.5em
    //  bottom: 0
    //  left: -0.5em
    //  width: 50px
    //  height: 100%
    //  display: block
    //  background-color: red
    //  z-index: 1
    // &::before
    //   content: " "
    //   display: block
    //   height: 100%
    //   width: 50px
    //   background: blue

  .sidebar h1
    height: 2.5em
  .sidebar-link-text
    // margin-left: 2rem
  .collapse-icon
    position: absolute
    bottom: 0
    padding: 0.75em
    color: rgba(255, 255, 255, 0.7)
    transition: 0.2s linear
    z-index: 2


  .rotate-180
    transform: rotate(180deg)
    transition: 0.2s linear
</style>
