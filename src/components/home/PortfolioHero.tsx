"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";
import styles from "@/app/home.module.css";
import TrueFocus from "@/components/ui/TrueFocus";
import InteractiveCharacter from "@/components/home/InteractiveCharacter";

export default function PortfolioHero() {
  const [design, product] = siteConfig.home.identities;
  const [activeIdentity, setActiveIdentity] = useState<"design" | "product">("design");
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <p className={styles.heroEyebrow}>{siteConfig.home.eyebrow}</p>
      <div className={styles.heroField} aria-hidden="true">
        <div className={styles.spatialField}><i /><i /><i /><i /></div>
        <div className={styles.systemField}><i /><i /><i /><i /><i /><i /></div>
      </div>
      <InteractiveCharacter />
      <Identity active={activeIdentity === "design"} identity={design} heading="h1" onActivate={() => setActiveIdentity("design")} />
      <Identity active={activeIdentity === "product"} identity={product} heading="h2" onActivate={() => setActiveIdentity("product")} />
      <div className={styles.productVocabulary} aria-label="产品构建工具">
        {siteConfig.home.vocabulary.map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className={styles.heroCenterline} aria-hidden="true"><span>ONE PERSON / TWO SCALES</span></div>
      <a className={styles.heroScroll} href="#product-work">{siteConfig.home.selectedWorkLabel} <span>↓</span></a>
      <div className={styles.heroDivider} aria-hidden="true" />
    </section>
  );
}

function Identity({
  active,
  identity,
  heading,
  onActivate,
}: {
  active: boolean;
  identity: (typeof siteConfig.home.identities)[number];
  heading: "h1" | "h2";
  onActivate: () => void;
}) {
  const sideClass = identity.id === "design" ? styles.designerSide : styles.productSide;
  const title = (
    <TrueFocus
      animationDuration={0.5}
      active={active}
      blurAmount={4}
      className={styles.identityFocus}
      onActivate={onActivate}
      sentence={identity.title}
    />
  );
  return (
    <div className={`${styles.heroSide} ${sideClass}`}>
      <p className={styles.identityIndex}>{identity.index}</p>
      {heading === "h1" ? <h1 id="hero-title">{title}</h1> : <h2>{title}</h2>}
      <p className={styles.identityStatement}>{identity.statement[0]}<br />{identity.statement[1]}</p>
      <p className={styles.identityTranslation}>{identity.statementEn[0]}<br />{identity.statementEn[1]}</p>
    </div>
  );
}
