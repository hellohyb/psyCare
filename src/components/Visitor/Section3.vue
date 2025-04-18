<template>
    <div ref="sectionRef" id="product" class="top-section flex justify-center items-center !px-4 w-full relative">
        <video :src="videoUrl" autoplay muted loop class="absolute top-0 left-0 -z-1 w-full h-full object-cover"></video>
        <div class="section3 text-white flex flex-col items-start justify-center !py-20 shadow-lg w-full h-180 md:max-w-[1100px]">
            <h1 class="text-2xl font-bold !mb-4 fade-in">{{ t('v_section3_title') }}</h1>
            <div class="flex justify-start items-center !my-2 fade-in">
                <HelpIcon />
                <h2 class="text-sm font-bold !ml-4">{{ t('v_section3_item1') }}</h2>
            </div>

            <div class="flex justify-start items-center !my-2 fade-in">
                <HelpIcon />
                <h2 class="text-sm font-bold !ml-4">{{ t('v_section3_item2') }}</h2>
            </div>

            <div class="flex justify-start items-center !my-2 fade-in">
                <HelpIcon />
                <h2 class="text-sm font-bold !ml-4">{{ t('v_section3_item3') }}</h2>
            </div>

            <div class="flex justify-start items-center !my-2 fade-in">
                <HelpIcon />
                <h2 class="text-sm font-bold !ml-4">{{ t('v_section3_item4') }}</h2>
            </div>

            <div class="flex justify-start items-center !my-2 fade-in">
                <HelpIcon />
                <h2 class="text-sm font-bold !ml-4">{{ t('v_section3_item5') }}</h2>
            </div>

            <button @click="handleBookConsultation" class="fade-in text-sm cursor-pointer font-bold flex justify-center items-center !mt-10 !px-6 !py-4 bg-[#004e3b] text-white rounded-md">
                <span class="!mr-2">{{ t('v_section3_button') }}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8H15M15 8L8 15M15 8L8 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import videoUrl from '../../assets/Visitor/visitor.mp4';
import HelpIcon from '../icon/visitor/help.vue';
import item1 from '../../assets/Home/section3/section3-1.png';
import item2 from '../../assets/Home/section3/section3-2.png';
import item3 from '../../assets/Home/section3/section3-3.png';
import item4 from '../../assets/Home/section3/section3-4.png';
import item5 from '../../assets/Home/section3/section3-r-1.png';
import item6 from '../../assets/Home/section3/section3-r-2.png';
import item7 from '../../assets/Home/section3/section3-r-3.png';
import { ref, onMounted } from 'vue';

const { t } = useI18n()
const sectionRef = ref(null)

const handleBookConsultation = () => {
    window.open('https://my.psycare.world/login', '_blank')
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
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

.item-list > div {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.item-list > div.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>