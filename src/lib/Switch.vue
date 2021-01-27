<template>
  <button
    @click="toggle"
    class="laby-swicth"
    :class="{ active: value }"
    :size="size"
    :style="{ '--color': color }"
    :disabled="disabled"
  >
    <div></div>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
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
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>
<style lang="scss">
@mixin layout($r, $d) {
  $r2: $r - $d;
  display: block;
  position: relative;
  border: none;
  background: #adadad;
  outline: none;
  transition: background-color 250ms;
  cursor: pointer;
  :focus {
    outline: none;
  }
  > div {
    position: absolute;
    background: white;
    border-radius: 50%;
    transition: left 250ms;
    height: $r2;
    width: $r2;
    top: $d/2;
    left: $d/2;
  }
  height: $r;
  width: $r * 2;
  border-radius: $r / 2;
  &.active {
    background: var(--color);
    > div {
      left: calc(100% - #{$r2} - #{$d/2});
    }
  }
}
$r: 20px;
$d: 4px;
.laby-swicth[size="small"] {
  @include layout($r, $d);
}
.laby-swicth[size="middle"] {
  @include layout($r * 1.5, $d * 1.5);
}
.laby-swicth[size="large"] {
  @include layout($r * 2, $d * 2);
}
.laby-swicth[disabled] {
  cursor: not-allowed;
}
</style>