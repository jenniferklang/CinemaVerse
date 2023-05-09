<script>
  export default {
    created() {
      fetch('https://avancera.app/cities/')
        .then((response) => response.json())
        .then((cities) => {
          this.cities = cities
        })
    },
    data() {
      return {
        cities: null
      }
    }
  }
</script>

<template>
 <p></p>
</template>
