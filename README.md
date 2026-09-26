# 沙水实验室 · 在线版

打开：<https://aixinshijie.github.io/sandlab/>

| 地址 | 页面 |
| --- | --- |
| `/sandlab/` | 沉浸式沙水实验室（默认） |
| `/sandlab/sandlab` | 工具齐全的试验版 |

这个仓库只放编译好的静态网页，GitHub Pages 直接发布 `main` 分支根目录。

- `.nojekyll` 不能删：没有它，GitHub Pages 会跳过 `_next/` 目录，页面会白屏。
- 主站 aixinshijie.github.io 有登录门（它的 `/sw.js` 管整个域名）。那里 `GATE.publicPaths` 里的 `"/sandlab"`、`publicPrefixes` 里的 `"/sandlab/"` 必须留着，否则访问过主站的浏览器打开这里会看到主站的 404 或登录页。
- 参考项目 Clearwater 的 MIT 许可在 `third-party/clearwater/`。

## 更新方法

源码不在这个仓库里。在源码目录：

1. `npm ci`
2. `npm run build:pages`：编译成挂在 `/sandlab` 下的版本，排好放在 `dist/pages/`（脚本会顺手修 vinext 1.0.0-beta.5 预渲染不带 basePath 的问题）。
3. 把 `dist/pages/` 里变了的文件传到这个仓库：先传 `_next/` 下新的文件，最后换根目录的 `*.html`、`*.rsc`，这样换的那一下页面引用的文件都已经在了。

本地版照旧：`npm run build`，再 `npm run serve`（挂在根路径）。
