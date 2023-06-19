<template>
    <div>
        <li>
            <input type="checkbox" :checked="idol.checked"/>{{ idol.name }}
        </li>
    </div>
</template>

<script>
    export default {
        name: "CheckboxItem2",
        props: ["idol"],
        created() {
            this.idol.checked = true;
        }
    }
</script>

<style scoped>

</style>