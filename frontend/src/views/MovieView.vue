<script>
  import MovieComponent from '../components/MovieComponent.vue'
  import BuyTicketsComponent from '../components/BuyTicketsComponent.vue';

  export default {
    components: {
      MovieComponent,
      BuyTicketsComponent
    }
  }
</script>
<template>

  <BuyTicketsComponent />
  <MovieComponent />

</template>
