# 快速开始

可以选择完整引入本组件库，或只选择部分组件进行引入

## 完整引入

在 `main.ts` 中写入以下内容

```typescript
import { createApp } from 'vue';
import LabyUI from 'laby-ui-vue';
import 'laby-ui-vue/lib/laby.css';
import App from './App.vue';

const app = createApp(App);
app.use(LabyUI);
app.mount('#app');
```

这样就完成了对本组件库的引入

注意，样式文件需要单独引入

## 按需引入

可以借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component) 实现部分引入

首先请安装 `babel-plugin-component`

```bash
npm install babel-plugin-component --dev
```

然后，修改 `.babelrc`

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "laby-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

现在就可以在主入口中部分引入组件了

```typescript
import { createApp } from 'vue';
import { Button, Switch } from 'laby-ui';
import App from './App.vue';

const app = createApp(App);

app.use(Button);
app.use(Switch);

app.mount('#app');
```

在部分引入中，不需要特意引入样式表