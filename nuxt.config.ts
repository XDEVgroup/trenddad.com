// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "@sidebase/nuxt-auth",
    "@pinia/nuxt",
    "@nuxt/image",
    'nuxt-gtag'
  ],
  // @ts-ignore
  gtag: {
    id: 'G-DVE33Y4MZD'
  },
  routeRules: {
   "/cart": {ssr: false, cache: false},
   "/shipping": {ssr: false, cache: false},
  },
  components: {
    dirs: ["~/components"],
    global: true,
  },
  auth: {
    isEnabled: true,
    baseURL: "/api/auth",
  },
});
