<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/document/introduction">介绍</router-link>
          </li>
          <li>
            <router-link to="/document/install">安装</router-link>
          </li>
          <li>
            <router-link to="/document/start">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li v-for="(component, index) in components" :key="index">
            <router-link :to="'/document/' + component.toLowerCase()">
              {{ component }}
            </router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  data() {
    return {
      components: ["Switch", "Button", "Dialog", "Tabs"],
    };
  },
  components: {
    Topnav,
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return {
      menuVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
$base-color: #fe9acf;
$aside-index: 10;
$active-color: linear-gradient(
  90deg,
  $base-color 0%,
  $base-color 3%,
  rgba(255, 255, 255, 1) 3%,
  rgba(255, 255, 255, 1) 100%
);
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 90px;
    padding-left: 210px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
    // border: 1px solid red;
    margin-top: 4px;
    margin-right: 10px;
    @media (max-width: 500px) {
      margin-left: 10px;
    }
  }
}
aside {
  background: #fdd1e8;
  width: 200px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 90px;
  height: 100%;
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding: 4px 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 8px 32px;
        text-decoration: none;
        transition: background-color 100ms;
        &:hover {
          background: $active-color;
        }
      }
      .router-link-active {
        background: $active-color;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>