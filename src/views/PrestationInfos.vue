<template>
  <content class="prestation-infos">
    <component :is="content2.vue.component" v-if="content2" />
  </content>
</template>

<script>
import '@/assets/styles/markdown.scss'

export default {
  data () {
    return {
      content2: null
    }
  },

  async mounted () {
    const mariages = () => import('@/assets/data/prestations/mariages.md')
    const portraits = () => import('@/assets/data/prestations/portraits.md')
    const famillesCouples = () => import('@/assets/data/prestations/familles-couples.md')
    switch (this.$route.params.prestation) {
      case 'mariages':
        this.content2 = await mariages()
        break
      case 'portraits':
        this.content2 = await portraits()
        break
      case 'familles-couples':
        this.content2 = await famillesCouples()
        break
    }
  }
}
</script>
