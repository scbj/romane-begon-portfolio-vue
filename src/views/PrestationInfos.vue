<template>
  <content class="prestation-infos">
    <MariagesContent />
  </content>
</template>

<script>
import mariages from '@/assets/data/prestations/mariages.md'
import '@/assets/styles/markdown.scss'

export default {
  components: {
    MariagesContent: mariages.vue.component
  }
}
</script>
