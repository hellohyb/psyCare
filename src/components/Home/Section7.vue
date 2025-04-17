<template>
    <div ref="sectionRef" id="contactUs" class="top-section w-full h-320 !p-10 md:!p-0 !py-40 !mt-20 bg-amber-50 flex flex-col items-center justify-start">
      <div class="content w-full md:max-w-[1000px] grid grid-cols-1 gap-x-40 md:grid-cols-2 md:translate-y-40">
        <div class="img order-1 md:order-2 fade-in">
            <img :src="section7_right" />
        </div>
        <div class="desc order-2 md:order-1 fade-in">
            <h1 class="text-2xl font-bold !mb-20 !mt-10">{{ t('section7_title') }}</h1>
            <div class="flex flex-col gap-10">
                <div class="flex flex-col gap-6">
                    <div class="!py-2 flex items-center justify-between border-b border-gray-300 fade-in">
                        <span class="text-[#666666] font-bold">{{ t('tel') }}</span>
                        <span class="font-bold">(123) 456-7890</span>
                    </div>

                    <div class="!py-2 flex items-center justify-between border-b border-gray-300 fade-in">
                        <span class="text-[#666666] font-bold">{{ t('email') }}</span>
                        <span class="font-bold">support@psycare.ai</span>
                    </div>

                    <div class="!py-2 flex items-center justify-between border-b border-gray-300 fade-in">
                        <span class="text-[#666666] font-bold">{{ t('media') }}</span>
                        <span class="font-bold">@PsyCare</span>
                    </div>

                    <div class="!py-2 flex flex-col items-start justify-between gap-y-3 fade-in">
                        <span class="text-[#666666] font-bold">{{ t('office') }}</span>
                        <span class="font-bold">123 Anywhere St. / Any City ST 12345</span>
                        <span class="text-[#666666]">{{ t('office_desc') }}</span>
                    </div>
                    <button @click="handleBookConsultation" class="bg-[#005843] w-1/2 uppercase underline text-sm text-white font-bold !py-4 !px-4 rounded-lg cursor-pointer hover:bg-[#005843]/80 transition-all fade-in">
                        {{ t('section7_btn') }}
                    </button>
                </div>
            </div>
        </div>
      </div>
      <Footer class="hidden md:flex" />
    </div>
  </template>
  
  <script setup>
  import item1 from '../../assets/Home/item1.png';
  import item2 from '../../assets/Home/item2.png';
  import item3 from '../../assets/Home/item3.png';
  import section7_right from '../../assets/Home/section7/section7-right.png';
  import Footer from '../Home/Footer.vue';
  import { useI18n } from 'vue-i18n';
  import { ref, onMounted } from 'vue';
  const { t } = useI18n()
  const sectionRef = ref(null)
  const itemList = [
      {
          id: 1,
          title: t('section2_item1_title'),
          desc: t('section2_item1_desc'),
          img: item1,
      },
      {
          id: 2,
          title: t('section2_item2_title'),
          desc: t('section2_item2_desc'),
          img: item2,
      },
      {
          id: 3,
          title: t('section2_item3_title'),
          desc: t('section2_item3_desc'),
          img: item3,
      },
  ]
  const handleBookConsultation = () => {
    window.open('https://my.psycare.ai/login', '_blank')
  }
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
  .top-section {
    background:url('../../assets/Home/section7/section7_bg.png') no-repeat;
    background-size: 100% 100%;
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