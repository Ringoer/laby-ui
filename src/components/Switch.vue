<template>
  <div>Swicth Doc</div>
  <h2>通常</h2>
  <laby-switch v-model:value="isActive[0]" />
  <hr />
  <span>小号</span>
  <laby-switch v-model:value="isActive[1]" size="small" />
  <span>中号</span>
  <laby-switch v-model:value="isActive[2]" />
  <span>大号</span>
  <laby-switch v-model:value="isActive[3]" size="large" />
  <hr />
  <h2>换色</h2>
  <laby-switch v-model:value="isActive[4]" color="blue" />
  <hr />
  <h2>禁用</h2>
  <laby-switch v-model:value="isActive[5]" disabled />
</template>
<script lang="ts">
import { ref } from "vue";
import LabySwitch from "../lib/Switch.vue";
export default {
  components: { LabySwitch },
  setup() {
    const isActive = ref([false, false, false, false, false, false]);
    return { isActive };
  },
};
</script>