"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-6)",
        paddingTop: "calc(var(--nav-height) + var(--space-12))",
        background: "var(--color-bg-primary)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div
          style={{
            fontSize: "clamp(3rem, 8vw, 4rem)",
            fontWeight: 700,
            color: "var(--color-accent-medium)",
            lineHeight: 1,
            marginBottom: "var(--space-4)",
            opacity: 0.5,
          }}
        >
          !
        </div>
        <h1
          style={{
            fontSize: "var(--text-2xl)",
            marginBottom: "var(--space-4)",
            color: "var(--color-text-primary)",
          }}
        >
          出现了一些问题
        </h1>
        <p
          style={{
            fontSize: "var(--text-base)",
            color: "var(--color-text-secondary)",
            marginBottom: "var(--space-8)",
            lineHeight: 1.7,
          }}
        >
          页面加载时发生了意外错误。请重试，或回到首页浏览其他内容。
        </p>
        <div
          style={{
            display: "flex",
            gap: "var(--space-4)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => unstable_retry()}
            style={{
              padding: "var(--space-3) var(--space-8)",
              borderRadius: "var(--border-radius-full)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              background: "var(--color-accent-strong)",
              color: "var(--color-text-on-accent)",
              border: "none",
              cursor: "pointer",
              transition: "opacity var(--transition-fast)",
            }}
          >
            重试
          </button>
          <a
            href="/"
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
            返回首页
          </a>
        </div>
      </div>
    </div>
  );
}
