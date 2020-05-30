<template>
  <HomeLayout>
    <template v-slot:content>
      <StartupParallax
        v-for="(n, index) of 4"
        :key="index"
        :style="`z-index: ${n}`"
      />
    </template>
    <template v-slot:fixed>
      <SocialLinks orientation="vertical" />
    </template>
  </HomeLayout>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout'
import SocialLinks from '@/components/SocialLinks'
import StartupParallax from '@/views/StartupParallax'

export default {
  components: {
    HomeLayout,
    SocialLinks,
    StartupParallax
  }
}
</script>

<style lang="scss" scoped>
.home__social {
  background: red;
  height: 160px;
  width: 30px;
}
</style>
