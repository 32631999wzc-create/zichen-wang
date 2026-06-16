import Skeleton from "@/components/ui/Skeleton";

export default function ExperienceLoading() {
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
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <Skeleton
            width="80px"
            height="32px"
            style={{ margin: "0 auto var(--space-3)" }}
          />
          <Skeleton
            width="300px"
            height="20px"
            style={{ margin: "0 auto" }}
          />
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "var(--space-6)",
                marginBottom: "var(--space-8)",
              }}
            >
              {/* Dot */}
              <div
                style={{
                  minWidth: "40px",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "6px",
                }}
              >
                <Skeleton
                  width="12px"
                  height="12px"
                  borderRadius="50%"
                />
              </div>
              {/* Card */}
              <div
                style={{
                  flex: 1,
                  padding: "var(--space-5) var(--space-6)",
                  background: "var(--color-bg-primary)",
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
                  width="70%"
                  height="20px"
                  style={{ marginBottom: "var(--space-3)" }}
                />
                <Skeleton
                  width="100%"
                  height="14px"
                  style={{ marginBottom: "var(--space-1)" }}
                />
                <Skeleton
                  width="90%"
                  height="14px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
