<script lang="ts">
  import { computed } from "vue"
  import { useRoute } from "vue-router"
  import { collapsed } from "./state"
  export default {
    props: {
      to: { type: String, required: true },
      label: { type: String, required: true },
      icon: { type: String, required: true, default: "videos-icon" }
    },
    setup(props: any) {
      const route = useRoute()
      const isActive = computed(() => route.path === props.to)
      return { isActive, collapsed }
    }
  }
</script>

<template>
  <router-link :to="to" class="_link" :class="{ active: isActive }">
    <!-- <img :src="require(`../assets/${icon}.svg`)" alt="" /> -->
    <!-- <img :src="`../assets/${icon}-icon.svg`" alt="" :class="icon" /> -->
    <img src="../assets/videos-icon.svg" alt="" class="_icon" />
    <!-- <i class="icon" :class="icon" /> -->
    <transition name="fade">
      <div class="_tab-label" v-if="!collapsed">{{ label }}</div>
    </transition>
  </router-link>
</template>

<style lang="sass" scoped>
  .fade-enter-active,
  .fade-leave-active
    transition: opacity 0.1s

  .fade-enter,
  .fade-leave-to
    opacity: 0

  ._link
    display: flex
    align-items: center
    cursor: pointer
    position: relative
    font-weight: 400
    user-select: none
    margin: 0.1em 0
    // padding: 0.4em
    border-radius: 0.25em
    height: 1.5em
    color: white
    text-decoration: none
    // background: #000
    &:hover
      ._icon,
      ._tab-label
        background-color: var(--sidebar-item-hover)

  ._icon
    border-radius: 6px
    // &:hover
    //   background-color: var(--sidebar-item-hover)
  .active
    ._icon,
    ._tab-label
      background-color: var(--sidebar-item-active)
  ._tab-label
    flex: 1
    display: flex
    margin-left: 1rem
    text-align: left
    border-radius: 6px
    padding: 8px 18px
    // &:hover
    //   background-color: var(--sidebar-item-hover)
</style>
