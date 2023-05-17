<template>
  <User/>
</template>

<script>
import User from '@/components/User.vue'

export default {
    name: "App",
    data: () => ({
        title: "Hello World",
        count: 0
    }),
    components: { User }
}
</script>
