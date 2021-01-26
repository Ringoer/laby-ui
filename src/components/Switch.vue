<template>
  <div>Swicth Doc</div>
  <SwitchComponent v-model:value="isActive[0]" />
  <hr />
  <SwitchComponent v-model:value="isActive[1]" size="small" />
  <hr />
  <SwitchComponent v-model:value="isActive[2]" />
  <hr />
  <SwitchComponent v-model:value="isActive[3]" size="large" />
  <hr />
  <SwitchComponent v-model:value="isActive[4]" disabled />
</template>
<script lang="ts">
import { ref } from "vue";
import SwitchComponent from "../lib/Switch.vue";
export default {
  components: { SwitchComponent },
  setup() {
    const isActive = ref([false, false, false, false, false]);
    return { isActive };
  },
};
</script>