// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      // Verdana:true,
      // Sans: true,
      // 'Lora':true,
      //   'Poppins':true,
        
    }
  }
  
})
