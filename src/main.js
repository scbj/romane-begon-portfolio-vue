import Vue from 'vue'
import VueMq from 'vue-mq'
import VueSVGIcon from 'vue-svgicon'

import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icons'

Vue.config.productionTip = false

// Install vue-mq and initialize breakpoints.
Vue.use(VueMq, {
  breakpoints: {
    extraSmall: 576,
    small: 768,
    medium: 992,
    large: 1200,
    extraLarge: Infinity
  }
})

Vue.use(VueSVGIcon)

// Import all base components
const requireComponent = require.context('./components', true, /Base[A-Z]/)
requireComponent.keys().forEach((fileName) => {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  Vue.component(baseComponentName, baseComponentConfig)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
