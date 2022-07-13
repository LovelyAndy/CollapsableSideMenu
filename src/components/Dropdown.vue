<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <a style="all: unset; color: #fff" href="#">
      {{ title }}
    </a>
    <svg viewBox="0 0 1030 638" width="10">
      <path
        d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
        fill="#FFF"
      ></path>
    </svg>
    <!-- {{ isOpen }} -->
    <!-- <div v-if="isOpen">
      <div v-for="(item, i) in items" :key="i" class="menu-item">
        <a :href="item.link">{{ item.title }}</a>
      </div>
    </div> -->
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <a style="all: unset" :href="item.link">{{ item.title }}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  import { PropType, ref } from "vue"
  const props = defineProps({ title: { type: String }, items: { type: Array as PropType<any> } })

  const isOpen = ref(false)
</script>

<style>
  nav .menu-item svg {
    width: 10px;
    margin-left: 10px;
  }
  nav .menu-item .sub-menu {
    position: absolute;
    /* background-color: #222; */
    top: calc(50%);
    /* left: 50%; */
    transform: translateY(-100%);
    width: max-content;
  }
  /* nav .menu-item .sub-menu {
    position: absolute;
    background-color: #222;
    top: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    border-radius: 0px 0px 16px 16px;
  } */
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease-in-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
