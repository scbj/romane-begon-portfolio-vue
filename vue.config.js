// const Mode = require('frontmatter-markdown-loader/mode')
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Mode = require('frontmatter-markdown-loader/mode')

const configuration = {
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
      .loader('frontmatter-markdown-loader')
      .tap(options => {
        return {
          mode: [Mode.VUE_COMPONENT],
          vue: {
            root: 'markdown-body'
          }
        }
      })
  }
}

if (process.env.NODE_ENV === 'production') {
  configuration.configureWebpack = {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: ['/'/* , '/about', '/article/1', '/article/2', '/article/3' */]
      })
    ]
  }
}

module.exports = configuration
