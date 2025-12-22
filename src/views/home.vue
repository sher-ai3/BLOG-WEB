<template>
  <div class="relative h-screen overflow-hidden">
    <!-- 视频背景 -->
    <video
      class="absolute inset-0 w-full h-full object-cover"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="/14702213_1280_720_25fps.mp4" type="video/mp4" />
    </video>

    <!-- 遮罩 -->
    <div class="absolute inset-0 bg-black/40 z-0"></div>

    <!-- 顶部搜索和列表 -->
    <div class="relative z-10 p-5 mb-8 flex gap-4 items-center">
      <el-input
        v-model="serach1"
        style="width: 240px"
        size="large"
        placeholder="Please Input"
        :suffix-icon="Search"
      />

      <div>这里是列表</div>

      <a href="https://github.com/sher-ai3" target="_blank">
        <svg
          class="w-6 h-6 text-gray-200 hover:text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.577
    0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61
    -.546-1.387-1.333-1.757-1.333-1.757
    -1.09-.745.083-.729.083-.729
    1.205.085 1.84 1.237 1.84 1.237
    1.07 1.835 2.807 1.305 3.492.998
    .108-.776.418-1.305.762-1.605
    -2.665-.305-5.466-1.332-5.466-5.93
    0-1.31.468-2.38 1.235-3.22
    -.124-.303-.535-1.524.117-3.176
    0 0 1.008-.322 3.3 1.23
    .957-.266 1.983-.399 3.003-.404
    1.02.005 2.047.138 3.006.404
    2.29-1.552 3.296-1.23 3.296-1.23
    .653 1.653.242 2.874.118 3.176
    .77.84 1.233 1.91 1.233 3.22
    0 4.61-2.805 5.624-5.475 5.92
    .43.37.823 1.102.823 2.222
    0 1.606-.015 2.898-.015 3.293
    0 .318.216.694.825.576
    C20.565 21.796 24 17.297 24 12
    24 5.37 18.63 0 12 0z"
          />
        </svg>
      </a>
    </div>

    <!-- 页面主要内容 -->
    <div
      class="relative z-10 flex justify-center items-center h-full"
      data-aos="fade-zoom-in"
    >
      <div class="text-white text-4xl">这是asjdjska</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue"
import AOS from "aos"
import "aos/dist/aos.css"
import { Search } from "@element-plus/icons-vue"

const serach1 = ref("")

onMounted(async () => {
  await nextTick()
  AOS.init({
    duration: 800,
    once: true
  })
})
</script>

<style scoped></style>
