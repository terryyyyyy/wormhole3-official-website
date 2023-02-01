<template>
  <div class="h-20 flex items-center gap-56px justify-between md:justify-start">
    <router-link class="" to="/">
      <img class="h-10" src="~@/assets/logo-header.svg" alt="">
    </router-link>
    <div class="hidden md:flex items-center gap-56px">
      <router-link to="/wormhole"  v-slot="{ isActive }">
        <span :class="isActive?'':'text-white/50 hover:text-white'">{{$t('wormhole3')}}</span>
      </router-link>
      <router-link to="/"  v-slot="{ isActive }">
        <span :class="isActive?'':'text-white/50 hover:text-white'">{{$t('howToPlay')}}</span>
      </router-link>
      <router-link to="/about"  v-slot="{ isActive }">
        <span :class="isActive?'':'text-white/50 hover:text-white'">{{$t('aboutUs')}}</span>
      </router-link>
      <router-link to="/"  v-slot="{ isActive }">
        <span :class="isActive?'':'text-white/50 hover:text-white'">{{$t('wiki')}}</span>
      </router-link>
    </div>
    <div class="relative md:hidden">
      <button @click.stop="showMenu=!showMenu">
        <img class="w-30px h-30px transform rotate-y-180"
             src="~@/assets/icon-menu-toggle.svg" alt="">
      </button>
      <div class="menu-box w-150px 2xl:w-10rem z-99" @click.stop
           :class="showMenu?'active':''">
        <div class="px-12px py-8px border-1 border-white/30 bg-black rounded-20px">
          <router-link to="/wormhole" @click.stop="showMenu=false"  v-slot="{ isActive }"
                       class="h-46px min-h-46px flex-1 flex justify-between items-center cursor-pointer">
            <span :class="isActive?'':'text-white/50 hover:text-white'">{{$t('wormhole3')}}</span>
          </router-link>
          <router-link to="/" @click.stop="showMenu=false"  v-slot="{ isActive }"
                       class="h-46px min-h-46px flex-1 flex justify-between items-center cursor-pointer">
            <span :class="isActive?'':'text-white/50 hover:text-white'">{{$t('howToPlay')}}</span>
          </router-link>
          <router-link to="/about" @click.stop="showMenu=false"  v-slot="{ isActive }"
                       class="h-46px min-h-46px flex-1 flex justify-between items-center cursor-pointer">
            <span :class="isActive?'':'text-white/50 hover:text-white'">{{$t('aboutUs')}}</span>
          </router-link>
          <router-link to="/" @click.stop="showMenu=false"  v-slot="{ isActive }"
                       class="h-46px min-h-46px flex-1 flex justify-between items-center cursor-pointer">
            <span :class="isActive?'':'text-white/50 hover:text-white'">{{$t('wiki')}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const showMenu = ref(false)
</script>

<style scoped>
.menu-box {
  position: absolute;
  right: 0;
  top: 3rem;
  transition: max-height 300ms;
  min-height: 0;
  max-height: 0;
  overflow: hidden;
  box-sizing: border-box;
}
.menu-box.active {
  max-height: 300px;
}
</style>
