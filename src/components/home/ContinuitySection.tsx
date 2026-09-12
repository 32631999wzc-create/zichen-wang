import { siteConfig } from "@/lib/site";
import styles from "@/app/home.module.css";

export default function ContinuitySection() {
  const content = siteConfig.home.continuity;
  return (
    <section id="journey" className={styles.journey} aria-labelledby="journey-title">
      <div className={styles.journeyIntro}>
        <p className={styles.sectionLabel}>{content.eyebrow}</p>
        <h2 id="journey-title">{content.title[0]}<br />{content.title[1]}</h2>
        <p className={styles.journeyEn}>{content.titleEn[0]}<br />{content.titleEn[1]}</p>
      </div>
      <div className={styles.continuityList}>
        {content.items.map((item) => (
          <div className={styles.continuityItem} key={item.index}>
            <span>{item.index}</span><div><h3>{item.title}</h3><p>{item.description}</p><small>{item.descriptionEn}</small></div>
          </div>
        ))}
      </div>
    </section>
  );
}
