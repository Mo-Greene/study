<template lang="">
    <div>
        <v-textarea 
            v-model="memo"
            label="Add Todo"
            >
        </v-textarea>
        <v-btn @click="listAdd">Add</v-btn>
    </div>
</template>
<script>
export default {
    data() {
        return {
            memo: null
        };
    },
    methods: {
        listAdd() {
            if(this.memo === null || this.memo === "") {
                alert('write Memo!!')
            } else {
                this.$emit('listAdd', this.memo)
                this.memo = null
            }
        }
    }
};
</script>
