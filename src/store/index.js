import Vue from 'vue'
import Vuex from 'vuex'
import VuexPathify from 'vuex-pathify'

import * as modules from '@/store/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [
    VuexPathify.plugin
  ]
})
