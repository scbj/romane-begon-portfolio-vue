<template>
  <div class="app-viewer">
    <div class="app-viewer__counter">
      {{ activeIndex + 1 }} / {{ photos.length }}
    </div>
    <div class="app-viewer__carousel">
      <img class="app-viewer__image" :src="image(activePhoto, 1280)">
    </div>
    <div class="app-viewer__thumbnails">
      <img
        v-for="(photo, index) in photos"
        :key="index"
        :src="image(photo, 200)"
        class="app-viewer__thumbnail"
        @click="() => updateActive(index)"
      >
    </div>
    <div class="app-viewer__controls">
      <div class="icon-sun" />
      <div class="icon-fullscreen" />
    </div>
    <div class="app-viewer__previous" @click="previous">
      <ThemeStyle reactive>
        <BaseButton
          slot-scope="{ theme }"
          :color="theme['--text-color']"
          :style="theme"
        >
          PREV
        </BaseButton>
      </ThemeStyle>
    </div>
    <div class="app-viewer__next" @click="next">
      <ThemeStyle reactive>
        <BaseButton
          slot-scope="{ theme }"
          :color="theme['--text-color']"
          :style="theme"
        >
          NEXT
        </BaseButton>
      </ThemeStyle>
    </div>
  </div>
</template>

<script>
import { call, get } from 'vuex-pathify'

import ThemeStyle from '@/components/ThemeStyle'

