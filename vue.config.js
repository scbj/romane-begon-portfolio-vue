const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

const production = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: ['/'/* , '/about', '/article/1', '/article/2', '/article/3' */]
      })
    ]
  }
}

module.exports = process.env.NODE_ENV === 'production' ? production : {}
