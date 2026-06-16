"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./NarrativeTimeline.module.css";

interface Milestone {
  year: string;
  title: string;
  description: string;
  type: "design" | "ai-product";
}

interface NarrativeTimelineProps {
  milestones: Milestone[];
}

function MilestoneCard({
  milestone,
  index,
}: {
  milestone: Milestone;
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
      className={`${styles.milestone} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.line}>
        <div
          className={`${styles.dot} ${
            milestone.type === "ai-product"
              ? styles.dotAI
              : styles.dotDesign
          }`}
        />
      </div>
      <div className={styles.card}>
        <span className={styles.year}>{milestone.year}</span>
        <span
          className={`${styles.type} ${
            milestone.type === "ai-product" ? styles.typeAI : styles.typeDesign
          }`}
        >
          {milestone.type === "ai-product" ? "AI产品" : "设计"}
        </span>
        <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
        <p className={styles.desc}>{milestone.description}</p>
      </div>
    </div>
  );
}

export default function NarrativeTimeline({
  milestones,
}: NarrativeTimelineProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>转型之旅</h2>
        <p className={styles.subtitle}>
          从空间设计到数字产品的跨界探索
        </p>
        <div className={styles.timeline}>
          {milestones.map((milestone, i) => (
            <MilestoneCard
              key={milestone.year}
              milestone={milestone}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
