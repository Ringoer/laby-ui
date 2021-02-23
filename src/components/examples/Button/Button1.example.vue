<example>
基础用法
</example>
<template>
  <laby-button>通常按钮</laby-button>
  <laby-button level="plain">朴素按钮</laby-button>
  <laby-button level="primary">主要按钮</laby-button>
  <laby-button level="success">成功按钮</laby-button>
  <laby-button level="info">信息按钮</laby-button>
  <laby-button level="warning">警告按钮</laby-button>
  <laby-button level="danger">危险按钮</laby-button>
</template>
<script lang="ts">
import { LabyButton } from "laby-ui";
export default {
  components: {
    LabyButton,
  },
};
</script>