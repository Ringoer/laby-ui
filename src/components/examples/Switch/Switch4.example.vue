<example>
不同颜色
</example>
<template>
  <laby-switch v-model:value="isActive" color="blue" />
</template>
<script lang="ts">
import { LabySwitch } from "laby-ui-vue";

import { ref } from "vue";
export default {
  components: {
    LabySwitch,
  },
  setup() {
    const isActive = ref(false);
    return { isActive };
  },
};
</script>