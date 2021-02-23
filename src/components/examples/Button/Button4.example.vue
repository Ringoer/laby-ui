<example>
加载中
</example>
<template>
  <laby-button :loading="loading">加载中</laby-button>
  <laby-button>加载完成</laby-button>
</template>
<script lang="ts">
import { ref } from "vue";
import { LabyButton } from "laby-ui";
export default {
  components: {
    LabyButton,
  },
  setup() {
    const loading = ref(true);
    return { loading };
  },
};
</script>