const pkg = require('./package');
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  srcDir: 'app/',
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    titleTemplate: pkg.name + ' · %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** PWA Manifest
  */
  manifest: {
    name: pkg.name,
    lang: 'en',
    description: pkg.description,
    theme_color: '#FF5000'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: 'ant-design-vue/dist/antd.less', lang: 'less' },
    { src: '@/assets/_ant-design.less', lang: 'less' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
  ],

  /*
  ** Router configuration
  */
  router: {

  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Use dedicated .babelrc file (needed for Jest)
    */
    babelrc: true,

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
