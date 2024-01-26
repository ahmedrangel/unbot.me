export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "",
      bodyAttrs: {
        "data-bs-theme": "dark"
      },
      meta: [
        { name: "robots", content: "index, follow" }
      ],
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Varela+Round", }
      ]
    }
  },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/transitions.css",
    "primevue/resources/themes/lara-dark-pink/theme.css",
    "primeicons/primeicons.css"
  ],
  modules: [
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "nuxt-simple-sitemap",
    "nuxt-primevue"
  ],
  runtimeConfig: {},
  features: {
    inlineStyles: false
  },
  colorMode: {
    preference: "dark",
    fallback: "dark",
    dataValue: "bs-theme",
    storageKey: "nuxt-color-mode"
  },
  site: {
    url: ""
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    }
  },
  sitemap: {
    dynamicUrlsApiEndpoint: "/__sitemap",
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "35%" }
    ]
  },
  routeRules: {
    "/": { sitemap: { priority: 1 } },
    "/*/**": { sitemap: { priority: 0.8, lastmod: new Date().toISOString() } }
  },
  primevue: {
    usePrimeVue: true,
    cssLayerOrder: "theme, bootstrap, primevue",
    options: {
      ripple: true,
    },
    components: {
      prefix: "Prime",
      include: ["Button", "Card"] /* Used as <PrimeButton /> */
    }
  }
});
