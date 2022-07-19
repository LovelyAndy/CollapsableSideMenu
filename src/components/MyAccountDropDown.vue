<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="_custom-select" @blur="dropdDownIsOpen = false">
    <div style="display: flex; justify-content: space-between" @click="dropdDownIsOpen = !dropdDownIsOpen">
      <img style="width: 34px" class="_icon" src="../assets/profile-icon.svg" alt="Change Language Icon" />
      <div v-if="!collapsed" class="_selected-option">
        <div>My Account</div>
        <img class="_icon" src="../assets/chevron-down.svg" alt="" />
      </div>
      <transition name="slide">
        <ul v-if="dropdDownIsOpen && !collapsed" class="_options">
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
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { PropType, ref } from "vue"
  import { collapsed } from "./state"
  const dropdDownIsOpen = ref(true)
  if (collapsed) dropdDownIsOpen.value = false
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
    position: absolute
    right: 0
    top: 100%
    margin: 0
    padding: 8px
    padding-top: 0
    list-style-type: none
    transform-origin: top
    transition: transform 300ms ease-in-out
    overflow: hidden
    > *
      border-radius: 6px
      text-align: left
      cursor: pointer
      user-select: none
      padding: 6px
      width: 100%
    > *:hover
      background-color: var( --sidebar-item-hover)
    // > *:not(:last-child)
    //   margin-bottom: 0.25em

  .slide-enter-from,
  .slide-leave-to
    transform: scaleY(0)

  ._custom-select ._options div:hover
    background-color: var( --sidebar-item-hover)
</style>
