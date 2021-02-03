<template>
  <div>Dialog Doc</div>
  <laby-button @click="visible[0] = true">普通对话框</laby-button>
  <laby-dialog
    v-model:visible="visible[0]"
    title="标题"
    :ok="ok"
    :cancel="cancel"
  >
    <span> 内容 </span>
  </laby-dialog>
  <hr />
  <laby-button @click="visible[1] = true">禁止取消对话框</laby-button>
  <laby-dialog
    v-model:visible="visible[1]"
    title="标题"
    :ok="ok"
    :cancel="preventCancel"
  >
    <span> 内容 </span>
  </laby-dialog>
  <hr />
  <laby-button @click="showDialog">一行代码打开对话框</laby-button>
</template>
<script lang="ts">
import { ref } from "vue";
import LabyButton from "../lib/Button.vue";
import LabyDialog from "../lib/Dialog.vue";
import { createDialog } from "../lib/createDialog";
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
    const showDialog = () => {
      createDialog({
        title: "一行打开",
        content: "我是一行代码打开的对话框",
        ok: () => {
          console.log("一行打开");
          return true;
        },
        cancel: () => {
          console.log("一行打开");
        },
      });
    };
    return { visible, ok, cancel, preventCancel, showDialog };
  },
};
</script>