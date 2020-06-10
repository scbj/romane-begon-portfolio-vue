<template>
  <div class="lumys-gallery" :style="cssVariables">
    <div class="lumys-gallery__cover">
      <BaseImage
        background
        class="lumys-gallery__cover-image"
        :src="gallery.coverPhoto"
      />
    </div>
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
  padding-top: 60%;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.lumys-gallery__cover-image {
  object-fit: cover;
  object-position: top;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transition: all .3s ease-out;
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
