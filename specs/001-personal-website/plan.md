# Implementation Plan: 个人网站 (Personal Portfolio Website)

**Date**: 2026-06-16 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/001-personal-website/spec.md`

## Summary

构建一个面向招聘方的个人品牌网站，展示从景观/城市设计到AI产品的转型故事。
包含首页、作品集（5个项目）、经历阐述、关于我四个页面。
视觉风格：极简美学，品牌色系统 #edf6f9 / #ffddd2 / #83c5be / #006d77。
支持浅色/深色模式，响应式设计，SEO优化。

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 20.x LTS

**Framework**: Next.js 14+ (App Router, SSG mode for static export)

**Primary Dependencies**:
- next: 14.x (React framework with SSG)
- react / react-dom: 18.x
- next-mdx-remote: MDX content rendering
- gray-matter: markdown frontmatter parsing
- CSS Modules + CSS Custom Properties (themming via CSS variables)

**Storage**: File-based (Markdown + JSON for content), no database needed

**Testing**: Manual visual testing + Lighthouse audits. No unit test framework for MVP.

**Target Platform**: Modern browsers (Chrome/Firefox/Safari/Edge latest 2 versions), responsive from 375px to 1920px

**Project Type**: Static website (Next.js SSG, deploy to Vercel)

**Performance Goals**: 
- Lighthouse Performance ≥ 90
- First Contentful Paint < 1.5s (3G)
- Largest Contentful Paint < 2.5s (3G)

**Constraints**: 
- No database dependency (pure static site)
- Zero maintenance cost (Vercel free tier)
- Images must be optimized (lazy loading, WebP)
- Accessible (WCAG 2.1 Level A)

**Scale/Scope**: 
- 4 pages (home, projects, experience, about)
- 5 project detail pages
- Low traffic (personal portfolio, < 1000 visits/month)
- Low update frequency (monthly blog posts, quarterly project updates)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Compliance | Notes |
|-----------|-----------|-------|
| I. 设计驱动身份 (Design-Driven Identity) | ✅ PASS | 每个组件自审视觉品质，CSS Modules 保证精细控制 |
| II. 转型叙事 (Transition Narrative) | ✅ PASS | 内容架构围绕转型故事线组织，首页、经历页体现叙事 |
| III. 内容优先 (Content First) | ✅ PASS | Markdown 驱动内容，数据与展示分离 |
| IV. 极简美学 (Minimalist Aesthetic) | ✅ PASS | 色板限制，排版系统克制，CSS Grid 留白控制 |
| V. 面向未来 (Future-Facing) | ✅ PASS | 深色模式、微交互、SEO 优化均在计划内 |

**Gate Status**: ✅ All gates pass. No complexity justification needed.

## Project Structure

### Documentation (this feature)

```text
specs/001-personal-website/
├── spec.md              # Feature specification ✅
├── plan.md              # This file (current)
├── research.md          # Phase 0: Technical research & decisions
├── data-model.md        # Phase 1: Content data models
├── quickstart.md        # Phase 1: Validation guide
├── contracts/           # Phase 1: UI contracts (component specs)
└── tasks.md             # Phase 2: (/speckit-tasks output)
```

### Source Code (repository root)

```text
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout (ThemeProvider, Header, Footer)
│   ├── page.tsx           # Home page (hero, narrative timeline, featured)
│   ├── projects/
│   │   ├── page.tsx       # Project grid gallery
│   │   └── [slug]/
│   │       └── page.tsx   # Project detail page
│   ├── experience/
│   │   └── page.tsx       # Career/transformation timeline
│   ├── about/
│   │   └── page.tsx       # About + contact
│   └── globals.css        # Global styles + CSS variables (theme tokens)
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Navigation bar
│   │   ├── Footer.tsx     # Footer with links
│   │   └── MobileNav.tsx  # Mobile navigation drawer
│   ├── home/
│   │   ├── Hero.tsx       # Hero section
│   │   ├── NarrativeTimeline.tsx  # Transition story timeline
│   │   └── FeaturedProjects.tsx   # Featured project cards
│   ├── project/
│   │   ├── ProjectCard.tsx        # Grid card component
│   │   ├── ProjectGallery.tsx     # Image gallery
│   │   └── ProjectDetail.tsx      # Detail layout
│   ├── experience/
│   │   └── Timeline.tsx  # Experience timeline component
│   ├── ui/
│   │   ├── ThemeToggle.tsx    # Dark/light mode switch
│   │   ├── Tag.tsx            # Project tags
│   │   └── Section.tsx        # Reusable section wrapper
│   └── ... (additional components as needed)
├── content/
│   ├── projects/          # Markdown files per project
│   │   ├── project-01.md
│   │   ├── project-02.md
│   │   └── ...
│   ├── experiences/       # Experience data (YAML or JSON)
│   │   └── experiences.json
│   └── blog/              # Blog posts (future)
├── lib/
│   ├── content.ts         # Content loading utilities
│   └── theme.ts           # Theme context provider
├── public/
│   └── images/
│       ├── projects/      # Project images
│       └── profile/       # Profile photo
└── next.config.ts         # Next.js configuration
```

**Structure Decision**: Standard Next.js App Router structure with `content/` directory for
Markdown-driven content. This keeps content separate from code, enabling easy updates
without touching components.

## Complexity Tracking

> No constitution violations — all gates pass. No complexity tracking needed.
