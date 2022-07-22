<script lang="ts">
  import { computed, ref } from "vue"
  import { useRoute } from "vue-router"
  import { collapsed } from "./state"
  import { icons } from "../assets"
  import Tooltip from "./Tooltip.vue"

  export default {
    components: { Tooltip },
    props: {
      to: { type: String, required: true },
      label: { type: String, required: true },
      icon: { type: String, required: true },
      tooltipText: { type: String, required: true },
      tooltipFlow: { type: String, required: true }
    },
    setup(props: any) {
      const route = useRoute()
      const isActive = computed(() => route.path === props.to)
      return { isActive, collapsed, icons }
    }
  }
</script>

<template>
  <Tooltip :text="tooltipText" :flow="tooltipFlow">
    <router-link :to="to" class="_link" :class="{ active: isActive }">
      <img class="_icon" :src="icons[icon]" :alt="`${icon}`" />
      <transition name="fade">
        <div v-if="!collapsed" class="_tab-label">{{ label }}</div>
      </transition>
    </router-link>
  </Tooltip>
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
    border-radius: 0.25em
    height: 1.5em
    color: white
    text-decoration: none
    white-space: nowrap
    &:hover
      ._icon,
      ._tab-label
        background-color: var(--sidebar-item-hover)

  ._icon
    border-radius: 6px
    width: 34px
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
</style>
