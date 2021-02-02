<template>
  <div>
    <div>Button Doc</div>
    <laby-button>通常按钮</laby-button>
    <laby-button theme="link">链接按钮</laby-button>
    <laby-button theme="text">文字按钮</laby-button>
    <hr />
    <laby-button level="plain">朴素按钮</laby-button>
    <laby-button level="primary">主要按钮</laby-button>
    <laby-button level="success">成功按钮</laby-button>
    <laby-button level="info">信息按钮</laby-button>
    <laby-button level="warning">警告按钮</laby-button>
    <laby-button level="danger">危险按钮</laby-button>
    <hr />
    <laby-button size="large">大号按钮</laby-button>
    <laby-button>中号按钮</laby-button>
    <laby-button size="small">小号按钮</laby-button>
    <hr />
    <laby-button color="blue">换色按钮</laby-button>
    <hr />
    <laby-button disabled>禁用按钮</laby-button>
    <hr />
    <laby-button loading>加载中</laby-button>
    <laby-button>加载完成</laby-button>
  </div>
</template>
<script lang="ts">
import LabyButton from "../lib/Button.vue";
export default {
  components: {
    LabyButton,
  },
};
</script>
<style lang="scss" scoped>
div > button {
  margin: 0 4px;
}
</style>