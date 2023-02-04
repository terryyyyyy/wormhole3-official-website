<template>
  <div>
    <div class="flex flex-col justify-center items-center section1 pt-8rem pb-3rem max-w-1440px mx-auto
                xs:min-h-600px lg:min-h-800px relative overflow-hidden">
      <div class="max-w-1080px px-15px sm:px-2rem mx-auto z-1">
        <div class="whitespace-pre-line text-center">
          <div class="text-34px leading-34px xs:text-34px sm:text-48px sm:leading-48px
                  md:text-60px md:leading-60px lg:text-78px lg:leading-78px
                  font-MonsterratMedium">{{$t('about.section1P1')}}</div>
          <div class="max-w-660px mx-auto mt-32px font-MonsterratLight opacity-50 text-24px">
            {{$t('about.section1P2')}}
          </div>
          <div class="max-w-660px mx-auto mt-14px font-MonsterratLight opacity-50 text-12px leading-18px md:text-16px md:leading-22px">
            {{$t('about.section1P3')}}
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-1440px mx-auto relative section2 py-4rem sm:mt-4rem">
      <div class="max-w-1080px px-15px sm:px-2rem mx-auto">
        <div class="w-full md:w-2/3 xl:w-3/4 text-left">
          <div class="text-30px md:text-40px lg:text-50px xl:text-60px mb-30px mg:mb-60px
                        font-MonsterratMedium">
            {{$t('about.our')}}
            <span class="text-primaryColor">{{$t('about.history')}}</span>
          </div>
          <div class="mb-36px">
            <div class="text-20px leading-24px font-MonsterratBlack">{{$t('about.t1')}}</div>
            <div class="text-12px leading-16px mt-12px opacity-50">{{$t('about.p1')}}</div>
          </div>
          <div class="mb-36px">
            <div class="text-20px leading-24px font-MonsterratBlack">{{$t('about.t2')}}</div>
            <div class="text-12px leading-16px mt-12px opacity-50">{{$t('about.p2')}}</div>
          </div>
          <div class="mb-36px">
            <div class="text-20px leading-24px font-MonsterratBlack">{{$t('about.t3')}}</div>
            <div class="text-12px leading-16px mt-12px opacity-50">{{$t('about.p3')}}</div>
          </div>
          <div class="mb-36px">
            <div class="text-20px leading-24px font-MonsterratBlack">{{$t('about.t4')}}</div>
            <div class="text-12px leading-16px mt-12px opacity-50">{{$t('about.p4')}}</div>
          </div>
          <div class="mb-36px">
            <div class="text-20px leading-24px font-MonsterratBlack">{{$t('about.t5')}}</div>
            <div class="text-12px leading-16px mt-12px opacity-50">{{$t('about.p5')}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-1080px px-15px sm:px-2rem mx-auto py-4rem sm:mt-4rem">
      <div class="text-30px md:text-40px lg:text-50px xl:text-60px mb-30px mg:mb-60px
                        font-MonsterratMedium text-center">
        {{$t('about.section3P1')}}
      </div>
      <div class="max-w-780px mx-auto mt-14px font-MonsterratLight opacity-50 text-12px leading-18px
                  text-center md:text-16px md:leading-22px">
        {{$t('about.section3P2')}}
      </div>
      <div class="py-2rem sm:py-5rem sm:pl-30px sm:pr-15px grid-box-bg mt-2rem sm:mt-4rem">
        <div class="grid grid-cols-4 items-center gap-y-10px">
          <div class="col-span-4 xs:col-span-1 text-20px leading-24px font-MonsterratBlack text-center xs:text-left">
            {{$t('about.dao')}}
          </div>
          <div class="col-span-4 xs:col-span-3">
            <div class="grid grid-cols-5 sm:grid-cols-10 gap-8px rounded-20px overflow-hidden">
              <div class="col-span-3 flex items-center justify-around  h-80px bg-color28">
                <img class="h-40px" src="~@/assets/about-logo1.png" alt="">
                <img class="h-40px" src="~@/assets/about-logo2.png" alt="">
                <img class="h-40px" src="~@/assets/about-logo3.png" alt="">
              </div>
              <div class="col-span-2 flex items-center justify-around  h-80px bg-color28">
                <img class="h-40px" src="~@/assets/about-logo4.png" alt="">
                <img class="h-40px" src="~@/assets/about-logo5.png" alt="">
              </div>
              <div class="col-span-2 flex items-center justify-around  h-80px bg-color28">
                <img class="h-40px" src="~@/assets/about-logo6.png" alt="">
                <img class="h-40px" src="~@/assets/about-logo7.png" alt="">
              </div>
              <div class="col-span-3 flex items-center justify-around  h-80px bg-color28">
                <img class="h-40px" src="~@/assets/about-logo8.png" alt="">
                <img class="h-40px" src="~@/assets/about-logo9.png" alt="">
                <img class="h-40px" src="~@/assets/about-logo10.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 items-center gap-y-10px my-10px">
          <div class="col-span-4 xs:col-span-1 text-20px leading-24px font-MonsterratBlack text-center xs:text-left">
            {{$t('about.smartContract')}}
          </div>
          <div class="col-span-4 xs:col-span-3">
            <div class="flex flex-col sm:flex-row rounded-20px overflow-hidden gap-8px">
              <div class="flex sm:flex-col justify-center items-center h-80px gradient-bg px-15px">
                <div class="flex items-center">
                  <img class="h-16px min-w-16px" src="~@/assets/about-logo11.png" alt="">
                  <span class="font-MonsterratMedium">Nutbox</span>
                </div>
                <div class="h-16px w-2px bg-white/30 mx-20px sm:hidden"></div>
                <div class="mt-4px text-12px leading-16px">{{$t('about.section3P3')}}</div>
              </div>
              <div class="flex-1 flex items-center justify-around gradient-bg px-15px">
                <div class="flex flex-col justify-center items-center min-h-80px">
                  <img class="h-16px min-w-16px" src="~@/assets/about-logo12.png" alt="">
                  <div class="mt-4px text-12px leading-16px whitespace-nowrap">{{$t('about.section3P4')}}</div>
                </div>
                <div class="text-12px leading-16px border-l-2 border-white/30 pl-20px ml-20px">
                  {{$t('about.section3P5')}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 items-center gap-y-10px">
          <div class="col-span-4 xs:col-span-1 text-20px leading-24px font-MonsterratBlack text-center xs:text-left">
            {{$t('about.layer1Protocol')}}
          </div>
          <div class="col-span-4 xs:col-span-3">
            <div class="grid grid-cols-5 sm:grid-cols-12 gap-8px rounded-20px overflow-hidden">
              <div class="col-span-5 flex items-center justify-around  h-80px bg-color28">
                <img class="h-40px" src="~@/assets/about-logo13.png" alt="">
                <img class="h-40px" src="~@/assets/about-logo14.png" alt="">
                <img class="h-40px" src="~@/assets/about-logo15.png" alt="">
                <img class="h-40px" src="~@/assets/about-logo16.png" alt="">
                <img class="h-40px" src="~@/assets/about-logo17.png" alt="">
              </div>
              <div class="col-span-2 sm:col-span-3 flex flex-col justify-center items-center h-80px gradient-bg px-15px">
                <div class="flex items-center">
                  <img class="h-16px min-w-16px" src="~@/assets/about-logo19.png" alt="">
                  <span class="font-MonsterratMedium">{{$t('about.section3P6')}}</span>
                </div>
                <div class="mt-4px text-12px leading-16px lg:whitespace-nowrap text-center">
                  {{$t('about.section3P7')}}
                </div>
              </div>
              <div class="col-span-3 sm:col-span-4 flex items-center justify-around  h-80px bg-color28">
                <img class="h-40px" src="~@/assets/about-logo9.png" alt="">
                <img class="h-40px" src="~@/assets/about-logo8.png" alt="">
                <img class="h-40px" src="~@/assets/about-logo18.png" alt="">
                <img class="h-40px" src="~@/assets/about-logo10.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-1080px px-15px sm:px-2rem mx-auto pb-4rem lg:pt-2rem">
      <div class="text-30px md:text-40px lg:text-50px xl:text-60px mb-30px md:mb-60px
                        font-MonsterratMedium text-center">
        {{$t('about.our')}}
        <span class="text-primaryColor">{{$t('about.grants')}}</span>
      </div>
      <div class="overflow-hidden">
        <div class="flex gap-20px no-scroll-bar c-carousel">
          <div class="text-center c-carousel-item">
            <img class="w-280px min-w-280px lg:w-350px lg:min-w-350px"
                 src="~@/assets/grant-img1.png" alt="">
            <div class="mt-6px text-16px leading-20px lg:text-20px lg:leading-24px">{{$t('about.grant1')}}</div>
          </div>
          <div class="text-center c-carousel-item">
            <img class="w-280px min-w-280px lg:w-350px lg:min-w-350px"
                 src="~@/assets/grant-img2.png" alt="">
            <div class="mt-6px text-16px leading-20px lg:text-20px lg:leading-24px">{{$t('about.grant2')}}</div>
          </div>
          <div class="text-center c-carousel-item">
            <img class="w-280px min-w-280px lg:w-350px lg:min-w-350px"
                 src="~@/assets/grant-img3.png" alt="">
            <div class="mt-6px text-16px leading-20px lg:text-20px lg:leading-24px">{{$t('about.grant3')}}</div>
          </div>
          <div class="text-center c-carousel-item">
            <img class="w-280px min-w-280px lg:w-350px lg:min-w-350px"
                 src="~@/assets/grant-img4.png" alt="">
            <div class="mt-6px text-16px leading-20px lg:text-20px lg:leading-24px">{{$t('about.grant4')}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primaryColor pt-47px pb-90px">
      <div class="max-w-1080px px-15px sm:px-2rem mx-auto grid grid-cols-1 xs:grid-cols-2">
        <div class="col-span-1 xs:col-start-2 flex flex-col items-center xs:items-start">
          <div class="max-w-660px mt-14px font-MonsterratLight opacity-50 text-12px leading-18px md:text-16px md:leading-22px">
            {{$t('about.joinP1')}}
          </div>
          <div class="text-30px md:text-40px lg:text-50px xl:text-60px mb-30px mg:mb-60px
                        font-MonsterratMedium mt-24px mb-17px">
            {{$t('about.joinUs')}}
          </div>
          <button class="bg-white rounded-full px-24px h-40px text-primaryColor" @click="joinUs">
            {{$t('about.joinUs')}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const joinUs = () => {
  window.open('https://www.notion.so/coincidencelabs/How-to-join-as-a-contributor-7ceec379f1a8417587ee68372dfd1750', '__blank')
}
</script>

<style scoped>
.section1 {
  background-image: url("~@/assets/about-bg1.png"),url("~@/assets/about-bg2.png"), url("~@/assets/about-bg3.png");
  background-repeat: no-repeat;
  background-position: center, left top, right bottom;
  background-size: auto 170%,auto 30%, 50%;
  background-blend-mode: screen;
}
.section2 {
  background-image: url("~@/assets/about-bg4.png");
  background-repeat: no-repeat;
  background-position: right 50%;
  background-size: auto 80%;
  background-blend-mode: screen;
}
.gradient-bg {
  background-image: linear-gradient(114deg, #D252CB 0%, #4826DF 100%);
  background-repeat: no-repeat;
  background-size: 100%;
}
.grid-box-bg {
  background-image: url("~@/assets/about-bg5.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
.c-carousel {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
.c-carousel-item {
  scroll-snap-align: start;
}
@media (max-width: 1440px) {
  .section2 {
    background-size: auto 80%;
    background-position: 120% bottom;
  }
}
@media (max-width: 960px) {
  .section2 {
    background-size: auto 50%;
    background-position: 100% center;
  }
  .grid-box-bg {
    background-size: 100% auto;
    background-repeat: repeat-y;
    background-position: top center;
  }
}
@media (max-width: 768px) {
  .section1 {
    background-image: url("~@/assets/about-bg1.png"),url("~@/assets/about-bg2.png"), url("~@/assets/about-bg3.png");
    background-repeat: no-repeat;
    background-position: center, left top, right bottom;
    background-size: auto 170%,auto 30%, 70%;
    background-blend-mode: screen;
  }
  .section2 {
    background-size: auto 50%;
    background-position: 140% center;
  }
}
@media (max-width: 550px) {
  .section2 {
    background-size: auto 50%;
    background-position: 180% center;
  }
}
</style>
