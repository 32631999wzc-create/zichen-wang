"use client";

import { useState } from "react";

export default function SkipLink() {
  const [focused, setFocused] = useState(false);

  return (
    <a
      href="#main-content"
      style={{
        position: "absolute",
        top: focused ? "var(--space-4)" : "-100%",
        left: "var(--space-4)",
        padding: "var(--space-2) var(--space-4)",
        background: "var(--color-accent-strong)",
        color: "var(--color-text-on-accent)",
        borderRadius: "var(--border-radius-sm)",
        fontSize: "var(--text-sm)",
        fontWeight: 600,
        zIndex: 1000,
        textDecoration: "none",
        transition: "top 150ms ease",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      跳转到内容
    </a>
  );
}
