import ContinuitySection from "@/components/home/ContinuitySection";
import PortfolioHero from "@/components/home/PortfolioHero";
import { DesignShowcase, ProductShowcase } from "@/components/home/ProjectShowcase";
import { getFeaturedProjects } from "@/lib/content";
import styles from "./home.module.css";

export default function Home() {
  const productProjects = getFeaturedProjects("product");
  const designProjects = getFeaturedProjects("design");

  return (
    <div className={styles.page}>
      <PortfolioHero />
      <ProductShowcase projects={productProjects} />
      <DesignShowcase projects={designProjects} />
      <ContinuitySection />
    </div>
  );
}
