<template>
  <button type="button" class="btn btn-outline-success" @click="toMovieView">BUY TICKETS</button>
</template>

//import Button from './Button.vue';

<script>
  export default {
    methods: {
      toMovieView() {
        this.$router.push('/movie');
      }
    }
  }
</script>


<style scoped>
.btn{
width: 90%;
margin-left: 5%;
}

</style>
