<script>
import { url } from '@/utils/css'

export default {
  props: {
    alt: {
      type: String,
      default: ''
    },
    content: {
      type: Boolean,
      default: false
    },
    aspectRatio: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      source: ''
    }
  },

  computed: {
    aspectRatioPercent () {
      const sizes = this.aspectRatio.split(':')
      return Number(sizes[1]) / Number(sizes[0]) * 100
    }
  },

  watch: {
    src: {
      immediate: true,
      async handler (src) {
        if (await this.preloadImage(src)) {
          this.source = src
        }
      }
    }
  },

  methods: {
    /**
     * Preload the specified image and return true if successful.
     * @param {String} src The image source
     */
    preloadImage (src) {
      return new Promise((resolve, reject) => {
        if (!src) return resolve(false)
        const image = new Image()
        image.onload = () => resolve(true)
        image.onerror = () => resolve(false)
        image.src = src
      })
    }
  },

  render () {
    if (!this.source) {
      // Create CSS variables to store the aspect ratio percentage
      const style = { '--aspect-ratio': `${this.aspectRatioPercent}%` }
      return <div class="base-image base-image--container base-image--pending" style={style}></div>
    }

    const ContentImage = ({ data }) =>
      <img
        {...data}
        src={this.source}
        alt={this.alt}>
      </img>
    const BackgroundImage = ({ data }) =>
      <div
        {...data}
        style={{
          '--bg-src': url(this.source)
        }}>
      </div>

    const createImageComponent = (className) =>
      this.content
        ? <ContentImage class={`${className} ${className}--content-image`} />
        : <BackgroundImage class={`${className} ${className}--background-image`} />

    if (this.aspectRatio) {
      // Create CSS variables to store the aspect ratio percentage
      const style = { '--aspect-ratio': `${this.aspectRatioPercent}%` }
      return (
        <div class="base-image base-image--container" style={style}>
          { createImageComponent('base-image__image') }
        </div>
      )
    } else {
      // Use children as root component
      return createImageComponent('base-image')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-image {
  width: 100%;
}

.base-image--background-image {
  background: var(--bg-src);
  background-size: cover;
}

.base-image--container {
  padding-top: var(--aspect-ratio);
  position: relative;
}

.base-image--container .base-image__image {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &.base-image__image--content-image {
    object-fit: cover;
    object-position: top;
  }

  &.base-image__image--background-image {
    background-size: cover;
  }
}

.base-image--pending {
  $color: #f7f7f7;
  background: linear-gradient(
    to right,
    $color 0%,
    $color 30%,
    darken($color, 3%) 50%,
    $color 70%,
    $color 100%
  );
  background-size: 300% 100%;
  background-position-x: 100%;
  animation: gradient 1.2s ease-out infinite;
}

@keyframes gradient {
  0% {
    background-position-x: 100%
  }
  100% {
    background-position-x: 0%
  }
}
</style>
