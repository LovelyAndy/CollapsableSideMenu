<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :tooltip="text" :flow="flow">
    <slot />
  </div>
</template>
<script lang="ts" setup>
  import { PropType } from "vue"
  const props = defineProps({
    text: { type: String, required: true },
    flow: {
      type: String as PropType<"up" | "down" | "left" | "right">,
      default: "up"
    },
    backgroundColor: { type: String, default: "#333" },
    textColor: { type: String, default: "#fff" }
  })
</script>

<style lang="sass" scoped>
  [tooltip]
    position: relative
    &::before,
    &::after
      text-transform: none
      font-size: 0.9em
      line-height: 1
      user-select: none
      pointer-events: none
      position: absolute
      display: none
      opacity: 0

    &::before
      content: ""
      border: 6px solid transparent
      z-index: 1001

    &::after
      content: attr(tooltip)
      text-align: center
      width: max-content
      max-width: 20em
      overflow-wrap: break-word
      // white-space: nowrap
      // overflow: hidden
      // text-overflow: ellipsis
      padding: 1ch 1.5ch
      border-radius: 0.3ch
      // box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35)
      background: v-bind(backgroundColor)
      color: v-bind(textColor)
      z-index: 1000

    &:hover
      &::before, &::after
        display: block

  [tooltip=""]
    &::before, &::after
      display: none !important

  [tooltip]
    &:not([flow])::before, &[flow^="up"]::before
      bottom: 100%
      border-bottom-width: 0
      border-top-color: v-bind(backgroundColor)

    &:not([flow])::after, &[flow^="up"]::after
      bottom: calc(100% + 5px)

    &:not([flow])
      &::before, &::after
        left: 50%
        transform: translate(-50%, -0.5em)

    &[flow^="up"]
      &::before, &::after
        left: 50%
        transform: translate(-50%, -0.5em)

    &[flow^="down"]
      &::before
        top: 100%
        border-top-width: 0
        border-bottom-color: v-bind(backgroundColor)

      &::after
        top: calc(100% + 5px)

      &::before, &::after
        left: 50%
        transform: translate(-50%, 0.5em)

    &[flow^="left"]
      &::before
        top: 50%
        border-right-width: 0
        border-left-color: v-bind(backgroundColor)
        left: calc(0em - 5px)
        transform: translate(-0.5em, -50%)

      &::after
        top: 50%
        right: calc(100% + 5px)
        transform: translate(-0.5em, -50%)

    &[flow^="right"]
      &::before
        top: 50%
        border-left-width: 0
        border-right-color: v-bind(backgroundColor)
        right: calc(0em - 5px)
        transform: translate(0.5em, -50%)

      &::after
        top: 50%
        left: calc(100% + 5px)
        transform: translate(0.5em, -50%)

    &:not([flow]):hover
      &::before, &::after
        animation: tooltips-vert 300ms ease-out forwards

    &[flow^="up"]:hover
      &::before, &::after
        animation: tooltips-vert 300ms ease-out forwards

    &[flow^="down"]:hover
      &::before, &::after
        animation: tooltips-vert 300ms ease-out forwards

    &[flow^="left"]:hover
      &::before, &::after
        animation: tooltips-horz 300ms ease-out forwards

    &[flow^="right"]:hover
      &::before, &::after
        animation: tooltips-horz 300ms ease-out forwards

  @keyframes tooltips-vert
    to
      opacity: 0.95
      transform: translate(-50%, 0)

  @keyframes tooltips-horz
    to
      opacity: 0.95
      transform: translate(0, -50%)
</style>
