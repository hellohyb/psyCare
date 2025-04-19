<template>
    <div ref="sectionRef" id="service"
        class="top-section bg-[#f6f7f0] !py-20 !mt-40 flex justify-center items-center !p-4 w-full">
        <div class="section2 flex flex-col items-center rounded-lg justify-start w-full md:max-w-[1100px]">
            <h1 class="text-2xl font-bold !mb-4">{{ t('c_section4_title') }}</h1>
            <h3 class="text-sm font-bold !mb-4 md:!mb-10">{{ t('c_section4_title_desc') }}</h3>
            <div class="hidden md:block !mt-10 w-full relative">
                <Swiper :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]" :slides-per-view="1"
                    :space-between="30" :navigation="{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }" :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                    }" :speed="1000" :loop="true"
                    :breakpoints="{
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        }
                    }" class="w-full">
                    <SwiperSlide>
                        <div
                            class="swiper-slide-content bg-white h-[250px] box-border flex flex-col justify-between rounded-xl !p-10 relative w-full md:w-[calc(100%-20px)] mx-auto">
                            <h3 class="text-md leading-8 !mb-10">{{ t('c_section4_swiper1_desc') }}</h3>
                            <div class="flex justify-start items-center">
                                <img src="../../assets/Consulate/xuxinyi.png" alt="">
                                <div class="flex flex-col justify-start items-start gap-y-2">
                                    <h3 class="text-sm font-bold">{{ t('c_section4_swiper1_author') }}</h3>
                                    <h3 class="text-sm ">{{ t('c_section4_swiper1_author_desc') }}</h3>
                                </div>
                            </div>
                            <div class="absolute bottom-0 right-0">
                                <Section41 />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            class="swiper-slide-content bg-white h-[250px]  box-border flex flex-col justify-between rounded-xl !p-10 relative">
                            <h3 class="text-md leading-8 !mb-10">{{ t('c_section4_swiper2_desc') }}</h3>
                            <div class="flex justify-start items-center">
                                <img src="../../assets/Consulate/linzhiyu.png" alt="">
                                <div class="flex flex-col justify-start items-start gap-y-2">
                                    <h3 class="text-sm font-bold">{{ t('c_section4_swiper2_author') }}</h3>
                                    <h3 class="text-sm">{{ t('c_section4_swiper2_author_desc') }}</h3>
                                </div>
                            </div>
                            <div class="absolute bottom-0 right-0">
                                <Section41 />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            class="swiper-slide-content bg-white h-[250px] box-border flex flex-col justify-between rounded-xl !p-10 relative">
                            <h3 class="text-md leading-8 !mb-10">{{ t('c_section4_swiper3_desc') }}</h3>
                            <div class="flex justify-start items-center">
                                <img src="../../assets/Consulate/wangyali.png" alt="">
                                <div class="flex flex-col justify-start items-start gap-y-2">
                                    <h3 class="text-sm font-bold">{{ t('c_section4_swiper3_author') }}</h3>
                                    <h3 class="text-sm">{{ t('c_section4_swiper3_author_desc') }}</h3>
                                </div>
                            </div>
                            <div class="absolute bottom-0 right-0 z-10">
                                <Section41 />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div
                    class="custom-navigation-buttons w-full flex justify-between  px-2 md:px-4 z-10 pointer-events-none">
                    <button
                        class="swiper-button-prev-custom  absolute -left-15  top-2/5 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md pointer-events-auto focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        class="swiper-button-next-custom  absolute -right-15  top-2/5 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md pointer-events-auto focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <h3 class="text-md font-bold text-center !mt-10">{{ t('c_section4_end') }}</h3>
            </div>
                <!-- 移动端显示 -->
            <div class="grid grid-cols-1 gap-y-4 md:hidden">
                <div
                    class="swiper-slide-content bg-white h-auto box-border flex flex-col justify-center md:justify-between rounded-xl !p-10 relative">
                    <h3 class="text-md leading-8 !mb-4 md:!mb-10">{{ t('c_section4_swiper1_desc') }}</h3>
                    <div class="flex justify-start items-center">
                        <img src="../../assets/Consulate/xuxinyi.png" alt="">
                        <div class="flex flex-col justify-start items-start gap-y-2">
                            <h3 class="text-sm font-bold">{{ t('c_section4_swiper1_author') }}</h3>
                            <h3 class="text-sm font-bold">{{ t('c_section4_swiper1_author_desc') }}</h3>
                        </div>
                    </div>
                    <div class="absolute bottom-0 right-0">
                        <Section41 />
                    </div>
                </div>

                <div
                            class="swiper-slide-content bg-white h-auto   box-border flex flex-col justify-center md:justify-between rounded-xl !p-10 relative">
                            <h3 class="text-md leading-8 !mb-4 md:!mb-10">{{ t('c_section4_swiper2_desc') }}</h3>
                            <div class="flex justify-start items-center">
                                <img src="../../assets/Consulate/linzhiyu.png" alt="">
                                <div class="flex flex-col justify-start items-start gap-y-2">
                                    <h3 class="text-sm font-bold">{{ t('c_section4_swiper2_author') }}</h3>
                                    <h3 class="text-sm font-bold">{{ t('c_section4_swiper2_author_desc') }}</h3>
                                </div>
                            </div>
                            <div class="absolute bottom-0 right-0">
                                <Section41 />
                            </div>
                        </div>

                        <div
                            class="swiper-slide-content bg-white h-auto  box-border flex flex-col justify-center md:justify-between rounded-xl !p-10 relative">
                            <h3 class="text-md leading-8 !mb-4 md:!mb-10">{{ t('c_section4_swiper3_desc') }}</h3>
                            <div class="flex justify-start items-center">
                                <img src="../../assets/Consulate/wangyali.png" alt="">
                                <div class="flex flex-col justify-start items-start gap-y-2">
                                    <h3 class="text-sm font-bold">{{ t('c_section4_swiper3_author') }}</h3>
                                    <h3 class="text-sm font-bold">{{ t('c_section4_swiper3_author_desc') }}</h3>
                                </div>
                            </div>
                            <div class="absolute bottom-0 right-0 z-10">
                                <Section41 />
                            </div>
                        </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Section41 from '../icon/consulate/section41.vue';
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation as SwiperNavigation, Pagination as SwiperPagination, Autoplay as SwiperAutoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

.item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.item.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Custom Swiper Styles */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    display: none;
}

.swiper-button-prev-custom,
.swiper-button-next-custom {
    transition: all 0.3s ease;
}

.swiper-button-prev-custom:hover,
.swiper-button-next-custom:hover {
    cursor: pointer;
    background-color: #A3DC2F;
    transform: scale(1.1);
}
</style>