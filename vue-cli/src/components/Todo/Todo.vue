<template lang="">
    <v-container class="bg-surface">
        <v-flex xs12 text-xs-center>
            <h1>Todo List</h1>
            <p>전체 할일 : {{ todoList.length }} / 완료된 할일 : {{ countDone }} / 남은 할일 : {{ todoList.length - countDone }}</p>
        </v-flex>
        <v-row no-gutters>
        <v-col>
            <v-sheet class="pa-2 ma-2"> 
                <TodoList
                    :todoList="todoList"
                    @statusChange="statusChange"
                    @deleteList="deleteList"
                    @modifyList="modifyList"/> 
            </v-sheet>
        </v-col>
        <v-col>
            <v-sheet class="pa-2 ma-2"> 
                <TodoAdd
                    @listAdd="listAdd"/> 
            </v-sheet>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TodoList from "./TodoList.vue";
import TodoAdd from "./TodoAdd.vue";

export default {
    components: {
        TodoList,
        TodoAdd,
    },
    data() {
        return {
            todoList: [],
        };
    },
    computed: {
        countDone() {
            let count = 0
            this.todoList.forEach(list => {
                if (list.status === 'done')
                count++
            })
            return count
        }
    },
    methods: {
        //메모 생성
        listAdd(memo) {
            this.todoList.push({memo: memo, status: 'created'})
        },
        //메모 상태변경
        statusChange(idx, status) {
            this.todoList[idx].status = status
        },
        //메모 삭제
        deleteList(idx) {
            this.todoList.splice(idx, 1)
        },
    },
};
</script>
