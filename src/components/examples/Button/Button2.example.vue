<example>
禁用状态
</example>
<template>
  <laby-button disabled>通常按钮</laby-button>
  <laby-button level="plain" disabled>朴素按钮</laby-button>
  <laby-button level="primary" disabled>主要按钮</laby-button>
  <laby-button level="success" disabled>成功按钮</laby-button>
  <laby-button level="info" disabled>信息按钮</laby-button>
  <laby-button level="warning" disabled>警告按钮</laby-button>
  <laby-button level="danger" disabled>危险按钮</laby-button>
</template>
<script lang="ts">
import { LabyButton } from "laby-ui-vue";
export default {
  components: {
    LabyButton,
  },
};
</script>