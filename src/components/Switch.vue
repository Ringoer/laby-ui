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
    const name = "Switch";
    const title = "Switch 开关";
    const quantity = 4;
    return { name, title, quantity };
  },
};
</script>