<template>
    <div ref="sectionRef" class="top-section flex flex-col gap-y-20 justify-center items-center !px-4 w-full">
        <div class="section3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:max-w-[1100px]">
            <img class="order-2 md:order-1" src="../../assets/Consulate/section31.png" alt="">
            <div class="flex flex-col justify-between items-start !p-10 order-1 md:order-2">
                <h1 class="text-2xl font-bold fade-in">{{ t('c_section3_title1') }}</h1>
                <h3 class="text-md font-bold fade-in">{{ t('c_section3_title1_desc1') }}</h3>
                <p class="text-sm text-[#666666] fade-in">{{ t('c_section3_title1_desc1_content') }}</p>
                <div class="w-full h-[1px] bg-[#F0EDEB] !my-6"></div>
                <h3 class="text-md font-bold fade-in">{{ t('c_section3_title2_desc2') }}</h3>
                <p class="text-sm text-[#666666] flex items-center gap-x-2 fade-in  "><IconSection31/>{{ t('c_section3_title2_desc2_item1') }}</p>
                <p class="text-sm text-[#666666] flex items-center gap-x-2 fade-in"><IconSection31/>{{ t('c_section3_title2_desc2_item2') }}</p>
                <p class="text-sm text-[#666666] flex items-center gap-x-2 fade-in"><IconSection31/>{{ t('c_section3_title2_desc2_item3') }}</p>
                <p class="text-sm text-[#666666] flex items-center gap-x-2 fade-in"><IconSection31/>{{ t('c_section3_title2_desc2_item4') }}</p>
                <p class="text-sm text-[#666666] !mt-4 fade-in">{{ t('c_section3_title2_end') }}</p>
            </div>
        </div>

        <div class="section3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:max-w-[1100px]">
            
            <div class="flex flex-col justify-start items-start gap-y-5 !p-10">
                <h1 class="text-2xl font-bold fade-in">{{ t('c_section3_title3') }}</h1>
                <h3 class="text-md font-bold fade-in">{{ t('c_section3_title3_desc1') }}</h3>
                <p class="text-sm text-[#666666] flex justify-start items-start gap-x-2 fade-in"><IconSection33/><span class="flex-1">{{ t('c_section3_title3_desc1_content') }}</span></p>
                <p class="text-sm text-[#666666] flex justify-start items-start gap-x-2 fade-in"><IconSection32/><span class="flex-1">{{ t('c_section3_title3_desc1_content2') }}</span></p>
                <div class="w-full h-[1px] bg-[#F0EDEB] !my-6"></div>

                <h3 class="text-md font-bold fade-in">{{ t('c_section3_title3_desc2') }}</h3>
                <p class="text-sm text-[#666666] fade-in">{{ t('c_section3_title3_desc2_item') }}</p>
                
            </div>
            <img src="../../assets/Consulate/section32.png" alt="">
        </div>

    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

import IconSection31 from '../../components/icon/consulate/section31.vue';
import IconSection32 from '../../components/icon/consulate/section32.vue';
import IconSection33 from '../../components/icon/consulate/section33.vue';
import { ref, onMounted } from 'vue';

const { t } = useI18n()
const sectionRef = ref(null)

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