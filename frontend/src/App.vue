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
    margin: 0;
  }
  .btn-btn-primary {
    padding: 5px 10px 5px 10px;

    line-height: 30px;

    border-radius: 40px;
  }
</style>
-->
