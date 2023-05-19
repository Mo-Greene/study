<template>
    <Todo/>
</template>

<script>
import User from '@/components/User/User.vue'
import Todo from '@/components/Todo/Todo.vue'

export default {
    name: "App",
    components: { 
        User,
        Todo
    }
}
</script>
