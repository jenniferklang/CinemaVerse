<script>



  import RandomImage from './components/RandomImage.vue'


  export default {
    components: {


      RandomImage,

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
    </ul>

  </nav>
  <RandomImage />


  <main>
    <RouterView />

  </main>
</template>
