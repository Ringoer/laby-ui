<template>
  <template v-if="visible">
    <div>
      <div class="laby-dialog-overlay" @click="close"></div>
      <div class="laby-dialog">
        <header class="laby-dialog-header">
          <slot name="title"></slot>
          <span class="laby-dialog-close" @click="close"></span>
        </header>
        <main class="laby-dialog-main">
          <slot name="content"></slot>
        </main>
        <footer class="laby-dialog-footer">
          <laby-button level="plain" @click="close">取消</laby-button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <laby-button @click="task" :loading="loading">确定</laby-button>
        </footer>
      </div>
    </div>
  </template>
</template>
<script lang="ts">
import { ref } from "vue";
import LabyButton from "./Button.vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Function,
    },
  },
  components: {
    LabyButton,
  },
  setup(props, context) {
    const loading = ref(false);
    const close = () => {
      context.emit("update:visible", false);
    };
    const task = () => {
      new Promise((resolve, reject) => {
        loading.value = true;
        resolve(props?.success());
      }).then((result) => {
        console.log(result);
        loading.value = false;
        close();
      });
    };
    return { loading, close, task };
  },
};
</script>
<style lang="scss">
.laby-dialog-overlay {
  z-index: 20;
  position: fixed;
  left: 0;
  top: 0;
  background: fade-out($color: #000000, $amount: 0.7);
  width: 100vw;
  height: 100vh;
}
.laby-dialog {
  z-index: 21;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  min-height: 200px;
  background: white;
  display: flex;
  flex-direction: column;
  > * {
    padding: 8px;
  }
  > .laby-dialog-header {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 95%,
      #ffb5dc 95%,
      #ffb5dc 100%
    );
    > .laby-dialog-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;
      &::before,
      &::after {
        content: "";
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        top: 50%;
        left: 50%;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
  > .laby-dialog-main {
    flex-grow: 1;
    background: white;
  }
  > .laby-dialog-footer {
    background: linear-gradient(
      180deg,
      #ffb5dc 0%,
      #ffb5dc 5%,
      rgba(255, 255, 255, 1) 5%,
      rgba(255, 255, 255, 1) 100%
    );
    display: flex;
    justify-content: flex-end;
  }
}
</style>