<template>
    <div ref="sectionRef" id="service" class="top-section !px-4 w-full md:max-w-[1100px]">
        <div class="title flex fade-in">
            <h1 class="text-2xl font-bold">{{ t('btn1_text') }}</h1>
            <img :src="right" alt="right">
        </div>
        <div class="desc w-full !p-10 gap-x-10 grid rounded-md grid-cols-1 bg-[#F7F8F2] md:grid-cols-2">
            <div class="consultant flex flex-col justify-start items-center fade-in">
                <h1 class="text-2xl font-bold !mb-10">{{ t('consultant') }}</h1>
                <div class="item-list flex flex-col justify-start items-start gap-10">
                    <div class="flex justify-start gap-x-2 fade-in" v-for="(item, index) in itemList" :key="index">
                        <div class="img w-20 h-20">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="desc flex-1 flex flex-col gap-y-1">
                            <h1 class="font-bold">{{ item.title }}</h1>
                            <span class="text-sm">{{ item.desc1 }}</span>
                            <li class="text-sm">{{ item.desc2 }}</li>
                        </div>
                    </div>
                </div>
            </div>
            <div class="visitor !mt-10 md:!mt-0 flex flex-col justify-start items-center fade-in">
                <h1 class="text-2xl font-bold !mb-10">{{ t('visitor') }}</h1>
                <div class="item-list flex flex-col justify-start items-start gap-10">
                    <div class="flex justify-start gap-x-2 fade-in" v-for="(item, index) in visitorList" :key="index">
                        <div class="img w-20 h-20">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="desc flex-1 flex flex-col gap-y-1">
                            <h1 class="font-bold">{{ item.title }}</h1>
                            <li class="text-sm" v-for="(cItem,cIndex) in item.desc">{{ cItem }}</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import right from '../../assets/Home/right.png';
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

const itemList = [
    {
        id: 1,
        title: t('section3_item1_title'),
        desc1: t('section3_item1_des1'),
        desc2: t('section3_item1_des2'),
        img: item1,
    },
    {
        id: 2,
        title: t('section3_item2_title'),
        desc1: t('section3_item2_des1'),
        desc2: t('section3_item2_des2'),
        img: item2,
    },
    {
        id: 3,
        title: t('section3_item3_title'),
        desc1: t('section3_item3_des1'),
        desc2: t('section3_item3_des2'),
        img: item3,
    },
    {
        id: 4,
        title: t('section3_item4_title'),
        desc1: t('section3_item4_des1'),
        desc2: t('section3_item4_des2'),
        img: item4,
    },
]
const visitorList = [
    {
        id: 1,
        title: t('section3_item5_title'),
        desc: [t('section3_item5_des1')],
        img: item5,
    },
    {
        id: 2,
        title: t('section3_item6_title'),
        desc: [t('section3_item6_des1'), t('section3_item6_des2')],
        img: item6,
    },
    {
        id: 3,
        title: t('section3_item7_title'),
        desc: [t('section3_item7_des1'), t('section3_item7_des2'), t('section3_item7_des3'),
            t('section3_item7_des4'), t('section3_item7_des5')
        ],
        img: item7,
    }
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