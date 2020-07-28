<template>
  <DefaultLayout :options="layoutOptions">
    <SectionStartup @visible="keepOnlySocialLinks()" />
    <template v-for="(prestation, index) in prestations">
      <SectionPrestation
        :key="index"
        :bg-image="prestation.backgroundImage"
        :bg-position="prestation.backgroundPosition"
        :overlay="prestation.overlay"
        :title="prestation.title"
        :description="prestation.description"
        :to="slugifyPrestationParam(prestation.title)"
        @visible="showAllComponents()"
      />
    </template>
    <SectionAbout @visible="freeSideSpaces()" />
    <SectionContact @visible="foo()" />
    <SectionClientArea @visible="freeSideSpaces()" />
  </DefaultLayout>
</template>

<script>
import { sync } from 'vuex-pathify'

import DefaultLayout from '@/layouts/DefaultLayout'

import SectionAbout from '@/components/SectionAbout'
import SectionClientArea from '@/components/SectionClientArea'
import SectionContact from '@/components/SectionContact'
import SectionPrestation from '@/components/SectionPrestation'
import SectionStartup from '@/components/SectionStartup'

import data from '@/assets/data/home.json'
import { slugifyPrestationParam } from '@/router/routes'

export default {
  components: {
    SectionAbout,
    DefaultLayout,
    SectionClientArea,
    SectionContact,
    SectionPrestation,
    SectionStartup
  },

  data () {
    return {
      layoutOptions: {
        hideScrollProgress: true,
        hideSocialLinks: false,
        hideWebsiteTitle: false
      }
    }
  },

  computed: {
    themeMode: sync('ui/theme@mode'),

    prestations () {
      return data.prestations
    }
  },

  methods: {
    slugifyPrestationParam,

    onVisiblityChanged (isVisible) {
      this.layoutOptions.hideScrollProgress = !isVisible
    },

    freeSideSpaces () {
      this.layoutOptions.hideScrollProgress = true
      this.layoutOptions.hideSocialLinks = true
      this.layoutOptions.hideWebsiteTitle = false
      this.themeMode = 'light'
    },

    keepOnlySocialLinks () {
      this.layoutOptions.hideScrollProgress = true
      this.layoutOptions.hideSocialLinks = false
      this.layoutOptions.hideWebsiteTitle = true
      this.themeMode = 'dark'
    },

    showAllComponents () {
      this.layoutOptions.hideScrollProgress = false
      this.layoutOptions.hideSocialLinks = false
      this.layoutOptions.hideWebsiteTitle = false
      this.themeMode = 'dark'
    },

    foo () {
      this.layoutOptions.hideScrollProgress = false
      this.layoutOptions.hideSocialLinks = false
      this.layoutOptions.hideWebsiteTitle = true
      this.themeMode = 'dark'
    }
  }
}
</script>
