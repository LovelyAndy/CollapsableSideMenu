<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="_custom-select" @blur="isOpen = false">
    <div style="display: flex; justify-content: space-between" @click="isOpen = !isOpen">
      <img style="width: 34px" class="_icon" src="../assets/languages-icon.svg" alt="Change Language Icon" />
      <div v-if="!collapsed" class="_selected-option">
        <div>
          {{ selected }}
        </div>
        <img class="_icon" src="../assets/chevron-down.svg" alt="" />
      </div>
      <transition name="slide">
        <div v-if="isOpen && !collapsed" class="_options">
          <div v-for="(option, i) of options" :key="i" @click="selectOption(option)">
            {{ option }}
          </div>
        </div>
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
  const isOpen = ref(true)

  function selectOption(_option: any) {
    console.log(`_option → `, _option)
    selected.value = _option
    isOpen.value = false
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

  .slide-enter-from,
  .slide-leave-to
    transform: scaleY(0)

  ._custom-select ._options div:hover
    background-color: var( --sidebar-item-hover)

  // ._hide
  //   display: none
</style>
