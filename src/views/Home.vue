<template>
  <DefaultLayout>
    <SectionStartup />
    <template v-for="(prestation, index) in prestations">
      <SectionPrestation
        :key="index"
        :bg-image="prestation.backgroundImage"
        :bg-position="prestation.backgroundPosition"
        :overlay="prestation.overlay"
        :title="prestation.title"
        :description="prestation.description"
        :to="slugifyPrestationParam(prestation.title)"
      />
    </template>
    <SectionAbout />
    <SectionContact />
    <SectionClientArea />
  </DefaultLayout>
</template>

<script>
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

  computed: {
    prestations () {
      return data.prestations
    }
  },

  methods: {
    slugifyPrestationParam
  }
}
</script>
