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
    const name = "Card";
    const title = "Card 卡片";
    const quantity = 2;
    return { name, title, quantity };
  },
};
</script>