<script>
import TheCarousell from '../components/TheHome.vue'
import RandomImage from '../components/RandomImage.vue'
  
  export default {
    components: {
      TheCarousell,
      RandomImage
      
    }
  }
</script>

<template>
  <h1>Home</h1>
  <RandomImage />
  <TheCarousell />
</template>
