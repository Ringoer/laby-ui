<template>
  <div>
    <h1>Button 按钮</h1>
    <div
      class="container"
      v-for="(component, index) in components"
      :key="index"
    >
      <laby-card class="example">
        <h2>{{ component.__sourceCodeTitle }}</h2>
        <component :is="component" />
        <br />
        <br />
        <pre
          v-if="visibility[index]"
          v-html="
            Prism.highlight(
              component.__sourceCode,
              Prism.languages.html,
              'html'
            )
          "
        ></pre>
        <button class="toggle" @click="toggle(index)">
          <span class="open" v-if="!visibility[index]">
            ▽
            <span class="desp">显示代码</span>
          </span>
          <span class="close" v-if="visibility[index]">
            △
            <span class="desp">隐藏代码</span>
          </span>
        </button>
      </laby-card>
      <br />
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import LabyCard from "../lib/Card.vue";
import "prismjs";
import "prismjs/themes/prism.css";
import LabyButton1 from "./examples/Button/Button1.example.vue";
import LabyButton2 from "./examples/Button/Button2.example.vue";
import LabyButton3 from "./examples/Button/Button3.example.vue";
import LabyButton4 from "./examples/Button/Button4.example.vue";
import LabyButton5 from "./examples/Button/Button5.example.vue";

const Prism = (window as any).Prism;

export default {
  components: {
    LabyCard,
    LabyButton1,
    LabyButton2,
    LabyButton3,
    LabyButton4,
    LabyButton5,
  },
  setup() {
    const components = [
      LabyButton1,
      LabyButton2,
      LabyButton3,
      LabyButton4,
      LabyButton5,
    ];
    const visibility = ref([false, false, false, false, false]);
    const toggle = (index) => {
      visibility.value[index] = !visibility.value[index];
    };
    return { Prism, components, visibility, toggle };
  },
};
</script>
<style lang="scss" scoped>
$theme-color: #f3678e;
.container {
  &:hover {
    > .example > .toggle > * > .desp {
      display: inline;
    }
  }
  > .example {
    > .toggle {
      display: block;
      width: 100%;
      height: 32px;
      border: none;
      transition: background-color 250ms;
      outline: none;
      &:focus {
        outline: none;
      }
      background: white;
      cursor: pointer;
      &:hover {
        background: fade-out($theme-color, 0.9);
      }
      > * > .desp {
        display: none;
      }
    }
  }
}
</style>