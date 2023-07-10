<template>
  <div>
    <div class="flex flex-col justify-center items-center section1 pt-6rem lg:pt-6rem pb-3rem max-w-1440px mx-auto">
      <img class="max-w-800px w-full xs:w-4/5 sm:w-7/10" src="~@/assets/home-img1.gif" alt="">
      <div class="-mt-6rem xs:-mt-6rem sm:-mt-10rem md:-mt-12rem lg:-mt-13rem whitespace-pre-line text-center px-6">
        <div class="text-34px leading-34px xs:text-34px sm:text-48px sm:leading-48px
                  md:text-60px md:leading-60px lg:text-78px lg:leading-78px
                  font-MonsterratMedium">{{$t('home.section1P1')}}</div>
        <div class="max-w-660px mx-auto mt-32px font-MonsterratLight opacity-50 leading-20px">
          {{$t('home.section1P2')}}
        </div>
        <div class="max-w-660px mx-auto mt-24px font-MonsterratLight opacity-50 leading-20px">
          {{$t('home.section1P3')}}
        </div>
      </div>
      <div class="mt-54px flex gap-24px">
        <button class="h-40px rounded-full px-20px bg-white text-black min-w-136px" @click="gotoWormhole">{{$t('home.getStart')}}</button>
        <button class="border-2 border-white rounded-full px-20px min-w-136px" @click="gotoDC">{{$t('home.join')}}</button>
      </div>
    </div>
