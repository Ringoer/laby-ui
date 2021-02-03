<example>
基础用法
</example>
<template>
  <laby-tabs v-model:selected="selected">
    <laby-tab title="标签页1" name="first"> 我是第一页的内容 </laby-tab>
    <laby-tab title="标签页2" name="second"> 我是第二页的内容 </laby-tab>
  </laby-tabs>
</template>
<script lang="ts">
import { ref } from "vue";
import LabyTab from "../../../lib/Tab.vue";
import LabyTabs from "../../../lib/Tabs.vue";
export default {
  components: {
    LabyTab,
    LabyTabs,
  },
  setup() {
    const selected = ref("second");
    return { selected };
  },
};
</script>