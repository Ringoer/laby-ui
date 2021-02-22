# 进度

目前已经完成了

- Button
- Card
- Dialog
- Switch
- Table
- Tabs

# 安装

推荐使用 npm 安装

```bash
npm install laby-ui-vue --save
```

或使用 yarn

```bash
yarn add laby-ui-vue --save
```

# 技术栈

- Vue3
- TypeScript

# 部署

根据部署到 Github Pages 和自己服务器（以 nginx 为例），有不同的配置

## Github Pages

修改 `vite.config.ts` 中的 `base` 字段为 `'./'`

修改 `src/router.ts` 中的 `history` 为 hash 模式

## nginx

修改 `vite.config.ts` 中的 `base` 字段为 `'/'`

修改 `src/router.ts` 中的 `history` 为 history 模式

# 修改建议

重点调整 `Global.ts` 里的定义