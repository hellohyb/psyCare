<template>
    <div  ref="sectionRef" id="influence" class="top-section flex justify-center items-center !p-4 w-full">
        <div class="section2 flex flex-col bg-white items-center rounded-lg md:!p-20 justify-start w-full md:max-w-[1100px]">
            <h1 class="text-2xl font-bold !mb-6">{{ t('c_section5_title') }}</h1>
            <h3 class="text-sm md:text-md md:font-bold text-center">{{ t('c_section5_title_desc1') }}</h3>
            <h3 class="text-sm md:text-md md:font-bold text-center">{{ t('c_section5_title_desc2') }}</h3>
            <div class="window-content grid grid-cols-1 w-full md:overflow-hidden !mt-10 md:h-140 md:bg-[#FCDD65] md:shadow-lg rounded-lg md:relative">
                <!-- 第一个窗口 -->
                <div class="window w-full !mt-10 border-1 border-gray-200 md:border-none rounded-lg md:absolute md:z-10 !p-4 md:!p-18 md:bottom-0 md:h-50 md:left-10 md:w-133 md:h-120 flex flex-col justify-start items-start">
                    <h3 class="text-xl !mb-4 font-bold">{{ t('c_window1_title') }}</h3>
                    <div class="flex">
                        <h3 class="text-md font-bold md:!mr-16">{{ t('c_window_head1') }}</h3>
                        <h3 class="text-md font-bold">{{ t('c_window_head2') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                    <div class="flex">
                        <h3 class="text-md !mr-27">{{ t('c_row1') }}</h3>
                        <h3 class="text-md">{{ t('c_window1_row1') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                    <div class="flex">
                        <h3 class="text-md !mr-27">{{ t('c_row2') }}</h3>
                        <h3 class="text-md">{{ t('c_window1_row2') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                    <div class="flex">
                        <h3 class="text-md !mr-27">{{ t('c_row3') }}</h3>
                        <h3 class="text-md">{{ t('c_window1_row3') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                    
                </div>
                <!-- 第二个窗口 -->
                <div class="window w-full !mt-10 border-1 border-gray-200 md:border-none rounded-lg md:absolute z-11 !p-4 md:!p-18 md:bottom-0 md:left-60 md:w-148 md:h-128 flex flex-col justify-start items-start">
                    <h3 class="text-xl !mb-4 font-bold">{{ t('c_window2_title') }}</h3>
                    <div class="flex">
                        <h3 class="text-md font-bold md:!mr-16">{{ t('c_window_head1') }}</h3>
                        <h3 class="text-md font-bold">{{ t('c_window_head2') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                    <div class="flex">
                        <h3 class="text-md !mr-27">{{ t('c_row1') }}</h3>
                        <h3 class="text-md">{{ t('c_window2_row1') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                    <div class="flex">
                        <h3 class="text-md !mr-27">{{ t('c_row2') }}</h3>
                        <h3 class="text-md">{{ t('c_window2_row2') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                    <div class="flex">
                        <h3 class="text-md !mr-27">{{ t('c_row3') }}</h3>
                        <h3 class="text-md">{{ t('c_window2_row3') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                    <div class="flex">
                        <h3 class="text-md !mr-27">{{ t('c_row4') }}</h3>
                        <h3 class="text-md">{{ t('c_window2_row4') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                </div>

                <!-- 第三个窗口 -->
                <div class="window w-full !mt-10 border-1 border-gray-200 md:border-none rounded-lg md:absolute z-12 !p-4 md:!p-18 md:bottom-0 md:-right-40 md:w-170 md:h-138 flex flex-col justify-start items-start">
                    <h3 class="text-xl !mb-4 font-bold">{{ t('c_window3_title') }}</h3>
                    <div class="flex">
                        <h3 class="text-md font-bold !mr-16">{{ t('c_window_head1') }}</h3>
                        <h3 class="text-md font-bold">{{ t('c_window_head2') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                    <div class="flex">
                        <h3 class="text-md !mr-27">{{ t('c_row1') }}</h3>
                        <h3 class="text-md">{{ t('c_window3_row1') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                    <div class="flex">
                        <h3 class="text-md !mr-27">{{ t('c_row2') }}</h3>
                        <h3 class="text-md">{{ t('c_window3_row2') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                    <div class="flex">
                        <h3 class="text-md !mr-27">{{ t('c_row3') }}</h3>
                        <h3 class="text-md">{{ t('c_window3_row3') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                    <div class="flex">
                        <h3 class="text-md !mr-27">{{ t('c_row3') }}</h3>
                        <h3 class="text-md">{{ t('c_window3_row3') }}</h3>
                    </div>
                    <div class="w-full h-[1px] !my-4 bg-gray-200 rounded-lg"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
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
@media screen and (max-width: 768px) {
    .window{
        background:white !important;
    }
}
.window{
    background: url('../../assets/Consulate/window.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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