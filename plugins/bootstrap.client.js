import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      bootstrap
    }
  }
})