<template>
  <div class="navigation-menu-panel">
    <WebsiteMark class="navigation-menu-panel__mark" />
    <ListView :items="navigationLinks" class="navigation-menu-panel__list">
      <template #item="{ item }">
        <a :href="item.path" class="navigation-menu-panel__link">
          {{ item.label }}
        </a>
      </template>
    </ListView>
    <SocialLinks class="navigation-menu-panel__social" />
    <CopyrightStatement class="navigation-menu-panel__copyright" />
    <BaseButton
      class="navigation-menu-panel__credits"
      color="white"
      text="CREDITS"
    />
  </div>
</template>

<script>
import CopyrightStatement from '@/components/CopyrightStatement'
import ListView from '@/components/ListView'
import SocialLinks from '@/components/SocialLinks'
import WebsiteMark from '@/components/WebsiteMark'

import { navigationLinks } from '@/assets/data/menu'

export default {
  components: {
    CopyrightStatement,
    ListView,
    SocialLinks,
    WebsiteMark
  },

  computed: {
    navigationLinks: () => navigationLinks
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.navigation-menu-panel {
  display: grid;
  grid-template-rows: auto 1fr repeat(2, auto);
  grid-template-columns: 1fr;
  grid-template-areas:
    "mark"
    "nav"
    "social"
    "footer";
  padding: 5rem;

  @media screen and (min-width: $extraLarge) {
    padding-bottom: 6vh;
    padding-left: 110px;
    padding-right: 68px;
    padding-top: 14vh;
  }
}

.navigation-menu-panel__mark {
  grid-area: mark;
}

.navigation-menu-panel__list {
  grid-area: nav;
  align-self: center;

  display: grid;
  grid-auto-rows: auto;
  gap: 0.3rem;
}

.navigation-menu-panel__mark,
.navigation-menu-panel__list {
  justify-self: center;

  @media screen and (min-width: $extraLarge) {
    justify-self: left;
  }
}

.navigation-menu-panel__social {
  grid-area: social;
  margin-bottom: 4rem;
}

.navigation-menu-panel__copyright,
.navigation-menu-panel__credits {
  grid-area: footer;
}

.navigation-menu-panel__credits {
  align-self: end;
  justify-self: end;
}

.navigation-menu-panel__link {
  font-size: 5.8rem;
  font-weight: 500;
  font-family: "Orpheus Pro", serif;
  line-height: 1.64em;
  letter-spacing: 0.05207em;
}
</style>
