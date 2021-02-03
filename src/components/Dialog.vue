<template>
  <Content :name="name" :title="title" :quantity="quantity" />
</template>
<script lang="ts">
import Content from "./Content.vue";

export default {
  components: {
    Content,
  },
  setup() {
    const name = "Dialog";
    const title = "Dialog 对话框";
    const quantity = 3;
    return { name, title, quantity };
  },
};
</script>