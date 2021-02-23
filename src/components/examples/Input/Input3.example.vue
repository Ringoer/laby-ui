<example>
禁用
</example>
<template>
  <laby-input v-model:value="value" placeholder="请输入" disabled />
</template>
<script lang="ts">
import { ref } from "vue";
import { LabyInput } from "laby-ui";
export default {
  components: {
    LabyInput,
  },
  setup() {
    const value = ref("");
    return { value };
  },
};
</script>