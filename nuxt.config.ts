// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    '@nuxt/fonts',
    '@pinia/nuxt'
  ],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/main.css'
  ],
  plugins: [
    '~/plugins/bootstrap.client.js'
  ],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      STORAGE_URL: process.env.STORAGE_URL,
    },
  },
})