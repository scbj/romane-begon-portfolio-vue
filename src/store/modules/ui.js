import { make } from 'vuex-pathify'

const SET_IS_MENU_ACTIVE = 'SET_IS_MENU_ACTIVE'
const SET_IS_VIEWER_ACTIVE = 'SET_IS_VIEWER_ACTIVE'

export const state = {
  isMenuActive: false,
  isViewerActive: false,
  homeScrollTop: 0,
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
  },

  closeViewer ({ commit }) {
    commit(SET_IS_VIEWER_ACTIVE, false)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
