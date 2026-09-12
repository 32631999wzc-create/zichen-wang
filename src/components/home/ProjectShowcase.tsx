import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";
import { assetPath } from "@/lib/paths";
import { siteConfig } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "@/app/home.module.css";

type ProjectSummary = Omit<Project, "content">;

export function ProductShowcase({ projects }: { projects: ProjectSummary[] }) {
  const section = siteConfig.home.productSection;
  return (
    <section id="product-work" className={`${styles.section} ${styles.productSection}`} aria-labelledby="product-title">
      <SectionHeading {...section} titleId="product-title" />
      {projects.map((project) => project.frontmatter.homeLayout === "system"
        ? <SystemProduct key={project.slug} project={project} />
        : <FeaturedProduct key={project.slug} project={project} />)}
    </section>
  );
}

export function DesignShowcase({ projects }: { projects: ProjectSummary[] }) {
  const section = siteConfig.home.designSection;
  return (
    <section id="design-work" className={styles.section} aria-labelledby="design-title">
      <SectionHeading {...section} titleId="design-title" />
      <div className={styles.designGrid}>
        {projects.map(({ slug, frontmatter: project }) => (
          <Link key={slug} href={`/projects/${slug}`} className={`${styles.designCard} ${styles[project.homeTone ?? "lilac"]}`}>
            <div className={styles.imageFrame}>
              <Image src={assetPath(project.cover)} alt={`${project.homeTitle ?? project.title}项目总图与分析图`} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
              <span className={styles.cardNumber}>{project.homeNumber}</span>
              <span className={styles.cardAction}>查看案例 ↗</span>
            </div>
            <div className={styles.cardHeading}>
              <div><h3>{project.homeTitle ?? project.title}</h3><p>{project.homeTitleEn}</p></div>
              <span>{project.location}</span>
            </div>
            <p className={styles.cardDescription}>{project.homeSummary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FeaturedProduct({ project: { slug, frontmatter: project } }: { project: ProjectSummary }) {
  const links = project.links ?? [];
  const experienceLink = links.find((link) => link.label === "在线体验") ?? links[0];
  return (
    <article className={styles.productHero}>
      <div className={styles.productCopy}>
        <p className={styles.productNumber}>{project.homeEyebrow}</p>
        <h3>{project.homeTitle ?? project.title}</h3>
        <p className={styles.productEn}>{project.homeTitleEn}</p>
        <p className={styles.productSummary}>{project.homeSummary}</p>
        <div className={styles.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className={styles.productLinks}>
          {links.map((link, index) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className={index === 0 ? styles.primaryButton : styles.secondaryButton}>{link.label} ↗</a>)}
        </div>
      </div>
      <Link className={styles.productImage} href={experienceLink?.url ?? `/projects/${slug}`} target={experienceLink ? "_blank" : undefined} rel={experienceLink ? "noreferrer" : undefined} aria-label={`打开 ${project.homeTitle ?? project.title}`}>
        <Image src={assetPath(project.cover)} alt={`${project.homeTitle ?? project.title} 项目工作台界面`} fill sizes="(max-width: 1023px) 100vw, 55vw" />
      </Link>
    </article>
  );
}

function SystemProduct({ project: { frontmatter: project } }: { project: ProjectSummary }) {
  const link = project.links?.[0];
  return (
    <article className={styles.sopCard}>
      <div className={styles.sopVisual} aria-hidden="true">
        <div className={styles.sopTop}><span>INPUT</span><span>PROFILE</span><span>PLAN</span></div>
        <div className={styles.sopKernel}><span>KERNEL</span><strong>ROUTE</strong><small>scope · assets · risk</small></div>
        <div className={styles.sopFlow}><span>DEFINE</span><i /><span>DESIGN</span><i /><span>BUILD</span><i /><span>VERIFY</span></div>
        <div className={styles.sopGate}>GATE / EVIDENCE / TRACE</div>
      </div>
      <div className={styles.sopCopy}>
        <p className={styles.productNumber}>{project.homeEyebrow}</p>
        <h3>{project.homeTitle ?? project.title}</h3>
        <p>{project.homeSummary}</p>
        <div className={styles.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {link && <a href={link.url} target="_blank" rel="noreferrer" className={styles.textLink}>{link.label} · 查看方法 ↗</a>}
      </div>
    </article>
  );
}
