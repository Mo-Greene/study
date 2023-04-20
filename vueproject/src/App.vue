<template>
  <h1>Hello {{ name }}</h1>
  <div>{{ frameworks }}</div>
  <ul>
    <li v-for="frame in frameworks" v-bind:key="frame">{{ frame }}</li>
  </ul>
  <!-- 데이터양방향 바인딩 -->
  <input type="text" v-model="name">
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      name: 'Mo-Greene',
      frameworks: [
        "React",
        "Vue",
        "Angular"
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
