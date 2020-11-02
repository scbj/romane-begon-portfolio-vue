<template>
  <ThemeStyle reactive>
    <PageLayout
      slot-scope="{ theme }"
      class="prestation"
      :background="backgroundColor"
    >
      <template #header>
        <BaseButton
          class="prestation_navigation-link"
          :route="{ name: 'prestationInfos' }"
          :style="theme"
        >
          Infos
        </BaseButton>
        <BaseButton
          class="prestation_navigation-link"
          :route="{ name: 'prestationGallery' }"
          :style="theme"
        >
          Galerie
        </BaseButton>
      </template>
      <RouterView />
    </PageLayout>
  </ThemeStyle>
</template>

<script>
import { get } from 'vuex-pathify'

import PageLayout from '@/layouts/PageLayout'
import ThemeStyle from '@/components/ThemeStyle'

function routeGuard (to, from, next) {
  const allowed = ['mariages', 'portraits', 'familles-couples']
  if (allowed.includes(to.params.prestation)) {
    return next()
  }
  next({ name: 'home' })
}

export default {
  components: {
    PageLayout,
    ThemeStyle
  },

  computed: {
    themeMode: get('ui/theme@mode'),

    backgroundColor () {
      return this.themeMode === 'dark' ? '#0e0e0e' : 'white'
    }
  },

  beforeRouteUpdate: routeGuard,
  beforeRouteEnter: routeGuard
}
</script>

<style lang="scss" scoped>
.prestation {
  display: flex;
  flex-direction: column;
}

.prestation__header {
  align-self: flex-end;
}

.prestation_navigation-link {
  color: var(--text-color);
  opacity: .4;
  margin-right: 1rem;
  position: relative;

  &.exact-active {
    opacity: 1;

    &::after {
      content: '';
      position: absolute;
      width: 2rem;
      height: 1px;
      background: currentColor;
      top: 100%;
      left: 0;
    }
  }
}
</style>
