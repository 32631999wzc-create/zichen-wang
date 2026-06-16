import type { Metadata } from "next";
import Link from "next/link";
import Tag from "@/components/ui/Tag";
import { getAllBlogPosts } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "博客",
  description:
    "从景观/城市设计到AI产品的转型思考记录 — 设计思维、产品方法论、AI观察。",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1 className={styles.title}>博客</h1>
          <p className={styles.subtitle}>
            转型路上的思考与记录 — 设计、产品、AI
          </p>
        </header>

        {posts.length === 0 ? (
          <div className={styles.empty}>
            <p>暂无博客文章</p>
          </div>
        ) : (
          <div className={styles.list}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={styles.card}
              >
                <article>
                  <time className={styles.date}>{post.frontmatter.date}</time>
                  <h2 className={styles.cardTitle}>
                    {post.frontmatter.title}
                  </h2>
                  <p className={styles.summary}>
                    {post.frontmatter.summary}
                  </p>
                  <div className={styles.tags}>
                    {post.frontmatter.tags.map((tag) => (
                      <Tag key={tag} label={tag} size="sm" />
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
