<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :class="{ _open: dropdownIsOpen }" class="_custom-select" @blur="dropdownIsOpen = false">
    <div class="_custom-select-inner" @click="dropdownIsOpen = !dropdownIsOpen">
      <div style="display: flex">
        <img style="width: 34px" class="_icon" src="../assets/languages-icon.svg" alt="Change Language Icon" />
        <div style="flex: 1; display: flex; justify-content: space-between">
          <div v-if="!collapsed" class="_selected-option">
            <div>
              {{ selected }}
            </div>
            <img class="_icon" src="../assets/chevron-down.svg" alt="" />
          </div>
        </div>
      </div>
      <transition name="slide" mode="in-out">
        <ul v-if="dropdownIsOpen && !collapsed" class="_options">
          <li v-for="(option, i) of options" :key="i" @click="selectOption(option)">
            {{ option }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { PropType, ref } from "vue"
  import { collapsed } from "./state"
  const props = defineProps({
    options: { type: Array as PropType<string[]>, required: true },
    default: { type: String, required: true }
  })
  const emit = defineEmits(["input"])
  const selected = ref(props.default ? props.default : props.options.length > 0 ? props.options[0] : null)
  const dropdownIsOpen = ref(true)
  if (collapsed) dropdownIsOpen.value = false
  function selectOption(_option: any) {
    selected.value = _option
    dropdownIsOpen.value = false
    emit("input", _option)
  }
</script>

<style lang="sass">
  ._custom-select
    position: relative
    width: 100%
    text-align: left
    outline: none
    font-size: 16px
    border-radius: 6px
    margin-bottom: 2em
    &:hover
      ._icon,
      ._selected-option
        background-color: var(--sidebar-item-hover)
  // ._open
  //   margin-bottom: 0
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
    // position: absolute
    // right: 0
    // top: 100%
    margin: 0
    margin-left: auto
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

  .slide-move,
  .slide-enter-from,
  .slide-leave-to
    transform: scaleY(0)

  ._custom-select ._options div:hover
    background-color: var( --sidebar-item-hover)
</style>
