<example>
基础用法
</example>
<template>
  <laby-table>
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
      <tr v-if="insertVisible">
        <td v-for="key in keys" :key="key">
          <input type="text" v-model="newData[key]" />
        </td>
        <td>
          <laby-button @click="add">确定</laby-button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <laby-button @click="insertVisible = !insertVisible">
          <span v-if="insertVisible">取消添加</span>
          <span v-else>添加记录</span>
        </laby-button>
      </tr>
    </tfoot>
  </laby-table>
</template>
<script lang="ts">
import { LabyTable, LabyButton } from "laby-ui-vue";

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
    const insertVisible = ref(false);
    const newData = ref(
      keys.reduce((obj, item) => {
        obj[item] = "";
        return obj;
      }, {})
    );
    const add = () => {
      datas.value.push(newData.value);
      newData.value = keys.reduce((obj, item) => {
        obj[item] = "";
        return obj;
      }, {});
      insertVisible.value = false;
    };
    return { insertVisible, heads, keys, datas, del, newData, add };
  },
};
</script>