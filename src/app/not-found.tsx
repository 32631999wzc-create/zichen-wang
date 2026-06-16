import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - 页面未找到",
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      paddingTop: "calc(var(--nav-height) + var(--space-12))",
      background: "var(--color-bg-primary)",
    }}>
      <div style={{
        textAlign: "center",
        maxWidth: 480,
      }}>
        <div style={{
          fontSize: "clamp(4rem, 10vw, 6rem)",
          fontWeight: 700,
          color: "var(--color-accent-medium)",
          lineHeight: 1,
          marginBottom: "var(--space-4)",
          opacity: 0.6,
        }}>
          404
        </div>
        <h1 style={{
          fontSize: "var(--text-2xl)",
          marginBottom: "var(--space-4)",
          color: "var(--color-text-primary)",
        }}>
          页面未找到
        </h1>
        <p style={{
          fontSize: "var(--text-base)",
          color: "var(--color-text-secondary)",
          marginBottom: "var(--space-8)",
          lineHeight: 1.7,
        }}>
          你访问的页面不存在，可能已被移动或删除。
          <br />
          不如回到首页，看看我的作品集和博客。
        </p>
        <div style={{
          display: "flex",
          gap: "var(--space-4)",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              padding: "var(--space-3) var(--space-8)",
              borderRadius: "var(--border-radius-full)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              background: "var(--color-accent-strong)",
              color: "var(--color-text-on-accent)",
              textDecoration: "none",
              transition: "opacity var(--transition-fast)",
            }}
          >
            返回首页
          </Link>
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              padding: "var(--space-3) var(--space-8)",
              borderRadius: "var(--border-radius-full)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              background: "transparent",
              color: "var(--color-text-primary)",
              border: "1.5px solid var(--color-border)",
              textDecoration: "none",
              transition: "border-color var(--transition-fast), color var(--transition-fast)",
            }}
          >
            浏览作品集
          </Link>
        </div>
      </div>
    </div>
  );
}
