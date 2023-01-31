<template>
  <div class="h-20 flex items-center gap-56px">
    <router-link class="" to="/">
      <img class="h-10" src="~@/assets/logo-header.svg" alt="">
    </router-link>
    <div class="hidden md:flex items-center gap-56px">
      <router-link to="/wormhole"  v-slot="{ isActive }">
        <span :class="isActive?'':'opacity-50'">{{$t('wormhole3')}}</span>
      </router-link>
      <router-link to="/"  v-slot="{ isActive }">
        <span :class="isActive?'':'opacity-50'">{{$t('howToPlay')}}</span>
      </router-link>
      <router-link to="/"  v-slot="{ isActive }">
        <span :class="isActive?'':'opacity-50'">{{$t('aboutUs')}}</span>
      </router-link>
      <router-link to="/"  v-slot="{ isActive }">
        <span :class="isActive?'':'opacity-50'">{{$t('wiki')}}</span>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
