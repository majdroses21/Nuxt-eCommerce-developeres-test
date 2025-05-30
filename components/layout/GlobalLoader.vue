<template>
  <div v-if="isLoading" class="global-loading-screen">
    <div class="loading-content">
      <div class="logo-container">
        <div class="pulse-ring"></div>
        <div class="pulse-ring"></div>
        <div class="pulse-ring"></div>
        <img style="width: 60%; height: 60%;" src="../../assets/Images/Icons/Logo Black.png" alt="">
        <div class="logo">
          <h2>{{ siteName }}</h2>
        </div>
      </div>
      <h3 class="loading-text">{{ currentLoadingText }}</h3>
      <div class="loading-progress">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Props
const props = defineProps({
  siteName: {
    type: String,
    default: 'Your Site Name'
  },
  minLoadingTime: {
    type: Number,
    default: 5000 // 2 seconds minimum
  }
})

// Loading state
const isLoading = ref(true)
const currentLoadingText = ref('Loading...')
const progress = ref(0)

// Loading texts
const loadingTexts = [
  'Loading...',
  'Preparing content...',
  'Almost ready...',
  'Welcome!'
]

let textIndex = 0
let progressInterval = null
let textInterval = null

// Start loading animation
const startLoading = () => {
  // Progress animation
  progressInterval = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.random() * 10
    }
  }, 200)

  // Text animation
  textInterval = setInterval(() => {
    textIndex = (textIndex + 1) % loadingTexts.length
    currentLoadingText.value = loadingTexts[textIndex]
  }, 800)

  // Complete loading after minimum time
  setTimeout(() => {
    progress.value = 2000
    setTimeout(() => {
      finishLoading()
    }, 500)
  }, props.minLoadingTime)
}

// Finish loading
const finishLoading = () => {
  clearInterval(progressInterval)
  clearInterval(textInterval)
  isLoading.value = false
}

// Cleanup on unmount
onUnmounted(() => {
  clearInterval(progressInterval)
  clearInterval(textInterval)
})

onMounted(() => {
  startLoading()
})

// Expose loading state for parent components
defineExpose({
  isLoading,
  finishLoading
})
</script>

<style scoped>
.global-loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeOut 0.8s ease-out 0.5s forwards;
}

.loading-content {
  text-align: center;
  color: white;
}

.logo-container {
  position: relative;
  margin-bottom: 30px;
}

.pulse-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: pulse 2s ease-out infinite;
}

.pulse-ring:nth-child(2) {
  animation-delay: 0.5s;
}

.pulse-ring:nth-child(3) {
  animation-delay: 1s;
}

.logo {
  position: relative;
  z-index: 1;
  padding: 40px 0;
}

.logo h2 {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

.loading-text {
  font-size: 1.2rem;
  margin: 20px 0;
  animation: textGlow 2s ease-in-out infinite alternate;
}

.loading-progress {
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin: 20px auto 0;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
  border-radius: 2px;
  transition: width 0.3s ease;
  animation: shimmer 2s ease-in-out infinite;
}

/* Animations */
@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.8);
    opacity: 0;
  }
}

@keyframes textGlow {
  from {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  to {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .logo h2 {
    font-size: 1.5rem;
  }
  
  .loading-text {
    font-size: 1rem;
  }
  
  .loading-progress {
    width: 150px;
  }
  
  .pulse-ring {
    width: 100px;
    height: 100px;
  }
}</style>