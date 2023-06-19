<template>
  <div>
    <h2> Check </h2>
    <hr/>
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id" :name="idol.name" :checked="idol.checked"/>
    </ul>
  </div>

  <div>
    <h2> Check2222 </h2>
    <hr/>
    <ul>
      <CheckboxItem2 v-for="idol in idols" :key="idol.id" :idol="idol"/>
    </ul>
  </div>
</template>

<script>
import CheckboxItem from './components/CheckboxItem.vue';
import CheckboxItem2 from './components/CheckboxItem2.vue';

export default {
  name: "App",
  components: { CheckboxItem, CheckboxItem2 },
  data() {
    return {
      idols : [
        {id: 1, name: 'BTS', checked: true},
        {id: 2, name: 'BlackPink', checked: false},
        {id: 3, name: 'ITZY', checked: false},
      ]
    }
  }
}
</script>
