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
        console.log(this.data)
      }
    }
  }
</script>

<template>
  <div id="wrapper">
    <carousel id="slide-container" :items-to-show="1.5">
      <slide v-for="slide in data" :key="slide">
        <RouterLink :to="'/movie/' + slide.movieId"
          ><img :src="slide.movieImg"
        /></RouterLink>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<style scoped>
  /* To find and change the navigation arrow color. Press ctrl + shift ´+ f
  search after "fill" and choose the carousel.css file. Then restart the server.
  */

  #wrapper {
    background-color: #232b2b;
  }

  #slide-container {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  img {
    max-width: 80%;
  }
</style>
