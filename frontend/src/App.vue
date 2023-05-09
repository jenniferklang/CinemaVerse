<script>
  import CitiesList from './components/CitiesList.vue'
  import CounterButton from './components/CounterButton.vue'
  import HelloWorld from './components/HelloWorld.vue'
  import RandomImage from './components/RandomImage.vue'

  export default {
    components: {
      CitiesList,
      CounterButton,
      HelloWorld,
      RandomImage
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
  <HelloWorld />
  <CitiesList />
  <CounterButton />
  
  <main>
    <RouterView />
    
  </main>
</template>
