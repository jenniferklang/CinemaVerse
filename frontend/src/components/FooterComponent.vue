<template>
  <footer>
    <router-link to="/admin">
      <input class="btn-btn-primary" type="button" value="Admin page" />
    </router-link>
  </footer>
</template>

<style scoped>
  footer {
    height: 50px;
    border-color: white;
    border-top: 5px;
  }

  .btn-btn-primary {
    background-color: #232b2b;
    color: #dddada;
    border: none;
    font-size: 20px;
  }
</style>
