import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/project/ProjectCard";
import { getAllProjects } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "作品集",
  description:
    "景观设计与城市设计代表作品集。涵盖公共空间、城市更新、生态修复等多个领域。",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className={styles.page}>
      <Section
        title="作品集"
        subtitle="景观设计与城市设计 — 从概念到落地"
      >
        {projects.length === 0 ? (
          <div className={styles.empty}>
            <p>暂无项目内容</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.frontmatter.title}
                type={project.frontmatter.type}
                date={project.frontmatter.date}
                cover={project.frontmatter.cover}
                tags={project.frontmatter.tags}
                status={project.frontmatter.status}
              />
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
