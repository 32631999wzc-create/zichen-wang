# 内容维护指南

网站使用 Next.js + React + TypeScript；个人信息与首页文案集中在配置文件，案例与文章由 Markdown 驱动。

## 修改个人信息与首页文案

编辑 `src/lib/site.ts`。姓名、中英文介绍、导航、邮箱、LinkedIn、GitHub、首页双身份文案、连续方法区和页脚口号都集中在这里。

## 修改或新增案例

案例位于 `src/content/projects/*.md`，文件名就是详情页 slug。正文使用 Markdown，顶部 frontmatter 支持：

| 字段 | 必填 | 用途 |
| --- | --- | --- |
| `title` | 是 | 详情页项目名称 |
| `type` | 是 | 项目类型 |
| `category` | 是 | `design` 或 `product` |
| `date` | 是 | 排序日期 |
| `status` | 是 | 项目状态 |
| `tags` | 是 | 标签数组 |
| `cover` | 是 | `public` 下的封面路径 |
| `gallery` | 否 | 详情页图片数组 |
| `links` | 否 | 在线体验或仓库链接 |
| `featured` | 否 | 是否在首页展示 |
| `homeOrder` | 否 | 首页同类案例排序 |
| `homeNumber` | 否 | 设计案例编号 |
| `homeTitle` | 否 | 首页标题覆写 |
| `homeTitleEn` | 否 | 首页英文短标题 |
| `homeSummary` | 否 | 首页摘要 |
| `homeTone` | 否 | 设计卡片色调：`lilac`、`steel`、`forest` |
| `homeLayout` | 否 | 产品布局：`feature` 或 `system` |
| `homeEyebrow` | 否 | 产品卡片眉题 |

图片放在 `public/images/projects/<slug>/`。新增首页案例时设置 `featured: true`，无需修改 React 页面。

## 博客与经历

- 博客：`src/content/blog/*.md`
- 经历：`src/content/experiences/experiences.json`（目录存在时自动读取）

## 设计与响应式规范

- 视觉语言与组件规则：根目录 `DESIGN.md`
- 全局颜色、字号、间距和圆角：`src/app/globals.css`
- 响应式验收矩阵：`docs/responsive-qa.md`
- 断点规则检查：`npm run check:responsive`

## 本地验证

```bash
npm run lint
npm run check:responsive
npm run build
```

项目采用 Vercel 原生 Next.js 构建，不使用静态 `out/` 导出。
