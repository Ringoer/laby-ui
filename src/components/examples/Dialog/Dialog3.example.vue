<example>
一行代码打开对话框
</example>
<template>
  <laby-button @click="showDialog">打开对话框</laby-button>
</template>
<script lang="ts">
import { LabyButton, createDialog } from "laby-ui";

export default {
  components: {
    LabyButton,
  },
  setup() {
    const ok = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("ok");
          resolve(true);
        }, 1000);
      });
    };
    const cancel = () => {
      console.log("cancel");
    };
    const showDialog = () => {
      createDialog({
        title: "一行打开",
        content: "我是一行代码打开的对话框",
        ok,
        cancel,
      });
    };
    return { showDialog };
  },
};
</script>