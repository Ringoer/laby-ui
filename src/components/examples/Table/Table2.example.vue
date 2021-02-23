<example>
有边框的表格
</example>
<template>
  <laby-table bordered>
    <thead>
      <tr>
        <th v-for="(head, index) in heads" :key="index">{{ head.name }}</th>
        <th>其余操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in datas" :key="index">
        <td v-for="key in keys" :key="key" v-html="data[key]"></td>
        <td>
          <laby-button @click="del(index)">删除</laby-button>
        </td>
      </tr>
    </tbody>
  </laby-table>
</template>
<script lang="ts">
import { LabyTable, LabyButton } from "laby-ui";

import { ref } from "vue";
export default {
  components: {
    LabyTable,
    LabyButton,
  },
  setup() {
    const heads = ref([
      { name: "参数", identifier: "attr" },
      { name: "类型", identifier: "type" },
    ]);
    const keys = heads.value.map((item: any) => item.identifier);
    const datas = ref([
      { attr: "level", type: "string" },
      { attr: "size", type: "string" },
      { attr: "loading", type: "boolean" },
    ]);
    const del = (index) => {
      datas.value = datas.value.filter((item, i) => i != index);
    };
    return { heads, keys, datas, del };
  },
};
</script>