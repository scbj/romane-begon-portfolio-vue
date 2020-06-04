<template>
  <Intersect :treshold="[0.1, 0.5, 0.9]" @enter="onEnter">
    <ClientAreaPreviewLayout class="client-area-preview">
      <template v-slot:left>
        <div>
          Some left text
        </div>
      </template>
      <template v-slot:right>
        <div>
          And right content
        </div>
      </template>
    </ClientAreaPreviewLayout>
  </Intersect>
</template>

<script>
import { call } from 'vuex-pathify'
import Intersect from 'vue-intersect'

import ClientAreaPreviewLayout from '@/layouts/ClientAreaPreviewLayout'

export default {
  components: {
    ClientAreaPreviewLayout,
    Intersect
  },

  mounted () {
    this.loadLumysGalleries()
  },

  methods: {
    loadLumysGalleries: call('clientArea/loadLumysGalleries'),

    onEnter (entry) {
      if (entry[0].intersectionRatio > 0.2) {
        this.$emit('visible')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
