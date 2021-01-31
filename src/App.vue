<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;

    const menuVisible = ref(width > 500 ? true : false);
    provide("menuVisible", menuVisible);
  },
};
</script>