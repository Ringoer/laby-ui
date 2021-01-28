<template>
  <button
    class="laby-button"
    :theme="theme"
    :level="level"
    :size="size"
    :disabled="disabled"
    :loading="loading"
  >
    <span class="laby-loadingIndicator" v-if="loading"></span>
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    level: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "middle",
    },
    color: {
      type: String,
      default: "#fe9acf",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return {};
  },
};
</script>
<style lang="scss">
$h: 32px;

@keyframes laby-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.laby-button {
  border: none;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 250ms;
  outline: none;
  :focus {
    outline: none;
  }
  &[loading="true"],
  &[disabled] {
    cursor: not-allowed;
  }
  > .laby-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-style: solid;
    border-width: 2px;
    animation: laby-spin 1s infinite linear;
  }
}

@mixin layout($loading-color, $base-color, $hover-color, $active-color) {
  padding: 10px 16px;
  background: $base-color;
  color: white;
  border-radius: 8px;

  &:hover {
    background: $hover-color;
  }
  &:active {
    background: $active-color;
  }
  > .laby-loadingIndicator {
    border-color: $loading-color $loading-color $loading-color transparent;
  }
  &[loading="true"],
  &[disabled] {
    background: $active-color;
  }
}
.laby-button[theme="button"] {
  $loading-color: #bb1745;
  $base-color: #f3678e;
  $hover-color: #fd3f75;
  $active-color: #fa81a4;

  @include layout($loading-color, $base-color, $hover-color, $active-color);
}
.laby-button:not([theme="button"]) {
  padding: 0;
  background: white;
  color: black;
  &:hover {
    color: #f3678e;
  }
}
.laby-button[theme="link"] {
  text-decoration: underline;
}
.laby-button[level="plain"] {
  $base-color: #f3678e;
  @include layout(white, white, white, white);
  color: black;
  border: 1px solid rgb(187, 187, 187);
  &:hover {
    border: 1px solid $base-color;
    color: $base-color;
  }
}
.laby-button[level="primary"] {
  $loading-color: #29adfa;
  $base-color: #52befd;
  $hover-color: #3db3f8;
  $active-color: #66c7ff;

  @include layout($loading-color, $base-color, $hover-color, $active-color);
}
.laby-button[level="success"] {
  $loading-color: rgb(76, 187, 20);
  $base-color: rgb(117, 206, 72);
  $hover-color: rgb(95, 194, 46);
  $active-color: rgb(131, 202, 96);

  @include layout($loading-color, $base-color, $hover-color, $active-color);
}
.laby-button[level="info"] {
  $loading-color: #808080;
  $base-color: #a7a7a7;
  $hover-color: #868585;
  $active-color: #bbbbbb;

  @include layout($loading-color, $base-color, $hover-color, $active-color);
}
.laby-button[level="warning"] {
  $loading-color: #b6a50a;
  $base-color: #d4c327;
  $hover-color: #e6d118;
  $active-color: #e2d34d;

  @include layout($loading-color, $base-color, $hover-color, $active-color);
}
.laby-button[level="danger"] {
  $loading-color: #c92e12;
  $base-color: #f0553a;
  $hover-color: #ff330f;
  $active-color: #fa7963;

  @include layout($loading-color, $base-color, $hover-color, $active-color);
}
.laby-button[size="large"] {
  padding: 14px 24px;
}
.laby-button[size="small"] {
  padding: 6px 10px;
}
</style>