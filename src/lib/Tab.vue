<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
declare const props: {
  title: string;
};

export default {
  install: function (Vue) {
    Vue.component(this.name, this);
  },
  name: "LabyTab",
  props: {
    title: {
      type: String,
      default: "标签页",
    },
  },
};
</script>