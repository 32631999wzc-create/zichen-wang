"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  const [dimmed, setDimmed] = useState(false);
  const previousY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const currentY = window.scrollY;
      if (currentY < 40) setDimmed(false);
      else if (currentY > previousY.current + 6) setDimmed(true);
      else if (currentY < previousY.current - 6) setDimmed(false);
      previousY.current = currentY;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    previousY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${dimmed ? styles.dimmed : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label={`${siteConfig.name}个人网站首页`}>
          <span className={styles.logoMark}>ZW</span>
          <span className={styles.logoMeta}>{siteConfig.name}<br />{siteConfig.nameEn}</span>
        </Link>
        <nav className={styles.nav} aria-label="主导航">
          {siteConfig.navigation.map((link) => <Link key={link.href} href={link.href} className={styles.navLink}>{link.label}</Link>)}
        </nav>
        <a href={`mailto:${siteConfig.contact.email}`} className={styles.contact}>联系我 <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
