// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    /* module options */
    families: {
      'IBM+Plex+Mono': true, // Enable IBM Plex Mono font
    },
    display: 'swap', // Use font-display with swap
    preconnect: true, // Preconnect to Google Fonts
    download: true, // Download fonts automatically
    inject: true, // Inject the font links in the head of the document
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    documentDriven: true
  }
})
