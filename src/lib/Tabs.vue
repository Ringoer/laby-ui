<template>
  <div
    class="laby-tabs"
    :style="{ '--color': color }"
    ref="container"
    :direction="direction"
  >
    <div class="laby-tabs-titles">
      <button
        v-for="(title, index) in titles"
        :key="index"
        class="laby-tabs-title"
        :class="{ selected: names[index] === selected }"
        @click="select(index)"
        :ref="
          (el) => {
            if (names[index] === selected) {
              selectedItem = el;
            }
          }
        "
      >
        {{ title }}
      </button>
      <div class="laby-tabs-indicator" ref="indicator"></div>
    </div>
    <div class="laby-tabs-divider"></div>
    <div class="laby-tabs-content">
      <component :is="content" :key="selected" />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import LabyTab from "./Tab.vue";
declare const props: {
  direction?: "row" | "column";
  selected: String;
  color?: String;
};
export default {
  props: {
    direction: {
      type: String,
      default: "row",
    },
    selected: {
      type: String,
    },
    color: {
      type: String,
      default: "#f3678e",
    },
  },
  setup(props, context) {
    if (!["row", "column"].includes(props.direction)) {
      throw new Error("错误的方向");
    }
    const container = ref<HTMLDivElement>(null);
    const selectedItem = ref<HTMLButtonElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const slots = context.slots.default();
    slots.forEach((slot) => {
      if (slot.type !== LabyTab) {
        throw new Error("一级子标签必须是 LabyTab");
      }
      if (!slot.props) {
        throw new Error("存在 LabyTab 属性列为空");
      }
      if (!("title" in slot.props)) {
        throw new Error("LabyTab 缺少属性 title");
      }
      if (!("name" in slot.props)) {
        throw new Error("LabyTab 缺少属性 name");
      }
    });
    const titles = slots.map((slot) => slot.props.title);
    const names = slots.map((slot) => slot.props.name);
    if (!names.includes(props.selected)) {
      throw new Error("指定了不存在的 selected 值");
    }
    const content = computed(() =>
      slots.find((slot) => slot.props.name === props.selected)
    );
    onMounted(() => {
      watchEffect(
        () => {
          if (props.direction === "row") {
            const { height } = selectedItem.value.getBoundingClientRect();
            indicator.value.style.top = height + "px";
            const { width } = selectedItem.value.getBoundingClientRect();
            indicator.value.style.width = width + "px";
            const left1 = container.value.getBoundingClientRect().left;
            const left2 = selectedItem.value.getBoundingClientRect().left;
            const left = left2 - left1;
            indicator.value.style.left = left + "px";
          } else {
            const { height } = selectedItem.value.getBoundingClientRect();
            indicator.value.style.height = height + "px";
            const { width } = selectedItem.value.getBoundingClientRect();
            indicator.value.style.left = width + "px";
            const top1 = container.value.getBoundingClientRect().top;
            const top2 = selectedItem.value.getBoundingClientRect().top;
            const top = top2 - top1;
            indicator.value.style.top = top + "px";
          }
        },
        { flush: "post" }
      );
    });
    const select = (index) => {
      context.emit("update:selected", names[index]);
    };

    return {
      container,
      selectedItem,
      indicator,
      slots,
      titles,
      names,
      content,
      select,
    };
  },
};
</script>
<style lang="scss">
$theme-color: var(--color);
.laby-tabs {
  display: flex;
  flex-direction: column;
  position: relative;
  &-titles {
    display: flex;
  }
  &-title {
    padding: 4px 6px;
    border: none;
    cursor: pointer;
    outline: none;
    background: white;
    &:focus {
      outline: none;
    }
    &:hover {
      color: $theme-color;
    }
    &.selected {
      color: $theme-color;
    }
  }
  &-indicator {
    position: absolute;
    transition: all 250ms;
    border: 1px solid $theme-color;
  }
  &-divider {
    border: 1px solid rgb(184, 184, 184);
  }
  &-content {
    padding: 8px 4px;
  }
}
.laby-tabs[direction="column"] {
  flex-direction: row;
  > .laby-tabs-titles {
    flex-direction: column;
  }
  > .laby-tabs-content {
    padding: 2px 10px;
  }
}
</style>