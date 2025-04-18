<template>
    <div class="home-container !px-0 w-full flex flex-col justify-start items-center">
       <TopSection />
       <Section2 />
       <Section3 />
       <Section6 />
       <Section7 />
       <Footer class="md:hidden" />
    </div>
  </template>
  <script setup>
  import TopSection from '../components/Visitor/TopSection.vue';
  import Section2 from '../components/Visitor/Section2.vue';
  import Section3 from '../components/Visitor/Section3.vue';
  import Section6 from '../components/Visitor/Section6.vue';
  import Section7 from '../components/Visitor/Section7.vue';
  import Footer from '../components/Visitor/Footer.vue';
  </script>
  <style scoped>
  </style>