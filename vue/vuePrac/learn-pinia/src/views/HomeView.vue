<template>
  <div class="home">
    <CounterView/>
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
    </div>
    <hr />
    <div>This counter is : {{ oddOrEven }}</div>

    <hr/>

    <div>
      <h3>Edit counter;</h3>
      <input 
        v-model="count"
        type="number">
    </div>
  </div>
</template>

<script setup>
import CounterView from "../components/CounterView.vue";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const storeCounter = useCounterStore();

const { count, oddOrEven } = storeToRefs(storeCounter);
</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}
.buttons button {
  font-size: 40px;
  margin: 10px;
}
</style>
