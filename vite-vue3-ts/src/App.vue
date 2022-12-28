



<template>
  <h1>Hello App!</h1>
  <p>
    <router-link to="/index">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <h2>{{ test }}</h2>
  <var-button type="primary" @click="test++">主要按钮</var-button>
  <var-button type="primary" @click="exportPng">export</var-button>
  <div class="list-wrap" ref="domtest">
    <div v-for="item in 10" :key="item" class="list-item">{{ item }}</div>
  </div>

  <router-view></router-view>
</template>


<script setup lang="ts">
import { computed, onMounted, watchEffect } from "@vue/runtime-core";
import domToImage, { Options } from "dom-to-image";
import { ref, watch } from "vue";
const test = ref(0);
const domtest = ref();
const imgWrap = ref();

watch(test, (val, old) => {
  console.log(val, "test", old);
});

watchEffect(() => {
  console.log(test.value, "testvv");
});

onMounted(() => {
  console.log(",pimt");
});

const exportPng = () => {
  console.log("png", domtest);
  const elem = domtest.value;
  // elem.style.flexWrap = "wrap";
  // elem.style.zIndex = -200;
  // elem.style.position = "absolute";
  // elem.style.top = 0;
  // elem.style.color = "red";
  // document.body.appendChild(elem);
  console.log(elem.offsetHeight, "ddd");
  domToImage
    .toJpeg(elem, {
      quality: 0.95,
      // filter: (elem) => !elem?.classList?.contains("chart_title_buttons"),
      height: elem.scrollHeight,
      style: {
        background: "white",
        marin: 0,
      },
    })
    .then((dataUrl: string) => {
      const link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = dataUrl;
      link.click();
      link.remove();
    });
};
</script>


<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  z-index: 1;
}
.list-wrap {
  // border: 1px solid red;
  display: flex;
  background: white;
  width: 480px;
  max-height: 460px;
  overflow: auto;
  flex-wrap: wrap;

  .list-item {
    border: 1px solid yellowgreen;
    margin: 10px;
    width: 200px;
    height: 200px;
  }
}
</style>

