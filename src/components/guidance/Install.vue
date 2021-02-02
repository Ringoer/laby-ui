<template>
  <article v-html="md"></article>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const md = ref(null);
    import("../../markdown/install.md").then((res) => (md.value = res.default));
    return { md };
  },
};
</script>