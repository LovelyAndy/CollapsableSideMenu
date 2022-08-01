<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="_custom-select" @blur="() => closeDropdown()" @mouseenter="() => startHover()">
    <div class="_custom-select-inner" @click="dropdownIsOpen = !dropdownIsOpen">
      <div style="display: flex">
        <img style="width: 34px" class="_icon" src="../assets/profile-icon.svg" alt="Change Language Icon" />
        <div v-if="!collapsed" class="_selected-option">
          <div>My Account</div>
          <img class="_icon" src="../assets/chevron-down.svg" alt="" />
        </div>
      </div>
      <ul
        v-show="hovering || !collapsed"
        ref="dropdownEl"
        class="_options"
        :style="dropdownElStyle"
        @mouseleave="() => closeDropdown()"
      >
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
  import { PropType, ref, watch, onMounted, onBeforeUnmount } from "vue"
  const props = defineProps({
    collapsed: { type: Boolean, default: false }
  })
  const dropdownIsOpen = ref(false)
  if (props.collapsed) dropdownIsOpen.value = false
  const dropdownEl = ref<any>(null)
  const dropdownElStyle = ref({})
  const update = () =>
    (dropdownElStyle.value = {
      maxHeight: `${dropdownIsOpen.value ? dropdownEl.value.scrollHeight : 0}px`
    })
  watch(dropdownIsOpen, update)
  onMounted(() => {
    window.addEventListener("resize", update)
    update()
  })
  onBeforeUnmount(() => window.removeEventListener("resize", update))
  function openDropdown() {
    if (props.collapsed) return
    dropdownIsOpen.value = !dropdownIsOpen.value
  }
  function closeDropdown() {
    dropdownIsOpen.value = false
    hovering.value = false
    dropdownElStyle.value = {}
  }
  const hovering = ref(false)
  function startHover() {
    if (!props.collapsed) return
    hovering.value = true
    dropdownElStyle.value = {
      maxHeight: "fit-content",
      position: "absolute",
      top: "-160%",
      left: "120%",
      background: "#4272ce",
      padding: "1rem",
      borderRadius: "6px"
    }
  }
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
