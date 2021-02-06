<template>
  <button
    class="laby-button"
    :theme="theme"
    :level="level"
    :size="size"
    :style="{ '--color': color }"
    :disabled="disabled"
    :loading="loading"
  >
    <div class="laby-button-mask"></div>
    <span class="laby-button-loadingIndicator" v-if="loading"></span>
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  install: function (Vue) {
    Vue.component(this.name, this);
  },
  name: "LabyButton",
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
      default: "#f3678e",
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
$theme-color: var(--color);
$base-mask: fade-out(#fff, 0.7);
$active-mask: fade-out(#fff, 0.5);
$h: 32px;
$radius: 4px;

@keyframes laby-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.laby-button {
  position: relative;
  display: inline-block;
  padding: 10px 16px;
  color: white;
  border-radius: $radius;
  border: none;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 250ms;
  outline: none;
  :focus {
    outline: none;
  }
  > .laby-button-mask {
    position: absolute;
    display: inline-block;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: $radius;
    &:hover {
      background: $base-mask;
    }
  }
  &[loading="true"],
  &[disabled] {
    cursor: not-allowed;
    > .laby-button-mask {
      pointer-events: none;
    }
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
  $loading-color: fade-out(black, 0.7);

  background: $color;

  &:active {
    > .laby-button-mask {
      background: $active-mask;
    }
  }
  > .laby-button-loadingIndicator {
    border-color: $loading-color $loading-color $loading-color transparent;
  }
  &[loading="true"],
  &[disabled] {
    > .laby-button-mask {
      background: $base-mask;
    }
  }
}
.laby-button[theme="button"] {
  $color: $theme-color;

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

  &:not([loading="true"]):not([disabled]) {
    &:hover {
      border: 1px solid $base-color;
      color: $base-color;
    }
  }
}
.laby-button[level="primary"] {
  $color: #29adfa;

  @include layout($color);
}
.laby-button[level="success"] {
  $color: rgb(103, 194, 58);

  @include layout($color);
}
.laby-button[level="info"] {
  $color: #808080;

  @include layout($color);
}
.laby-button[level="warning"] {
  $color: rgb(230, 162, 60);

  @include layout($color);
}
.laby-button[level="danger"] {
  $color: rgb(245, 108, 108);

  @include layout($color);
}
.laby-button[size="large"] {
  padding: 14px 24px;
}
.laby-button[size="small"] {
  padding: 6px 10px;
}
</style>