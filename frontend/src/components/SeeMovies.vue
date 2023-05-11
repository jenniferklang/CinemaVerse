<script>
  export default {
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
      },
      async sortByName() {
        const response = await fetch('http://localhost:3000/movies/sortByName')
        const result = await response.json()
        this.data = result
      },
      async sortByRating() {
        const response = await fetch(
          'http://localhost:3000/movies/sortByRating'
        )
        const result = await response.json()
        this.data = result
      }
    }
  }
</script>

<template>
  <h1>hi</h1>
  <button @click="sortByName">Sort by name</button>
  <button @click="sortByRating">Sort by rating</button>
  <div v-for="movie in data" :key="movie.movieId">
    <p>{{ movie.movieName }}</p>
    <p>Rating: {{ movie.ratingNumber }}</p>
    <img :src="movie.movieImg" />
  </div>
</template>

<style scoped>
  img {
    width: 100%;
    max-width: 600px;
  }
</style>
