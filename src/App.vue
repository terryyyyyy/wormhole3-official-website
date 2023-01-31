<template>
  <div class="absolute left-0 top-0 bottom-0 right-0 bg-black
              text-white font-MonsterratRegular text-14px overflow-y-auto overflow-x-hidden"
       ref="pageViewRef"
       @scroll="pageScroll">
    <div >
      <transition name="el-zoom-in-top">
        <Header v-show="show"
                class="fixed z-9 top-0 left-1/2 transform -translate-x-1/2 max-w-1080px w-full px-15px mx-auto"/>
      </transition>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import {ref} from "vue";
const pageViewRef = ref()
const show=ref(true)
const pageScroll = () => {
  show.value = pageViewRef.value.scrollTop < 120
}
</script>

<style scoped>
</style>
