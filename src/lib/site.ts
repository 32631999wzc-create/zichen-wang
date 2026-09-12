/**
 * Canonical site content configuration.
 *
 * Edit this file for names, introductions, navigation, contact links and
 * homepage copy. Project content lives in `src/content/projects/*.md`.
 */
export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://32631999wzc-create.github.io/zichen-wang",
  locale: "zh_CN",
  name: "王紫晨",
  nameEn: "Zichen Wang",
  title: "空间设计师 × AI 产品构建者",
  description: "王紫晨的跨尺度设计实践：从景观与城市系统，到可验证、可执行的 AI 产品。",
  profile: {
    role: "景观/城市设计师 → AI 产品人",
    intro: "我是王紫晨，一个在城市、AI 产品和攀岩墙之间来回切换的人。喜欢把复杂事情想清楚，也喜欢把团队里每个人照顾好。",
    bio: "北方工业大学风景园林本科，新加坡国立大学城市设计硕士。从空间系统出发，探索 AI 产品与可执行工作流。",
  },
  contact: {
    email: "wangzichen0326@126.com",
    linkedin: "https://www.linkedin.com/in/zichen-wang-1a3793410",
    github: "https://github.com/32631999wzc-create",
    linkedinLabel: "Zichen Wang",
    githubLabel: "32631999wzc-create",
  },
  navigation: [
    { href: "/#product-work", label: "产品" },
    { href: "/#design-work", label: "设计" },
    { href: "/#journey", label: "路径" },
    { href: "/about", label: "关于" },
  ],
  home: {
    eyebrow: "王紫晨 / ZICHEN WANG · 2026",
    identities: [
      { id: "design", index: "01 — DESIGN / SPACE", title: ["空间", "设计师"], titleEn: "Spatial & Urban Designer", statement: ["把模糊的关系，", "画成可感知的空间。"], statementEn: ["Turning hidden relationships", "into places you can feel."] },
      { id: "product", index: "02 — PRODUCT / SYSTEM", title: ["AI 产品", "构建者"], titleEn: "AI Product Builder", statement: ["把复杂的流程，", "做成真正运行的产品。"], statementEn: ["Turning complex workflows", "into products that work."] },
    ],
    vocabulary: ["HTML", "FIGMA", "AGENT", "HARNESS", "PYTHON"],
    selectedWorkLabel: "SELECTED WORK",
    productSection: { eyebrow: "PRODUCTS & SYSTEMS", title: "产品实践", description: "从一张图，到一套会运行的决策逻辑。", descriptionEn: "From mapping systems to building them." },
    designSection: { eyebrow: "SELECTED SPATIAL WORK", title: "设计案例", description: "三个场地，三个系统问题。", descriptionEn: "Three sites. Three systemic questions." },
    continuity: {
      eyebrow: "THE CONTINUITY",
      title: ["改变的是媒介，", "延续的是方法。"],
      titleEn: ["The medium changed.", "The method continues."],
      items: [
        { index: "01", title: "观察", description: "场地、人群、行为与约束", descriptionEn: "Observe contexts" },
        { index: "02", title: "组织", description: "尺度、关系、优先级与路径", descriptionEn: "Structure systems" },
        { index: "03", title: "构建", description: "空间、原型、流程与反馈", descriptionEn: "Build interactions" },
        { index: "04", title: "验证", description: "推演、测试、证据与迭代", descriptionEn: "Verify outcomes" },
      ],
    },
  },
  footer: { eyebrow: "OPEN TO CONVERSATIONS", statement: "Let's make what doesn't exist yet.", signature: "Spatial systems → AI products" },
} as const;

export type SiteConfig = typeof siteConfig;
