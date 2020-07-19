<template>
  <GoBackLayout class="prestation">
    <template #header>
      <RouterLink :to="{ name: 'prestationInfos' }">
        Infos
      </RouterLink>
      <RouterLink :to="{ name: 'prestationGallery' }">
        Galerie
      </RouterLink>
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
</style>
