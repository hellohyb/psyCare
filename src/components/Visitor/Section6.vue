<template>
    <div id="influence" ref="sectionRef" class="top-section !p-4 md:!p-10 !my-10 md:!my-20 bg-white flex flex-col items-center justify-start  w-full md:w-[1100px]">
       <h1 class="text-2xl font-bold !mb-4 fade-in">{{ t('v_section4_title') }}</h1>
       <h3 class="font-bold text-sm text-center !my-1 fade-in">{{ t('v_section4_title_desc1') }}</h3>
       <h3 class="font-bold text-sm text-center !my-1 fade-in">{{ t('v_section4_title_desc2') }}</h3>
       <h3 class="font-bold text-sm text-center !my-1 fade-in">{{ t('v_section4_title_desc3') }}</h3>
       <div class="grid grid-cols-1 gap-8  !mt-10 md:!mt-40 md:w-[1100px] md:grid-cols-4">
           <div class="item !p-10 flex flex-col justify-center items-center fade-in">
            <Item1 />
            <h3 class="text-sm !mt-10">{{ t('v_section4_item1') }}</h3>
           </div>

           <div class="item !p-10 flex flex-col justify-center items-center md:-translate-y-10 fade-in">
            <Item2 />
            <h3 class="text-sm !mt-10">{{ t('v_section4_item2') }}</h3>
           </div>

           <div class="item !p-10 flex flex-col justify-center items-center fade-in">
            <Item3 />
            <h3 class="text-sm !mt-10">{{ t('v_section4_item3') }}</h3>
           </div>

           <div class="item !p-10 flex flex-col justify-center items-center  md:-translate-y-10 fade-in">
            <Item4 />
            <h3 class="text-sm !mt-10">{{ t('v_section4_item4') }}</h3>
       </div>
       
    </div>
    <div class="flex flex-col items-center justify-center">
        <div class="flex justify-center items-center flex-wrap !mt-20">
            <h3 class="text-lg font-bold md:!mr-10">{{ t('v_section4_title2') }}</h3>
            <h3 class="text-lg font-bold">{{ t('v_section4_title3') }}</h3>
        </div>
        <h3 class="text-sm text-[#666666] !mt-2">{{ t('v_section4_desc') }}</h3>
        <div class="flex flex-wrap w-full justify-center items-center !mt-2">
            <div class="font-bold text-center">
              <span>{{ t('v_section4_desc2') }}</span>
              <span class="underline text-[#005843] cursor-pointer"><a href="mailto:support@psycare.ai">{{ t('v_section4_desc3') }}</a></span>
            </div>
        </div>
       </div>
    </div>
  </template>
  
  <script setup>
    import Item1 from '../../components/Visitor/Item1.vue'
    import Item2 from '../../components/Visitor/Item2.vue'
    import Item3 from '../../components/Visitor/Item3.vue'
    import Item4 from '../../components/Visitor/Item4.vue'
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