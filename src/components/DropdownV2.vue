<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <select v-model="valueInner" style="box-shadow: none">
    <option
      v-for="(option, i) in options"
      :key="i"
      :value="typeof option === 'string' ? option : option.value"
      class="text-secondary-text"
    >
      {{ typeof option === "string" ? option : option.label }}
    </option>
  </select>
</template>

<script lang="ts" setup>
  import { PropType, ref } from "vue"
  // const props = defineProps({
  //   title: { type: String, required: true },
  //   items: { type: Array as PropType<any>, required: true }
  // })
  const props = defineProps({
    options: { type: Array as PropType<string[] | { label: string; value: string | number }[]>, required: true },
    modelValue: { type: String, default: "" }
  })
  const valueInner = ref<any>(props.modelValue)
  const isOpen = ref(false)
</script>

<style lang="sass">
  .custom-select
    position: relative
    width: 100%
    text-align: left
    outline: none
    height: 47px
    line-height: 47px

  .custom-select .selected
    background-color: #0a0a0a
    border-radius: 6px
    border: 1px solid #666666
    color: #fff
    padding-left: 1em
    cursor: pointer
    user-select: none

  .custom-select .selected.open
    border: 1px solid #ad8225
    border-radius: 6px 6px 0px 0px

  .custom-select .selected:after
    position: absolute
    content: ""
    top: 22px
    right: 1em
    width: 0
    height: 0
    border: 5px solid transparent
    border-color: #fff transparent transparent transparent

  .custom-select .items
    color: #fff
    border-radius: 0px 0px 6px 6px
    overflow: hidden
    border-right: 1px solid #ad8225
    border-left: 1px solid #ad8225
    border-bottom: 1px solid #ad8225
    position: absolute
    background-color: #0a0a0a
    left: 0
    right: 0
    z-index: 1

  .custom-select .items div
    color: #fff
    padding-left: 1em
    cursor: pointer
    user-select: none

  .custom-select .items div:hover
    background-color: #ad8225

  .selectHide
    display: none
</style>
