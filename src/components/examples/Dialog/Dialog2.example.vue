<example>
禁止取消对话框
</example>
<template>
  <laby-button @click="visible = true">打开对话框</laby-button>
  <laby-dialog
    v-model:visible="visible"
    title="标题"
    :ok="ok"
    :cancel="preventCancel"
  >
    <span> 内容 </span>
  </laby-dialog>
</template>
<script lang="ts">
import { ref } from "vue";
import LabyButton from "../../../lib/Button.vue";
import LabyDialog from "../../../lib/Dialog.vue";
export default {
  components: {
    LabyButton,
    LabyDialog,
  },
  setup() {
    const visible = ref(false);
    const ok = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("ok");
          resolve(true);
        }, 1000);
      });
    };
    const preventCancel = () => {
      console.log("preventCancel");
      return false;
    };
    return { visible, ok, preventCancel };
  },
};
</script>