<!--    <div class="flex flex-col justify-center items-center section1 pt-8rem pb-3rem max-w-1440px mx-auto-->
<!--                xs:min-h-600px lg:min-h-800px relative overflow-hidden">-->
<!--      <img class="absolute h-110/100 -top-5/100-->
<!--                  sm:h-130/100 xs:-top-10/100 object-contain xs:object-cover-->
<!--                  -right-5/100 xl:right-0 z-0"-->
<!--           src="~@/assets/wormhole-bg1.png" alt="">-->
<!--      <div class="max-w-1080px w-full px-15px sm:px-2rem mx-auto z-1">-->
<!--        <div class="whitespace-pre-line">-->
<!--          <div class="text-28px leading-34px sm:text-44px sm:leading-50px-->
<!--                  md:text-54px md:leading-60px lg:text-72px lg:leading-76px-->
<!--                  font-MonsterratMedium">{{$t('wormhole.section1P1')}}</div>-->
<!--          <div class="max-w-660px mt-32px font-MonsterratLight opacity-50">{{$t('wormhole.section1P2')}}</div>-->
<!--        </div>-->
<!--        <div class="mt-54px flex gap-24px">-->
<!--          <button class="h-40px rounded-full px-20px bg-white text-black min-w-136px" @click="gotoWormhole">{{$t('home.getStart')}}</button>-->
<!--          <button class="border-2 border-white rounded-full px-20px min-w-136px" @click="gotoDC">{{$t('home.join')}}</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="max-w-1080px px-15px sm:px-2rem mx-auto sm:pt-4rem">
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
              <div class="flex flex-row-reverse cursor-pointer" @click="setCarouselIndex(0)">
                <div class="border-t-1 border-primaryColor font-MonsterratBlack text-20px py-20px min-w-60px"
                     :class="carouselIndex===0?'text-primaryColor':'text-white'">01</div>
                <div class="border-t-1 border-white/50 mr-10px py-20px text-12px leading-18px xs:text-16px xs:leading-20px"
                     :class="carouselIndex===0?'text-primaryColor':'text-white'">
                  {{$t('wormhole.section2P1')}}
                </div>
              </div>
              <div class="flex flex-row-reverse cursor-pointer" @click="setCarouselIndex(1)">
                <div class="border-t-1 border-primaryColor font-MonsterratBlack text-20px py-20px min-w-60px"
                     :class="carouselIndex===1?'text-primaryColor':'text-white'">02</div>
                <div class="border-t-1 border-white/50 mr-10px py-20px text-12px leading-18px xs:text-16px xs:leading-20px"
                     :class="carouselIndex===1?'text-primaryColor':'text-white'">
                  {{$t('wormhole.section2P2')}}
                </div>
              </div>
              <div class="flex flex-row-reverse cursor-pointer" @click="setCarouselIndex(2)">
                <div class="border-t-1 border-primaryColor font-MonsterratBlack text-20px py-20px min-w-60px"
                     :class="carouselIndex===2?'text-primaryColor':'text-white'">03</div>
                <div class="border-t-1 border-white/50 mr-10px py-20px text-12px leading-18px xs:text-16px xs:leading-20px"
                     :class="carouselIndex===2?'text-primaryColor':'text-white'">
                  {{$t('wormhole.section2P3')}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="mt-4rem sm:mt-6rem">
      <div class="max-w-1080px px-15px sm:px-2rem mx-auto relative">
        <div class="text-34px leading-34px xs:text-34px sm:text-48px sm:leading-48px
                  md:text-60px md:leading-60px font-MonsterratMedium">
          {{$t('wormhole.application')}}
        </div>
        <div class="text-34px leading-34px xs:text-34px sm:text-48px sm:leading-48px
                  md:text-60px md:leading-60px font-MonsterratMedium text-primaryColor">
          {{$t('wormhole.scenario')}}
        </div>
        <div class="flex flex-col md:flex-row items-start md:items-center my-32px gap-36px">
          <div class="flex-1 font-MonsterratLight text-14px leading-20px sm:min-h-120px flex items-center">
            <div v-if="appCarouselIndex===0" class="max-w-400px whitespace-pre-line">
              {{$t('wormhole.section3P1')}}
            </div>
            <div v-if="appCarouselIndex===1" class="max-w-400px whitespace-pre-line">
              {{$t('wormhole.section3P2')}}
            </div>
            <div v-if="appCarouselIndex===2" class="max-w-400px whitespace-pre-line">
              {{$t('wormhole.section3P3')}}
            </div>
          </div>
          <div class="flex-1 flex items-center justify-end gap-16px sm:gap-56px">
            <div class="border-b-1 text-center">
              <div class="xs:whitespace-nowrap text-12px leading-16px">{{$t('wormhole.applicationScenario')}}</div>
              <div class="font-MonsterratBlack text-20px leading-20px cursor-pointer my-4px"
                   :class="appCarouselIndex===0?'text-primaryColor':''"
                   @click="setAppCarouselIndex(0)">01</div>
            </div>
            <div class="border-b-1 text-center">
              <div class="xs:whitespace-nowrap text-12px leading-16px">{{$t('wormhole.applicationScenario')}}</div>
              <div class="font-MonsterratBlack text-20px leading-20px cursor-pointer my-4px"
                   :class="appCarouselIndex===1?'text-primaryColor':''"
                   @click="setAppCarouselIndex(1)">02</div>
            </div>
            <div class="border-b-1 text-center">
              <div class="xs:whitespace-nowrap text-12px leading-16px">{{$t('wormhole.applicationScenario')}}</div>
              <div class="font-MonsterratBlack text-20px leading-20px cursor-pointer my-4px"
                   :class="appCarouselIndex===2?'text-primaryColor':''"
                   @click="setAppCarouselIndex(2)">03</div>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:max-w-1280px xl:mx-auto pl-15px sm:pl-2rem" :style="{marginLeft: marginLeft}">
        <div class="overflow-hidden">
          <div class="flex gap-30px no-scroll-bar c-carousel pr-15px sm:pr-2rem" ref="appCarouselRef">
            <div class="c-carousel-item w-full min-w-full sm:w-680px sm:max-w-680px sm:min-w-680px">
              <img class="w-full object-contain object-top" src="~@/assets/application-img1.png" alt="">
            </div>
            <div class="c-carousel-item w-full min-w-full sm:w-680px sm:max-w-680px sm:min-w-680px">
              <img class="w-full object-contain object-top" src="~@/assets/application-img2.png" alt="">
            </div>
            <div class="c-carousel-item w-full min-w-full sm:w-680px sm:max-w-680px sm:min-w-680px">
              <img class="w-full object-contain object-top" src="~@/assets/application-img3.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-1080px px-15px sm:px-2rem mx-auto relative pb-6rem">
<!--        <el-carousel indicator-position="none"-->
<!--                     :interval="3500" arrow="never" :autoplay="true" type="card"-->
<!--                     :initial-index="carouselIndex"-->
<!--                     ref="highlightCarouselRef"-->
<!--                     @change="carouselChange">-->
<!--          <el-carousel-item>-->
<!--            <img class="h-full object-contain mx-auto " src="~@/assets/application-img1.png" alt="">-->
<!--          </el-carousel-item>-->
<!--          <el-carousel-item>-->
<!--            <img class="h-full object-contain mx-auto " src="~@/assets/application-img2.png" alt="">-->
<!--          </el-carousel-item>-->
<!--          <el-carousel-item>-->
<!--            <img class="h-full object-contain mx-auto " src="~@/assets/application-img3.png" alt="">-->
<!--          </el-carousel-item>-->
<!--        </el-carousel>-->
        <div class="flex items-center justify-center gap-x-20px py-20px">
          <button class="disabled:opacity-50" :disabled="appCarouselIndex===0"
                  @click="setAppCarouselIndex(appCarouselIndex-=1)">
            <img class="transform rotate-180 w-2.6rem h-2.6rem" src="~@/assets/icon-change-primary.svg" alt="">
          </button>
          <button class="disabled:opacity-50" :disabled="appCarouselIndex===2"
                  @click="setAppCarouselIndex(appCarouselIndex+=1)">
            <img class="w-2.6rem h-2.6rem" src="~@/assets/icon-change-primary.svg" alt="">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref, watch} from "vue";

