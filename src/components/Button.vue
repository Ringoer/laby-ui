<template>
  <div>Button Doc</div>
  <laby-button>你好</laby-button>
  <laby-button loading>加载中</laby-button>
</template>
<script lang="ts">
import LabyButton from "../lib/Button.vue";
export default {
  components: {
    LabyButton,
  },
};
</script>