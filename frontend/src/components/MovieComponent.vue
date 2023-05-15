<template>
  <NavbarComponent />
  <BookComponent />
  <div id="description">
    <h1 id="movieName">{{ movie.movieName }}</h1>
    <p class="descriptionText">Duration: {{ movie.movieLengthMin }} minutes</p>
    <p class="descriptionText">Description: {{ movie.movieDescription }}</p>
    <p class="descriptionText">
      Saloon: {{ movie.saloonName }} ({{ movie.saloonChairs }} chairs)
    </p>
    <p class="descriptionText">Rating: {{ movie.ratingNumber }}</p>
    <p class="descriptionText">Genre: {{ movie.genreName }}</p>
    <div id="img-container">
      <img id="moviePicture" :src="movie.movieImg" :alt="movie.movieName" />
    </div>
  </div>
  <BookingFile :movie="movie.movieName" :saloon="movie.saloonName" />
</template>

<script>
  // import BookComponent from '../components/BookComponent.vue'
  import BookingFile from './BookingFile.vue'

  export default {
    components: {
      BookingFile,
      // BookComponent
    },
    created() {
      this.$watch(
        () => this.$route.params,
        () => {
          this.movieExtra()
        },
        { immediate: true }
      )
    },
    data() {
      return {
        movie: {}
      }
    },
    methods: {
      async movieExtra() {
        const id = this.$route.params.id
        try {
          const response = await fetch(`http://localhost:3000/movie/${id}`)
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          this.movie = await response.json()
        } catch (error) {
          console.error('Error fetching movie data:', error)
        }
      }
    }
  }
</script>

<style>
  #movieName {
    width: 90%;
    margin-left: 5%;
    margin-top: 10%;
    margin-bottom: 10%;
  }
  .descriptionText {
    width: 90%;
    margin-left: 5%;
  }

  #img-container {
    display: flex;
    justify-content: center;
  }

  #moviePicture {
    max-width: 90%;

    /* margin-left: 5%; */
    margin-bottom: 10%;
  }
</style>
