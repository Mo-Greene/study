<template>
    <div>
      <h2>App Components</h2>
      <hr />
      <ul>
        <CheckboxItem
          v-for="idol in idols" :idol="idol"/>
      </ul>
    </div>
  </template>
  
  <script>
  import CheckboxItem from "./components/CheckboxItem3.vue";
  import Idol from './Idol';
  
  export default {
    name: "App3",
    components: { CheckboxItem },
    data() {
      return {
        idols: [
            new Idol(1, "BTS", true),
            new Idol(2, "Black Pink", false),
            new Idol(3, "ITZY", false),
        ],
      };
    },
  };
  </script>
  