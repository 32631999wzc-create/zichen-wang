import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/paths";
import Tag from "@/components/ui/Tag";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  slug: string;
  title: string;
  type: string;
  date: string;
  cover: string;
  tags: string[];
  status: string;
  priority?: boolean;
}

export default function ProjectCard({
  slug,
  title,
  type,
  date,
  cover,
  tags,
  status,
  priority = false,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image src={assetPath(cover)} alt={`${title}项目封面`} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" priority={priority} />
        <div className={styles.overlay}>
          <span className={styles.viewLabel}>查看详情</span>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.meta}>
          <span className={styles.type}>{type}</span>
          <span className={styles.date}>{date}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.tags}>
          <Tag label={status} variant="outline" size="sm" />
          {tags.slice(0, 2).map((tag) => (
            <Tag key={tag} label={tag} size="sm" />
          ))}
        </div>
      </div>
    </Link>
  );
}
