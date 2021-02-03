<example>
不同颜色
</example>
<template>
  <laby-switch v-model:value="isActive" color="blue" />
</template>
<script lang="ts">
import { ref } from "vue";
import LabySwitch from "../../../lib/Switch.vue";
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