<template>
  <PageLayout class="prestation">
    <template #header>
      <BaseButton
        class="prestation_navigation-link"
        :route="{ name: 'prestationInfos' }"
        color="#222"
      >
        Infos
      </BaseButton>
      <BaseButton
        class="prestation_navigation-link"
        :route="{ name: 'prestationGallery' }"
        color="#222"
      >
        Galerie
      </BaseButton>
    </template>
    <RouterView />
  </PageLayout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout'

function routeGuard (to, from, next) {
  const allowed = ['mariages', 'portraits', 'familles-couples']
  if (allowed.includes(to.params.prestation)) {
    return next()
  }
  next({ name: 'home' })
}

export default {
  components: {
    PageLayout
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
