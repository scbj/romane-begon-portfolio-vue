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
          INFOS
        </BaseButton>
        <BaseButton
          class="prestation_navigation-link"
          :route="{ name: 'prestationGallery' }"
          :style="theme"
        >
          GALERIE
        </BaseButton>
      </template>
      <Transition name="fade" mode="out-in">
        <KeepAlive>
          <RouterView />
        </KeepAlive>
      </Transition>
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
@import '@/assets/styles/_animations.scss';

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

.fade-enter-active,
.fade-leave-active {
  animation: push-in 300ms $easing;
}

.fade-leave-active {
  animation-direction: reverse;
}

@keyframes push-in {
  from {
    opacity: 0;
    transform: translateX(2em) translateY(.5em);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}
</style>
