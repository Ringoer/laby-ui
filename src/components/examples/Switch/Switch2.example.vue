<example>
禁用状态
</example>
<template>
  <laby-switch v-model:value="isActive" :disabled="disabled" />
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
    const disabled = ref(true);
    return { isActive, disabled };
  },
};
</script>