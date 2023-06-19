<template>
  <div>
    <h2>App Components</h2>
    <hr />
    <ul>
      <CheckboxItem
        v-for="idol in idols"
        :key="idol.id"
        :id="idol.id"
        :name="idol.name"
        :checked="idol.checked"
      />
    </ul>
  </div>
</template>

<script>
import CheckboxItem from "./components/CheckboxItem.vue";

export default {
  name: "App",
  components: { CheckboxItem },
  data() {
    return {
      idols: [
        { id: 1, name: "BTS", checked: true },
        { id: 2, name: "Black Pink"},
        { id: 3, name: "NEW JEANS"},
        { id: 4, name: "ITZY"},
      ],
    };
  },
};
</script>
