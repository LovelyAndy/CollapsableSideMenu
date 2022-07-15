<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="_custom-select" @blur="isOpen = false">
    <div style="display: flex; justify-content: space-between" @click="isOpen = !isOpen">
      <img style="width: 34px" class="_icon" src="../assets/languages-icon.svg" alt="" />
      <div class="_selected-option">
        <div :class="{ open: isOpen }">
          {{ selected }}
        </div>
        <img class="_icon" src="../assets/chevron-down.svg" alt="" />
      </div>
      <div class="_options" :class="{ _hide: !isOpen }">
        <div v-for="(option, i) of options" :key="i" @click="selectOption(option)">
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { PropType, ref } from "vue"
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
    // background: #000
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
    // background: red
    margin-left: 1rem
    text-align: left
    border-radius: 6px
    padding: 8px 18px
    cursor: pointer
    user-select: none
    line-height: 26px
  ._icon
    width: 24px
    border-radius: 6px

  ._options
    position: absolute
    top: 100%
    right: 0
    z-index: 1
    font-size: 16px
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
      // margin-bottom: 0.5em

  ._custom-select ._options div:hover
    background-color: var( --sidebar-item-hover)

  ._hide
    display: none
</style>
