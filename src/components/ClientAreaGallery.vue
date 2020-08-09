<template>
  <div class="client-area-gallery">
    <BaseImage
      content
      aspect-ratio="13:9"
      class="client-area-gallery__cover"
      :src="gallery.coverPhoto"
      :alt="gallery.label"
    />
    <div>
      <TextTitle small class="client-area-gallery__label">
        {{ gallery.label }}
      </TextTitle>
    </div>
    <a
      class="client-area-gallery__link"
      :href="gallery.url"
      target="_blank"
    />
  </div>
</template>

<script>
import TextTitle from '@/components/TextTitle'

export default {
  components: {
    TextTitle
  },

  props: {
    gallery: {
      type: Object,
      required: true
    }
  },

  computed: {
    cssVariables () {
      return {
        '--bg-image': `url(${this.gallery.coverPhoto})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.client-area-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.client-area-gallery__cover {
  border-radius: 0.222rem;
  overflow: hidden;
}

.client-area-gallery__label {
  color: var(--dark-color-2);
  padding: 1em;
  padding-bottom: 0;
  font-weight: 500;
}

.client-area-gallery__link {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>
