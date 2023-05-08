<template>
  <NavbarComponent />
  <div>
    <h1>{{ movie.movieName }}</h1>
    <p>Duration: {{ movie.movieLengthMin }} minutes</p>
    <p>Description: {{ movie.movieDescription }}</p>
    <p>Saloon: {{ movie.saloonName }} ({{ movie.saloonChairs }} chairs)</p>
    <p>Rating: {{ movie.ratingNumber }}</p>
    <p>Genre: {{ movie.genreName }}</p>
    <img :src="movie.movieImg" :alt="movie.movieName" />
  </div>
</template>

<script>
  import NavbarComponent from '../components/NavbarComponent.vue'
  export default {
    components: {
      NavbarComponent
    },
    created() {
      this.$watch(
        () => this.$route.params,
        () => {
          this.movieExtra()
        },
        // fetch the data when the view is created and the data is
        // already being observed
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
          // Puedes manejar errores específicos o mostrar un mensaje de error en la interfaz de usuario aquí
        }
      }
    }
    // async movieExtra() {
    //   const id = this.$route.params.id
    //   try {
    //     const response = await fetch(`http://localhost:3000/movie/${id}`)
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`)
    //     }
    //     this.movie = await response.json()
    //   } catch (error) {
    //     console.error('Error fetching movie data:', error)
    //     // Puedes manejar errores específicos o mostrar un mensaje de error en la interfaz de usuario aquí
    //   }
    // }
  }
</script>
