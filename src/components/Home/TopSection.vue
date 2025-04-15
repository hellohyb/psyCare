<template>
  <div id="homePage" class="top-section w-full h-[900px] !px-10 flex flex-col justify-center items-center md:w-[1100px]">
    <img :src="topPng" class="absolute top-0 left-0 -z-10 w-full h-auto" alt="">
    <h1 class="text-4xl font-bold">{{ t('section1') }}</h1>
    <div class="description">{{ t('section2') }}</div>
    <button class="!px-6 !py-4 text-white rounded-md bg-teal-600 cursor-pointer hover:bg-teal-800">{{ t('btn1_text') }}</button>
  </div>
</template>

<script setup>
import topPng from '../../assets/Home/top.png';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>

.description {
    margin: 20px 0;
}
</style>