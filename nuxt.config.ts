// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/styles/index.scss"],
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700], // Specify the weights you want to load
    },
  },
  colorMode: {
    preference: "light",
  },
  plugins: [
    "~/plugins/theme.ts", // Register the theme plugin
  ],
});
