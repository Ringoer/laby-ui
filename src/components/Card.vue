<template>
  <div>
    <h1>Card 卡片</h1>
    <div
      class="container"
      v-for="({ ...component }, index) in components"
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
import LabyCard from "../lib/Card.vue";
import { ref } from "vue";
import "prismjs";
import "prismjs/themes/prism.css";

const Prism = (window as any).Prism;

export default {
  components: {
    LabyCard,
  },
  setup() {
    const paths = [
      "./examples/Card/Card1.example.vue",
      "./examples/Card/Card2.example.vue",
    ];
    const components = ref(paths.map((item) => ({})));
    paths.forEach((path, index) => {
      import(path).then((res) => {
        components.value[index] = res.default;
      });
    });
    const visibility = ref([false, false]);
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