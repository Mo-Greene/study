<template>
    <div>
        <li>
            <input type="checkbox" :checked="checked"/> {{ id }} - {{ name }}
        </li>
    </div>
</template>

<script>
    export default {
        name: "CheckboxItem",
        props: {
            id: [Number, String],
            // name: String,
            name: {
                validation(v) {
                    return typeof(v) !== "string" ?
                    false :
                    v.trim().length >= 4 ? true : false
                }
            },
            checked: {
                type: Boolean,
                required: false,
                default: false
            }
        },
    }
</script>

<style scoped>

</style>