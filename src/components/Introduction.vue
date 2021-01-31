<template>
  <article v-html="md"></article>
</template>
<script>
import md from "../markdown/introduction.md";
export default {
  setup() {
    return { md };
  },
};
</script>