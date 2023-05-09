<script>
  import CitiesList from './components/CitiesList.vue'

  import HelloWorld from './components/HelloWorld.vue'
  import AddMovie from './components/AddMovie.vue'

  export default {
    components: {
      CitiesList,

      HelloWorld,
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
    </ul>
  </nav>
  <HelloWorld msg="Hello World!" />
  <CitiesList />

  <AddMovie />

  <main>
    <RouterView />
  </main>
</template>
