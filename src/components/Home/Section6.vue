<template>
    <div ref="sectionRef" class="top-section !p-4 md:!p-10 !my-20 bg-white flex flex-col items-center justify-start  w-full md:w-[1100px]">
       <h1 class="text-2xl font-bold fade-in">{{ t('about_title') }}</h1>
       <div class="grid grid-cols-1 gap-10 md:w-[1100px] md:grid-cols-2">
            <div class="img flex justify-center items-center md:!p-10 fade-in">
                <img :src="about_bg" alt="about" class="">
            </div>
            <div class="desc md:!p-10 flex flex-col gap-20 justify-center">
                <div class="item1 flex gap-4 fade-in">
                   <div class="left">
                        <img :src="home_bg" alt="home" class="w-10 h-10">
                   </div>
                   <div class="right flex-1 flex flex-col gap-2">
                    <h1 class="text-2xl font-bold">{{ t('section6_title1') }}</h1>
                    <p class="text-sm font-bold leading-7">{{ t('section6_desc1') }}</p>
                    <div class="author flex items-center gap-2">
                        <img :src="ceo_bg" alt="ceo" class="object-cover">
                        <div class="author-info">
                            <h1 class="text-sm text-[#666666]">{{ t('section6_author') }}</h1>
                            <p class="text-sm text-[#666666]">{{ t('section6_author_desc') }}</p>
                        </div>
                    </div>
                   </div>
                </div>
                <div class="item2 flex gap-4 fade-in">
                    <img :src="news_bg" alt="home" class="w-10 h-10">
                    <div class="right flex-1 flex flex-col gap-2">
                    <h1 class="text-2xl font-bold">{{ t('section6_title2') }}</h1>
                    <p class="text-sm font-bold leading-7">{{ t('section6_desc2') }}</p>
                    <p class="text-sm">{{ t('section6_news') }}</p>
                    <p class="text-sm text-[#666666]">{{ t('section6_news_desc') }}</p>
                   </div>
                </div>
                
            </div>
       </div>
    </div>
  </template>
  
  <script setup>
 import about_bg from '../../assets/Home/section6/about.png';
 import ceo_bg from '../../assets/Home/section6/ceo.png';
 import home_bg from '../../assets/Home/section6/home.png';
 import news_bg from '../../assets/Home/section6/news.png';
  import { useI18n } from 'vue-i18n';
  import { ref, onMounted } from 'vue';

  const { t } = useI18n()
  const sectionRef = ref(null)

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
            }
        })
    }, {
        threshold: 0.1
    })

    if (sectionRef.value) {
        const elements = sectionRef.value.querySelectorAll('.fade-in')
        elements.forEach(element => {
            observer.observe(element)
        })
    }
  })
  </script>
  
  <style scoped>
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  </style>