<script>
  import CitiesList from './components/CitiesList.vue'

  import HelloWorld from './components/HelloWorld.vue'
  import RandomImage from './components/RandomImage.vue'
  import AddMovie from './components/AddMovie.vue'

  export default {
    components: {
      CitiesList,
      HelloWorld,
      RandomImage,
      AddMovie
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
  <HelloWorld />
  <CitiesList />

  <AddMovie />

  <main>
    <RouterView />
  </main>
</template>
