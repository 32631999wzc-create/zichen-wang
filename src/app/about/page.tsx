import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ContactLinks from "@/components/ui/ContactLinks";
import { assetPath } from "@/lib/paths";
import { siteConfig } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `关于${siteConfig.name}`,
  description: `认识${siteConfig.name}：${siteConfig.profile.intro}`,
};

const practices = [
  { index: "01", title: "读懂复杂现场", en: "Read the context", copy: "从场地、人群与约束里找到真正的问题。", width: "92%" },
  { index: "02", title: "组织系统关系", en: "Structure the system", copy: "把尺度、角色、状态和依赖放进同一张图。", width: "78%" },
  { index: "03", title: "快速做出原型", en: "Make it tangible", copy: "用空间、界面或工作流把判断变成可体验的东西。", width: "86%" },
  { index: "04", title: "用证据完成闭环", en: "Verify the outcome", copy: "通过推演、测试和 Trace 确认方案真的成立。", width: "70%" },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>ABOUT / THE PERSON BEHIND THE SYSTEMS</p>
          <h1 id="about-title">认真做系统，<br /><span>轻松过生活。</span></h1>
          <p className={styles.heroEn}>Serious about systems. Not always about being serious.</p>
          <p className={styles.intro}>{siteConfig.profile.intro}</p>
        </div>
        <div className={styles.nameScene} aria-label="名字来自出生时紫色朝霞的意象">
          <Image className={styles.sceneArtwork} src={assetPath("/images/about/violet-dawn-editorial.png")} alt="紫橙色朝霞中的层叠山峦与晨雾插画" fill priority sizes="(max-width: 1023px) 100vw, 42vw" />
          <span className={styles.sceneMonogram} aria-hidden="true">紫</span>
          <div className={styles.nameNote}><span>AT DAWN / 清晨</span><strong>紫色朝霞</strong><small>the violet light of dawn</small></div>
        </div>
        <a href="#fun-facts" className={styles.scrollCue}>MORE ABOUT ME <span>↓</span></a>
      </section>

      <section id="fun-facts" className={styles.section} aria-labelledby="facts-title">
        <header className={styles.sectionHeader}>
          <div><p className={styles.eyebrow}>A FEW THINGS THAT STICK</p><h2 id="facts-title">先别看简历。<br />认识一下本人。</h2></div>
          <p>Four facts, zero corporate bio.<br /><span>四件小事，比一段标准自我介绍更接近我。</span></p>
        </header>

        <div className={styles.factsGrid}>
          <article className={`${styles.factCard} ${styles.nameCard}`}>
            <Image className={styles.portraitImage} src={assetPath("/images/about/zichen-sunset-portrait.jpg")} alt={`${siteConfig.name}在海边夕阳下的个人照片`} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 55vw" />
            <div className={styles.portraitShade} aria-hidden="true" />
            <div className={styles.factTop}><span>01 / NAME</span><DawnIcon /></div>
            <div><h3>名字来自一场<br />紫色日出。</h3><p>出生那天清晨，天边铺着紫色朝霞。于是“紫晨”成了我的名字，也成了我看待未来的底色。</p></div>
            <span className={styles.factEn}>Born with the violet light of dawn.</span>
          </article>

          <article className={`${styles.factCard} ${styles.climbCard}`}>
            <div className={styles.factTop}><span>02 / CLIMB</span><ClimbIcon /></div>
            <div><h3>攀岩让我<br />习惯先找路线。</h3><p>面对一面墙，我会先读点位、预判重心，再出手。做产品时也是。</p></div>
            <div className={styles.holds} aria-hidden="true"><i /><i /><i /><i /><i /></div>
          </article>

          <article className={`${styles.factCard} ${styles.gymCard}`}>
            <div className={styles.factTop}><span>03 / TRAIN</span><GymIcon /></div>
            <div><h3>健身是我的<br />固定刷新键。</h3><p>稳定训练，稳定输出。再复杂的问题，先举完这一组再说。</p></div>
            <div className={styles.repCounter}><strong>04</strong><span>SETS<br />DONE</span></div>
          </article>

          <article id="esfj-card" className={`${styles.factCard} ${styles.esfjCard}`}>
            <div className={styles.factTop}><span>04 / ESFJ</span></div>
            <CaregiverIllustration />
            <div className={styles.esfjCopy}><h3>ESFJ，<br />团队男妈妈。</h3><p>会记得每个人的状态，也会记得项目最后一个遗漏的细节。热情不是装饰，是推进事情的方式。</p></div>
            <span className={styles.factEn}>Warm energy. Reliable follow-through.</span>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.practiceSection}`} aria-labelledby="practice-title">
        <header className={styles.practiceIntro}>
          <p className={styles.eyebrow}>HOW I ACTUALLY WORK</p>
          <h2 id="practice-title">不是技能清单，<br /><span>是解决问题的方式。</span></h2>
          <p>工具会变，方法会生长。</p>
        </header>
        <div className={styles.practiceMap}>
          <div className={styles.axis}><span>FIELD</span><span>INTERFACE</span></div>
          {practices.map((item) => (
            <article className={styles.practiceRow} key={item.index}>
              <div className={styles.practiceText}>
                <span>{item.index}</span>
                <div><h3>{item.title}</h3><small>{item.en}</small><p>{item.copy}</p></div>
              </div>
              <div className={styles.barTrack} aria-hidden="true"><span style={{ "--bar-width": item.width } as CSSProperties}><i /></span></div>
            </article>
          ))}
          <div className={styles.toolLine}><span>WORKING MATERIALS</span><p>Research · GIS · Figma · Prototyping · Python · AI workflows</p></div>
        </div>
      </section>

      <section className={styles.path} aria-labelledby="path-title">
        <div className={styles.pathTitle}><p className={styles.eyebrow}>TWO SCHOOLS, ONE CONTINUOUS PATH</p><h2 id="path-title">从地景到城市，<br />再到产品。</h2></div>
        <div className={styles.pathCards}>
          <article><span>2021—2025 · BEIJING</span><h3>北方工业大学</h3><p>风景园林学士</p><small>Landscape Architecture</small></article>
          <div className={styles.pathConnector}><span>尺度放大</span><i /><span>方法延续</span></div>
          <article><span>2025—2026 · SINGAPORE</span><h3>新加坡国立大学</h3><p>城市设计硕士</p><small>Master of Urban Design</small></article>
        </div>
      </section>

      <section className={styles.contact} aria-label="联系方式">
        <div><p className={styles.eyebrow}>FIND ME ONLINE</p><h2>脑洞对上了，<br />就来敲我。</h2><p>Ideas welcome. Formal introductions optional.</p></div>
        <ContactLinks className={styles.contactList} detailed />
      </section>
    </div>
  );
}

function DawnIcon() {
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 46h48M14 54h36M20 46a12 12 0 0 1 24 0M32 6v10M10 19l8 7M54 19l-8 7" /></svg>;
}

function ClimbIcon() {
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M15 56l14-44 20 44M23 35h18M18 49h28" /><circle cx="30" cy="22" r="3" /><circle cx="38" cy="43" r="3" /></svg>;
}

function GymIcon() {
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M18 24v16M12 27v10M46 24v16M52 27v10M18 32h28" /></svg>;
}

function CaregiverIllustration() {
  return (
    <svg className={styles.caregiverArt} viewBox="0 0 320 270" aria-hidden="true">
      <path className={styles.umbrellaCanopy} d="M22 79C55 15 139 10 186 60 135 48 78 57 22 79Z" />
      <path className={styles.umbrellaShade} d="M22 79c22-12 43-15 62-14l25-40c-35 4-68 23-87 54Z" />
      <path className={styles.umbrellaStem} d="M111 43 182 154" />
      <circle className={styles.careFace} cx="166" cy="82" r="30" />
      <path className={styles.careHair} d="M138 81c-2-31 16-47 40-38 14 5 22 18 20 36l-17-18-6 23-14-20-9 23Z" />
      <path className={styles.careBody} d="m145 112 43-5 34 102-93 20-12-78Z" />
      <path className={styles.careApron} d="m151 119 30-3 23 83-56 12Z" />
      <path className={styles.careArm} d="m181 121 45 27 38-7 4 13-46 13-54-24Z" />
      <path className={styles.careLeg} d="m146 213-35 49h27l38-43M194 207l10 55h25l-4-67" />
      <g className={styles.cake}>
        <path d="M242 126h61v29h-61Z" />
        <path d="M237 120h71v9h-71Z" />
        <path d="M250 104v16m20-16v16m20-16v16" />
        <circle cx="250" cy="101" r="4" /><circle cx="270" cy="101" r="4" /><circle cx="290" cy="101" r="4" />
      </g>
      <path className={styles.careSmile} d="M157 90c7 6 14 6 20-1" />
    </svg>
  );
}
