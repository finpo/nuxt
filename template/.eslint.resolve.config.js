const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
/**
 * 設定 webpack import 前綴解析真實路徑
 * 參考來源: https://github.com/nuxt/nuxt.js/blob/master/lib/webpack/base.config.js
 * 需依照 NUXT.js 的專案結構調整
 * author: Ausir
 * 2017-3-12
 */
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '~': resolve(''),
      static: resolve('static'),
      '~static': resolve('static'),
      assets: resolve('assets'),
      '~assets': resolve('assets'),
      '~plugins': resolve('plugins'),
      '~store': resolve('.nuxt/store'),
      '~router': resolve('.nuxt/router'),
      '~pages': resolve('pages'),
      '~components': resolve('components'),
    },
  },
};