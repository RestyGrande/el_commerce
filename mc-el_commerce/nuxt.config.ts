// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/ionic",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700, 800, 900], // Specify weights you need
    },
    display: "swap", // Improves loading performance
  },
  ssr: false,
});
