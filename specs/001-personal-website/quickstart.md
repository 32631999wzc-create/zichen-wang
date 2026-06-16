# Quickstart: 个人网站验证指南

## 前置条件

- Node.js 20.x LTS
- npm 或 pnpm
- Vercel 账号（可选，用于部署）

## 本地开发

```bash
# 1. 初始化 Next.js 项目
npx create-next-app@latest portfolio --typescript --app --src-dir --import-alias "@/*"
cd portfolio

# 2. 安装内容处理依赖
npm install gray-matter next-mdx-remote

# 3. 启动开发服务器
npm run dev
# 访问 http://localhost:3000
```

## 验证场景

### 场景 1：首页品牌展示
```
操作: 访问 http://localhost:3000
期望: 
  □ Hero 区域展示姓名 + "景观/城市设计师 → AI产品人" 标题
  □ 配色系统一致（背景 #edf6f9，强调色 #006d77）
  □ 转型故事时间线可见
  □ 导航栏包含所有页面链接
  □ 页面在 375px / 768px / 1440px 下布局正确
```

### 场景 2：作品集浏览
```
操作: 点击导航 "作品集" → 进入 /projects
期望:
  □ 展示所有项目卡片网格
  □ 每张卡片有封面图和标题
  □ 点击卡片进入详情页 /projects/[slug]
  □ 详情页包含：背景、过程、成果、反思四个板块
  □ 移动端网格自动变为单列
```

### 场景 3：深色模式切换
```
操作: 点击主题切换按钮
期望:
  □ 页面从浅色无缝切换到深色
  □ 所有文本可读（对比度达标）
  □ 强调色 #006d77 在深色背景下依然醒目
  □ 刷新页面后保留模式选择
```

### 场景 4：响应式布局
```
操作: 使用浏览器 DevTools 切换设备模拟
期望:
  □ iPhone SE (375px): 单列布局，汉堡菜单导航
  □ iPad (768px): 双列网格，完整导航
  □ Desktop (1440px): 三列网格，完整导航 + 最大留白
  □ 所有断点下无重叠/溢出/错位
```

### 场景 5：SEO 基础
```
操作: 检查页面 <head>
期望:
  □ 每个页面有独一的 <title> 和 <meta name="description">
  □ 语义化 HTML（<nav>, <main>, <section>, <article> 等）
  □ Open Graph meta tags (og:title, og:description, og:image)
```

### 场景 6：性能
```
操作: 运行 Lighthouse 审计
期望:
  □ Performance ≥ 90
  □ Accessibility ≥ 90
  □ Best Practices ≥ 90
  □ SEO ≥ 90
```

## 部署验证

```bash
# 构建
npm run build
# 或
npx next build

# 部署到 Vercel
npx vercel --prod

# 验证生产环境
# 访问部署 URL，重复以上所有验证场景
```

## 内容更新流程

### 新增项目
```bash
# 1. 在 content/projects/ 新建 .md 文件
# 2. 填写 frontmatter + 正文
# 3. 图片放入 public/images/projects/[项目名]/
# 4. 提交 Git → 自动部署
```

### 更新经历
```bash
# 编辑 content/experiences/experiences.json
# 提交 Git → 自动部署
```
