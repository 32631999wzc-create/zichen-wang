"use client";

import Link from "next/link";
import { useInView } from "@/lib/useInView";
import styles from "./FeaturedProjects.module.css";

interface ProjectItem {
  slug: string;
  title: string;
  type: string;
  cover: string;
  tags: string[];
}

interface FeaturedProjectsProps {
  projects: ProjectItem[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (projects.length === 0) return null;

  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section
      ref={ref}
      className={`${styles.section} ${inView ? styles.visible : ""}`}
    >
      <div className={styles.inner}>
        <h2 className={styles.title}>精选项目</h2>
        <p className={styles.subtitle}>景观设计与城市设计代表作品</p>

        <div className={styles.grid}>
          {projects.slice(0, 3).map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={styles.card}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={styles.imageWrap}>
                <div className={styles.placeholder}>
                  <span className={styles.placeholderIcon}>◆</span>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.type}>{project.type}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/projects" className={styles.viewAll}>
            查看全部作品 →
          </Link>
        </div>
      </div>
    </section>
  );
}
