# 快速开始

可以选择完整引入本组件库，或只选择部分组件进行引入

## 完整引入

在 `main.ts` 中写入以下内容

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import LabyUI from 'laby-ui-vue';
import 'laby-ui-vue/lib/laby.css';

const app = createApp(App);
app.use(LabyUI);
app.mount('#app');
```

这样就完成了对本组件库的引入

注意，样式文件需要单独引入

## 按需引入

可以直接在主入口中部分引入组件

但请注意，仍然需要单独引入样式表

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import { LabyButton, LabyCard } from 'laby-ui-vue';
import 'laby-ui-vue/lib/laby.css';

const app = createApp(App);

app.use(LabyButton);
app.use(LabyCard);

app.mount('#app');
```