<script>
  export default {
    created() {
      fetch('http://localhost:3000/movie')
        .then((response) => response.json())
        .then((movie) => {
          this.movie = movie

          const image1 = movie[0].movieImg
          const image2 = movie[1].movieImg
          const image3 = movie[2].movieImg
          const image4 = movie[3].movieImg
          const image5 = movie[4].movieImg

          const images = [image1, image2, image3, image4, image5]

          this.selectedImage = this.randomItem(images)
        })
    },
    data() {
      return {
        movie: null,

        selectedImage: null
      }
    },
    methods: {
      randomItem(items) {
        return items[Math.floor(Math.random() * items.length)]
      }
    }
  }
</script>

<template>
  <div class="container">
    <img style="width: 100%" :src="selectedImage" alt="" />
    <img :src="'playbtn.png'" class="overlay" />
  </div>
</template>

<style>
  .container {
    position: relative;
    margin-left: 0;
    margin-right: 0;
  }
  .overlay {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 50%;
    top: 50%;
    margin-left: -25px;
    margin-top: -25px;
  }
</style>
