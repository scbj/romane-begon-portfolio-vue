import { make } from 'vuex-pathify'

export const state = {
  galleries: []
}

export const getters = {
  sortedGalleries (state) {
    return [...state.galleries].sort((a, b) => b.date - a.date)
  }
}

export const mutations = make.mutations(state)

export const actions = {
  async loadLumysGalleries ({ commit }) {
    try {
      const response = await fetch('https://lumys.photo/api/widget?apiKey=2a6tjhvypa0cz50h')
      const { message, galleries } = await response.json()

      if (message === 'ok' && galleries.length) {
        const createGallery = item => ({
          coverPhoto: `https://romanebegon.lumys.photo/api/photos/coverPhoto/${item._id}?thumb=1`,
          url: `https://romanebegon.lumys.photo/${item.url}`,
          label: item.eventName,
          date: new Date(item.eventDateString)
        })
        commit('SET_GALLERIES', galleries.map(createGallery))
      }
    } catch (error) {

    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
