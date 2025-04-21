<template>
    <div class="top-section1 md:!pt-10 h-auto bg-[#f6f7f0] !px-10 md:h-150 md:!my-20 !mb-0 flex flex-col items-center justify-start w-full md:translate-y-40">
       <div class="container flex-col md:flex-row h-full md:max-w-[1100px] flex items-center md:items-start !pt-20 justify-center md:justify-between">
            <div class="logo">
                <!-- <img :src="logoWhite" alt="logo"> -->
                 <Logo/>
            </div>
            <div class="product">
                <h1 class="text-2xl font-bold !my-4">{{ t('footer_product') }}</h1>
                <ul class="flex flex-col gap-y-2">
                    <li>{{ t('footer_product_item1') }}</li>
                    <li>{{ t('footer_product_item2') }}</li>
                    <li>{{ t('usebook') }}</li>
                    <li>{{ t('infoSafety') }}</li>
                </ul>
            </div>
            <div class="about">
                <h1 class="text-2xl font-bold !my-4">{{ t('footer_about') }}</h1>
                <ul class="flex flex-col gap-y-2">
                    <li>{{ t('footer_about_item1') }}</li>
                    <li>{{ t('footer_about_item2') }}</li>
                </ul>
            </div>
            <div class="contact flex flex-col gap-y-4 items-center md:items-start justify-center">
                <h1 class="text-2xl font-bold !my-4">{{ t('footer_contact') }}</h1>
                <ul class="flex flex-col gap-y-4 justify-center md:items-start items-center">
                    <li>
                        <div class="top flex items-center md:justify-start justify-center gap-x-2">
                            <Tel/>
                            <span>{{ t('tel') }}</span>
                        </div>
                        <span class="text-[#666666]">{{ t('tel_desc') }}</span>
                    </li>
                    <li>
                        <div class="top flex items-center md:justify-start justify-center gap-x-2">
                            <Email/>
                            <span>{{ t('email') }}</span>
                        </div>
                        <span class="text-[#666666]">{{ t('email_desc') }}</span>
                    </li>
                    <li>
                        <div class="top flex items-center md:justify-start justify-center gap-x-2">
                            <Media/>
                            <span>{{ t('media') }}</span>
                        </div>
                        <span class="text-[#666666]">{{ t('media_desc') }}</span>
                    </li>
                    <li>
                        <div class="top flex items-center md:justify-start justify-center gap-x-2">
                            <Office/>
                            <span>{{ t('office') }}</span>
                        </div>
                        <span class="text-[#666666]">{{ t('office_address') }}</span>
                    </li>
                </ul>
            </div>
       </div>
       <div class="bottom border-t !py-4 border-gray-500 w-full flex items-center justify-center">
            <div class="w-full h-auto flex-col md:flex-row md:w-[1100px] flex items-center justify-between text-[#666666]">
                <select v-model="currentLang" @change="changeLanguage($event.target.value)" class="outline-0">
                        <option value="zh">中文</option>
                        <option value="en">English</option>
                </select>
                <span>copyright © PsyCare 2025. all rights reserved</span>
                <div>
                    <span class="cursor-pointer">Privacy Policy</span>
                        <span class="!mx-2">|</span>
                        <span class="cursor-pointer">Terms of use</span>
                </div>
            </div>
       </div>
    </div>
  </template>
  
  <script setup>
  import Tel from '../icon/footer/Phone.vue';
  import Logo from '../icon/footer/Logo.vue';
  import Email from '../icon/footer/Email.vue';
  import Media from '../icon/footer/Media.vue';
  import Office from '../icon/footer/Office.vue';
  import { useI18n } from 'vue-i18n';
  import { computed } from 'vue';
  const { t,locale } = useI18n()
  const currentLang = computed(() => locale.value)

  // 修改语言切换函数
const changeLanguage = (lang) => {
    locale.value = lang
    localStorage.setItem('userLanguage', lang)
    window.location.reload()
}
  </script>
  
  <style scoped>
  .top-section1{
    background-size: 100% 100%;
    color: #fff;
    background-image: url('../../assets/Home/footer/mobile-bg.png');
  }
  @media (min-width: 768px) {
    .top-section1 {
      background-image: url('../../assets/Home/footer/section_bg.png');
    }
  }
  </style>