import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site";
import PreviewMode from "../PreviewMode";
import styles from "./preview.module.css";

const styleNames = {
  figma: "Figma",
  runway: "Runway",
  framer: "Framer",
  apple: "Apple",
} as const;

type PreviewStyle = keyof typeof styleNames;

const previewCopy: Record<PreviewStyle, { eyebrow: string; lead: string; note: string }> = {
  figma: {
    eyebrow: "DESIGN × AI PRODUCT",
    lead: "让城市空间与智能产品，在同一张画布上发生。",
    note: "理性的框架，鲜活的表达。",
  },
  runway: {
    eyebrow: "A TRANSITION IN MOTION",
    lead: "我把空间叙事的敏感，带入 AI 产品的创造过程。",
    note: "从一帧城市，走向下一种可能。",
  },
  framer: {
    eyebrow: "BUILDING ACROSS DISCIPLINES",
    lead: "用设计思维塑造空间，以产品思维创造价值。",
    note: "从物理世界到数字产品。",
  },
  apple: {
    eyebrow: "ZICHEN WANG · PORTFOLIO",
    lead: "专注地观察，清晰地定义，优雅地解决。",
    note: "设计的本质，是让复杂变得自然。",
  },
};

const projects = [
  { index: "01", title: "NUS 城市设计毕业作品", tag: "URBAN DESIGN", art: "city" },
  { index: "02", title: "AI 与城市的交叉实验", tag: "AI PRODUCT", art: "signal" },
  { index: "03", title: "景观系统与公共生活", tag: "LANDSCAPE", art: "land" },
];

export function generateStaticParams() {
  return Object.keys(styleNames).map((style) => ({ style }));
}

export default async function DesignPreviewPage({
  params,
}: {
  params: Promise<{ style: string }>;
}) {
  const { style } = await params;
  if (!(style in styleNames)) notFound();

  const current = style as PreviewStyle;
  const copy = previewCopy[current];

  return (
    <div className={styles.preview} data-style={current}>
      <PreviewMode />

      <aside className={styles.switcher} aria-label="切换设计方案">
        <span className={styles.switcherLabel}>方案对比</span>
        {Object.entries(styleNames).map(([key, label]) => (
          <Link
            key={key}
            href={`/design-preview/${key}`}
            className={current === key ? styles.switcherActive : undefined}
            aria-current={current === key ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </aside>

      <header className={styles.nav}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark}>ZW</span>
          <span className={styles.brandName}>{siteConfig.name}</span>
        </Link>
        <nav aria-label="预览页导航">
          <a href="#work">作品</a>
          <a href="#story">经历</a>
          <a href="#contact">联系</a>
        </nav>
        <a className={styles.navCta} href={`mailto:${siteConfig.contact.email}`}>和我聊聊</a>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1>
              从城市设计师
              <span>到 AI 产品人。</span>
            </h1>
            <p className={styles.lead}>{copy.lead}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#work">查看作品</a>
              <a className={styles.secondaryButton} href="#story">了解转型故事</a>
            </div>
          </div>

          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.artGrid} />
            <div className={styles.artOrb} />
            <div className={styles.artWindow}>
              <span>SPACE</span>
              <strong>→</strong>
              <span>INTELLIGENCE</span>
            </div>
            <p>{copy.note}</p>
          </div>

          <div className={styles.heroMeta}>
            <span>BA · NCUT</span>
            <span>MA · NUS</span>
            <span>BASED IN CHINA</span>
          </div>
        </section>

        <section className={styles.story} id="story">
          <div className={styles.sectionLabel}>
            <span>01</span>
            <p>我的路径</p>
          </div>
          <div className={styles.storyBody}>
            <p className={styles.storyKicker}>两种尺度，一种方法</p>
            <h2>我关心人如何感受空间，也关心人如何理解技术。</h2>
            <div className={styles.storyGrid}>
              <article>
                <span className={styles.year}>2021—2025</span>
                <h3>风景园林 · 北方工业大学</h3>
                <p>建立空间感知、系统思考与跨学科解决问题的方法。</p>
              </article>
              <article>
                <span className={styles.year}>2025—2026</span>
                <h3>城市设计 · 新加坡国立大学</h3>
                <p>在城市尺度上进行研究与设计，毕业作品获 JTC 选展。</p>
              </article>
              <article>
                <span className={styles.year}>NEXT</span>
                <h3>AI 产品 · 新的创造界面</h3>
                <p>把用户研究、设计策略与对美的判断，带入智能产品。</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.work} id="work">
          <div className={styles.workHeader}>
            <div className={styles.sectionLabel}>
              <span>02</span>
              <p>精选作品</p>
            </div>
            <h2>Selected work</h2>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article className={styles.project} key={project.index}>
                <div className={`${styles.projectArt} ${styles[project.art]}`}>
                  <span>{project.index}</span>
                  <div />
                </div>
                <div className={styles.projectInfo}>
                  <p>{project.tag}</p>
                  <h3>{project.title}</h3>
                  <span aria-hidden="true">↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <p>下一个问题，一起解决。</p>
          <h2>Let’s make something meaningful.</h2>
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email} <span>↗</span></a>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 {siteConfig.nameEn.toUpperCase()}</span>
        <span>{styleNames[current]} DIRECTION STUDY</span>
      </footer>
    </div>
  );
}
