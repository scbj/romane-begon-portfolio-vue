<template>
  <HomeLayout class="home">
    <template v-slot:content>
      <Startup
        v-for="(n, index) of 4"
        :key="index"
        :style="`z-index: ${n}`"
      />
    </template>
    <template v-slot:top>
      <WebsiteMark class="mark" />
    </template>
    <template v-slot:right>
      <SocialLinks orientation="vertical" />
    </template>
    <template v-slot:bottom>
      <span class="home__scroll-down">DÉFILER VERS LE BAS</span>
    </template>
  </HomeLayout>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout'
import SocialLinks from '@/components/SocialLinks'
import Startup from '@/views/Startup'
import WebsiteMark from '@/components/WebsiteMark'

export default {
  components: {
    HomeLayout,
    SocialLinks,
    Startup,
    WebsiteMark
  }
}
</script>

<style lang="scss" scoped>
.home__scroll-down {
  font-family: 'TT Commons';
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  line-height: 2.667em;
  color: var(--color-light-1);
  opacity: .87;
}
</style>
