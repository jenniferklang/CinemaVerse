<script>
  import RandomImage from '../components/RandomImage.vue'
  import TheCarousell from '../components/TheHome.vue'
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
