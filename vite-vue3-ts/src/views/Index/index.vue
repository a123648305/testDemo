<template>
  <div>this is index {{ count }}</div>
  <div>
    <var-button type="primary">主要按钮</var-button>
    <var-button type="info">信息按钮</var-button>
    <var-button type="success">成功按钮</var-button>
    <var-button type="warning">警告按钮</var-button>
    <var-button type="danger">危险按钮</var-button>
  </div>
</template>

<script lang="ts">
import useStore from "@/store/test";
export default {
  setup() {
    const { count } = useStore();
    return { count };
  },
};
</script>