const carouselIndex = ref(0)
const carouselChange = (index) => {
  carouselIndex.value = index
}
const highlightCarouselRef = ref()
const setCarouselIndex = (index) => {
  highlightCarouselRef.value.setActiveItem(index)
}
const appCarouselIndex = ref(0)
const appCarouselRef = ref()
const appCarouselItemWidth = ref(300)
const setAppCarouselIndex = (index) => {
  appCarouselIndex.value = index
  appCarouselRef.value.scrollLeft = index * appCarouselItemWidth.value
}

const timer = ref(null)
const setAutoPlay = () => {
  timer.value = setInterval(() => {
    if(appCarouselIndex.value ===2) {
      appCarouselRef.value.scrollLeft = 0
      appCarouselIndex.value = 0
      return
    }
    appCarouselIndex.value += 1
    appCarouselRef.value.scrollLeft = appCarouselIndex.value * appCarouselItemWidth.value

  }, 4000)
}

const carouselHeight = ref('360px')
const marginLeft = ref('0px')
const gotoWormhole = () => {
  window.open('https://alpha.wormhole3.io', '__blank')
}
const gotoDC = () => {
  window.open('https://discord.gg/6QbcvSEDWF', '__blank')
}
onMounted(() => {
  const screenWidth = document.body.offsetWidth
  if(screenWidth>1080) marginLeft.value = (screenWidth-1080)/2 + 'px'
  console.log(marginLeft.value)
  if(screenWidth<524) carouselHeight.value = screenWidth - 140 + 'px'
  else if(screenWidth>1080) carouselHeight.value = '450px'
  else carouselHeight.value = '360px'
  window.addEventListener('resize', () => {
    const screenWidth = document.body.offsetWidth
    if(screenWidth>1080) marginLeft.value = (screenWidth-1080)/2 + 'px'
    if(screenWidth<524) carouselHeight.value = screenWidth - 140 + 'px'
    else if(screenWidth>1080) carouselHeight.value = '450px'
    else carouselHeight.value = '360px'
    appCarouselItemWidth.value = document.getElementsByClassName('c-carousel-item')[0].clientWidth
  });
  appCarouselItemWidth.value = document.getElementsByClassName('c-carousel-item')[0].clientWidth
  // setAutoPlay()
})
onUnmounted(() => {
  window.removeEventListener('resize',() => {})
  clearInterval(timer.value)
})
</script>

<style scoped>
.c-carousel {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
.c-carousel-item {
  scroll-snap-align: start;
}

.section1 {
  background-image: url("~@/assets/home-bg1.png"), url("~@/assets/home-bg2.png");
  background-repeat: no-repeat;
  background-position: left top, right bottom;
  background-size: 70%, 60%;
}
@media (max-width: 500px) {
  .section1 {
    background-size: 100%, 80%;
    background-position: left top, right 60%;
  }
}
@media (min-width: 1080px) {
  .section1 {
    /*background-size: 70%, 60%;*/
    background-position: 20% top, right 120%;
  }
}
</style>
