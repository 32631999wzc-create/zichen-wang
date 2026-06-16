import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Timeline from "@/components/experience/Timeline";
import { getExperiences } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "经历",
  description:
    "从景观/城市设计到AI产品的完整转型历程 — 每一步都是能力的积累与视野的拓展。",
};

export default function ExperiencePage() {
  const experiences = getExperiences();

  return (
    <div className={styles.page}>
      <Section
        title="经历"
        subtitle="从空间设计到AI产品 — 跨界之旅"
      >
        {experiences.length === 0 ? (
          <div className={styles.empty}>
            <p>经历内容待更新</p>
          </div>
        ) : (
          <Timeline experiences={experiences} />
        )}
      </Section>
    </div>
  );
}
