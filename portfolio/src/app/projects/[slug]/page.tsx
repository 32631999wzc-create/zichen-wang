import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/project/ProjectDetail";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths at build time
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic metadata based on project
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "项目未找到" };
  }

  return {
    title: project.frontmatter.title,
    description: `${project.frontmatter.type} - ${project.frontmatter.location || ""}`,
    openGraph: {
      title: project.frontmatter.title,
      description: `${project.frontmatter.type} - ${project.frontmatter.date}`,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
