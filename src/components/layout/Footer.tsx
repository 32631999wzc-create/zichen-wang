import ContactLinks from "@/components/ui/ContactLinks";
import { siteConfig } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.kicker}>{siteConfig.footer.eyebrow}</p>
        <a className={styles.statement} href={`mailto:${siteConfig.contact.email}`}>
          <span>{siteConfig.footer.statement}</span>
          <i aria-hidden="true">↗</i>
        </a>
        <ContactLinks className={styles.links} />
      </div>
      <div className={styles.bottom}><span>{siteConfig.name} / {siteConfig.nameEn}</span><span>{siteConfig.footer.signature}</span></div>
    </footer>
  );
}
