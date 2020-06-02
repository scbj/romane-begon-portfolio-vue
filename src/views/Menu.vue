<template>
  <MenuLayout class="menu">
    <template v-slot:left>
      <MenuCover />
    </template>
    <template v-slot:right>
      <div class="content-wrapper">
        <WebsiteMark class="mark" />
        <ListView :items="navigationLinks" class="navigation-list">
          <template v-slot:item="{ item }">
            <MenuLink :route="item.path">
              {{ item.label }}
            </MenuLink>
          </template>
        </ListView>
        <SocialLinks class="social" />
        <CopyrightStatement class="copyright" />
        <BaseButton class="credits">
          CREDITS
        </BaseButton>
      </div>
    </template>
  </MenuLayout>
</template>

<script>
import CopyrightStatement from '@/components/CopyrightStatement'
import ListView from '@/components/ListView'
import MenuCover from '@/components/MenuCover'
import MenuLayout from '@/layouts/MenuLayout'
import MenuLink from '@/components/MenuLink'
import SocialLinks from '@/components/SocialLinks'
import WebsiteMark from '@/components/WebsiteMark'

import { navigationLinks } from '@/assets/data/menu'

export default {
  components: {
    CopyrightStatement,
    ListView,
    MenuCover,
    MenuLayout,
    MenuLink,
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

.menu {
  color: var(--color-light-1);
  background: var(--color-dark-1);
}

.content-wrapper {
  display: grid;
  grid-template-rows: auto 1fr repeat(2, auto);
  grid-template-columns: 1fr;
  grid-template-areas:
    "mark"
    "nav"
    "social"
    "footer";
}

.mark {
  grid-area: mark;
}

.navigation-list {
  grid-area: nav;
  align-self: center;

  display: grid;
  grid-auto-rows: auto;
  gap: 0.3rem;
}

.mark,
.navigation-list {
  justify-self: center;

  @media screen and (min-width: $extraLarge) {
    justify-self: left;
  }
}

.social {
  grid-area: social;
  margin-bottom: 4rem;
}

.copyright,
.credits {
  grid-area: footer;
}

.credits {
  align-self: end;
  justify-self: end;
}

</style>
