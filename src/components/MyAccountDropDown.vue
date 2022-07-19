<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="_custom-select" @blur="dropdownIsOpen = false">
    <div class="_custom-select-inner" @click="dropdownIsOpen = !dropdownIsOpen">
      <div style="display: flex">
        <img style="width: 34px" class="_icon" src="../assets/profile-icon.svg" alt="Change Language Icon" />
        <div v-if="!collapsed" class="_selected-option">
          <div>My Account</div>
          <img class="_icon" src="../assets/chevron-down.svg" alt="" />
        </div>
      </div>
      <ul v-show="!collapsed" ref="bodyEl" class="_options" :style="bodyStyle">
        <li @click="logout">Logout</li>
        <li>
          <router-link to="/">User Management</router-link>
        </li>
        <li style="display: flex">
          <a href="https://www.youtube.com/watch?v=yivLt9cTaio&ab_channel=MusicGuide" target="_blank">
            Help
            <img style="width: 14px; margin-left: 0.5em" src="../assets/docs-icon.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { PropType, ref, watchEffect, onMounted, onBeforeUnmount } from "vue"
  import { collapsed } from "./state"
  const dropdownIsOpen = ref(true)
  if (collapsed) dropdownIsOpen.value = false
  const bodyEl = ref<any>(null)
  const bodyStyle = ref({})
  const update = () =>
    (bodyStyle.value = {
      maxHeight: `${dropdownIsOpen.value ? bodyEl.value.scrollHeight : 0}px`
    })
  watchEffect(update)
  onMounted(() => window.addEventListener("resize", update))
  onBeforeUnmount(() => window.removeEventListener("resize", update))
  function logout() {
    alert("You have been logged out!")
  }
</script>

<style lang="sass" scoped>
  button,
  a
    all: unset
    cursor: pointer
    width: max-content
  ._custom-select
    position: relative
    width: 100%
    text-align: left
    outline: none
    font-size: 16px
    border-radius: 6px
    &:hover
      ._icon,
      ._selected-option
        background-color: var(--sidebar-item-hover)
  ._custom-select-inner
    display: flex
    flex-direction: column
    justify-content: space-between
  ._selected-option
    flex: 1
    display: flex
    justify-content: space-between
    margin-left: 1em
    text-align: left
    border-radius: 6px
    padding: 8px 18px
    cursor: pointer
    user-select: none
    line-height: 26px
  ._icon
    width: 24px
    border-radius: 6px
    cursor: pointer
  ._options
    overflow: hidden
    max-height: 0
    padding: 0 0.5rem
    transition: max-height .3s cubic-bezier(.4,0,.2,1)
    margin-left: auto
    list-style-type: none
    > *
      border-radius: 6px
      text-align: left
      cursor: pointer
      user-select: none
      padding: 6px
      width: 100%
    > *:hover
      background-color: var( --sidebar-item-hover)

  ._custom-select ._options div:hover
    background-color: var( --sidebar-item-hover)
</style>
