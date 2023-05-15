<template>
  <!-- §<a @click="v-scroll-to='#buttonBTN'"> -->
  <button @click="scrollToComponent" class="btn">BOOK</button>
  <!-- </a> -->
</template>

<script>
  export default {
    methods: {
      scrollToComponent() {
        const height = document.documentElement.scrollHeight
        window.scrollTo({
          top: height,
          behavior: 'smooth'
        })
      }
    }
  }
</script>

<style scoped>
  .btn {
    width: 90%;
    margin-left: 5%;
    background-color: #414a4c;
    color: #dddada;
    border-radius: 10px;
  }
</style>
