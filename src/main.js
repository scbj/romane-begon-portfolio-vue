import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import VueMq from 'vue-mq'
import VueSVGIcon from 'vue-svgicon'

import { fr } from '../lib/vue-formulate-i18n/fr..min'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/icons'
import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss'

Vue.config.productionTip = false

Vue.use(VueFormulate, {
  plugins: [fr],
  locale: 'fr'
})

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

Vue.use(VueSVGIcon, {
  tagName: 'SvgIcon'
})

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
