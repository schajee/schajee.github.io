// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/schajee.github.io/'
  },
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  compatibilityDate: "2025-02-18",
  colorMode: {
    preference: 'light'
  }
})