<template>
  <button
    @click="toggle"
    :class="{ active: value }"
    :size="size"
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
<style lang="scss" scoped>
@mixin layout($r, $d) {
  $r2: $r - $d;
  display: block;
  position: relative;
  border: none;
  background: rgb(173, 173, 173);
  outline: none;
  transition: background-color 250ms;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
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
    background: rgb(16, 156, 236);
    > div {
      left: calc(100% - #{$r2} - #{$d/2});
    }
  }
}
$r: 20px;
$d: 4px;
button[size="small"] {
  @include layout($r, $d);
}
button[size="middle"] {
  @include layout($r * 1.5, $d * 1.5);
}
button[size="large"] {
  @include layout($r * 2, $d * 2);
}
button[disabled] {
  pointer-events: none;
  cursor: not-allowed;
}
</style>