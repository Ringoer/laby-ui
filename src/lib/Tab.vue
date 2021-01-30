<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: "标签页",
    },
  },
};
</script>