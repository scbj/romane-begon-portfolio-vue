<template>
  <StaticTheme :mode="mode">
    <template v-slot:default="props">
      <slot v-bind="props" />
    </template>
  </StaticTheme>
</template>

<script>
import { get } from 'vuex-pathify'

import StaticTheme from '@/components/StaticTheme'

export default {
  components: {
    StaticTheme
  },
  computed: {
    mode: get('ui/theme@mode')
  }
}
</script>
