<example>
禁用状态
</example>
<template>
  <laby-switch v-model:value="isActive" :disabled="disabled" />
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
    const disabled = ref(true);
    return { isActive, disabled };
  },
};
</script>