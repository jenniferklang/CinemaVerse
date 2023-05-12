<script>
  export default {
    data() {
      return {
        defaultPicture: '../../assets/pictures/user_icon.png',
        persons: [
          {
            id: 1,
            name: 'Jennifer Klang',
            linkedin: 'https://www.linkedin.com/in/jennifer-klang-243486171/'
          },
          {
            id: 2,
            name: 'Pontus Abrahamsson',
            linkedin:
              'https://www.linkedin.com/in/pontus-abrahamsson-14aa80217/'
          },
          {
            id: 3,
            name: 'Sheila Martinez',
            linkedin: 'https://www.linkedin.com/in/sheila-martinez-gotbcn/'
          },
          {
            id: 4,
            name: 'Viktor Mattsson',
            linkedin: 'https://www.linkedin.com/in/viktor-mattsson-03782a13'
          },
          {
            id: 5,
            name: 'Roland Bjorndahl',
            linkedin:
              'https://www.linkedin.com/in/roland-bj%C3%B6rndahl-69bb80266/'
          },
          {
            id: 6,
            name: 'Daniel Winberg',
            linkedin: 'https://www.linkedin.com/in/daniel-winberg/'
          }
        ]
      }
    }
  }
</script>

<template>
  <h1 id="contactus">Contact us</h1>
  <div id="user-container">
    <div v-for="person in persons" :key="person.id">
      <img id="user-picture" :src="defaultPicture" :alt="person.name" />
      <h3>{{ person.name }}</h3>
      <a id="linkedinText" :href="person.linkedin" target="_blank">{{ person.linkedin }}</a>
    </div>
  </div>
</template>

<style scoped>
  #contactus {
    text-align: center;
  }
  #user-container {
    width: 90%;
    margin-left: 5%;
  }
  #user-picture {
    width: 30%;
    margin-top: 20px;
  }
  #linkedinText{
  font-size: 13px;
  }
</style>
