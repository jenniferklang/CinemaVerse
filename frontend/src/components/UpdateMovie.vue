<script>
  export default {
    name: 'MovieDropdown',
    data() {
      return {
        movies: [],
        selectedMovieId: null,
        selectedMovieRating: null,
        ratings: [1, 2, 3, 4, 5],
        selectedRating: null
      }
    },
    mounted() {
      // Hämta filmer från API
      fetch('http://localhost:3000/movie')
        .then((response) => response.json())
        .then((data) => {
          this.movies = data
          this.selectedMovieId = data[0].movieId
          this.selectedMovieRating = data[0].ratingNumber
        })
        .catch((error) => {
          console.error('Error fetching movies:', error)
        })
    },
    watch: {
      selectedMovieId() {
        const selectedMovie = this.movies.find(
          (movie) => movie.movieId === this.selectedMovieId
        )
        this.selectedMovieRating = selectedMovie.ratingNumber
      }
    },
    methods: {
      updateMovieRating() {
        const { selectedMovieId, selectedMovieRating } = this
        fetch('http://localhost:3000/admin', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            movieId: selectedMovieId,
            movieRatingId: selectedMovieRating
          })
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Updated movie rating:', data)
            alert('Rating updated')
          })
          .catch((error) => {
            console.error('Error updating movie rating:', error)
          })
      },

      deleteMovie() {
        fetch('http://localhost:3000/admin', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            movieGenreMId: this.selectedMovieId,
            movieId: this.selectedMovieId
          })
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Deleted movie:', data)
            alert('Movie Deleted')
            location.reload()
          })
          .catch((error) => {
            console.error('Error deleting movie rating:', error)
          })
      }
    }
  }
</script>

<template>
  <div class="updatemovie">
    <form @submit="updateMovieRating">
      <select v-model="selectedMovieId">
        <option
          v-for="movie in movies"
          :key="movie.movieId"
          :value="movie.movieId"
        >
          {{ movie.movieName }}
        </option>
      </select>
      <select v-model="selectedMovieRating">
        <option v-for="rating in ratings" :key="rating" :value="rating">
          {{ rating }}
        </option>
      </select>



    <input class="btn-btn-primary" type="submit" value="Update rating" />

    <input
      class="btn-btn-primary"
      @click="deleteMovie"
      type="button"
      value="Delete Movie"
    />
  </form>
  </div>
</template>
<style scoped>
  .btn-btn-primary {
    padding: 5px 10px 5px 10px;
    font-size: 20px;
    line-height: 30px;
    border-radius: 10px;
    background-color: #414a4c;
    color: #dddada;
  }
  select {
    margin: 0 40px 0 20px;
    font-size: 20px;
    line-height: 30px;
    border: none;
    border-radius: 10px;
    background-color: #414a4c;
    color: #dddada;
  }

  .updatemovie {
    padding: 10px;
    padding-bottom: 20px;
    background-color: #414a4c;
    display: flex;
    justify-content: space-evenly;
  }
</style>
