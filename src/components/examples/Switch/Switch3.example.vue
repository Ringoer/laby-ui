<example>
不同尺寸
</example>
<template>
  <span>小号</span>
  <laby-switch v-model:value="isActive[0]" size="small" />
  <br />
  <span>中号</span>
  <laby-switch v-model:value="isActive[1]" />
  <br />
  <span>大号</span>
  <laby-switch v-model:value="isActive[2]" size="large" />
</template>
<script lang="ts">
import { LabySwitch } from "laby-ui";

import { ref } from "vue";
export default {
  components: {
    LabySwitch,
  },
  setup() {
    const isActive = ref([false, false, false]);
    return { isActive };
  },
};
</script>