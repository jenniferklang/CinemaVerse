<template> <div id="container">
  <form @submit.prevent="updateMovieRating">
    <select v-model="selectedMovieId">
      <option v-for="movie in movies" :key="movie.movieId" :value="movie.movieId">{{ movie.movieName }}</option>
    </select>

    <select v-model="selectedMovieRating">
      <option v-for="rating in ratings" :key="rating" :value="rating">{{ rating }}</option>
    </select>

    <button type="submit">Update rating</button>
    <button type="button" @click.prevent="deleteMovie">Delete Movie</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'MovieDropdown',
  data() {
    return {
      movies: [],
      selectedMovieId: null,
      selectedMovieRating: null,
      ratings: [1, 2, 3, 4, 5],
      selectedRating: null,
    };
  },
  mounted() {
    // Hämta filmer från API
    fetch('http://localhost:3000/movie')
      .then(response => response.json())
      .then(data => {
        this.movies = data;
        this.selectedMovieId = data[0].movieId;
        this.selectedMovieRating = data[0].ratingNumber;
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  },
  watch: {
    selectedMovieId() {
      const selectedMovie = this.movies.find(movie => movie.movieId === this.selectedMovieId);
      this.selectedMovieRating = selectedMovie.ratingNumber;
    },
  },
  methods: {

    updateMovieRating() {
      const { selectedMovieId, selectedMovieRating } = this;
      fetch('http://localhost:3000/admin', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movieId: selectedMovieId,
          movieRatingId: selectedMovieRating,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Updated movie rating:', data);
        })
        .catch(error => {
          console.error('Error updating movie rating:', error);
        });
     },

     deleteMovie() {

      fetch('http://localhost:3000/admin', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          movieGenreMId: this.selectedMovieId,
          movieId: this.selectedMovieId,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Deleted movie:', data);

        })
        .catch(error => {
          console.error('Error deleting movie rating:', error);
        });
     },
  },


};
</script>
