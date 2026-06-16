import Skeleton from "@/components/ui/Skeleton";

export default function ProjectsLoading() {
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
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "var(--space-16) var(--space-6)",
        }}
      >
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <Skeleton
            width="120px"
            height="36px"
            style={{ margin: "0 auto var(--space-3)" }}
          />
          <Skeleton
            width="280px"
            height="20px"
            style={{ margin: "0 auto" }}
          />
        </div>

        {/* Grid skeleton */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "var(--space-6)",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              style={{
                background: "var(--color-bg-secondary)",
                borderRadius: "var(--border-radius-md)",
                overflow: "hidden",
                border: "1px solid var(--color-border-light)",
              }}
            >
              <Skeleton height="200px" borderRadius="0" />
              <div style={{ padding: "var(--space-4)" }}>
                <Skeleton
                  width="60%"
                  height="18px"
                  style={{ marginBottom: "var(--space-2)" }}
                />
                <Skeleton width="40%" height="14px" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
