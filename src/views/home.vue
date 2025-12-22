<template>
  <div class="relative min-h-screen font-sans antialiased overflow-x-hidden">
    <!-- 视频 -->
    <div class="fixed inset-0 w-full h-screen overflow-hidden -z-10">
      <video 
        ref="videoRef"
        class="w-full h-full object-cover will-change-transform" 
        autoplay muted loop playsinline
      >
        <source src="/14702213_1280_720_25fps.mp4" type="video/mp4" />
      </video>
      <!-- 遮罩层 -->
      <div class="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/60"></div>
    </div>

    <nav 
      :class="[
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      ]"
    >
      <div :class="isScrolled ? 'text-gray-800' : 'text-white'" class="font-bold transition-colors">
        Logo/列表
      </div>
      
      <a href="https://github.com/sher-ai3" target="_blank" class="transition-transform hover:scale-110">
        <svg 
          :class="isScrolled ? 'text-gray-800' : 'text-gray-200'" 
          class="w-7 h-7 hover:text-blue-500 transition-colors" 
          viewBox="0 0 24 24" fill="currentColor"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .318.216.694.825.576 C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0z" />
        </svg>
      </a>
    </nav>

    <div ref="homeContent" class="relative flex flex-col items-center justify-center h-screen text-white text-center px-4">
      <h1 class="text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg" data-aos="zoom-out-up">
        欢迎来到首页
      </h1>
      <p class="text-2xl font-light opacity-90 mb-12" data-aos="fade-up" data-aos-delay="200">
        探索更多精彩内容
      </p>
      
      <div class="absolute bottom-10 animate-bounce cursor-pointer" @click="scrollToContent">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>

    <main ref="pageContent" class="relative z-20 bg-gray-50 min-h-screen px-6 py-20 rounded-t-[40px] shadow-2xl">
      <div class="max-w-7xl mx-auto">
        <el-row :gutter="24">
          <el-col v-for="item in items" :key="item" :xs="24" :sm="12" :md="8" :lg="6">
            <div 
              class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
            >
              <div class="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                Card {{ item }}
              </div>
              <h3 class="font-bold text-lg mb-2 text-gray-800">项目标题 {{ item }}</h3>
              <p class="text-gray-500 text-sm">这里是关于该项内容的简短描述文字。</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue"
import AOS from "aos"
import "aos/dist/aos.css"

const items = ref([1, 2, 3, 4, 5, 6, 7, 8])
const videoRef = ref(null)
const homeContent = ref(null)
const pageContent = ref(null)
const isScrolled = ref(false)

// 滚动逻辑
const onScroll = () => {
  const scrollY = window.scrollY
  
  // 1. 更新导航栏状态
  isScrolled.value = scrollY > 50

  // 2. 视频视差 (使用 transform 提高性能)
  if (videoRef.value) {
    // 稍微降低移动系数 (0.15) 让效果更平滑
    videoRef.value.style.transform = `translate3d(0, ${scrollY * 0.15}px, 0)`
  }

  // 3. 首页内容淡出和缩放
  if (homeContent.value) {
    const opacity = Math.max(1 - scrollY / 500, 0)
    const scale = Math.max(1 - scrollY / 2000, 0.9)
    homeContent.value.style.opacity = opacity
    homeContent.value.style.transform = `scale(${scale})`
  }
}

// 平滑滚动到内容区
const scrollToContent = () => {
  pageContent.value?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(async () => {
  await nextTick()
  AOS.init({ 
    duration: 1000, 
    once: false, // 设为 false 让动画在往回滚时也能触发
    offset: 100 
  })

  window.addEventListener("scroll", onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll)
})
</script>

<style scoped>
/* 开启硬件加速 */
.will-change-transform {
  will-change: transform;
}

/* 优化长内容滚动 */
:deep(html) {
  scroll-behavior: smooth;
}
</style>