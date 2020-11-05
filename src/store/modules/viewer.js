import { make } from 'vuex-pathify'

export const state = {
  activePhoto: '',
  activeIndex: 0,
  photos: []
}

export const mutations = make.mutations(state)

export const actions = {
  open ({ commit }, { photos, activePhoto }) {
    const index = Math.max(0, photos.indexOf(activePhoto))
    commit('SET_ACTIVE_INDEX', index)
    commit('SET_ACTIVE_PHOTO', activePhoto)
    commit('SET_PHOTOS', photos)
    commit('ui/SET_IS_VIEWER_ACTIVE', true, { root: true })
    window.location = '#visualiseur'
    window.onhashchange = () => {
      if (!window.location.hash) {
        commit('ui/SET_IS_VIEWER_ACTIVE', false, { root: true })
      }
    }
  },

  updateActive ({ commit, state }, index) {
    const photo = state.photos[index]
    commit('SET_ACTIVE_INDEX', index)
    commit('SET_ACTIVE_PHOTO', photo)
  },

  previous ({ dispatch, state }) {
    const index = state.activeIndex - 1
    dispatch('updateActive', index)
  },

  next ({ dispatch, state }) {
    const index = state.activeIndex + 1
    dispatch('updateActive', index)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
