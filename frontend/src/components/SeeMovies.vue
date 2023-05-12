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
  <button @click="sortByName">Sort by name</button>
  <button @click="sortByRating">Sort by rating</button>
  <div v-for="movie in data" :key="movie.movieId">
    <RouterLink :to="'/movie/' + movie.movieId">
      <p>{{ movie.movieName }}</p>
    </RouterLink>
    <p>Rating: {{ movie.ratingNumber }}</p>
    <RouterLink :to="'/movie/' + movie.movieId">
      <img :src="movie.movieImg" />
    </RouterLink>
  </div>
</template>

<style scoped>
  img {
    width: 100%;
    max-width: 600px;
  }
  div {
    margin-bottom: 30px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
