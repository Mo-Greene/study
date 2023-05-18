<template>
    <div class="yellow lighten-3 pa-3">
      <h3>회원 정보를 수정할 수 있습니다.</h3>
      <p>수정사항</p>
      <v-text-field
        v-model="user.name"
        label="name">
      </v-text-field>
      <v-text-field
        v-model="user.address"
        label="address">
      </v-text-field>
      <v-text-field
        v-model="user.phone"
        label="phone">
      </v-text-field>
      <v-radio-group v-model="user.hasDog">
        <v-radio label="반려견 있음" value="true"></v-radio>
        <v-radio label="반려견 없음" value="false"></v-radio>
      </v-radio-group>
      <v-btn @click="changeUser">수정완료</v-btn>
    </div>
  </template>
  
  <script>
  export default {
    props: ["name", "address", "phone", "hasDog"],
    data () {
      return {
        user: {}
      }
    },
    created() {
      this.user.name = this.name
      this.user.address = this.address
      this.user.phone = this.phone
      this.user.hasDog = this.hasDog
    },
    methods: {
      changeUser() {
        this.$emit('child', this.user)
      }
    }
  }
  </script>
  