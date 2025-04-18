<template>
    <div ref="sectionRef" id="service" class="top-section flex justify-center items-center !p-4 w-full -translate-y-40">
        <div class="section2 flex flex-col bg-white shadow-lg items-center rounded-lg !p-20 justify-start w-full md:max-w-[1100px]">
            <h1 class="text-2xl font-bold !mb-10">{{ t('c_section2_title') }}</h1>
            <div class="grid grid-cols-1 gap-10 gap-y-20 md:grid-cols-3">
                    <div class="flex flex-col items-center justify-between fade-in">
                            <section21 />
                            <h2 class="text-lg font-bold text-[#052044]">{{ t('c_section2_item1_title') }}</h2>
                            <p class="text-sm text-center !mt-2 text-[#999999]">{{ t('c_section2_item1_desc') }}</p>
                    </div>

                    <div class="flex flex-col items-center justify-between fade-in">
                        <section22 />
                        <h2 class="text-lg font-bold text-[#052044]">{{ t('c_section2_item2_title') }}</h2>
                        <p class="text-sm text-center !mt-2 text-[#999999]">{{ t('c_section2_item2_desc') }}</p>
                    </div>

                    <div class="flex flex-col items-center justify-between fade-in">
                        <section23 />
                        <h2 class="text-lg font-bold text-[#052044]">{{ t('c_section2_item3_title') }}</h2>
                        <p class="text-sm text-center !mt-2 text-[#999999]">{{ t('c_section2_item3_desc') }}</p>
                    </div>

                    <div class="md:col-span-3 flex flex-col md:flex-row justify-center md:gap-x-30 gap-y-20">
                        <div class="flex flex-col items-center justify-between fade-in">
                        <section24 />
                        <h2 class="text-lg font-bold text-[#052044]">{{ t('c_section2_item4_title') }}</h2>
                        <p class="text-sm text-center !mt-2 text-[#999999]">{{ t('c_section2_item4_desc') }}</p>
                    </div>

                    <div class="flex flex-col items-center justify-between fade-in">
                        <section25 />
                        <h2 class="text-lg font-bold text-[#052044]">{{ t('c_section2_item5_title') }}</h2>
                        <p class="text-sm text-center !mt-2 text-[#999999]">{{ t('c_section2_item5_desc') }}</p>
                    </div>
                    </div>
                 
                    
            </div>
        </div>
    </div>
</template>

<script setup>
import section21 from '../icon/consulate/section21.vue';
import section22 from '../icon/consulate/section22.vue';
import section23 from '../icon/consulate/section23.vue';
import section24 from '../icon/consulate/section24.vue';
import section25 from '../icon/consulate/section25.vue';
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';

const { t } = useI18n()
const sectionRef = ref(null)

const itemList = [
    {
        id: 1,
        title: t('v_section2_item1_title'),
        desc: t('v_section2_item1_desc'),
        img: section21,
    },
    {
        id: 2,
        title: t('v_section2_item2_title'),
        desc: t('v_section2_item2_desc'),
        img: section22,
    },
    {
        id: 3,
        title: t('v_section2_item3_title'),
        desc: t('v_section2_item3_desc'),
        img: section23,
    },
    {
        id: 4,
        title: t('v_section2_item4_title'),
        desc: t('v_section2_item4_desc'),
        img: section24,
    },
    {
        id: 5,
        title: t('v_section2_item5_title'),
        desc: t('v_section2_item5_desc'),
        img: section25,
    },
]

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

.item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.item.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>