<template>
  <div class="lumys-gallery">
    <BaseImage
      content
      aspect-ratio="15:9"
      class="lumys-gallery__cover"
      :src="gallery.coverPhoto"
      :alt="gallery.label"
    />
    <div>
      <TextTitle small class="lumys-gallery__label">
        {{ gallery.label }}
      </TextTitle>
    </div>
    <a
      class="lumys-gallery__link"
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
.lumys-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:hover .lumys-gallery__cover-image {
    opacity: .8;
    transform: scale(1.04);
    transition-duration: .8s;
  }
}

.lumys-gallery__cover {
  border-radius: 0.6rem;
  overflow: hidden;
}

.lumys-gallery__label {
  color: var(--dark-color-2);
  padding: 1em;
  padding-bottom: 0;
}

.lumys-gallery__link {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>
