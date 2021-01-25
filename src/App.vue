<template>
  <div>
    导航栏 |
    <router-link to="/">index</router-link> |
    <router-link to="hello">hello</router-link>
  </div>
  <router-view />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
