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
    const name = "Tabs";
    const title = "Tabs 标签页";
    const quantity = 3;
    return { name, title, quantity };
  },
};
</script>