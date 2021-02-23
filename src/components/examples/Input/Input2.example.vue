<example>
textarea
</example>
<template>
  <laby-input
    class="sample-input"
    theme="textarea"
    v-model:value="value"
    placeholder="请输入"
  />
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
<style lang="scss" scoped>
.sample-input {
  width: 400px;
}
</style>