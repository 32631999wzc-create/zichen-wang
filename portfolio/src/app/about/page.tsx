import type { Metadata } from "next";
import Tag from "@/components/ui/Tag";
import { getProfile } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "关于我",
  description:
    "从景观设计与城市设计出发，转型AI产品赛道 — 了解我的背景、技能与联系方式。",
};

export default function AboutPage() {
  const profile = getProfile();

  if (!profile) {
    return (
      <div className={styles.page}>
        <div className={styles.empty}>
          <p>个人信息待更新</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {/* Intro */}
        <section className={styles.intro}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatarPlaceholder}>
              <span>●</span>
            </div>
          </div>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.title}>{profile.title}</p>
          <p className={styles.bio}>{profile.bio}</p>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>技能</h2>
          <div className={styles.skillsGrid}>
            {profile.skills.map((group) => (
              <div key={group.category} className={styles.skillGroup}>
                <h3 className={styles.skillCategory}>{group.category}</h3>
                <div className={styles.skillTags}>
                  {group.items.map((skill) => (
                    <Tag key={skill} label={skill} variant="default" size="md" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>联系方式</h2>
          <div className={styles.contact}>
            <a href={`mailto:${profile.email}`} className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>{profile.email}</span>
            </a>
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <span className={styles.contactLabel}>LinkedIn</span>
                <span className={styles.contactValue}>查看资料</span>
              </a>
            )}
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <span className={styles.contactLabel}>GitHub</span>
                <span className={styles.contactValue}>查看资料</span>
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
