import { make } from 'vuex-pathify'

const SET_IS_MENU_ACTIVE = 'SET_IS_MENU_ACTIVE'

export const state = {
  isMenuActive: false,
  shouldMenuActive: false,
  isViewerActive: false,
  theme: {
    mode: 'dark'
  }
}

export const mutations = make.mutations(state)

export const actions = {
  openMenu ({ commit, dispatch }) {
    commit(SET_IS_MENU_ACTIVE, true)
    window.location = '#menu'
    window.onhashchange = () => {
      if (!window.location.hash) {
        dispatch('closeMenu')
        // TODO: unsubscribe onhashchange
      }
    }
  },

  closeMenu ({ commit }) {
    commit(SET_IS_MENU_ACTIVE, false)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
