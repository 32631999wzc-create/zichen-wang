"use client";

import Link from "next/link";
import { useInView } from "@/lib/useInView";
import styles from "./Hero.module.css";

interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
}

export default function Hero({ name, title, subtitle }: HeroProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`${styles.hero} ${inView ? styles.visible : ""}`}
    >
      <div className={styles.inner}>
        <div className={`${styles.badge} ${inView ? styles.slideIn : ""}`}>Portfolio</div>
        <h1 className={`${styles.name} ${inView ? styles.slideIn : ""}`}>{name}</h1>
        <p className={`${styles.title} ${inView ? styles.slideIn : ""}`}>
          <span className={styles.from}>景观/城市设计师</span>
          <span className={styles.arrow}>→</span>
          <span className={styles.to}>AI产品人</span>
        </p>
        <p className={`${styles.subtitle} ${inView ? styles.slideIn : ""}`}>{subtitle}</p>
        <div className={`${styles.actions} ${inView ? styles.slideIn : ""}`}>
          <Link href="/projects" className={styles.primaryBtn}>
            查看作品集
          </Link>
          <Link href="/about" className={styles.secondaryBtn}>
            了解更多
          </Link>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className={styles.decor1} aria-hidden="true" />
      <div className={styles.decor2} aria-hidden="true" />
    </section>
  );
}
