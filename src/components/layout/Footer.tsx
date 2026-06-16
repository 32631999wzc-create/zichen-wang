"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <a
            href="mailto:zichen.wang@example.com"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/zichen-wang"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/zichenwang"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} 王紫晨. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
