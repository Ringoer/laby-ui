<template>
  <div>Swicth Doc</div>
  <laby-switch v-model:value="isActive[0]" />
  <hr />
  <laby-switch v-model:value="isActive[1]" size="small" />
  <hr />
  <laby-switch v-model:value="isActive[2]" />
  <hr />
  <laby-switch v-model:value="isActive[3]" size="large" />
  <hr />
  <laby-switch v-model:value="isActive[4]" color="blue" />
  <hr />
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