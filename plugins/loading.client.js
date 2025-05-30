// plugins/loading.client.js
export default defineNuxtPlugin(() => {
  // Loading state management
  const loadingState = reactive({
    isLoading: false,
    loadingText: 'Loading...'
  })

  // Show loading screen
  const showLoading = (text = 'Loading...') => {
    loadingState.isLoading = true
    loadingState.loadingText = text
  }

  // Hide loading screen
  const hideLoading = () => {
    loadingState.isLoading = false
  }

  // Loading with promise
  const loadingWrapper = async (promise, text = 'Loading...') => {
    showLoading(text)
    try {
      const result = await promise
      return result
    } finally {
      hideLoading()
    }
  }

  // Auto-hide loading on route change complete
  const router = useRouter()
  router.afterEach(() => {
    // Hide loading after page change is complete
    setTimeout(hideLoading, 500)
  })

  // Provide loading utilities globally
  return {
    provide: {
      loading: {
        state: loadingState,
        show: showLoading,
        hide: hideLoading,
        wrap: loadingWrapper
      }
    }
  }
})