# Vue.js 문법

## v-text
```
<template>
    <div>{{ username }} 입니다!</div>
    <div v-text="`${username} 입니다.`"></div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "Mo-Greene"
    }
  }
};
</script>
```
v-text와 머스태치문법은 비슷하지만 머스태치문법이 많이 사용된다. 그 이유는 v-text로 문자열과 같이 나타내려면 복잡한 과정이 있기 때문에
***
## v-html
```
<template>
  <div>
    <p>{{ button }}</p>
    <p v-html="button"></p>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      button: "<button>click!</button>",
    }
  }
};
</script>
```
머스태치 문법으로 html태그를 나타내면 문자열로 나타난다.  
그럴땐 v-html 태그를 사용해서 표현하자  

** v-html을 사용할땐 주의  
신뢰하는 코드만을 사용해야된다.