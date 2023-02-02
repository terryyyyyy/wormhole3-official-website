<template>
  <div class="h-20 flex items-center gap-56px justify-between md:justify-start">
    <router-link class="" to="/">
      <img class="h-10" src="~@/assets/logo-header.svg" alt="">
    </router-link>
    <div class="hidden md:flex items-center gap-56px">
      <router-link to="/wormhole"  v-slot="{ isActive }">
        <span :class="isActive?'':'text-white/50 hover:text-white'">{{$t('wormhole3')}}</span>
      </router-link>
      <router-link to="/about"  v-slot="{ isActive }">
        <span :class="isActive?'':'text-white/50 hover:text-white'">{{$t('aboutUs')}}</span>
      </router-link>
      <a href="https://nutbox.gitbook.io/wh3-cn/" target="_blank"
         class="text-white/50 hover:text-white">
        {{$t('wiki')}}
      </a>
      <el-popover placement="bottom" ref="langPopoverRef"
                  :width="120"
                  transition="el-zoom-in-top"
                  trigger="click"
                  popper-class="c-popper">
        <template #reference>
          <button class="text-white/50 hover:text-white">{{$t('lang')}}</button>
        </template>
        <div class="px-12px py-8px border-1 border-white/30 bg-black rounded-20px flex flex-col items-start">
          <button class="h-46px min-h-46px hover:text-white w-full" @click="setLang('zh')">简体中文</button>
          <button class="h-46px min-h-46px hover:text-white w-full" @click="setLang('en')">English</button>
        </div>
      </el-popover>
    </div>
    <div class="relative md:hidden">
      <el-popover placement="bottom-end" ref="menuPopoverRef"
                  :width="140"
                  transition="el-zoom-in-top"
                  trigger="click"
                  popper-class="c-popper">
        <template #reference>
          <button>
            <img class="w-30px h-30px transform rotate-y-180"
                 src="~@/assets/icon-menu-toggle.svg" alt="">
          </button>
        </template>
        <div class="px-12px py-8px border-1 border-white/30 bg-black rounded-20px">
          <router-link to="/wormhole" @click.stop="$refs.menuPopoverRef.hide()"  v-slot="{ isActive }"
                       class="h-46px min-h-46px flex-1 flex justify-between items-center cursor-pointer">
            <span :class="isActive?'text-white':'text-white/50 hover:text-white'">{{$t('wormhole3')}}</span>
          </router-link>
          <router-link to="/about" @click.stop="$refs.menuPopoverRef.hide()"  v-slot="{ isActive }"
                       class="h-46px min-h-46px flex-1 flex justify-between items-center cursor-pointer">
            <span :class="isActive?'text-white':'text-white/50 hover:text-white'">{{$t('aboutUs')}}</span>
          </router-link>
          <a href="https://nutbox.gitbook.io/wh3-cn/" target="_blank"  @click.stop="$refs.menuPopoverRef.hide()"
             class="h-46px min-h-46px flex-1 flex justify-between items-center cursor-pointer
                    text-white/50 hover:text-white">
            {{$t('wiki')}}
          </a>
          <el-popover placement="left" ref="langPopoverRef"
                      :width="120"
                      transition="el-zoom-in-top"
                      trigger="click"
                      popper-class="c-popper">
            <template #reference>
              <button class="text-white/50 hover:text-white h-46px min-h-46px flex-1 flex justify-between items-center">
                {{$t('lang')}}
              </button>
            </template>
            <div class="px-12px py-8px border-1 border-white/30 bg-black rounded-20px flex flex-col items-start">
              <button class="h-46px min-h-46px hover:text-white w-full" @click="setLang('zh')">简体中文</button>
              <button class="h-46px min-h-46px hover:text-white w-full" @click="setLang('en')">English</button>
            </div>
          </el-popover>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import i18n from "@/lang";

const menuPopoverRef = ref()
const langPopoverRef = ref()
const setLang = (lang) => {
  menuPopoverRef.value.hide()
  langPopoverRef.value.hide()
  i18n.global.locale = lang
  localStorage.setItem('language', lang)
}
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
