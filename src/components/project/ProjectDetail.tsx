import Link from "next/link";
import Tag from "@/components/ui/Tag";
import ProjectGallery from "@/components/project/ProjectGallery";
import type { Project } from "@/lib/content";
import styles from "./ProjectDetail.module.css";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { frontmatter, content } = project;

  // Extract sections from markdown content
  const sections = extractSections(content);

  return (
    <article className={styles.detail}>
      {/* Header */}
      <header className={styles.header}>
        <Link href="/projects" className={styles.back}>
          ← 返回作品集
        </Link>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <div className={styles.meta}>
          <span className={styles.metaItem}>{frontmatter.type}</span>
          {frontmatter.location && (
            <span className={styles.metaItem}>{frontmatter.location}</span>
          )}
          <span className={styles.metaItem}>{frontmatter.date}</span>
          {frontmatter.role && (
            <span className={styles.metaItem}>角色: {frontmatter.role}</span>
          )}
        </div>
        <div className={styles.tags}>
          <Tag label={frontmatter.status} variant="accent" size="sm" />
          {frontmatter.tags.map((tag) => (
            <Tag key={tag} label={tag} size="sm" />
          ))}
        </div>
      </header>

      {/* Gallery */}
      <ProjectGallery
        images={frontmatter.gallery || []}
        title={frontmatter.title}
      />

      {/* Content sections */}
      <div className={styles.content}>
        {sections.map((section, i) => (
          <div key={i} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.heading}</h2>
            <div className={styles.sectionBody}>{section.body}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

function extractSections(
  markdown: string
): { heading: string; body: string }[] {
  const lines = markdown.split("\n");
  const sections: { heading: string; body: string }[] = [];
  let currentHeading = "";
  let currentBody: string[] = [];

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (currentHeading) {
        sections.push({
          heading: currentHeading,
          body: currentBody.join("\n").trim(),
        });
      }
      currentHeading = line.replace("## ", "");
      currentBody = [];
    } else {
      currentBody.push(line);
    }
  }

  if (currentHeading) {
    sections.push({
      heading: currentHeading,
      body: currentBody.join("\n").trim(),
    });
  }

  return sections;
}
