import { siteConfig } from "@/lib/site";
import styles from "@/app/home.module.css";

export default function PortfolioHero() {
  const [design, product] = siteConfig.home.identities;
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <p className={styles.heroEyebrow}>{siteConfig.home.eyebrow}</p>
      <div className={styles.heroField} aria-hidden="true">
        <div className={styles.spatialField}><i /><i /><i /><i /></div>
        <div className={styles.systemField}><i /><i /><i /><i /><i /><i /></div>
      </div>
      <Identity identity={design} heading="h1" />
      <Identity identity={product} heading="h2" />
      <div className={styles.productVocabulary} aria-label="产品构建工具">
        {siteConfig.home.vocabulary.map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className={styles.heroCenterline} aria-hidden="true"><span>ONE PERSON / TWO SCALES</span></div>
      <a className={styles.heroScroll} href="#product-work">{siteConfig.home.selectedWorkLabel} <span>↓</span></a>
      <div className={styles.heroDivider} aria-hidden="true" />
    </section>
  );
}

function Identity({ identity, heading }: { identity: (typeof siteConfig.home.identities)[number]; heading: "h1" | "h2" }) {
  const sideClass = identity.id === "design" ? styles.designerSide : styles.productSide;
  const title = <>{identity.title[0]}<br />{identity.title[1]}</>;
  return (
    <div className={`${styles.heroSide} ${sideClass}`}>
      <p className={styles.identityIndex}>{identity.index}</p>
      {heading === "h1" ? <h1 id="hero-title">{title}</h1> : <h2>{title}</h2>}
      <p className={styles.identityEnglish}>{identity.titleEn}</p>
      <p className={styles.identityStatement}>{identity.statement[0]}<br />{identity.statement[1]}</p>
      <p className={styles.identityTranslation}>{identity.statementEn[0]}<br />{identity.statementEn[1]}</p>
    </div>
  );
}
