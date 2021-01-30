<template>
  <div>
    Tabs Doc
    <div>通常</div>
    <div class="tabs-wrapper">
      <laby-tabs v-model:selected="selected[0]">
        <laby-tab title="标签页1" name="first"> 我是第一页的内容 </laby-tab>
        <laby-tab title="标签页2" name="second"> 我是第二页的内容 </laby-tab>
      </laby-tabs>
    </div>
    <br />
    <hr />
    <br />
    <div>纵向</div>
    <div class="tabs-wrapper">
      <laby-tabs v-model:selected="selected[1]" direction="column">
        <laby-tab title="标签页1" name="first"> 我是第一页的内容 </laby-tab>
        <laby-tab title="标签页2" name="second"> 我是第二页的内容 </laby-tab>
      </laby-tabs>
    </div>
    <br />
    <hr />
    <br />
    <div>换色</div>
    <div class="tabs-wrapper">
      <laby-tabs v-model:selected="selected[2]" color="blue">
        <laby-tab title="标签页1" name="first"> 我是第一页的内容 </laby-tab>
        <laby-tab title="标签页2" name="second"> 我是第二页的内容 </laby-tab>
      </laby-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import LabyTab from "../lib/Tab.vue";
import LabyTabs from "../lib/Tabs.vue";
export default {
  components: {
    LabyTab,
    LabyTabs,
  },
  setup() {
    const selected = ref(["first", "first", "first"]);
    return { selected };
  },
};
</script>
<style lang="scss" scoped>
.tabs-wrapper {
  border: 1px solid grey;
  padding: 8px;
}
</style>