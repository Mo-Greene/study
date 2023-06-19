<template>
    <div style="border:solid 1px gray; padding: 5px;">
        <h2>Sender</h2><hr/>
        <button @click="sendMessage">event emit</button>
    </div>
</template>

<script>
    export default {
        name: "Sender",
        methods: {
            sendMessage() {
                this.emitter.emit("message", Date.now() + "에 발신된 메세지");
            }
        }
    }
</script>