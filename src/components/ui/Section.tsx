import styles from "./Section.module.css";

interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export default function Section({
  title,
  subtitle,
  className = "",
  children,
  id,
}: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.inner}>
        {title && (
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
