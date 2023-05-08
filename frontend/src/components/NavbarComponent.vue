<template>
  <div id="navContainer">
    <ul id="">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/movie/:id?">Movie</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavbarComponent'
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #navContainer {
    width: 100%;
    height: 10vh;
    border: 1px solid red;
  }
</style>
