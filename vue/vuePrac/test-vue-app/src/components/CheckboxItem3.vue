<template>
    <div>
        <li>
            <input type="checkbox" :checked="idol.checked"/>{{ idol.name }}
        </li>
    </div>
</template>

<script>
    import Idol from '../Idol';
    export default {
        name: "CheckboxItem3",
        props: {
            idol: Idol
        },
    }
</script>