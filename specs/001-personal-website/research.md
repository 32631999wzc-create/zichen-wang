# Research: 个人网站技术方案

## Framework Decision: Next.js 14+ (App Router, SSG)

| 项 | 决策 |
|---|------|
| **Decision** | Next.js 14+ with App Router, Static Site Generation (SSG) |
| **Rationale** | SEO 友好（服务端渲染元数据）、零运维部署到 Vercel、React 生态丰富、
  图片优化内置（next/image）、支持 SSG 预构建全站为静态文件 |
| **Alternatives** | Astro（内容更优但生态较新）、Hugo（Go 模板不易维护）、
  纯 HTML/CSS/JS（无组件化，扩展性差） |

## CSS Strategy: CSS Modules + CSS Custom Properties

| 项 | 决策 |
|---|------|
| **Decision** | CSS Modules 组件级样式 + CSS Custom Properties 全局主题 |
| **Rationale** | 设计驱动原则需要像素级样式控制；CSS Modules 提供组件隔离；
  CSS 变量实现无缝暗色模式切换（仅需改变变量值） |
| **Alternatives** | Tailwind CSS（类名冗长，设计自由度受限）、
  styled-components（运行时开销，SSR 配置复杂） |

## Content Strategy: Markdown + frontmatter

| 项 | 决策 |
|---|------|
| **Decision** | Markdown 文件 + gray-matter frontmatter 管理内容 |
| **Rationale** | 内容与代码分离；非技术人员可编辑；Git 版本控制；
  可无缝迁移到 CMS（Contentlayer, Sanity 等） |
| **Data Format** | 项目用 Markdown（含 frontmatter 字段），
  经历用 JSON（结构化数据更合适） |

## Dark Mode: CSS Variables + Context

| 项 | 决策 |
|---|------|
| **Decision** | CSS Custom Properties (--color-bg, --color-text 等) + React Context |
| **Rationale** | 零运行时开销，瞬间切换；符合系统偏好（prefers-color-scheme）；
  与 CSS Modules 完美配合 |

## Deployment: Vercel

| 项 | 决策 |
|---|------|
| **Decision** | Vercel (Next.js 原生平台) |
| **Rationale** | 免费额度充裕 (100GB bandwidth)、自动 HTTPS、Git 集成自动部署、
  Image Optimization CDN、零配置 |

## SEO Strategy

| 项 | 决策 |
|---|------|
| **Decision** | Next.js metadata API + 语义化 HTML + sitemap.xml |
| **Rationale** | App Router 内置 metadata 支持；无需额外插件；
  自动生成 sitemap 利于搜索引擎收录 |
