<template>
  <div class="prestation-infos">
    <component :is="content3 || content2.vue.component" v-if="content3 || content2" />
    <PrestationContact />
  </div>
</template>

<script>
import store from '@/store'

import '@/assets/styles/markdown.scss'

import PrestationContact from '@/components/PrestationContact'
import WeddingsInfos from '@/components/WeddingsInfos'

function routeGuard (to, from, next) {
  store.set('ui/theme@mode', 'light')
  return next()
}

export default {
  components: {
    PrestationContact
  },

  data () {
    return {
      content2: null,
      content3: null
    }
  },

  async mounted () {
    const portraits = () => import('@/assets/data/prestations/portraits.md')
    const famillesCouples = () => import('@/assets/data/prestations/familles-couples.md')
    switch (this.$route.params.prestation) {
      case 'mariages':
        this.content3 = WeddingsInfos
        break
      case 'portraits':
        this.content2 = await portraits()
        break
      case 'familles-couples':
        this.content2 = await famillesCouples()
        break
    }
  },

  beforeRouteUpdate: routeGuard,
  beforeRouteEnter: routeGuard
}
</script>
