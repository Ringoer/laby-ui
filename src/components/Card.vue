<template>
  <div>
    <div>
      通常
      <hr />
      <laby-card>一些可能存在的卡片内容</laby-card>
    </div>
    <hr />
    <div>
      换色
      <hr />
      <laby-card color="#999">一些可能存在的卡片内容</laby-card>
    </div>
  </div>
</template>
<script>
import LabyCard from "../lib/Card.vue";
export default {
  components: {
    LabyCard,
  },
};
</script>