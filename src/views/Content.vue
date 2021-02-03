<template>
  <h1>{{ title }}</h1>
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
          Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')
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
</template>
<script lang="ts">
import { ref } from "vue";
import LabyCard from "../lib/Card.vue";
import "prismjs";
import "prismjs/themes/prism.css";

const Prism = (window as any).Prism;

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  components: {
    LabyCard,
  },
  setup(props) {
    const templateString: string =
      "../components/examples/{name}/{name}{index}.example.vue";
    const { name, title, quantity } = props;
    const paths = [];
    for (let i = 1; i <= quantity; i++) {
      paths.push(
        templateString
          .replace("{name}", name)
          .replace("{name}", name)
          .replace("{index}", i.toString())
      );
    }

    const components = ref(paths.map((item) => ({})));
    paths.forEach((path: string, index) => {
      import(path).then((res) => {
        components.value[index] = res.default;
      });
    });
    const visibility = ref(paths.map((item) => false));
    const toggle = (index) => {
      visibility.value[index] = !visibility.value[index];
    };
    return { title, Prism, components, visibility, toggle };
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