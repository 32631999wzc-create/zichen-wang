import Hero from "@/components/home/Hero";
import NarrativeTimeline from "@/components/home/NarrativeTimeline";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import { getAllProjects } from "@/lib/content";

const milestones = [
  {
    year: "2025.08 - 2026.06",
    title: "拓展·NUS城市设计硕士",
    description:
      "赴新加坡国立大学攻读城市设计硕士，毕业设计被JTC选为优秀作品展出，在AI与城市设计的交叉领域进行前沿探索。",
    type: "ai-product" as const,
  },
  {
    year: "2021.09 - 2025.06",
    title: "筑基·风景园林本科",
    description:
      "在北方工业大学系统学习风景园林设计，建立设计思维、空间感知与跨学科解决问题的方法论。",
    type: "design" as const,
  },
];

export default function Home() {
  const projects = getAllProjects().map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
    type: p.frontmatter.type,
    cover: p.frontmatter.cover,
    tags: p.frontmatter.tags,
  }));

  return (
    <>
      <Hero
        name="王紫晨"
        title="景观/城市设计师 → AI产品人"
        subtitle="用设计思维塑造空间，以产品思维创造价值 — 跨领域探索者"
      />

      <NarrativeTimeline milestones={milestones} />

      <FeaturedProjects projects={projects} />
    </>
  );
}
