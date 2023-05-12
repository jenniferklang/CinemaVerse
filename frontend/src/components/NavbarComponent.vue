<template>
  <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <RouterLink id="popcornlogg" to="/">
      <img
        id="popcorn"
        src="../../assets/pictures/cinema-dessert-fastfood-svgrepo-com.png"
      />
    </RouterLink>
    <RouterLink class="navbar-brand" to="/">Cinema Verse</RouterLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="toggleNavbar"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      class="collapse navbar-collapse"
      :class="{ show: isNavbarOpen }"
      id="navbarNav"
      @click="closeNavbar"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <!-- <li class="nav-item">
          <RouterLink class="nav-link" to="/movie">Movie</RouterLink>
        </li> -->
        <li class="nav-item">
          <RouterLink class="nav-link" to="/admin">Admin</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        isNavbarOpen: false
      }
    },
    methods: {
      toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen
      },
      closeNavbar() {
        this.isNavbarOpen = false
      }
    }
  }
</script>

<style>
  .navbar {
    margin: 0;
    padding: 10px;
  }
  #popcornlogg {
    width: 7%;
  }
  #popcorn {
    width: 100%;
  }
</style>
