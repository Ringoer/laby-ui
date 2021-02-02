<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content" @click="hideMenu">
      <aside v-if="menuVisible" ref="aside">
        <div class="aside-list">
          <h2>指南</h2>
          <ol>
            <li v-for="(guidance, index) in guidances" :key="index">
              <router-link :to="'/document/' + guidance.path">
                {{ guidance.title }}
              </router-link>
            </li>
          </ol>
        </div>
        <div class="aside-list">
          <h2>组件列表</h2>
          <ol>
            <li v-for="(component, index) in components" :key="index">
              <router-link :to="'/document/' + component.toLowerCase()">
                {{ component }}
              </router-link>
            </li>
          </ol>
        </div>
      </aside>
      <main class="markdown-body">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, ref, Ref } from "vue";
export default {
  data() {
    return {
      guidances: [
        { path: "introduction", title: "介绍" },
        { path: "install", title: "安装" },
        { path: "start", title: "快速上手" },
      ],
      components: ["Button", "Card", "Dialog", "Switch", "Tabs"],
    };
  },
  components: {
    Topnav,
  },
  setup() {
    const aside = ref<HTMLDivElement>(null);
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const hideMenu = (event) => {
      let target: Node = event.target;
      if (!(target instanceof HTMLAnchorElement)) {
        while (target.parentNode && target.parentNode !== document.body) {
          target = target.parentNode;
          if (target === aside.value) {
            return;
          }
        }
      }
      if (document.documentElement.clientWidth <= 500) {
        menuVisible.value = false;
      }
    };
    return {
      aside,
      menuVisible,
      hideMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
$base-color: #fe9acf;
$aside-index: 10;
$active-color: linear-gradient(
  90deg,
  rgba(255, 255, 255, 1) 0%,
  rgba(255, 255, 255, 1) 97%,
  $base-color 97%,
  $base-color 100%
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
    width: 200px;
    padding: 16px 0;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 90px;
    height: 100%;
    z-index: $aside-index;
    > .aside-list {
      margin: 12px 0;
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
              color: $base-color;
              background: $active-color;
            }
          }
          .router-link-active {
            color: $base-color;
            background: $active-color;
          }
        }
      }
    }

    @media (max-width: 500px) {
      background: #fdd1e8;
      width: 100%;
      height: auto;
    }
  }
  > main {
    overflow: auto;
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
</style>