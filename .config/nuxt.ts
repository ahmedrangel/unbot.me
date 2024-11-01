import { customPreset } from "../app/utils/primevue";

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-11-01",
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
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Varela+Round" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#0b0e0f" }
      ]
    }
  },
  css: [
    "~/assets/scss/app.scss",
    "primeicons/primeicons.css"
  ],
  modules: [
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    "@primevue/nuxt-module",
    "nuxt-auth-utils",
    "@nuxt/eslint"
  ],
  icon: {
    mode: "svg",
    clientBundle: {
      sizeLimitKb: 2048
    }
  },
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
    url: "https://unbot.me"
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"]
    }
  },
  sitemap: {
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "35%" }
    ]
  },
  routeRules: {
    "/": { sitemap: { priority: 1 } },
    "/*/**": { sitemap: { priority: 0.8, lastmod: new Date().toISOString() } },
    "/api/_nuxt_icon/**": { cache: { maxAge: 1.577e+7 } }
  },
  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true,
      theme: {
        preset: customPreset,
        options: {
          cssLayer: { name: "primevue", order: "primevue" }
        }
      }
    },
    autoImport: false,
    components: {
      prefix: "Prime",
      include: ["Button", "Card"] /* Used as <PrimeButton /> */
    }
  },
  eslint: {
    config: {
      autoInit: false,
      stylistic: true
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          api: "modern"
        }
      }
    }
  }
});
