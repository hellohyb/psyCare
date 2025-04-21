<template>
    <div id="influence" class="top-section overflow-hidden h-auto md:h-200 !px-4 !pt-20 !pb-10 md:!pl-20 md:!pr-20 !my-10 bg-amber-50 flex flex-col items-start justify-start  w-full md:max-w-[1100px]">
       <div class="top-desc border-b w-full !pb-5 !mb-5">
            <h1 class="text-2xl font-bold">{{ t('section5_title') }}</h1>
            <span class="text-sm font-bold">{{ t('section5_desc') }}</span>
       </div>
       <!-- Desktop View -->
       <div class="swiper-container hidden md:flex w-full flex-1 !mb-10">
            <div class="swiper-navigation w-2/5 flex flex-col justify-around gap-4 !mr-10">
                <button 
                    v-for="(item, index) in swiperList" 
                    :key="item.id"
                    class="text-left !p-4 rounded-lg transition-all"
                    :class="{'active': activeIndex === index}"
                    @click="swiper.slideTo(index)"
                >
                    {{ item.title }}
                </button>
            </div>

            <div class="swiper-wrapper w-3/5 translate-x-20 !rounded-tl-4xl">
                <Swiper
                    :modules="[SwiperAutoplay, SwiperEffectCreative]"
                    :slides-per-view="1"
                    :space-between="0"
                    :effect="'creative'"
                    :direction="'vertical'"
                    :autoplay="{
                        delay: 2000,
                        disableOnInteraction: false,
                    }"
                    :creative-effect="{
                        prev: {
                            shadow: false,
                            translate: [0, '-100%', 0],
                        },
                        next: {
                            translate: [0, '100%', 0],
                        },
                    }"
                    :speed="800"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    class="w-full h-full !overflow-hidden !rounded-tl-4xl"
                >
                  
                    <SwiperSlide v-for="item in swiperList" :key="item.id" class="!rounded-tl-4xl overflow-hidden">
                        <img :src="item.imgPC" :alt="item.title" class="w-full h-full object-cover !rounded-tl-4xl" />
                    </SwiperSlide>
                </Swiper>
            </div>
       </div>

       <!-- Mobile View -->
       <div class="mobile-container md:hidden w-full">
            <div class="flex flex-col gap-4">
                <div 
                    v-for="(item, index) in swiperList" 
                    :key="item.id"
                    class="mobile-item rounded-lg overflow-hidden"
                    :class="{'expanded': expandedIndex === index}"
                >
                    <button 
                        class="w-full text-left !p-8 transition-all"
                        :class="{'active': expandedIndex === index}"
                        @click="toggleExpand(index)"
                    >
                        {{ item.title }}
                    </button>
                    <div 
                        class="content-container "
                        :class="{'expanded': expandedIndex === index}"
                    >
                        <img 
                            :src="item.img" 
                            :alt="item.title" 
                            class="w-full h-auto object-cover rounded-b-lg !my-2"
                        />
                    </div>
                </div>
            </div>
       </div>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay as SwiperAutoplay, EffectCreative as SwiperEffectCreative } from 'swiper/modules';
  import deviceBg from '../../assets/Home/section5/device-bg.png';
  import 'swiper/css';
  import 'swiper/css/effect-creative';
  
  const { t } = useI18n()
  import swiper1 from '../../assets/Home/section5/swiper1.png';
  import swiper2 from '../../assets/Home/section5/swiper2.png';
  import swiper3 from '../../assets/Home/section5/swiper3.png';
  import swiper4 from '../../assets/Home/section5/swiper4.png';
  import swiper5 from '../../assets/Home/section5/swiper5.png';

  import swiperPC1 from '../../assets/Home/section5/swiper-pc-1.png';
  import swiperPC2 from '../../assets/Home/section5/swiper-pc-2.png';
  import swiperPC3 from '../../assets/Home/section5/swiper-pc-3.png';
  import swiperPC4 from '../../assets/Home/section5/swiper-pc-4.png';
  import swiperPC5 from '../../assets/Home/section5/swiper-pc-5.png';

  const swiperList = [
      {
        id:1,
        title: t('swiper_item1'),
        img: swiper1,
        imgPC: swiperPC1,
      },
      {
        id:2,
        title: t('swiper_item2'),
        img: swiper2,
        imgPC: swiperPC2,
      },
      {
        id:3,
        title: t('swiper_item3'),
        img: swiper3,
        imgPC: swiperPC3,
      },
      {
        id:4,
        title: t('swiper_item4'),
        img: swiper4,
        imgPC: swiperPC4,
      },
      {
        id:5,
        title: t('swiper_item5'),
        img: swiper5,
        imgPC: swiperPC5,
      },
  ]

  const swiper = ref(null);
  const activeIndex = ref(0);
  const expandedIndex = ref(0);
  
  // 添加自动轮播相关变量
  const autoRotationTimer = ref(null);
  const autoRotationDelay = 3000; // 自动轮播间隔时间（毫秒）
  const autoRotationResumeDelay = 5000; // 用户交互后恢复自动轮播的延迟时间（毫秒）
  const resumeTimer = ref(null);
  const isAutoRotating = ref(true);

  const onSwiper = (swiperInstance) => {
    swiper.value = swiperInstance;
  };

  const onSlideChange = () => {
    activeIndex.value = swiper.value.activeIndex;
  };

  // 开始自动轮播
  const startAutoRotation = () => {
    if (autoRotationTimer.value) {
      clearInterval(autoRotationTimer.value);
    }
    
    isAutoRotating.value = true;
    autoRotationTimer.value = setInterval(() => {
      // 计算下一个要展开的索引，如果当前是最后一个则回到第一个
      const nextIndex = expandedIndex.value >= swiperList.length - 1 ? 0 : expandedIndex.value + 1;
      expandedIndex.value = nextIndex;
    }, autoRotationDelay);
  };

  // 停止自动轮播
  const stopAutoRotation = () => {
    isAutoRotating.value = false;
    if (autoRotationTimer.value) {
      clearInterval(autoRotationTimer.value);
      autoRotationTimer.value = null;
    }
  };

  // 用户交互后恢复自动轮播
  const resumeAutoRotation = () => {
    if (resumeTimer.value) {
      clearTimeout(resumeTimer.value);
    }
    
    resumeTimer.value = setTimeout(() => {
      startAutoRotation();
    }, autoRotationResumeDelay);
  };

  const toggleExpand = (index) => {
    // 停止自动轮播
    stopAutoRotation();
    // 否则展开点击的项目
    expandedIndex.value = expandedIndex.value === index ? null : index;
    
    // 设置定时器，一段时间后恢复自动轮播
    resumeAutoRotation();
  };

  onMounted(() => {
    if (swiper.value) {
      swiper.value.autoplay.start();
    }
    
    // 启动移动端自动轮播
    startAutoRotation();
  });
  
  // 组件卸载前清除定时器
  onBeforeUnmount(() => {
    if (autoRotationTimer.value) {
      clearInterval(autoRotationTimer.value);
    }
    if (resumeTimer.value) {
      clearTimeout(resumeTimer.value);
    }
  });
  </script>
  
  <style scoped>
  .top-section{
    background: url('../../assets/Home/section5/section5-bg.png') no-repeat center center;
    background-size: cover;
  }
  .swiper-container {
    height: 400px;
  }
  .swiper-navigation button {
    background-color: transparent;
    transition: all 0.3s ease;
    border: 1px solid #000;
    cursor: pointer;
  }
  .swiper-navigation button.active {
    background-color: white;
    font-weight: 600;
    border-color: transparent;
  }

  /* Mobile Styles */
  .mobile-item {
    border: 1px solid #000;
    transition: all 0.3s ease;
  }
  .mobile-item button {
    background-color: transparent;
    border: none;
    width: 100%;
    cursor: pointer;
  }
  .mobile-item .active {
    background-color: white;
    /* border-color: #f59e0b; */
    border-color: transparent !important;
    font-weight: 600;
  }
  .content-container {
    max-height: 0;
    background-color: white;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    box-sizing: border-box;
    padding: 0 0 0 10px;
  }
  .content-container.expanded {
    max-height: 260px;
  }
  .swiper-wrapper{
    background:url('../../assets/Home/section5/device-bg.png') no-repeat !important;
    padding: 34px 0 0 27px;
    background-size: 100% 100%;
  }
  
  :deep(.swiper) {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  
  :deep(.swiper-slide) {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  </style>