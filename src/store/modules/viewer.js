import { make } from 'vuex-pathify'

import { preload } from '@/utils/image'

export const state = {
  activePhoto: '',
  activeIndex: 0,
  pending: false,
  photos: []
}

export const mutations = make.mutations(state)

export const actions = {
  open ({ commit, dispatch }, { photos, activePhoto }) {
    commit('SET_PHOTOS', photos)
    commit('ui/SET_IS_VIEWER_ACTIVE', true, { root: true })
    dispatch('updateActive', activePhoto)
    window.location = '#visualiseur'
    window.onhashchange = () => {
      if (!window.location.hash) {
        commit('ui/SET_IS_VIEWER_ACTIVE', false, { root: true })
      }
    }
  },

  async updateActive ({ commit, state }, payload) {
    const index = typeof payload === 'string' ? Math.max(0, state.photos.indexOf(payload)) : payload
    const photo = state.photos[index]
    commit('SET_PENDING', true)
    await preload(photo)
    commit('SET_PENDING', false)
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