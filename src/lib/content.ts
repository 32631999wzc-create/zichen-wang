import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src", "content");

// ─── Projects ─────────────────────────────────────────────

export interface ProjectFrontmatter {
  title: string;
  type: string;
  date: string;
  location?: string;
  role?: string;
  status: string;
  tags: string[];
  cover: string;
  gallery?: string[];
  links?: { label: string; url: string }[];
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

export function getAllProjects(): Omit<Project, "content">[] {
  const projectsDir = path.join(contentDir, "projects");
  if (!fs.existsSync(projectsDir)) return [];

  const files = fs.readdirSync(projectsDir);

  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(projectsDir, f), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        frontmatter: data as ProjectFrontmatter,
      };
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(contentDir, "projects", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content,
  };
}

// ─── Experiences ──────────────────────────────────────────

export interface Experience {
  id: string;
  period: string;
  title: string;
  organization: string;
  type: "design" | "ai-product" | "education" | "other";
  description: string;
  highlights: string[];
  skills: string[];
  relevance?: string;
}

export function getExperiences(): Experience[] {
  const filePath = path.join(contentDir, "experiences", "experiences.json");
  if (!fs.existsSync(filePath)) return [];

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Experience[];
}

// ─── Profile ───────────────────────────────────────────────

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  email: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  skills: { category: string; items: string[] }[];
}

export function getProfile(): Profile | null {
  const filePath = path.join(contentDir, "profile.json");
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as Profile;
}

// ─── Blog Posts ────────────────────────────────────────────

export interface BlogFrontmatter {
  title: string;
  date: string;
  tags: string[];
  summary: string;
  published: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

export function getAllBlogPosts(): Omit<BlogPost, "content">[] {
  const blogDir = path.join(contentDir, "blog");
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir);

  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(blogDir, f), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        frontmatter: data as BlogFrontmatter,
      };
    })
    .filter((post) => post.frontmatter.published !== false)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(contentDir, "blog", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
  };
}
