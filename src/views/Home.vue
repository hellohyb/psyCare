<template>
  <div class="home-container !px-0 w-full flex flex-col justify-start items-center">
     <TopSection />
     <Section2 />
     <Section3 />
     <Section4 />
     <Section5 />
     <Section6 />
     <Section7 />
     <Footer class="md:hidden" />
  </div>
</template>
<script setup>
import TopSection from '../components/Home/TopSection.vue';
import Section2 from '../components/Home/Section2.vue';
import Section3 from '../components/Home/Section3.vue';
import Section4 from '../components/Home/Section4.vue';
import Section5 from '../components/Home/Section5.vue';
import Section6 from '../components/Home/Section6.vue';
import Section7 from '../components/Home/Section7.vue';
import Footer from '../components/Home/Footer.vue';
</script>
<style scoped>
</style>