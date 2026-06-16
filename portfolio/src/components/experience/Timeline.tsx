"use client";

import { useEffect, useRef, useState } from "react";
import Tag from "@/components/ui/Tag";
import type { Experience } from "@/lib/content";
import styles from "./Timeline.module.css";

interface TimelineProps {
  experiences: Experience[];
}

function TimelineItem({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.item} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.line}>
        <div
          className={`${styles.dot} ${
            exp.type === "ai-product" ? styles.dotAI : styles.dotDesign
          }`}
        />
      </div>
      <div className={styles.card}>
        <span className={styles.period}>{exp.period}</span>
        <h3 className={styles.title}>
          {exp.title}
          <span className={styles.org}> · {exp.organization}</span>
        </h3>
        <p className={styles.description}>{exp.description}</p>
        {exp.highlights.length > 0 && (
          <ul className={styles.highlights}>
            {exp.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
        {exp.skills.length > 0 && (
          <div className={styles.skills}>
            {exp.skills.map((skill) => (
              <Tag key={skill} label={skill} variant="outline" size="sm" />
            ))}
          </div>
        )}
        {exp.relevance && (
          <p className={styles.relevance}>{exp.relevance}</p>
        )}
      </div>
    </div>
  );
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className={styles.timeline}>
      {experiences.map((exp, i) => (
        <TimelineItem key={exp.id} exp={exp} index={i} />
      ))}
    </div>
  );
}
