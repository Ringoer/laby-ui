<template>
  <div>Dialog Doc</div>
  <laby-button @click="visible[0] = true">普通对话框</laby-button>
  <laby-dialog v-model:visible="visible[0]" :ok="ok" :cancel="cancel">
    <template v-slot:title>
      <strong> 标题 </strong>
    </template>
    <template v-slot:content>
      <span> 内容 </span>
    </template>
  </laby-dialog>
  <hr />
  <laby-button @click="visible[1] = true">禁止取消对话框</laby-button>
  <laby-dialog v-model:visible="visible[1]" :ok="ok" :cancel="preventCancel">
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
    const visible = ref([false, false]);
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
    const preventCancel = () => {
      console.log("preventCancel");
      return false;
    };
    return { visible, ok, cancel, preventCancel };
  },
};
</script>