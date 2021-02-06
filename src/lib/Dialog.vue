<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="laby-dialog-overlay" @click="close"></div>
      <div class="laby-dialog">
        <header class="laby-dialog-header">
          {{ title }}
          <span class="laby-dialog-close" @click="close"></span>
        </header>
        <div class="laby-dialog-divider" />
        <main class="laby-dialog-main">
          <slot></slot>
        </main>
        <div class="laby-dialog-divider" />
        <footer class="laby-dialog-footer">
          <laby-button level="plain" @click="close">取消</laby-button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <laby-button @click="task" :loading="loading">确定</laby-button>
        </footer>
      </div>
    </teleport>
  </template>
</template>
<script lang="ts">
import { ref } from "vue";
import LabyButton from "./Button.vue";
export default {
  install: function (Vue) {
    Vue.component(this.name, this);
  },
  name: "LabyDialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    ok: {
      type: Function,
      default: () => {
        return true;
      },
    },
    cancel: {
      type: Function,
      default: () => {
        return true;
      },
    },
  },
  components: {
    LabyButton,
  },
  setup(props, context) {
    const loading = ref(false);
    const close = () => {
      if (loading.value) {
        return;
      }
      new Promise((resolve, reject) => {
        resolve(props.cancel());
      }).then((result) => {
        if (result !== false) {
          context.emit("update:visible", false);
        }
      });
    };
    const task = () => {
      new Promise((resolve, reject) => {
        loading.value = true;
        resolve(props.ok());
      }).then((result) => {
        if (result === true) {
          loading.value = false;
          context.emit("update:visible", false);
        }
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
  z-index: 20;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  min-height: 200px;
  border-radius: 8px;
  background: white;
  display: flex;
  flex-direction: column;
  > * {
    padding: 8px;
  }
  > .laby-dialog-divider {
    border: 1px solid #ffb5dc;
    padding: 0;
  }
  > .laby-dialog-header {
    display: flex;
    justify-content: space-between;
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
    display: flex;
    justify-content: flex-end;
  }
}
</style>