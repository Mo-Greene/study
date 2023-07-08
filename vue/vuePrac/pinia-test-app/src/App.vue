<template>
    <div>
        <input type="text" v-model="text" />
        <button @click="addList(text)">추가</button>
        <h4>추가된 목록</h4>
        <p v-for="(item, index) in getDataAll" :key="index">
            {{ item }}
        </p>
    </div>
</template>
<script>
import { computed, ref } from "vue";
import { useListStore } from "./stores/todoList";
//구조분해할당 활용
//import { storeToRefs } from "pinia";

export default {
    setup() {
        const text = ref("");
        const list = useListStore();
        //구조분해할당 활용
        //const { getDataAll } = storeToRefs(list);

        function addList() {
            if (!text.value) return;
            list.addList(text.value);
            //list.$patch({ list: [...list.getDataAll, text.value] });
            text.value = "";
        }

        return {
            text,
            addList,
            getDataAll: computed(() => list.getDataAll),
            //구조분해할당 활용
            //getDataAll
        };
    },
};
</script>
