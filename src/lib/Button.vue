<template>
  <button class="noah-button" @click="onClick">
    <span class="noah-loadingIndicator" v-if="loading"></span>
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
    },
  },
  setup(props) {
    console.log("loading=", props.loading);
    const onClick = () => console.log(props.loading);
    return { onClick };
  },
};
</script>
<style lang="scss">
$loading-color: #9edbff;
$base-color: #41b9ff;
$hover-color: #58c2ff;
$active-color: #23aeff;

$h: 32px;
.noah-button {
  padding: 10px 16px;
  background: $base-color;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 250ms;
  outline: none;
  :focus {
    outline: none;
  }
  &:hover {
    background: $hover-color;
  }
  &:active {
    background: $active-color;
  }
  > .noah-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $loading-color $loading-color $loading-color transparent;
    border-style: solid;
    border-width: 2px;
    animation: noah-spin 1s infinite linear;
  }
}
@keyframes noah-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>