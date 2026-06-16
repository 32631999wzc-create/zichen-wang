# UI Component Contracts: 个人网站

## 布局组件

### Header
```
Props:
  - currentPath: string    // 用於高亮当前导航项
  - theme: 'light' | 'dark'

Behavior:
  - 固定在页面顶部，滚动时 backdrop-blur
  - 左侧 Logo/名字，右侧导航链接
  - 移动端：汉堡菜单展开抽屉导航
  - 显示当前页面位置高亮
  - 包含主题切换按钮
```

### Footer
```
Props:
  - social: { linkedin, github, twitter }
  - email: string

Behavior:
  - 页脚包含社交媒体链接、邮箱、版权信息
  - 简约设计，辅助信息层级
```

---

## 页面组件

### Hero (首页)
```
Props:
  - name: string
  - title: string          // "景观/城市设计师 → AI产品人"
  - subtitle: string       // 一句话简介
  - backgroundEffect: 'gradient' | 'minimal'

Behavior:
  - 全屏首屏，居中布局
  - 大标题 + 转型标签 + CTA 按钮（"查看作品集" / "了解更多"）
  - 微妙的渐变或动效背景
```

### NarrativeTimeline (首页)
```
Props:
  - milestones: Array<{
      year: string,
      title: string,
      description: string,
      type: 'design' | 'ai-product'
    }>

Behavior:
  - 垂直时间线展示转型旅程
  - 左侧时间点，右侧内容
  - 交替颜色标签区分设计/AI阶段
  - 滚动触发渐入动画
```

### FeaturedProjects (首页)
```
Props:
  - projects: Array<{
      slug: string,
      title: string,
      type: string,
      cover: string,
      tags: string[]
    }>
  - maxCount: number       // 默认 3

Behavior:
  - 展示精选项目卡片网格（2-3 个）
  - 每张卡片：封面图 + 标题 + 类型标签
  - 悬停：轻微上浮效果 + 遮罩显示更多信息
  - 点击跳转项目详情页
  - "查看全部" 链接到作品集页
```

### ProjectCard (作品集页)
```
Props:
  - project: {
      slug: string,
      title: string,
      type: string,
      date: string,
      cover: string,
      tags: string[],
      status: string
    }

Behavior:
  - 等比例卡片，封面图撑满
  - 底部信息区：标题、类型、日期
  - 悬停：图片缩放 + 标签显示
  - 响应式：桌面 3 列 → 平板 2 列 → 手机 1 列
```

### ProjectDetail (项目详情页)
```
Props:
  - project: FullProjectData  // 含所有字段

Behavior:
  - 顶部：标题、类型标签、时间、地点、角色
  - 图片画廊（可左右切换或网格展示）
  - 四个内容区：背景 | 过程 | 成果 | 反思
  - 底部：上一篇/下一篇导航
  - 返回作品集按钮
```

### Timeline (经历页)
```
Props:
  - experiences: Array<{
      period: string,
      title: string,
      organization: string,
      type: string,
      description: string,
      highlights: string[],
      skills: string[]
    }>

Behavior:
  - 垂直时间线布局
  - 每个节点：时间段 + 角色 + 组织 + 描述
  - 高亮条目用 bullet points
  - 技能标签 chip 显示
```

---

## 通用 UI 组件

### ThemeToggle
```
Behavior:
  - 点击切换 light/dark 模式
  - 保存偏好到 localStorage
  - 默认遵循系统偏好 (prefers-color-scheme)
  - 图标切换：太阳 ↔ 月亮
  - 过渡动画平滑
```

### Section
```
Props:
  - title: string
  - subtitle?: string
  - className?: string
  - children: ReactNode

Behavior:
  - 页面通用区块包装器
  - 标题 + 可选的副标题
  - 统一的内边距和间距
  - 可选的背景色分段
```

### Tag
```
Props:
  - label: string
  - variant: 'default' | 'accent' | 'outline'
  - size: 'sm' | 'md'

Behavior:
  - 标签/chip 组件
  - 不同颜色变体
  - 用于项目分类、技能标签等
```
