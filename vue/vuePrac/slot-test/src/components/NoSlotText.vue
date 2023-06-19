<template>
    <div>
        <h3>FrontEnd Stack(NoSlot)</h3>
        <CheckBox1 v-for="item in items" 
        :key="item.id" 
        :id="item.id" 
        :label="item.label" 
        :checked="item.checked"
        @check-changed="CheckBoxChaged">
    </CheckBox1>
    </div>
</template>

<script>
import CheckBox1 from './CheckBox1.vue';

    export default {
        name: "NoSlotTest",
        components: {CheckBox1},
        data() {
            return {
                items : [
                    {id:"V", checked:true, label:"Vue"},
                    {id:"A", checked:fasle, label:"Angular"},
                    {id:"R", checked:fasle, label:"React"},
                    {id:"S", checked:fasle, label:"Svelte"},
                ]
            }
        },
        methods: {
            CheckBoxChaged(e) {
                let item = this.items.find((item) => item.id === e.id);
                item.checked = e.checked;
            }
        }
    }
</script>