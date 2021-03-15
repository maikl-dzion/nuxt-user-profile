export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'user-profile-spa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css' },
    ],

    // script: [
    //   {  type:"text/javascript", src: "/assets/js/vendor/jquery-1.12.4.min.js" },
    //   {  type:"text/javascript", src: "/assets/js/bootstrap.min.js" },
    // ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '@/assets/css/bootstrap.min.css',
      '@/assets/css/animate.css',
      '@/assets/css/font-awesome.min.css',
      '@/assets/css/magnific-popup.css',
      '@/assets/css/slicknav.min.css',
      '@/assets/css/style.css',
      '@/assets/css/responsive.css',
      '@/assets/css/owl.carousel.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/global.mixin.js',
	  '~/plugins/global.plugins.js',
    '~/plugins/services.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://bolderfest.ru/user-profile/api/v1',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
