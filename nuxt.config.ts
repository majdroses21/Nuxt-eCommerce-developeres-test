// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
    app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/sweetalert2@11',
          // body: true,
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
        },
      ],
    },
  },
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