// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      nationToken: process.env.NUXT_NOTION_TOKEN,
      nationDbId: process.env.NUXT_NOTION_DATABASE_ID,
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
