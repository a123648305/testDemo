<!--
 * @Description: 
 * @Author: wujian
 * @Date: 2021-09-01 11:00:29
 * @LastEditors: wujian
 * @LastEditTime: 2021-09-01 11:07:20
-->
<template>
  <div>
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <h2>0...00</h2>
    <test />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import test from './components/test.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    test
  }
}
</script>
