<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      fade
      indicators
      background="#ababab"
      img-width="1028"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="(object, i) in carousel" :key="i">
        <b-carousel-slide
          :caption="object.title"
          :text="object.description"
          :img-src="object.image"
        ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'homeCarousel',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed: {
    carousel () {
      return this.$store.state.homeCarousel.carouselObjects
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  created () {
    document.title = 'PXH Kanban Test'
  }
}
</script>
