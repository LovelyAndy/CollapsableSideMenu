<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="_custom-select"
    @blur="dropdownIsOpen = false"
    @mouseenter="() => startHover()"
    @mouseleave="() => endHover()"
  >
    <div class="_custom-select-inner" @click="openDropdown">
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
      <ul v-show="hovering || !collapsed" ref="bodyEl" class="_options" :style="bodyStyle">
        <li
          v-for="(option, i) of options"
          :key="i"
          :class="option === selected ? '_selected' : ''"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { PropType, ref, watchEffect, onMounted, onBeforeUnmount } from "vue"
  import { collapsed } from "./state"
  const props = defineProps({
    options: { type: Array as PropType<string[]>, required: true },
    default: { type: String, required: true }
  })
  const emit = defineEmits(["input"])
  const selected = ref(props.default ? props.default : props.options.length > 0 ? props.options[0] : null)
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
  function selectOption(_option: any) {
    selected.value = _option
    dropdownIsOpen.value = false
    emit("input", _option)
  }
  function openDropdown() {
    if (collapsed.value) return
    dropdownIsOpen.value = !dropdownIsOpen.value
  }
  const hovering = ref(false)
  function startHover() {
    if (!collapsed.value) return
    hovering.value = true
    bodyStyle.value = {
      maxHeight: "fit-content",
      position: "absolute",
      top: "-20%",
      left: "120%",
      background: "#4272ce",
      padding: "1rem",
      borderRadius: "6px"
    }
  }
  function endHover() {
    if (!collapsed.value) return
    hovering.value = false
    bodyStyle.value = {}
  }
</script>

<style lang="sass" scoped>
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
  ._selected
    background-color: var(--sidebar-item-hover)
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
