<template>
    <div class="header flex justify-center items-center flex-col w-full py-40 !mt-4 md:!mt-0 md:h-20"
        :class="{'h-auto': isMobileMenuOpen, 'header-scrolled': isScrolled}"
    >
        <div class="header-main w-[90%] rounded-4xl bg-white/10 backdrop-blur-md px-4 flex justify-between md:max-w-[1100px] md:rounded-none md:bg-transparent md:backdrop-blur-none"
        :class="{'rounded-b-none': isMobileMenuOpen}"
        
        >
            <div class="left flex items-center px-20 justify-between w-full">
                <div class="logo" style="margin-right: 10px;margin-left: 10px;">
                    <!-- <img :src="Logo" class="object-cover h-12 md:h-full" alt=""> -->
                    <Logo/>
                </div>
                <!-- 桌面端菜单 -->
                <div class="menu-list  hidden md:flex items-center justify-around flex-1 h-[60%]"
                   
                >
                    <li v-for="(item, index) in navList" :key="`menu-${index}`"
                        class="menu-item list-none h-full flex justify-center items-center text-[#333333]"
                        @click="handleSelectMenu(item)"
                        :class="{'active':(item.id === currentMenuId),
                        
                        }"
                    >
                        <a :href="`#${item.desc}`">{{ item.name }}</a>
                    </li>
                   <div class="right-btn h-12 w-70 flex justify-between gap-x-2">
                        <button v-if="route.path !== '/'" @click="goToPage('/')" class="btn-1 w-full flex justify-center bg-gray-100  items-center !shadow-orange-50 rounded-md cursor-pointer hover:bg-yellow-50">
                            <HomeIcon/>
                            <span>{{ t('home') }}</span>
                        </button>
                        <button v-if="route.path !== '/visitor'" @click="goToPage('/visitor')"
                        :class="{'bg-teal-600 text-white  hover:bg-teal-800': route.path === '/consultant'}"
                        class="btn-1 w-full flex justify-center bg-gray-100  items-center !shadow-orange-50 rounded-md cursor-pointer">
                            <Viewer/>
                            <span>{{ t('visitor') }}</span>
                        </button>
                        <button v-if="route.path !== '/consultant'" @click="goToPage('/consultant')" class="btn-2 w-full h-full px-30 py-5 flex justify-center items-center  cursor-pointer text-white bg-teal-600 rounded-md hover:bg-teal-800">
                            <Asker/>
                            <span>{{ t('consultant') }}</span>
                        </button>
                   </div>
                </div>
                <!-- 移动端菜单按钮 -->
                <button class="md:hidden" style="margin-right: 10px;" @click="toggleMobileMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- 移动端菜单面板 -->
        <div 
            class="mobile-menu text-black w-[90%] md:hidden z-50 rounded-b-4xl !p-4 bg-white/10 backdrop-blur-md overflow-hidden"
            :class="{'h-0': !isMobileMenuOpen, 'h-auto': isMobileMenuOpen}"
        >
            <div class="py-2 flex flex-row gap-4">
                <div v-for="(item, index) in navList" 
                    :key="`mobile-menu-${index}`"
                    class=" transition-all duration-300 border-b-[2px] border-transparent !my-5"
                    :class="{'activeMenu': item.id === currentMenuId}"
                    @click="handleSelectMenu(item)"
                >
                    <a :href="`#${item.desc}`" 
                        class="block w-full"
                    >
                        {{ item.name }}
                    </a>
                </div>
                
            </div>
            <div class="right-btn h-10 w-full flex justify-between gap-x-10 px-4">
                    <button v-if="route.path !== '/'" @click="goToPage('/')" class="btn-1 w-full flex justify-center items-center bg-white rounded-md text-white">
                        <HomHomeIcone/>
                        <span class="text-black">{{ t('home') }}</span>
                    </button>
                    <button v-if="route.path !== '/visitor'" @click="goToPage('/visitor')" class="btn-1 w-full flex justify-center items-center bg-white rounded-md text-white">
                        <Viewer/>
                        <span class="text-black">{{ t('visitor') }}</span>
                    </button>
                    <button v-if="route.path !== '/consultant'" @click="goToPage('/consultant')" class="btn-2 w-full h-full px-10 py-5 flex justify-center items-center bg-[#005843] rounded-md text-white">
                        <Asker/>
                        <span>{{ t('consultant') }}</span>
                    </button>
                </div>
        </div>
    </div>
</template>

<script setup>
import Logo from './icon/Logo.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import Asker from './icon/Asker.vue'
import Viewer from './icon/Viewer.vue'
import HomeIcon from './icon/Home.vue'
const { t, locale } = useI18n()
const currentMenuId = ref(1)
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const router = useRouter()
const route = useRoute()
const goToVisitor = () => {
    router.push('/visitor')
}

const goToConsultant = () => {
    // 跳转至咨询师页面
    router.push('/consultant')
}
const goToPage = (page) => {
    router.push(page)
}
// 监听滚动事件
const handleScroll = () => {
    isScrolled.value = window.scrollY > 50 // 滚动超过50px时添加背景
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const navList = computed(() => [
    {
        id: 1,
        name:route.path === '/' ? t('home') : route.path === '/visitor' ? t('visitor') : t('consultant'),
        desc: 'homePage'
    }, {
        id: 2,
        name: t('service'),
        desc: 'service'
    },
    {
        id: 3,
        name: t('product'),
        desc: 'product'
    },
    {
        id: 4,
        name: t('influence'),
        desc: 'influence'
    },
    {
        id: 5,
        name: t('contactUs'),
        desc: 'contactUs'
    }
])

const handleSelectMenu = (item) => {
    currentMenuId.value = item.id
    // 阻止默认的锚点行为
    event.preventDefault()
    
    // 获取目标元素
    const targetElement = document.querySelector(`#${item.desc}`)
    if (targetElement) {
        // 计算目标位置，减去100px的偏移量（可以根据需要调整）
        let targetPosition = targetElement.offsetTop - 100
        if(item.id === 2){
            targetPosition = targetElement.offsetTop - 200
        }
        
        
        // 平滑滚动到目标位置
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        })
    }
}

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}


</script>

<style scoped>
.header {
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    user-select: none;
    z-index: 999;
    transition: background-color 0.3s ease;
}
@media screen and (max-width: 768px) {
    .header-scrolled {
    background-color: transparent;
    box-shadow: none;
}
}
@media screen and (min-width: 768px)  {
    .header-scrolled {
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
}

/* 
@media (max-width: 768px) {
    .header {
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }
} */
.menu-item{
    border-bottom: 2px solid transparent;
}
.active{
    transition: all .3s;
    border-color: var(--primary-color);
    color: var(--primary-color);
}
/* 语言切换按钮样式 */
.right button {
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
    cursor: pointer;
}
.right button:hover {
    background: #f5f5f5;
}

/* 添加移动端菜单动画 */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* 移动端菜单动画 */
.mobile-menu {
    transition: all 0.3s ease-in-out;
    max-height: 500px;
}

.mobile-menu.h-0 {
    height: 0 !important;
    opacity: 0;
    transform: translateY(-10px);
}

.mobile-menu.h-auto {
    height: auto;
    opacity: 1;
    transform: translateY(0);
}

.activeMenu {
    /* background-color: rgba(255, 255, 255, 0.2); */
    /* border-radius: 0.5rem; */
    color: var(--primary-color) !important;
    border-bottom:2px solid !important;
}

</style>