<template>
  <div class="demo">
    <el-tag
      v-for="tag in tags"
      :key="tag"
      closable
      type="info"
      class="demo-tag"
    >
      {{ tag }}
    </el-tag>
    <input
      v-model="text"
      style="display: inline-block"
      @keyup.enter.native="keydown(text)"
      class="demo-input"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        // { name: '标签一', type: '' },
        // { name: '标签二', type: 'success' },
        // { name: '标签三', type: 'info' },
        // { name: '标签四', type: 'warning' },
        // { name: '标签五', type: 'danger' }
      ],
      text: ''
    }
  },
  methods: {
    keydown(val) {
      //   if (this.tags.includes(val)) return
      this.tags.push(val)
      this.text = ''
      console.log(val, this.tags);
    }
  }
}
</script>

<style lang="less" scoped>
.demo {
  border: 1px solid red;
  width: 350px;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    clear: both;
  }
  .demo-tag {
    float: left;
    margin-left: 10px;
    margin-top: 5px;
  }
  .demo-input {
    border: 1px solid yellowgreen;
    width: 100px;
    height: 30px;
    margin-top: 5px;
    margin-left: 5px;
    float: left;
  }
}
</style>