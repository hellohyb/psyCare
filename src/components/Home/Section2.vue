<template>
    <div id="service" class="top-section !p-4 w-full !mb-20 grid grid-cols-1 gap-10 md:max-w-[1100px] md:grid-cols-2">
        <div class="left">
            <h1 class="text-2xl font-bold !mb-10">{{ t('section2_title') }}</h1>
            <div class="items flex flex-col">
                <div class="item flex justify-center items-start !mb-10 gap-x-2" v-for="item in itemList" :key="item.id">
                    <div class="img">
                        <img :src="item.img" alt="" />
                    </div>
                    <div class="description">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <img :src="item1_right" alt="">
        </div>
    </div>
  </template>
  
  <script setup>
  import item1 from '../../assets/Home/item1.png';
  import item2 from '../../assets/Home/item2.png';
  import item3 from '../../assets/Home/item3.png';
  import { useI18n } from 'vue-i18n';
  import item1_right from '../../assets/Home/item1-right.png';
  const { t } = useI18n()
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
  </script>
  
  <style scoped>
  </style>