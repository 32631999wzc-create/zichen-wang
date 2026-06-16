import Skeleton from "@/components/ui/Skeleton";

export default function BlogLoading() {
  return (
    <div
      style={{
        paddingTop: "var(--nav-height)",
        minHeight: "100vh",
        paddingBottom: "var(--space-20)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-width)",
          margin: "0 auto",
          padding: "var(--space-16) var(--space-6)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "var(--space-12)" }}>
          <Skeleton
            width="100px"
            height="32px"
            style={{ marginBottom: "var(--space-3)" }}
          />
          <Skeleton width="300px" height="18px" />
        </div>

        {/* List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              style={{
                padding: "var(--space-6)",
                background: "var(--color-bg-secondary)",
                borderRadius: "var(--border-radius-md)",
                border: "1px solid var(--color-border-light)",
              }}
            >
              <Skeleton
                width="100px"
                height="14px"
                style={{ marginBottom: "var(--space-2)" }}
              />
              <Skeleton
                width="75%"
                height="22px"
                style={{ marginBottom: "var(--space-3)" }}
              />
              <Skeleton
                width="100%"
                height="14px"
                style={{ marginBottom: "var(--space-1)" }}
              />
              <Skeleton
                width="60%"
                height="14px"
                style={{ marginBottom: "var(--space-4)" }}
              />
              <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <Skeleton width="60px" height="22px" borderRadius="9999px" />
                <Skeleton width="80px" height="22px" borderRadius="9999px" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
