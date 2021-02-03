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
    const name = "Button";
    const title = "Button 按钮";
    const quantity = 6;
    return { name, title, quantity };
  },
};
</script>