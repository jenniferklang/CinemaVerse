<script>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  export default {
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation
    },
    created() {
      this.fetchImg()
    },
    data() {
      return {
        data: null
      }
    },
    methods: {
      async fetchImg() {
        const response = await fetch('http://localhost:3000/movie')
        const result = await response.json()
        this.data = result
      }
    }
  }
</script>

<template>
  <div id="wrapper">
    <carousel :items-to-show="1">
      <slide v-for="slide in data" :key="slide">
        <RouterLink :to="'/movie/' + slide.movieId">
          <img class="carousel-item" :src="slide.movieImg" />
        </RouterLink>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<style scoped>
  #wrapper {
    min-height: 100vh;
    background-color: black;
  }
  /* To find and change the navigation arrow color. Press ctrl + shift ´+ f
  search after "fill" and choose the carousel.css file. Then restart the server.
  */
  img {
    max-width: 338px;
    max-height: 500px;
  }
</style>
