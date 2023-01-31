<template>
  <div>
    <div class="flex flex-col justify-center items-center section1 pt-8rem pb-3rem max-w-1440px mx-auto
                xs:min-h-600px lg:min-h-800px relative overflow-hidden">
      <img class="absolute h-110/100 -top-5/100 xs:h-130/100 xs:-top-10/100 object-cover -right-5/100 xl:right-0 z-0"
           src="~@/assets/wormhole-bg1.png" alt="">
      <div class="max-w-1080px px-15px sm:px-2rem mx-auto z-1">
        <div class="whitespace-pre-line">
          <div class="text-34px leading-34px xs:text-34px sm:text-48px sm:leading-48px
                  md:text-60px md:leading-60px lg:text-78px lg:leading-78px
                  font-MonsterratMedium">{{$t('wormhole.section1P1')}}</div>
          <div class="max-w-660px mt-32px font-MonsterratLight opacity-50">{{$t('wormhole.section1P2')}}</div>
        </div>
        <div class="mt-54px flex gap-24px">
          <button class="h-40px rounded-full px-20px bg-white text-black min-w-136px">{{$t('home.getStart')}}</button>
          <button class="border-2 border-white rounded-full px-20px min-w-136px">{{$t('home.join')}}</button>
        </div>
      </div>
    </div>
    <div class="max-w-1080px px-15px sm:px-2rem mx-auto pt-4rem">
      <div class="section2">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-30px
                    mt-60px max-w-524px sm:max-w-full mx-auto section2-content">
          <div class="col-span-1 lg:col-span-2">
            <el-carousel :height="carouselHeight" indicator-position="none"
                         :interval="3500" arrow="never" :autoplay="true"
                         :initial-index="carouselIndex"
                         ref="highlightCarouselRef"
                         @change="carouselChange">
              <el-carousel-item>
                <img class="mx-auto " src="~@/assets/highlight-img1.png" alt="">
              </el-carousel-item>
              <el-carousel-item>
                <img class="mx-auto " src="~@/assets/highlight-img2.png" alt="">
              </el-carousel-item>
              <el-carousel-item>
                <img class="mx-auto " src="~@/assets/highlight-img3.png" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="col-span-1 mr-20px">
            <div class="text-30px md:text-40px lg:text-50px xl:text-60px mb-30px mg:mb-60px
                        font-MonsterratMedium text-right">
              {{$t('wormhole.highlight')}}
            </div>
            <div class="text-right">
              <div class="flex flex-row-reverse">
                <div class="border-t-1 border-primaryColor font-MonsterratBlack text-20px py-20px min-w-60px cursor-pointer"
                     :class="carouselIndex===0?'text-primaryColor':'text-white'"
                     @click="setCarouselIndex(0)">01</div>
                <div class="border-t-1 border-white/50 mr-10px py-20px text-12px xs:text-16px leading-20px"
                     :class="carouselIndex===0?'text-primaryColor':'text-white'">
                  {{$t('wormhole.section2P1')}}
                </div>
              </div>
              <div class="flex flex-row-reverse">
                <div class="border-t-1 border-primaryColor font-MonsterratBlack text-20px py-20px min-w-60px"
                     :class="carouselIndex===1?'text-primaryColor':'text-white'"
                     @click="setCarouselIndex(1)">02</div>
                <div class="border-t-1 border-white/50 mr-10px py-20px text-12px xs:text-16px leading-20px"
                     :class="carouselIndex===1?'text-primaryColor':'text-white'">
                  {{$t('wormhole.section2P2')}}
                </div>
              </div>
              <div class="flex flex-row-reverse">
                <div class="border-t-1 border-primaryColor font-MonsterratBlack text-20px py-20px min-w-60px"
                     :class="carouselIndex===2?'text-primaryColor':'text-white'"
                     @click="setCarouselIndex(2)">03</div>
                <div class="border-t-1 border-white/50 mr-10px py-20px text-12px xs:text-16px leading-20px"
                     :class="carouselIndex===2?'text-primaryColor':'text-white'">
                  {{$t('wormhole.section2P3')}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="md:mt-6rem">
      <div class="max-w-1080px px-15px sm:px-2rem mx-auto relative">
        <div class="text-34px leading-34px xs:text-34px sm:text-48px sm:leading-48px
                  md:text-60px md:leading-60px font-MonsterratMedium">
          {{$t('wormhole.application')}}
        </div>
        <div class="text-34px leading-34px xs:text-34px sm:text-48px sm:leading-48px
                  md:text-60px md:leading-60px font-MonsterratMedium text-primaryColor">
          {{$t('wormhole.scenario')}}
        </div>
        <div class="flex items-center mt-32px">
          <div class="flex-1 font-MonsterratLight text-12pgix leading-16px">{{$t('wormhole.section3P1')}}</div>
          <div class="flex-1">

          </div>
        </div>
      </div>
      <div class="px-15px sm:px-2rem mt-4rem" :style="{marginLeft: marginLeft}">
        <div class="no-scroll-bar overflow-auto">
          <div class="flex gap-52px">
            <img class="h-380px" src="~@/assets/application-img1.png" alt="">
            <img class="h-380px" src="~@/assets/application-img1.png" alt="">
            <img class="h-380px" src="~@/assets/application-img1.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const carouselIndex = ref(0)
const carouselChange = (index) => {
  carouselIndex.value = index
}
const highlightCarouselRef = ref()
const setCarouselIndex = (index) => {
  highlightCarouselRef.value.setActiveItem(index)
}
const carouselHeight = ref('360px')
const marginLeft = ref('0px')
onMounted(() => {
  const screenWidth = document.body.offsetWidth
  if(screenWidth>1080) marginLeft.value = (screenWidth-1080)/2 + 'px'
  if(screenWidth<524) carouselHeight.value = screenWidth - 140 + 'px'
  else if(screenWidth>1080) carouselHeight.value = '450px'
  else carouselHeight.value = '360px'
  window.addEventListener('resize', () => {
    const screenWidth = document.body.offsetWidth
    if(screenWidth>1080) marginLeft.value = (screenWidth-1080)/2 + 'px'
    if(screenWidth<524) carouselHeight.value = screenWidth - 140 + 'px'
    else if(screenWidth>1080) carouselHeight.value = '450px'
    else carouselHeight.value = '360px'
  });
})
onUnmounted(() => {
  window.removeEventListener('resize',() => {})
})
</script>

<style scoped>
</style>
