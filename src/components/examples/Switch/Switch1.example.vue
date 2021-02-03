<example>
基础用法
</example>
<template>
  <laby-switch v-model:value="isActive" />
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