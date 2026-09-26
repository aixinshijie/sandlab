# 沙水实验室 · 在线版

打开：<https://aixinshijie.github.io/sandlab/>

| 地址 | 页面 |
| --- | --- |
| `/sandlab/` | 沉浸式沙水实验室（默认） |
| `/sandlab/sandlab` | 工具齐全的试验版 |

这个仓库只放编译好的静态网页，GitHub Pages 直接发布 `main` 分支根目录。来源是「沙水实验室-水效优化版」的源码。

- `.nojekyll` 不能删：没有它，GitHub Pages 会跳过 `_next/` 目录，页面会白屏。
- 参考项目 Clearwater 的 MIT 许可在 `third-party/clearwater/`。

## 更新方法

网站挂在子路径 `/sandlab` 下，直接拿本地版的 `网页/dist/client` 传上来是不行的（本地版的资源都是根路径）。要这样编译：

1. `next.config.ts` 加 `basePath: '/sandlab'`；`app/sandlab/props-catalog.ts`、`app/sandlab/tray-frame.ts`、`app/layout.tsx` 里写死的 `/props/`、`/models/`、`/favicon.svg` 前面改成 `${import.meta.env.BASE_URL}`；`app/page.tsx` 改成直接导出沉浸版（`export { default } from './sandlab/immersive'`）。
2. vinext 1.0.0-beta.5 的静态导出预渲染时不带 basePath（`/` 和 `/sandscape` 会被跳过）：在 `node_modules/vinext/dist/build/prerender.js` 转发请求处把路径前面补上 `config.basePath`，再 `npm run build`。四个路由都应显示 Prerendered。
3. 产物里 `dist/client/sandlab/_next` 挪到仓库根目录的 `_next`，其余页面（`*.html`、`*.rsc`）和 `favicon.svg`、`models/`、`props/` 照原样放在根目录。
