<script>
  import NavbarComponent from './components/NavbarComponent.vue'
  import FooterComponent from './components/FooterComponent.vue'

  export default {
    components: {
      NavbarComponent,
      FooterComponent
    }
  }
</script>

<template>
  <NavbarComponent />
  <FooterComponent />

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
  .btn-btn-primary {
    padding: 5px 10px 5px 10px;

    line-height: 30px;

    border-radius: 40px;
  }
</style>
-->
