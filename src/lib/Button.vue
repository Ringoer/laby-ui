<template>
  <button
    class="laby-button"
    :theme="theme"
    :level="level"
    :size="size"
    :disabled="disabled"
    :loading="loading"
  >
    <span class="laby-button-loadingIndicator" v-if="loading"></span>
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
$theme-color: #f3678e;
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
  padding: 10px 16px;
  color: white;
  border-radius: 8px;
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
  > .laby-button-loadingIndicator {
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

@mixin layout($color) {
  $loading-color: $color;
  $base-color: fade-out($color, 0.2);
  $hover-color: $color;
  $active-color: fade-out($color, 0.4);

  background: $base-color;

  &:hover {
    background: $hover-color;
  }
  &:active {
    background: $active-color;
  }
  > .laby-button-loadingIndicator {
    border-color: $loading-color $loading-color $loading-color transparent;
  }
  &[loading="true"],
  &[disabled] {
    background: $active-color;
  }
}
.laby-button[theme="button"] {
  $color: #f04172;

  @include layout($color);
}
.laby-button:not([theme="button"]) {
  padding: 0;
  background: white;
  color: black;
  &:hover {
    color: $theme-color;
  }
}
.laby-button[theme="link"] {
  text-decoration: underline;
}
.laby-button[level="plain"] {
  $base-color: $theme-color;
  @include layout(white);
  color: black;
  border: 1px solid rgb(187, 187, 187);
  &:hover {
    border: 1px solid $base-color;
    color: $base-color;
  }
}
.laby-button[level="primary"] {
  $color: #29adfa;

  @include layout($color);
}
.laby-button[level="success"] {
  $color: rgb(76, 187, 20);

  @include layout($color);
}
.laby-button[level="info"] {
  $color: #808080;

  @include layout($color);
}
.laby-button[level="warning"] {
  $color: #d1ce00;

  @include layout($color);
}
.laby-button[level="danger"] {
  $color: #c91212;

  @include layout($color);
}
.laby-button[size="large"] {
  padding: 14px 24px;
}
.laby-button[size="small"] {
  padding: 6px 10px;
}
</style>