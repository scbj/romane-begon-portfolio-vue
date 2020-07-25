<template>
  <content class="prestation-gallery">
    <div class="prestation-gallery__grid" :style="columnStyle">
      <div
        v-for="(column, index) in columns"
        :key="index"
        class="prestation-gallery__grid-column"
      >
        <div
          v-for="(src, idexY) in column"
          :key="idexY"
          class="prestation-gallery__grid-photo"
        >
          <BaseImage
            content
            :src="`${src}-/resize/330x/`"
            alt="Photo"
          />
        </div>
      </div>
    </div>
  </content>
</template>

<script>
import responsive from '@/mixins/responsive'

const columnPropertiesMap = [
  {
    breakpoint: 'large',
    columnCount: 4,
    columnWidth: '25%'
  },
  {
    breakpoint: 'small',
    columnCount: 3,
    columnWidth: '33.33%'
  },
  {
    columnCount: 2,
    columnWidth: '50%'
  }
]

export default {
  mixins: [responsive],

  data () {
    return {
      photos: []
    }
  },

  computed: {
    columnProperties () {
      return columnPropertiesMap.find(prop => this.gte(prop.breakpoint)) || columnPropertiesMap[columnPropertiesMap.length - 1]
    },

    columnCount () {
      return this.columnProperties.columnCount
    },

    columns () {
      return this.photos.reduce((acc, item, index) => {
        const accIndex = Math.floor(index * (this.columnCount) / this.photos.length)
        acc[accIndex].push(item)
        return acc
      }, new Array(this.columnCount).fill(0).map(_ => []))
    },

    columnStyle () {
      return {
        '--column-width': this.columnProperties.columnWidth
      }
    }
  },

  async mounted () {
    const mariages = () => import('@/assets/data/galleries/mariages.json')
    const portraits = () => import('@/assets/data/galleries/portraits.json')
    const famillesCouples = () => import('@/assets/data/galleries/familles-couples.json')
    switch (this.$route.params.prestation) {
      case 'mariages':
        this.photos = Object.values(await mariages())
        break
      case 'portraits':
        this.photos = Object.values(await portraits())
        break
      case 'familles-couples':
        this.photos = Object.values(await famillesCouples())
        break
    }
    this.photos = this.photos.slice(0, this.photos.length - 1)
  }
}
</script>

<style lang="scss" scoped>
.prestation-gallery__list {
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
  margin: auto;
  margin-top: 4rem;
  max-width: 140rem; */
}

.prestation-gallery__photo {
  /* border-radius: 0.4rem;
  overflow: hidden; */
}

.prestation-gallery__grid {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 4rem;
  max-width: 140rem;
}

.prestation-gallery__grid-column {
  flex: var(--column-width, 25%);
  max-width: var(--column-width, 25%);
  padding: 0 1rem;

  &:nth-child(even) {
    margin-top: 3rem;
  }
}

.prestation-gallery__grid-photo {
  margin: 2rem 0;
  border-radius: 0.4rem;
  overflow: hidden;

  img {
    /* Remove undesired whitespace below <img> tags */
    display: block;
  }
}
</style>
