// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/manifesto-visualiser/',
    buildAssetsDir: 'assets'
  },
  typescript: {
    strict: true
  },
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxt/content'
  ],
  content: {
    documentDriven: true,
  }
})
