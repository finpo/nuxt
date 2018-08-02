module.exports = {
  /**
   * 如果放置的空間在資料夾內請修改 base
   */
  router: {
    base: '/',
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-Hant',
    },
    title: '{{ name }}',
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '{{ name }}' },
      { hid: 'description', name: 'description', content: '{{ description }}' },
    ],
    script: [],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    { src: 'bootstrap/dist/css/bootstrap-reboot.css' },
    { src: 'bootstrap/dist/css/bootstrap-grid.css' },
    { src: '~/assets/css/main.styl', lang: 'stylus' },
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            /* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
            formatter: require('eslint-friendly-formatter'), // eslint-disable-line global-require
          },
        });
      }
    },
  },
  plugins: [],
};
