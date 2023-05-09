
<script>
export default {
  methods: {
    async resetDb() {
      try {
        const response = await fetch("http://localhost:3000/adminReset", {
          method: "POST" });
        if (response.ok) {
          alert("Databasen har återställts");
        } else {
          throw new Error("Något gick fel");
        }
      } catch (error) {
        console.error(error);
        alert("Något gick fet");
      }
    },
  },
};
</script>

<template>
<h1>Testar Reset</h1>
<div>
  <button @click="resetDb()">Reset Database</button>
</div>
</template>
