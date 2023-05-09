<script>

  export default {
    components: {

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

  <main>
    <RouterView />
  </main>
</template>
