import { SITE } from "./utils/info";

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: { name: "fade", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      bodyAttrs: {
        "data-bs-theme": "dark"
      },
      meta: [
        { name: "robots", content: "index, follow" }
      ],
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Varela+Round", },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#0b0e0f" },
      ]
    }
  },
  css: [
    "~/assets/css/main.css",
    "~/assets/css/transitions.css",
    "~/assets/css/navbar.css",
    "primevue/resources/themes/lara-dark-pink/theme.css",
    "primeicons/primeicons.css"
  ],
  modules: [
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "nuxt-simple-sitemap",
    "nuxt-primevue",
    "nuxt-auth-utils"
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
    url: SITE.host
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
    },
    directives: {
      include: ["Ripple"]
    }
  }
});
