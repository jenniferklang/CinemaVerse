<template>
  <div id="app">
    <div class="card" style="width: 50rem">
      <form class="row g-3">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">Title</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            id="name"
            required
          />
        </div>
        <div class="col-md-8">
          <label for="description" class="form-label">Description</label>
          <input
            v-model="description"
            type="text"
            class="form-control"
            id="description"
            required
          />
        </div>
        <div class="col-md-2">
          <label for="length" class="form-label">Length</label>
          <input
            v-model="length"
            type="text"
            class="form-control"
            id="length"
            required
          />
        </div>
        <div class="col-md-2">
          <label for="saloon" class="form-label">SaloonId</label>
          <div class="input-group">
            <input
              v-model="saloon"
              type="text"
              class="form-control"
              id="saloon"
              required
            />
          </div>
        </div>
        <div class="col-md-2">
          <label for="rating" class="form-label">RatingId</label>

          <input
            v-model="rating"
            type="text"
            class="form-control"
            id="rating"
            required
          />
        </div>

        <div class="col-md-3">
          <label for="img" class="form-label">Image</label>
          <input
            v-model="img"
            type="text"
            class="form-control"
            id="img"
            required
          />
        </div>
        <div class="col-md-3">
          <label for="genre" class="form-label">Genre</label>
          <select class="form-select" v-model="genre" id="genre" required>
            <option>Choose...</option>
            <template :key="item" v-for="item in genres"
              ><option>{{ item.genre }}</option></template
            >

            <!--<option>Action</option>
            <option>Drama</option>
            <option>Comedy</option>
            <option>Romance</option>
            <option>Thriller</option>-->
          </select>
        </div>
        <div class="col-12">
          <input
            class="btn-btn-primary"
            @click="addMovie()"
            type="button"
            value="Add movie"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        movies: null,
        name: null,
        length: null,
        description: null,
        saloon: null,
        rating: null,
        img: null,
        genre: null,
        genres: [{ id: 1, genre: 'Action' }]
      }
    },
    created() {
      this.getMovie()
      console.log('hej')
    },

    methods: {
      getMovie: function () {
        fetch('http://localhost:3000/movie')
          .then((response) => response.json())
          .then((result) => {
            this.movies = result
            console.log(this.movies)
          })
      },

      addMovie: function () {
        fetch('http://localhost:3000/admin', {
          body: JSON.stringify({
            movieName: this.name,
            movieLengthMin: this.length,
            movieDescription: this.description,
            movieSaloonId: this.saloon,
            movieRatingId: this.rating,
            movieImg: this.img,
            movieGenreMId: this.movies.length,
            movieGenreGId: this.genres[0].id
          }),

          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
        console.log(this.movies)
        console.log(this.movies.length)
      }
    }
  }
</script>

<style scoped>
  .card {
    padding: 5rem;
  }
</style>
