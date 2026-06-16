# 内容更新指南

本网站的内容全部由 Markdown + JSON 文件驱动，**无需修改代码**即可更新。

## 📁 目录结构

```
src/content/
├── projects/           # 项目作品（每篇一个 .md 文件）
├── experiences/        # 经历数据（experiences.json）
├── blog/               # 博客文章（每篇一个 .md 文件）
└── profile.json        # 个人信息
```

---

## 🏗️ 项目作品

**位置**: `src/content/projects/`

每篇项目文件以 `项目名称.md` 命名（例如 `smart-park.md`），文件名即 URL 中的 slug。

### 示例

```markdown
---
title: "智慧公园设计"
type: "景观设计"
date: "2024-03"
location: "深圳"
role: "主创设计师"
status: "已建成"
tags: ["公共空间", "智慧城市"]
cover: "/images/projects/smart-park/cover.jpg"
gallery:
  - "/images/projects/smart-park/01.jpg"
  - "/images/projects/smart-park/02.jpg"
links:
  - label: "项目详情"
    url: "https://example.com"
---

## 背景

这里是项目背景描述。

## 过程

设计过程中的关键决策和方法。

## 成果

最终的成果和数据。

## 反思

项目中的收获和思考。
```

### 新增项目步骤

1. 在 `projects/` 下新建 `.md` 文件
2. 填写 frontmatter（上方 `---` 之间的字段）
3. 编写正文（支持 Markdown）
4. 将图片放入 `public/images/projects/<项目名>/`
5. 构建后自动生成新页面

### 前端字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | ✅ | 项目名称 |
| `type` | ✅ | 项目类型（如：景观设计、城市设计、AI产品） |
| `date` | ✅ | 日期格式 `YYYY-MM` 或 `YYYY-MM-DD` |
| `location` | | 项目地点 |
| `role` | | 担任角色 |
| `status` | ✅ | 状态（如：已建成、概念方案、进行中） |
| `tags` | ✅ | 标签列表 |
| `cover` | | 封面图片路径 |
| `gallery` | | 图库图片路径列表 |
| `links` | | 外部链接列表 |

### 修改/删除

- **修改**: 直接编辑对应的 `.md` 文件
- **删除**: 删除对应的 `.md` 文件即可

---

## 🎓 经历数据

**位置**: `src/content/experiences/experiences.json`

### 示例

```json
{
  "id": "exp-01",
  "period": "2024 - 至今",
  "title": "AI产品经理",
  "organization": "某科技公司",
  "type": "ai-product",
  "description": "负责AI产品的规划与落地...",
  "highlights": [
    "主导XX产品的从0到1",
    "推动XX功能上线"
  ],
  "skills": ["产品策略", "需求分析", "AIGC"],
  "relevance": "将设计思维融入产品方法论"
}
```

### type 可选值

| 值 | 含义 |
|------|------|
| `design` | 设计经历 |
| `ai-product` | AI产品经历 |
| `education` | 教育经历 |
| `other` | 其他 |

---

## 📝 博客文章

**位置**: `src/content/blog/`

格式与项目文件相同（Markdown + frontmatter），但字段不同。

### 示例

```markdown
---
title: "从设计思维到产品思维"
date: "2026-05-15"
tags: ["产品思维", "转型思考"]
summary: "在从空间设计转向AI产品的过程中..."
published: true
---

这里是正文，支持完整的 Markdown 语法。
```

### 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | ✅ | 文章标题 |
| `date` | ✅ | 日期 `YYYY-MM-DD` |
| `tags` | ✅ | 标签列表 |
| `summary` | ✅ | 摘要（列表页和 SEO 使用） |
| `published` | ✅ | `true` 发布 / `false` 草稿 |

> **草稿功能**: 将 `published` 设为 `false`，文章不会出现在博客列表页，但保留文件方便后续继续编辑。

---

## 👤 个人信息

**位置**: `src/content/profile.json`

```json
{
  "name": "你的名字",
  "title": "景观/城市设计师 → AI产品人",
  "bio": "一段个人简介...",
  "avatar": "/images/profile/avatar.jpg",
  "email": "hello@example.com",
  "social": {
    "linkedin": "https://linkedin.com/in/your-profile",
    "github": "https://github.com/your-name",
    "twitter": "https://twitter.com/your-name"
  },
  "skills": [
    {
      "category": "设计",
      "items": ["景观设计", "城市设计", "..."]
    },
    {
      "category": "产品",
      "items": ["产品策略", "需求分析", "..."]
    }
  ]
}
```

---

## 🖼️ 图片资源

图片统一放在 `public/images/` 目录下：

```
public/images/
├── projects/          # 项目作品图片
│   └── <项目slug>/
│       ├── cover.jpg
│       ├── 01.jpg
│       └── ...
└── profile/           # 个人头像
    └── avatar.jpg
```

> **注意**: 本项目使用静态导出（`output: "export"`），图片放在 `public/` 下即可自动引用。

---

## 🔄 更新后操作

### 本地预览

```bash
cd portfolio
npm run dev
```

### 部署

```bash
# 构建静态文件
npm run build

# 将 out/ 目录部署到服务器/Vercel/Netlify
```

---

## ❓ 常见问题

**Q: 修改后需要重启吗？**
A: 开发模式下（`npm run dev`）修改内容文件热更新，不需要重启。

**Q: 可以添加新的字段吗？**
A: 可以，但需要同步更新 `src/lib/content.ts` 中的 TypeScript 接口定义。

**Q: 如何调整博客/项目的排序？**
A: 按 `date` 字段自动降序排列，修改日期即可调整顺序。

**Q: 如何隐藏某篇博客但不删除？**
A: 将 `published` 设为 `false`。
