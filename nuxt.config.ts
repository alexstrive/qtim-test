// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [{src: "/js/jquery.js"}, {src: "/js/plugins.js"}, {src: "/js/scripts.js"}, {src: "/js/masonry.pkgd.min.js"}],
    }
  },
  css: [
      "~/assets/css/woocommerce-layout.css",
      "~/assets/css/woocommerce-smallscreen.css",
      "~/assets/css/woocommerce.css",
      "~/assets/css/font-awesome.min.css",
      "~/assets/css/style.css",
      "~/assets/css/easy-responsive-shortcodes.css"
  ]
})
