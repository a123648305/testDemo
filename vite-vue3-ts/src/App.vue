



<template>
  <div>
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
    <var-button type="wraning" @click="postRecord">postRecord</var-button>
    <var-button type="success" @click="replay">replay</var-button>
    <div class="list-wrap" ref="domtest">
      <div v-for="item in 10" :key="item" class="list-item">{{ item }}</div>
    </div>
    <div class="replay_wrap" ref="videoRef"></div>
    <router-view></router-view>
  </div>
</template>


<script setup lang="ts">
import * as rrweb from "rrweb";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
import { computed, onMounted, watchEffect } from "@vue/runtime-core";
import domToImage, { Options } from "dom-to-image";
import { ref, watch } from "vue";
import { reactive } from "@vue/reactivity";
const test = ref(0);
const domtest = ref();
const imgWrap = ref();
const videoRef = ref();
const events = reactive([]);

watch(test, (val, old) => {
  console.log(val, "test", old);
});

watchEffect(() => {
  console.log(test.value, "testvv");
});

onMounted(() => {
  console.log(",pimt");
  rrweb.record({
    emit(event, isCheckout) {
      // isCheckout is a flag to tell you the events has been checkout
      if (isCheckout) {
        events.push([]);
      } else {
        events.push(event);
      }
    },
    recordCanvas: true, // 记录 canvas 内容
    checkoutEveryNms: 10 * 1000, // 每10s重新制作快照
    checkoutEveryNth: 200, // 每 200 个 event 重新制作快照
    packFn: rrweb.pack, // 压缩
  });
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

const postRecord = () => {
  console.log("post", events);
  const body = JSON.stringify({ events });
  fetch("http://YOUR_BACKEND_API", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
};

const replay = () => {
  new rrwebPlayer({
    target: videoRef.value, // customizable root element
    props: {
      events,
      // unpackFn: rrweb.unpack,
    },
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
.replay_wrap {
  border: 1px solid red;
  width: 500px;
  position: absolute;
  height: 500px;
  right: 50px;
  top: 200px;
}
</style>





