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
        <span class="close" v-if="visibility[index]">
          △
          <span class="desp">隐藏代码</span>
        </span>
        <span class="open" v-else>
          ▽
          <span class="desp">显示代码</span>
        </span>
      </button>
    </laby-card>
    <br />
  </div>
</template>
<script lang="ts">
import LabyButtons from "../components/contents/Button";
import LabyCards from "../components/contents/Card";
import LabyDialogs from "../components/contents/Dialog";
import LabySwitchs from "../components/contents/Switch";
import LabyTabss from "../components/contents/Tabs";

import { ref } from "vue";
import LabyCard from "../lib/Card.vue";
import "prismjs";
import "prismjs/themes/prism.css";

const Prism = (window as any).Prism;

const LabyMap = {
  Button: LabyButtons,
  Card: LabyCards,
  Dialog: LabyDialogs,
  Switch: LabySwitchs,
  Tabs: LabyTabss,
};

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
  },
  components: {
    LabyCard,
  },
  setup(props) {
    const { name, title } = props;

    const components = LabyMap[name];
    const visibility = ref(components.map((item) => false));
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