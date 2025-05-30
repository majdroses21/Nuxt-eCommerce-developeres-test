// composables/useLoading.js
export default function useLoading() {
  const { $loading } = useNuxtApp()

  // Show loading screen
  const showLoading = (text = 'Loading...') => {
    if ($loading) {
      $loading.show(text)
    }
  }

  // Hide loading screen
  const hideLoading = () => {
    if ($loading) {
      $loading.hide()
    }
  }

  // Loading wrapper for async operations
  const withLoading = async (asyncFunction, loadingText = 'Loading...') => {
    showLoading(loadingText)
    try {
      const result = await asyncFunction()
      return result
    } catch (error) {
      console.error('Error in loading wrapper:', error)
      throw error
    } finally {
      hideLoading()
    }
  }

  // Loading for navigation
  const loadingForNavigation = (to, loadingText = 'Loading page...') => {
    showLoading(loadingText)
    
    // Loading will be automatically hidden via the plugin when the navigation is finished.
    return navigateTo(to)
  }

  // Loading for API calls
  const loadingForAPI = async (apiCall, loadingText = 'Loading data...') => {
    return withLoading(apiCall, loadingText)
  }

  // Get loading state
  const isLoading = computed(() => {
    return $loading?.state?.isLoading || false
  })

  const loadingText = computed(() => {
    return $loading?.state?.loadingText || 'Loading...'
  })

  return {
    showLoading,
    hideLoading,
    withLoading,
    loadingForNavigation,
    loadingForAPI,
    isLoading,
    loadingText
  }
}