# Data Model: 个人网站内容模型

## 项目 (Project)

```yaml
# content/projects/project-01.md
---
title: "项目名称"
type: "景观设计"  # 可选: 景观设计 | 城市设计 | AI产品 | 其他
date: "2024-06"
location: "杭州市"
role: "主创设计师"
status: "已建成"   # 可选: 已建成 | 竞赛 | 概念方案
tags: ["公共空间", "生态修复"]
cover: "/images/projects/project-01/cover.jpg"
gallery:
  - "/images/projects/project-01/img-01.jpg"
  - "/images/projects/project-01/img-02.jpg"
links:
  - label: "项目文档"
    url: "https://..."
---

## 项目背景

[描述项目的起因和背景]

## 设计过程

[描述设计思路和过程]

## 成果

[描述最终的成果和影响]

## 反思

[对项目的反思，以及这段经历对转型AI产品的启发]
```

**字段说明**:

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| title | string | ✅ | 项目名称 |
| type | enum | ✅ | 项目分类 |
| date | string (YYYY-MM) | ✅ | 完成/进行时间 |
| location | string | ❌ | 项目地点 |
| role | string | ❌ | 承担的角色 |
| status | enum | ✅ | 项目状态 |
| tags | string[] | ❌ | 标签，用于筛选 |
| cover | string (path) | ✅ | 封面图片路径 |
| gallery | string[] (paths) | ❌ | 展示图片列表 |
| links | {label, url}[] | ❌ | 相关链接 |

---

## 经历条目 (Experience)

```typescript
// content/experiences/experiences.json
[
  {
    "id": "exp-01",
    "period": "2024-01 至 今",
    "title": "AI产品经理",
    "organization": "某科技公司",
    "type": "ai-product",     // design | ai-product | education | other
    "description": "负责...",
    "highlights": [
      "主导XX产品从0到1",
      "实现XX增长"
    ],
    "skills": ["产品策略", "数据分析", "LLM"],
    "relevance": "这段经历让我...（与转型叙事的关联）"
  }
]
```

---

## 博客文章 (Blog Post) — 预留

```yaml
# content/blog/post-title.md
---
title: "文章标题"
date: "2026-07-01"
tags: ["AI产品", "设计思考"]
summary: "文章摘要（SEO用）"
published: true
---

## 正文内容...

Markdown 格式自由写作...
```

---

## 个人资料 (Profile)

```typescript
// content/profile.json
{
  "name": "你的名字",
  "title": "景观/城市设计师 → AI产品人",
  "bio": "一段精彩的个人简介...",
  "avatar": "/images/profile/avatar.jpg",
  "email": "your@email.com",
  "social": {
    "linkedin": "https://linkedin.com/in/...",
    "github": "https://github.com/...",
    "twitter": "https://twitter.com/..."
  },
  "skills": [
    { "category": "设计", "items": ["景观设计", "城市设计", "参数化设计"] },
    { "category": "AI产品", "items": ["产品策略", "需求分析", "AIGC"] },
    { "category": "工具", "items": ["Figma", "Python", "GIS"] }
  ]
}
```

---

## 主题配置 (Theme)

```css
/* app/globals.css — CSS Custom Properties */

:root {
  /* Light mode */
  --color-bg-primary: #edf6f9;
  --color-bg-secondary: #ffffff;
  --color-accent-light: #ffddd2;
  --color-accent-medium: #83c5be;
  --color-accent-strong: #006d77;
  --color-text-primary: #1a1a2e;
  --color-text-secondary: #4a4a6a;
  /* Spacing, typography tokens... */
}

[data-theme="dark"] {
  --color-bg-primary: #0d1b2a;
  --color-bg-secondary: #1b2838;
  --color-text-primary: #e8e8e8;
  --color-text-secondary: #a0a0b0;
  /* Dark mode accent adjustments */
  --color-accent-light: #ffddd2;
  --color-accent-medium: #83c5be;
  --color-accent-strong: #006d77;
}
```
