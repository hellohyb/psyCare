<template>
  <div ref="sectionRef" id="homePage"
   class="top-section mobile md:pc flex justify-center items-center md:items-center w-full h-[900px] md:h-[1000px]">
    <div class="!px-10 w-full flex flex-col justify-center gap-y-4 items-start md:w-[1100px] -translate-y-20">
      <h1 class="text-4xl font-bold fade-in">{{ t('section1') }}</h1>
      <div class="description fade-in">{{ t('section2') }}</div>
      <button @click="handleBookConsultation" class="!px-10 !py-4 text-white rounded-md bg-teal-600 cursor-pointer hover:bg-teal-800 fade-in">{{ t('c_top_btn1') }}</button>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'

const { t } = useI18n()
const sectionRef = ref(null)

const handleBookConsultation = () => {
    window.open('https://my.psycare.world/login', '_blank')
  // 获取目标元素
//   const targetElement = document.querySelector(`#product`)
//     if (targetElement) {
//         // 计算目标位置，减去100px的偏移量（可以根据需要调整）
//         const targetPosition = targetElement.offsetTop - 100
//         // 平滑滚动到目标位置
//         window.scrollTo({
//             top: targetPosition,
//             behavior: 'smooth'
//         })
//     }
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
.description {
    margin: 20px 0;
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

@media screen and (min-width: 768px) {
  .top-section {
    background: url('../../assets/Visitor/visitor-top-bg.png') no-repeat;
    background-position: center;
    background-size: cover;
  }
}
@media  screen and (max-width: 767px) {
    .top-section{
      background: url('../../assets/Visitor/visitor-top-mobile.png') no-repeat;
      background-size: 100% 100%;
    }
}
</style>