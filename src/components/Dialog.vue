<template>
  <div>Dialog Doc</div>
  <laby-button @click="visible = true">打开对话框</laby-button>
  <laby-dialog v-model:visible="visible" :ok="ok" :cancel="cancel">
    <template v-slot:title>
      <strong> 标题 </strong>
    </template>
    <template v-slot:content>
      <span> 内容 </span>
    </template>
  </laby-dialog>
</template>
<script lang="ts">
import { ref } from "vue";
import LabyButton from "../lib/Button.vue";
import LabyDialog from "../lib/Dialog.vue";
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
          console.log("success");
          resolve(true);
        }, 1000);
      });
    };
    const cancel = () => {
      console.log("failed");
    };
    return { visible, ok, cancel };
  },
};
</script>