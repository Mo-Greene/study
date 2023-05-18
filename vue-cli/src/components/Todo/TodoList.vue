<template lang="">
    <div>
        <v-card
            class="pa-3 ma-1"
            :class="{'done': list.status === 'done'}"
            v-for="(list,idx) in todoList"
            :key="idx">
            <p>{{ list.memo }}</p>
            <v-btn 
                v-if="list.status === 'created'"
                class="ma-2" 
                color="blue" 
                density="comfortable" 
                icon="fa:fas fa-check" 
                @click="$emit('statusChange', idx, 'done')">
            </v-btn><!-- 완료 -->
            <v-btn 
                v-if="list.status === 'done'"
                class="ma-2" 
                color="purple" 
                density="comfortable" 
                icon="fa:fas fa-wrench" 
                @click="$emit('statusChange', idx, 'created')">
            </v-btn><!-- 재생성 -->
            <v-btn 
                class="ma-2" 
                color="red" 
                density="comfortable" 
                icon="fa:fas fa-trash"
                @click="$emit('deleteList', idx)">
            </v-btn><!-- 삭제 -->
            <v-btn 
                v-if="list.status === 'created'"
                class="ma-2" 
                color="green" 
                density="comfortable" 
                icon="fa:fas fa-edit"
                @click="$emit('modifyList', idx)">
            </v-btn><!-- 수정 -->
        </v-card>
    </div>
</template>

<script>
export default {
    props: ["todoList"]
}
</script>

<!-- scoped의 경우 TodoList.vue에서만 작동하게 함 -->
<style scoped>
.done {
    background-color: rgba(0, 0, 0, 0.1);
}
.done p {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.5);
}
</style>