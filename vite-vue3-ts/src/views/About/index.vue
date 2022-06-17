<template>
  <h1>this is about {{ msg }}</h1>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  steup() {
    const msg = 1000;
    return { msg };
  },
});
</script>