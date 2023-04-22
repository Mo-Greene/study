<template>
  <div>
    <h1 v-bind:id="dynamicId">Hello Title</h1>
    <a v-bind:href="url">naver</a>
    <!-- html의 속성을 바인딩하는 v-bind -->
    <img v-bind:src="image.src" v-bind:alt="image.alt"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      dynamicId: "content",
      url: "https://naver.com",
      image: {
        src: 'https://placeimg.com/100/100/any',
        alt: 'random image'
      }
    }
  }
};
</script>

<style>
#title {
  color: red;
  background: yellow;
}
#content {
  color: blue;
  background: pink;
}
</style>
