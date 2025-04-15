<template>
  <div id="homePage"
   class="top-section mobile md:pc flex justify-center items-center w-full h-[900px] md:h-[1300px]">
    <div class="!px-10 w-full flex flex-col justify-center items-center md:w-[1100px]">
      <h1 class="text-4xl font-bold">{{ t('section1') }}</h1>
      <div class="description">{{ t('section2') }}</div>
      <button class="!px-6 !py-4 text-white rounded-md bg-teal-600 cursor-pointer hover:bg-teal-800">{{ t('btn1_text') }}</button>
    </div>
  </div>
</template>

<script setup>
import topPng from '../../assets/Home/top.png';
import mobilePng from '../../assets/Home/moblie-bg.png'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>

.description {
    margin: 20px 0;
}
@media screen and (min-width: 768px) {
  .top-section {
    background-image: url('../../assets/Home/top.png');
    background-size: 100% 100%;
  }
}
@media  screen and (max-width: 767px) {
    .top-section{
      background-image: url('../../assets/Home/moblie-bg.png');
      background-size: 100% 100%;
    }
}
</style>