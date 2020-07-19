<template>
  <DefaultLayout :options="layoutOptions">
    <StartupSection @visible="keepOnlySocialLinks()" />
    <template v-for="(prestation, index) in prestations">
      <PrestationPreviewSection
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
    <ClientAreaPreviewSection @visible="freeSideSpaces()" />
  </DefaultLayout>
</template>

<script>
import { sync } from 'vuex-pathify'

import DefaultLayout from '@/layouts/DefaultLayout'

import ClientAreaPreviewSection from '@/components/ClientAreaPreviewSection'
import PrestationPreviewSection from '@/components/PrestationPreviewSection'
import StartupSection from '@/components/StartupSection'

import data from '@/assets/data/home.json'
import { slugifyPrestationParam } from '@/router/routes'

export default {
  components: {
    DefaultLayout,
    ClientAreaPreviewSection,
    PrestationPreviewSection,
    StartupSection
  },

  data () {
    return {
      layoutOptions: {
        hideScrollProgress: true,
        hideSocialLinks: false,
        hideWebsiteMark: false
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
      this.layoutOptions.hideWebsiteMark = false
      this.themeMode = 'light'
    },

    keepOnlySocialLinks () {
      this.layoutOptions.hideScrollProgress = true
      this.layoutOptions.hideSocialLinks = false
      this.layoutOptions.hideWebsiteMark = true
      this.themeMode = 'dark'
    },

    showAllComponents () {
      this.layoutOptions.hideScrollProgress = false
      this.layoutOptions.hideSocialLinks = false
      this.layoutOptions.hideWebsiteMark = false
      this.themeMode = 'dark'
    }
  }
}
</script>
