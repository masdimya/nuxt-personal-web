// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt'
  ],
  googleFonts: {
    /* module options */
    families: {
      'IBM+Plex+Mono': true, // Enable IBM Plex Mono font
      Geist: [100, 400, 500],
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
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  tailwindcss: { 
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }], 
    configPath: 'tailwind.config', 
    exposeConfig: { 
      level: 2
    }, 
    config: {}, 
    viewer: true, 
  } 
})