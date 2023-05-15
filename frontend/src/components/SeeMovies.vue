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
  <div id="mainDiv" v-for="movie in data" :key="movie.movieId">
    <div id="textDiv">
      <RouterLink :to="'/movie/' + movie.movieId">
        <p>{{ movie.movieName }}</p>
      </RouterLink>
      <p>Rating: {{ movie.ratingNumber }}</p>
    </div>
    <RouterLink :to="'/movie/' + movie.movieId">
      <img :src="movie.movieImg" />
    </RouterLink>
  </div>
</template>

<style scoped>
  img {
    max-width: 600px;
    width: 200px;
    height: 300px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  div {
    margin-bottom: 30px;
  }
  button {
    background-color: #414a4c;
    color: #dddada;
    border-radius: 10px;
    margin-right: 20px;
    margin-left: 10px;
  }
  #mainDiv {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-left: 10px;
  }
  #textDiv {
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    width: 100px;
  }
</style>
