<example>
换色
</example>
<template>
  <laby-input v-model:value="value" placeholder="请输入" color="blue" />
  <br />
  <br />
  <div>同步值：{{ value }}</div>
</template>
<script lang="ts">
import { ref } from "vue";
import { LabyInput } from "laby-ui";
export default {
  components: {
    LabyInput,
  },
  setup() {
    const value = ref("something");
    return { value };
  },
};
</script>