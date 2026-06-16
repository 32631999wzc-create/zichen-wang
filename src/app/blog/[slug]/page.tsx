import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Tag from "@/components/ui/Tag";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "文章未找到" };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      type: "article",
      publishedTime: post.frontmatter.date,
      tags: post.frontmatter.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <Link href="/blog" className={styles.back}>
          ← 返回博客
        </Link>

        <header className={styles.header}>
          <time className={styles.date}>{frontmatter.date}</time>
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <p className={styles.summary}>{frontmatter.summary}</p>
          <div className={styles.tags}>
            {frontmatter.tags.map((tag) => (
              <Tag key={tag} label={tag} variant="outline" size="sm" />
            ))}
          </div>
        </header>

        <div className={styles.content}>
          <MDXRemote source={content} />
        </div>
      </article>
    </div>
  );
}
