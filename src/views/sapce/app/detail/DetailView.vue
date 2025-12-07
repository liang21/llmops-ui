<script setup lang="ts"></script>
<template>
  <div class="min-h-screen">
    <!-- 顶部导航 -->
    <header class="flex items-center h-[74px] bg-gray-100 border-b border-gray-200 px-4">
      顶部导航
    </header>
    <!-- 底部内容区 -->
    <div class="flex flex-row h-[calc(100vh-74px)]">
      <!-- 左侧的编排 -->
      <div class="w-2/3 bg-gray-50 h-full">
        <header class="flex items-center h-16 border-b border-gray-200 px-7 text-xl text-gray-700">
          应用编排
        </header>
        <div class="flex flex-row h-[calc(100%-64px)]">
          <div class="flex-1 border-r border-gray-200 p-6">人设与回复逻辑</div>
          <div class="flex-1 p-6">应用能力</div>
        </div>
      </div>
      <!-- 右侧调试与预览 -->
      <div class="flex flex-col w-1/3 bg-white h-full">
        <!-- 调试与预览 -->
        <header
          class="flex flex-shrink-0 items-center h-16 px-4 text-xl bg-white border-b border-gray-200 shadow-sm"
        >
          调试与预览
        </header>
        <div class="h-full min-h-0 px-6 py-7 overflow-x-hidden overflow-y-scroll">
          <div class="flex flex-col gap-2 mb-6">
            <a-avatar :size="30">幕</a-avatar>
            <!-- 实际消息 -->
            <div class="flex flex-col gap-2">
              <div class="font-semibold text-gray-700">ChatGPT聊天记录</div>
              <div
                class="bg-gray-100 text-gray-900 border border-gray-800 px-4 py-3 rounded-2xl leading-6"
              >
                LLM 即 large language
                model，即大型语言模型,是一种基于深度学习的自然语言处理模型,具有很高的语言理解和生成能力,能够处理长文本信息。
              </div>
            </div>
          </div>
        </div>
        <div class="h-full min-h-0 px-6 py-7 overflow-x-hidden overflow-y-scroll">
          <div class="flex flex-col gap-2 mb-6">
            <a-avatar :size="30">
              <icon-apps />
            </a-avatar>
            <!-- 实际消息 -->
            <div class="flex flex-col gap-2">
              <div class="font-semibold text-gray-700">ChatGPT聊天记录</div>
              <div
                class="bg-gray-100 text-gray-900 border border-gray-800 px-4 py-3 rounded-2xl leading-6"
              >
                <icon-loading />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
