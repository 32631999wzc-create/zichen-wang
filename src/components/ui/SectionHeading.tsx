import styles from "@/app/home.module.css";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  descriptionEn: string;
  titleId: string;
}

export default function SectionHeading({ eyebrow, title, description, descriptionEn, titleId }: SectionHeadingProps) {
  return (
    <header className={styles.sectionHeader}>
      <div><p className={styles.sectionLabel}>{eyebrow}</p><h2 id={titleId}>{title}</h2></div>
      <p>{description}<br /><span>{descriptionEn}</span></p>
    </header>
  );
}
