<script>



  import FooterComponent from './components/FooterComponent.vue';



  export default {
    components: {
      
  FooterComponent
}
  }
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/movie">Movie</RouterLink>
      </li>
      <li>
        <RouterLink to="/admin">Admin</RouterLink>
      </li>
      <li>
        <RouterLink to="/movies">See movies</RouterLink>
      </li>
    </ul>
  </nav>
  <RandomImage />

  <main>
    <RouterView />
    <FooterComponent />
  </main>
</template>

<style>

  @font-face {
    font-family: 'Jost';
    src: url('../assets/Jost-Regular.ttf') format('truetype');
  }
  body {

    background-color: #232b2b;
    font-family: 'Jost', Arial, Helvetica, sans-serif;
    color: #dddada;
    font-size: 20px;
  }
</style>
