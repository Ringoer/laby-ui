<example>
纵向排列
</example>
<template>
  <laby-tabs v-model:selected="selected" direction="column">
    <laby-tab title="标签页1" name="first"> 我是第一页的内容 </laby-tab>
    <laby-tab title="标签页2" name="second"> 我是第二页的内容 </laby-tab>
  </laby-tabs>
</template>
<script lang="ts">
import { LabyTab, LabyTabs } from "laby-ui-vue";

import { ref } from "vue";
export default {
  components: {
    LabyTab,
    LabyTabs,
  },
  setup() {
    const selected = ref("first");
    return { selected };
  },
};
</script>