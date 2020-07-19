<template>
  <GoBackLayout class="prestation">
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
  </GoBackLayout>
</template>

<script>
import GoBackLayout from '@/layouts/GoBackLayout'

function routeGuard (to, from, next) {
  const allowed = ['mariages', 'portraits', 'familles-couples']
  if (allowed.includes(to.params.prestation)) {
    return next()
  }
  next({ name: 'home' })
}

export default {
  components: {
    GoBackLayout
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
  opacity: .7;

  &.active {
    opacity: 1;
  }
}
</style>