export default {
  components: {
    ThemeStyle
  },

  computed: {
    activeIndex: get('viewer/activeIndex'),
    activePhoto: get('viewer/activePhoto'),
    photos: get('viewer/photos'),

    items () {
      return [
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:55:52.863831Z',
          datetime_uploaded: '2020-07-25T17:55:52.208737Z',
          image_info: {
            color_mode: 'RGB',
            orientation: null,
            format: 'JPEG',
            sequence: false,
            height: 3000,
            width: 4500,
            geo_location: null,
            datetime_original: null,
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/9b47703b-8b24-4d7c-ad17-6696c13634e4/site79.JPG',
          original_filename: 'site79.JPG',
          size: 8773970,
          url: 'https://api.uploadcare.com/files/9b47703b-8b24-4d7c-ad17-6696c13634e4/',
          uuid: '9b47703b-8b24-4d7c-ad17-6696c13634e4',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:55:34.422158Z',
          datetime_uploaded: '2020-07-25T17:55:34.216491Z',
          image_info: {
            color_mode: 'RGB',
            orientation: null,
            format: 'JPEG',
            sequence: false,
            height: 2500,
            width: 1667,
            geo_location: null,
            datetime_original: '2019-07-07T14:21:28',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/a59f8117-f1dc-4dd3-b4a2-3377b429205f/site70.jpg',
          original_filename: 'site70.jpg',
          size: 4059926,
          url: 'https://api.uploadcare.com/files/a59f8117-f1dc-4dd3-b4a2-3377b429205f/',
          uuid: 'a59f8117-f1dc-4dd3-b4a2-3377b429205f',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:54:49.521022Z',
          datetime_uploaded: '2020-07-25T17:54:49.342755Z',
          image_info: {
            color_mode: 'RGB',
            orientation: 1,
            format: 'JPEG',
            sequence: false,
            height: 1534,
            width: 1023,
            geo_location: null,
            datetime_original: '2018-07-08T17:31:45',
            dpi: [
              200,
              200
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/3b53e5ad-91b7-46b4-905b-684512096256/site51.jpg',
          original_filename: 'site51.jpg',
          size: 947847,
          url: 'https://api.uploadcare.com/files/3b53e5ad-91b7-46b4-905b-684512096256/',
          uuid: '3b53e5ad-91b7-46b4-905b-684512096256',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:54:44.989942Z',
          datetime_uploaded: '2020-07-25T17:54:44.780829Z',
          image_info: {
            color_mode: 'RGB',
            orientation: null,
            format: 'JPEG',
            sequence: false,
            height: 2500,
            width: 3750,
            geo_location: null,
            datetime_original: '2018-07-21T14:27:29',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/90468aab-59c1-40d4-af80-45cd09293c2d/site42.jpg',
          original_filename: 'site42.jpg',
          size: 7287057,
          url: 'https://api.uploadcare.com/files/90468aab-59c1-40d4-af80-45cd09293c2d/',
          uuid: '90468aab-59c1-40d4-af80-45cd09293c2d',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:55:10.800447Z',
          datetime_uploaded: '2020-07-25T17:51:33.846207Z',
          image_info: {
            color_mode: 'RGB',
            orientation: null,
            format: 'JPEG',
            sequence: false,
            height: 2969,
            width: 4453,
            geo_location: null,
            datetime_original: '2019-09-22T12:29:16',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/248762f9-fffa-42f0-b8de-414091dd9935/site87.jpg',
          original_filename: 'site87.jpg',
          size: 13894152,
          url: 'https://api.uploadcare.com/files/248762f9-fffa-42f0-b8de-414091dd9935/',
          uuid: '248762f9-fffa-42f0-b8de-414091dd9935',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:52:27.689273Z',
          datetime_uploaded: '2020-07-25T17:52:27.385659Z',
          image_info: {
            color_mode: 'RGB',
            orientation: 1,
            format: 'JPEG',
            sequence: false,
            height: 1622,
            width: 2163,
            geo_location: null,
            datetime_original: '2018-07-08T18:54:21',
            dpi: [
              200,
              200
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/ae2ce2d1-47a1-47ac-9c86-65ff637db2ed/site6.jpg',
          original_filename: 'site6.jpg',
          size: 3318897,
          url: 'https://api.uploadcare.com/files/ae2ce2d1-47a1-47ac-9c86-65ff637db2ed/',
          uuid: 'ae2ce2d1-47a1-47ac-9c86-65ff637db2ed',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:55:28.453795Z',
          datetime_uploaded: '2020-07-25T17:51:33.974437Z',
          image_info: {
            color_mode: 'RGB',
            orientation: 1,
            format: 'JPEG',
            sequence: false,
            height: 3701,
            width: 5551,
            geo_location: null,
            datetime_original: '2019-09-22T12:36:30',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/f951fac3-25c3-447c-854a-3f6ca3268775/site91.jpg',
          original_filename: 'site91.jpg',
          size: 31103158,
          url: 'https://api.uploadcare.com/files/f951fac3-25c3-447c-854a-3f6ca3268775/',
          uuid: 'f951fac3-25c3-447c-854a-3f6ca3268775',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:55:10.800447Z',
          datetime_uploaded: '2020-07-25T17:51:33.846207Z',
          image_info: {
            color_mode: 'RGB',
            orientation: null,
            format: 'JPEG',
            sequence: false,
            height: 2969,
            width: 4453,
            geo_location: null,
            datetime_original: '2019-09-22T12:29:16',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/248762f9-fffa-42f0-b8de-414091dd9935/site87.jpg',
          original_filename: 'site87.jpg',
          size: 13894152,
          url: 'https://api.uploadcare.com/files/248762f9-fffa-42f0-b8de-414091dd9935/',
          uuid: '248762f9-fffa-42f0-b8de-414091dd9935',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:54:41.577149Z',
          datetime_uploaded: '2020-07-25T17:51:33.835286Z',
          image_info: {
            color_mode: 'RGB',
            orientation: 1,
            format: 'JPEG',
            sequence: false,
            height: 3722,
            width: 5583,
            geo_location: null,
            datetime_original: '2019-06-02T15:02:55',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/d0e59773-65c3-46e6-9943-6f88b1a5af9b/site78.jpg',
          original_filename: 'site78.jpg',
          size: 21999089,
          url: 'https://api.uploadcare.com/files/d0e59773-65c3-46e6-9943-6f88b1a5af9b/',
          uuid: 'd0e59773-65c3-46e6-9943-6f88b1a5af9b',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:55:06.436979Z',
          datetime_uploaded: '2020-07-25T17:51:33.832968Z',
          image_info: {
            color_mode: 'RGB',
            orientation: null,
            format: 'JPEG',
            sequence: false,
            height: 3839,
            width: 5758,
            geo_location: null,
            datetime_original: '2019-09-22T12:29:48',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/9b9ee7f5-8301-44a1-b683-396f55ab156f/site88.jpg',
          original_filename: 'site88.jpg',
          size: 19225075,
          url: 'https://api.uploadcare.com/files/9b9ee7f5-8301-44a1-b683-396f55ab156f/',
          uuid: '9b9ee7f5-8301-44a1-b683-396f55ab156f',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:54:45.143663Z',
          datetime_uploaded: '2020-07-25T17:51:33.754470Z',
          image_info: {
            color_mode: 'RGB',
            orientation: 1,
            format: 'JPEG',
            sequence: false,
            height: 3585,
            width: 5377,
            geo_location: null,
            datetime_original: '2019-02-10T18:33:03',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/8e2c0e61-478c-4578-979f-034b05433a77/site86.jpg',
          original_filename: 'site86.jpg',
          size: 16190601,
          url: 'https://api.uploadcare.com/files/8e2c0e61-478c-4578-979f-034b05433a77/',
          uuid: '8e2c0e61-478c-4578-979f-034b05433a77',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:55:14.026508Z',
          datetime_uploaded: '2020-07-25T17:51:33.838143Z',
          image_info: {
            color_mode: 'RGB',
            orientation: 1,
            format: 'JPEG',
            sequence: false,
            height: 3840,
            width: 5760,
            geo_location: null,
            datetime_original: '2019-09-22T12:30:50',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/73b024c7-84aa-4120-973f-7658bf223d3b/site89.jpg',
          original_filename: 'site89.jpg',
          size: 15640575,
          url: 'https://api.uploadcare.com/files/73b024c7-84aa-4120-973f-7658bf223d3b/',
          uuid: '73b024c7-84aa-4120-973f-7658bf223d3b',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:54:45.210942Z',
          datetime_uploaded: '2020-07-25T17:51:33.753245Z',
          image_info: {
            color_mode: 'RGB',
            orientation: 1,
            format: 'JPEG',
            sequence: false,
            height: 3550,
            width: 5325,
            geo_location: null,
            datetime_original: '2019-06-02T20:17:50',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/87323d64-929b-48ac-8614-90ebdb482de1/site85.jpg',
          original_filename: 'site85.jpg',
          size: 16787555,
          url: 'https://api.uploadcare.com/files/87323d64-929b-48ac-8614-90ebdb482de1/',
          uuid: '87323d64-929b-48ac-8614-90ebdb482de1',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:54:42.720112Z',
          datetime_uploaded: '2020-07-25T17:51:33.609520Z',
          image_info: {
            color_mode: 'RGB',
            orientation: null,
            format: 'JPEG',
            sequence: false,
            height: 3840,
            width: 5759,
            geo_location: null,
            datetime_original: '2019-07-08T00:19:42',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/c1cbd3c8-ea40-4939-93ee-a52cd4f66603/site75.jpg',
          original_filename: 'site75.jpg',
          size: 16807681,
          url: 'https://api.uploadcare.com/files/c1cbd3c8-ea40-4939-93ee-a52cd4f66603/',
          uuid: 'c1cbd3c8-ea40-4939-93ee-a52cd4f66603',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:54:44.593975Z',
          datetime_uploaded: '2020-07-25T17:51:33.600008Z',
          image_info: {
            color_mode: 'RGB',
            orientation: 1,
            format: 'JPEG',
            sequence: false,
            height: 3840,
            width: 5760,
            geo_location: null,
            datetime_original: '2019-07-07T23:50:17',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/94511be4-bbed-4597-a477-fed0d884b77d/site74.jpg',
          original_filename: 'site74.jpg',
          size: 12501044,
          url: 'https://api.uploadcare.com/files/94511be4-bbed-4597-a477-fed0d884b77d/',
          uuid: '94511be4-bbed-4597-a477-fed0d884b77d',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:54:43.443160Z',
          datetime_uploaded: '2020-07-25T17:51:33.597153Z',
          image_info: {
            color_mode: 'RGB',
            orientation: 1,
            format: 'JPEG',
            sequence: false,
            height: 3840,
            width: 5760,
            geo_location: null,
            datetime_original: '2019-06-09T19:48:14',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/d412f5a6-5ba1-40b0-ae8b-f99ee3dab86b/site66.jpg',
          original_filename: 'site66.jpg',
          size: 15748590,
          url: 'https://api.uploadcare.com/files/d412f5a6-5ba1-40b0-ae8b-f99ee3dab86b/',
          uuid: 'd412f5a6-5ba1-40b0-ae8b-f99ee3dab86b',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:54:44.001867Z',
          datetime_uploaded: '2020-07-25T17:51:33.593123Z',
          image_info: {
            color_mode: 'RGB',
            orientation: 1,
            format: 'JPEG',
            sequence: false,
            height: 5029,
            width: 3353,
            geo_location: null,
            datetime_original: '2019-06-09T14:10:25',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/ed9437de-eaee-40f1-84ea-dce8af63e899/site64.jpg',
          original_filename: 'site64.jpg',
          size: 11780889,
          url: 'https://api.uploadcare.com/files/ed9437de-eaee-40f1-84ea-dce8af63e899/',
          uuid: 'ed9437de-eaee-40f1-84ea-dce8af63e899',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:54:26.278997Z',
          datetime_uploaded: '2020-07-25T17:51:33.525162Z',
          image_info: {
            color_mode: 'RGB',
            orientation: 1,
            format: 'JPEG',
            sequence: false,
            height: 3643,
            width: 5464,
            geo_location: null,
            datetime_original: '2019-06-09T14:03:06',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/d7d1fe16-c331-4e8a-a6aa-770926518d1e/site60.jpg',
          original_filename: 'site60.jpg',
          size: 13478367,
          url: 'https://api.uploadcare.com/files/d7d1fe16-c331-4e8a-a6aa-770926518d1e/',
          uuid: 'd7d1fe16-c331-4e8a-a6aa-770926518d1e',
          source: null,
          default_effects: ''
        },
        {
          datetime_removed: null,
          datetime_stored: '2020-07-25T17:54:17.794203Z',
          datetime_uploaded: '2020-07-25T17:51:33.480779Z',
          image_info: {
            color_mode: 'RGB',
            orientation: null,
            format: 'JPEG',
            sequence: false,
            height: 3840,
            width: 5760,
            geo_location: null,
            datetime_original: '2019-02-10T18:35:29',
            dpi: [
              300,
              300
            ]
          },
          is_image: true,
          is_ready: true,
          mime_type: 'image/jpeg',
          original_file_url: 'https://ucarecdn.com/31c9b6db-8642-40bf-89a6-64c3c70b86af/site59.jpg',
          original_filename: 'site59.jpg',
          size: 21098757,
          url: 'https://api.uploadcare.com/files/31c9b6db-8642-40bf-89a6-64c3c70b86af/',
          uuid: '31c9b6db-8642-40bf-89a6-64c3c70b86af',
          source: null,
          default_effects: ''
        }
      ]
    }
  },

  methods: {
    next: call('viewer/next'),
    previous: call('viewer/previous'),
    updateActive: call('viewer/updateActive'),

    image (src, dimension) {
      return `${src}/-/resize/${dimension}x/`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars.scss';

.app-viewer {
  color: var(--color-light-1);
  background: var(--color-dark-1);

  $side-size: 8.889rem;
  display: grid;
  grid-template-columns:
    [first carousel-start] minmax(0, 1fr)
    [next-button] minmax(0, 1fr) [carousel-end last];
  grid-template-rows:
    [first controls] 6.722rem
    [carousel-start] 1fr
    [carousel-end] auto [last];
  gap: 0.667rem;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $z-index-app-viewer;

  @media screen and (min-width: $medium) {
    grid-template-columns:
      [first] minmax(8.889rem, auto)
      [carousel-start] 1fr [next-button] 1fr [carousel-end]
      minmax(8.889rem, auto) [last];
    grid-template-rows:
      [first carousel-start] auto
      1fr
      [controls] auto
      [carousel-end] auto;
    padding: 2.222rem 0;
  }
}

.app-viewer__carousel {
  grid-column: carousel-start / carousel-end;
  grid-row: carousel-start / carousel-end;
  position: relative;
  overflow: hidden;
}

.app-viewer__image {
  object-fit: contain;
  height: 100%;
  width: 100%;
}

.app-viewer__thumbnails {
  grid-column: first / last;
  grid-row: carousel-end / last;
  height: 130px;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.app-viewer__thumbnail {
  max-height: 100%;
  width: 100%;
  object-fit: cover;
  margin: 0 0.4rem;
  cursor: pointer;
}

.app-viewer__next,
.app-viewer__previous  {
  background: transparent;
  grid-row: carousel-start / carousel-end;
  z-index: 2;
  padding: 2rem;
  cursor: pointer;
}

.app-viewer__next {
  grid-row: carousel-start / carousel-end;
  grid-column: next-button;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: $medium) {
    grid-column: next-button / last;
  }
}

.app-viewer__previous {
  grid-row: carousel-start / carousel-end;
  grid-column: first;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (min-width: $medium) {
    grid-column: first / next-button;
  }
}

.app-viewer__counter {
  grid-column: first;
  grid-row: first;
  padding: 2rem;
}

.app-viewer__controls {
  grid-row: controls;
  grid-column: next-button;
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  gap: 0.556rem;
  margin-right: 68px;

  .icon-sun,
  .icon-fullscreen {
    background: pink;
    height: 20px;
    width: 20px;
  }
}
</style>
