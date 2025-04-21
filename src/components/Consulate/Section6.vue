<template>
    <div ref="sectionRef" id="influence" class="top-section !p-4 md:!p-10 !my-10 md:!my-20 bg-white flex flex-col items-center justify-start  w-full md:w-[1100px]">
       <h1 class="text-2xl font-bold !mb-4 fade-in">{{ t('c_section6_title') }}</h1>
       <h3 class="font-bold text-sm text-center !my-1 fade-in">{{ t('c_section6_title_desc1') }}</h3>
        <div class="section6-item rounded-lg w-full md:w-[70%] bg-[#f7f8f2] md:-translate-x-20 !py-8 !px-4 !mt-10 flex justify-between items-center fade-in">
          <Section6Item1 />
          <div class="flex-1 flex flex-col items-start justify-center !ml-4">
            <h3 class="text-lg font-bold">{{ t('c_section6_item1_title') }}</h3>
            <h3 class="text-sm text-[#666666]">{{ t('c_section6_item1_desc') }}</h3>
          </div>
        </div>
        <div class="section6-item rounded-lg w-full md:w-[70%] bg-[#f7f8f2] md:translate-x-20  !py-8 !px-4 !mt-10 flex justify-between items-center fade-in">
          <Section6Item2 />
          <div class="flex-1 flex flex-col items-start justify-center !ml-4">
            <h3 class="text-lg font-bold">{{ t('c_section6_item2_title') }}</h3>
            <h3 class="text-sm text-[#666666]">{{ t('c_section6_item2_desc') }}</h3>
          </div>
        </div>
        <div class="section6-item rounded-lg w-full md:w-[70%] bg-[#f7f8f2] md:-translate-x-20  !py-8 !px-4 !mt-10 flex justify-between items-center fade-in">
          <Section6Item3 />
          <div class="flex-1 flex flex-col items-start justify-center !ml-4">
            <h3 class="text-lg font-bold">{{ t('c_section6_item3_title') }}</h3>
            <h3 class="text-sm text-[#666666]">{{ t('c_section6_item3_desc') }}</h3>
          </div>
        </div>
    <div class="flex flex-col items-center justify-center fade-in">
        <div class="flex justify-center items-center flex-wrap !mt-20">
            <h3 class="text-lg font-bold md:!mr-10">{{ t('c_section6_end_title') }}</h3>
        </div>
        <h3 class="text-sm text-[#666666] !mt-2">{{ t('c_section6_end_desc') }}</h3>
        <div class="flex flex-wrap w-full justify-center items-center !mt-2">
            <div class="font-bold text-center">
              <span>{{ t('v_section4_desc2') }}</span>
              <span class="underline text-[#005843] cursor-pointer"><a href="#contactUs">{{ t('v_section4_desc3') }}</a></span>
            </div>
        </div>
       </div>
    </div>
  </template>
  
  <script setup>
  import Section6Item1 from '../../components/icon/consulate/section61.vue'
  import Section6Item2 from '../../components/icon/consulate/section62.vue'
  import Section6Item3 from '../../components/icon/consulate/section63.vue'
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
  .item{
    background-color: #f6f7f0;
    border-radius: 16px;
  }
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