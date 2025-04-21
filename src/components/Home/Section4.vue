<template>
    <div ref="sectionRef" class="top-section h-340 md:h-190 !my-20 flex flex-col items-center justify-start w-full md:max-w-[1100px] pt-20 md:pt-24">
       <h1 class="text-2xl font-bold fade-in">{{ t('section4_title') }}</h1>
       <div class="grid grid-cols-1 h-full md:w-full gap-10 md:grid-cols-2">
            <div class="visitor relative fade-in">
                <!-- visitort提问气泡 -->
                <div :style="{
                    background: `url(${askContent}) no-repeat`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center center',
                    height: `${textHeight}px`
                }"
                 @click="startTyping" 
                class="w-[330px] md:w-[500px] md:!px-2 relative top-2 left-10 md:top-35 md:left-30 z-18 object-cover
                        flex items-center justify-center font-bold
                        text-[#666666]
                        transition-all duration-300
                        cursor-pointer
                        "
                >
                    <!-- visitort提问气泡内容 -->
                     <div class="text-content !px-10 text-xs md:text-sm leading-4" ref="textRef">
                        {{ displayText }}
                     </div>
                     <!-- visitort提问表情 -->
                     <img :src="currentEmoji"
                        alt="emotion" 
                        class="absolute bottom-8 right-30 md:right-30 md:bottom-10 z-19 object-cover transition-all duration-300" 
                     />
                     <img :src="pointer" 
                        @click="startTyping"
                        alt="pointer"
                        v-if="!isEnd"
                        class="absolute left-10 bottom-0 md:bottom-5 md:left-50 z-19 w-[100px] h-auto md:w-[90px] object-cover transition-all duration-300" 
                     />
                </div>
                <!-- visitort-->
                <img :src="visitor" alt="visitor"
                 class="absolute bottom-50 -left-4 md:bottom-40 md:left-2 z-19 w-[100px] h-auto md:w-[130px] object-cover" />
                <!-- visitort名字气泡-->
                <div :style="{background: `url(${nameContent}) center center no-repeat`}" 
                class="w-[200px] h-[50px] absolute left-6 bottom-45 md:bottom-40 md:left-20 z-20 object-cover
                        flex items-center justify-center font-bold
                        text-xs
                        "
                >
                     {{ t('visitor_name') }}
                </div>
                <!-- visitort描述气泡-->
                <div :style="{background: `url(${descContent}) center center no-repeat`,backgroundSize: '100% 100%', backgroundPosition: 'center center'}" 
                class="w-[360px] h-[190px] md:w-[500px] md:h-[200px] absolute bottom-0 md:bottom-0 -left-4 md:left-0 z-18 object-cover
                        flex items-center justify-center md:font-bold
                        text-[#666666]
                        "
                >
                     <div class="!px-10 text-xs leading-6">
                        {{ t('visitor_desc') }}
                     </div>
                </div>
            </div>
            <div class="consultant relative fade-in">
                <!-- consultant-->
                <img :src="consultant" alt="consultant" class="absolute top-60 -right-0 md:top-94 md:right-2 z-20 object-cover" />
                <!-- consultant名字气泡-->
                <div :style="{background: `url(${nameContent}) center center no-repeat`}" 
                class="w-[200px] h-[50px] absolute top-94 right-10 md:top-130 md:right-20 z-20 object-cover
                        flex items-center justify-center font-bold
                        "
                >
                     {{ t('consultant_name') }}
                </div>
                <!-- consultant提问气泡-->

                <div :style="{background: `url(${askContent2}) no-repeat`, backgroundSize: '100% 100%', backgroundPosition: 'center center'}" 
                class="w-[340px] h-[250px] md:w-[400px] md:h-[310px] relative top-0 md:top-30 right-0 md:-right-10 z-18 object-cover
                        flex items-center justify-center font-bold
                        text-[#666666]
                        "
                >
                     <div class="text-content !px-10 text-xs leading-6">
                        {{ t('consultant_ask') }}
                     </div>
                </div>
                <!-- consultant描述气泡-->
                <div :style="{background: `url(${descContent}) center center no-repeat`,backgroundSize: '100% 100%', backgroundPosition: 'center center'}" 
                class="w-[360px] h-[240px] md:w-[550px] md:h-[200px] absolute top-110 md:top-142 md:-right-20 -right-2 z-18 object-cover
                        flex items-center justify-center md:font-bold
                        text-[#666666]
                        "
                >
                     <div class="!px-10 text-xs leading-6">
                        {{ t('consultant_desc') }}
                     </div>
                </div>
            </div>
       </div>
    </div>
  </template>
  
  <script setup>
  import visitor from '../../assets/Home/section4/visitor.png';
  import askContent from '../../assets/Home/section4/talk.png';
  import descContent from '../../assets/Home/section4/desc-content.png';
  import happy from '../../assets/Home/section4/happy.png';
  import sad from '../../assets/Home/section4/sad.png';
  import smile from '../../assets/Home/section4/smile.png';
  import nameContent from '../../assets/Home/section4/name-content.png';
  import pointer from '../../assets/Home/section4/pointer.gif';
  import consultant from '../../assets/Home/section4/consultant.png';
  import { useI18n } from 'vue-i18n';
  import { ref, onMounted, computed } from 'vue';
  import askContent2 from '../../assets/Home/section4/ask-content2.png';
  const { t } = useI18n()

  const sectionRef = ref(null)

  const displayText = ref(t('visitor_ask1'));
  const containerRef = ref(null);
  const textRef = ref(null);
  const isTyping = ref(false);
  const currentTextIndex = ref(0);

  const texts = [
    t('visitor_ask1'),
    t('visitor_ask2'),
    t('visitor_ask3')
  ];
  const textHeight = ref(270);
  const visitorTop = ref(50);
  const visitorNameTop = ref(160);
  const visitorDescTop = ref(100);
  const isEnd = ref(false);
  // 添加表情状态
  const currentEmoji = ref(sad);

  const typeText = async (text, delay = 50) => {
    const currentLength = displayText.value.length;
    const targetLength = text.length;
    // 根据当前文本索引切换表情
    if (currentTextIndex.value === 2) {
      currentEmoji.value = smile;
    } else if (currentTextIndex.value === 3) {
      currentEmoji.value = happy;
    }
    
    for (let i = currentLength; i <= targetLength; i++) {
      if (!isTyping.value) break;
      displayText.value = text.slice(0, i);
      await new Promise(resolve => setTimeout(resolve, delay));
      
      // 更新气泡高度，添加额外空间以适应内容
      textHeight.value = textRef.value.scrollHeight + 200; // 增加一些额外空间用于padding
      visitorTop.value = 50 + (textHeight.value - 330) * 0.3;
      visitorDescTop.value = 100 + (textHeight.value - 330) * 0.3;
    }
  };
  const startTyping = async () => {
      isTyping.value = true;
      isEnd.value = true;
      while (currentTextIndex.value < texts.length - 1 && isTyping.value) {
        currentTextIndex.value++;
        await typeText(texts.slice(0, currentTextIndex.value + 1).join('\n\n'));
      }
      
      currentEmoji.value = happy;
  };

  onMounted(() => {
    // 初始化容器高度
    if (textRef.value) {
      textHeight.value = textRef.value.scrollHeight + 200;
      visitorTop.value = 50 + (textHeight.value - 330) * 0.3;
      visitorDescTop.value = 550 + (textHeight.value - 330) * 0.3;
      // 如果为移动端
      // if (window.innerWidth < 768) {
      //   visitorDescTop.value = 330;
      // } else {
      //   visitorDescTop.value = 550;
      // }
    }

    // 添加淡入动画观察器
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
  });

  // 添加图标底部偏移量计算
  const iconOffsetBottom = computed(() => {
    const baseHeight = 380; // 初始气泡高度
    const baseBottom = 10; // 基础底部距离
    const diff = textHeight.value - baseHeight; // 计算高度差
    // 根据内容增加而增加底部距离
    return baseBottom + (diff * 0.3); // 可以调整 0.2 这个系数来控制上移的幅度
  });

  </script>
  
  <style scoped>
  .text-content {
    white-space: pre-wrap;
    transition: height 0.3s ease;
  }

  .relative {
    position: relative;
    transition: all 0.3s ease;
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
  </style>