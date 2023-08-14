// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      nationToken: "secret_ssQG02vuPWMYAyJc2aBdTz9SadTMebU1L33X7rnHx9l",
      nationDbId: "ece3335706b7414abd41777dae37ec7f",
    },
  },
  modules: ["nuxt-gtag"],
  ssr: true,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "週報システム",
      meta: [{ name: "description", content: "週報システム" }],
      link: [
        { rel: "icon", type: "image/x-icon", href: "@/public/favicon.ico" },
      ],
    },
  },
  css: ["@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
});
