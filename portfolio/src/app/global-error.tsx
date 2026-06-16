"use client";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            background: "#edf6f9",
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: 480 }}>
            <div
              style={{
                fontSize: "clamp(3rem, 8vw, 4rem)",
                fontWeight: 700,
                color: "#83c5be",
                lineHeight: 1,
                marginBottom: "1rem",
                opacity: 0.5,
              }}
            >
              !
            </div>
            <h1
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "#1a1a2e",
              }}
            >
              应用出现严重错误
            </h1>
            <p
              style={{
                fontSize: "1rem",
                color: "#4a4a6a",
                marginBottom: "2rem",
                lineHeight: 1.7,
              }}
            >
              非常抱歉，应用遇到了一个严重错误。
              <br />
              请重试或稍后再来访问。
            </p>
            <button
              onClick={() => unstable_retry()}
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: 600,
                background: "#006d77",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
              }}
            >
              重试
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
