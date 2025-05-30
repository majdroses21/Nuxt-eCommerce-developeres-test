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
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css'
        }
      ],
    },
  },
  site: {
    url: 'https://nuxt-ecommerce-developeres-test.vercel.app',
    name: 'E Commerce Store',
    description: 'The best online store for shopping - high-quality products at reasonable prices',
    defaultLocale: 'en'
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: ['/admin', '/api'],
    Sitemap: 'https://nuxt-ecommerce-developeres-test.vercel.app'
  },
  sitemap: {
    hostname: 'https://nuxt-ecommerce-developeres-test.vercel.app',
    gzip: true,
    routes: async () => {
      // 
      return [
        '/categories/electronics',
        '/categories/clothing',
        '/categories/books',
        // 
      ]
    }
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