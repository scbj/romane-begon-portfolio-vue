import { make } from 'vuex-pathify'

import { preload } from '@/utils/image'

export const state = {
  activePhoto: '',
  activeIndex: 0,
  pending: false,
  photos: []
}

export const getters = {
  canGoNext (state) {
    return state.activeIndex < state.photos.length - 1
  },

  canGoPrevious (state) {
    return state.activeIndex > 0
  }
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
    const size = Math.min(Math.max(window.innerHeight, window.innerWidth), 3000)
    const resizing = window.innerHeight > window.innerWidth
      ? `x${size}`
      : `${size}x`
    const optimizedPhoto = `${photo}-/format/webp/-/quality/normal/-/resize/${resizing}/`
    await preload(optimizedPhoto)
    commit('SET_PENDING', false)
    commit('SET_ACTIVE_INDEX', index)
    commit('SET_ACTIVE_PHOTO', optimizedPhoto)
  },

  previous ({ dispatch, getters, state }) {
    if (!getters.canGoPrevious) {
      return
    }
    const index = state.activeIndex - 1
    dispatch('updateActive', index)
  },

  next ({ dispatch, getters, state }) {
    if (!getters.canGoNext) {
      return
    }
    const index = state.activeIndex + 1
    dispatch('updateActive', index)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
