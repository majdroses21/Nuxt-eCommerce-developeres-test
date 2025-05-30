<!-- app.vue -->
<template>
  <div id="app">
    <!-- Global Loading Screen -->
    <LayoutGlobalLoader 
      :site-name="appName"
      :min-loading-time="2500"
      ref="globalLoader"
    />
    
    <!-- Main Content -->
    <div v-show="!isAppLoading" class="app-content">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>

// App configuration
import appConfig from '~/app.config';
const appName = appConfig.siteName
// Loading state
const isAppLoading = ref(true)
const globalLoader = ref(null)

// Handle app loading
onMounted(() => {
  // يمكن إضافة أي logic إضافي هنا مثل تحميل البيانات الأساسية
  
  // Wait for minimum loading time then hide loader
  setTimeout(() => {
    isAppLoading.value = false
  }, 2500) // 2.5 seconds
})

// يمكن استخدام هذه الدالة لإظهار Loading مرة أخرى عند الحاجة
const showLoader = () => {
  isAppLoading.value = true
}

const hideLoader = () => {
  isAppLoading.value = false
}
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
}

.app-content {
  min-height: 100vh;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* يمكن إضافة أي global styles هنا */
</style>