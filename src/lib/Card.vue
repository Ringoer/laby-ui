<template>
  <div class="laby-card" :style="{ '--color': color }">
    <slot></slot>
  </div>
</template>
<script lang="ts">
declare const props: {
  color: string;
};

export default {
  install: function (Vue) {
    Vue.component(this.name, this);
  },
  name: "LabyCard",
  props: {
    color: {
      type: String,
      default: "#fe9acf",
    },
  },
};
</script>
<style lang="scss">
.laby-card {
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px var(--color);
  padding: 12px;
  background: white;
}
</style>