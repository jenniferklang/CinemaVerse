
<script>
export default {
  methods: {
    async resetDb() {
      try {
        const response = await fetch("http://localhost:3000/adminReset", {
          method: "POST" });
        if (response.ok) {
          alert("Database reset");
          location.reload()
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    },
  },
};
</script>


<template>

<div>

  <input
            class="btn-btn-primary"
            @click="resetDb()"
            type="button"
            value="Reset Database"
          />
</div>
</template>
