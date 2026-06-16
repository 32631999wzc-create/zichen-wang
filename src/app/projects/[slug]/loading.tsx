import Skeleton from "@/components/ui/Skeleton";

export default function ProjectDetailLoading() {
  return (
    <div
      style={{
        maxWidth: "var(--content-width)",
        margin: "0 auto",
        padding:
          "calc(var(--nav-height) + var(--space-12)) var(--space-6) var(--space-20)",
      }}
    >
      {/* Back link */}
      <Skeleton
        width="80px"
        height="16px"
        style={{ marginBottom: "var(--space-6)" }}
      />

      {/* Title */}
      <Skeleton
        width="70%"
        height="32px"
        style={{ marginBottom: "var(--space-4)" }}
      />

      {/* Meta row */}
      <div
        style={{
          display: "flex",
          gap: "var(--space-4)",
          marginBottom: "var(--space-4)",
        }}
      >
        <Skeleton width="100px" height="16px" />
        <Skeleton width="80px" height="16px" />
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: "var(--space-2)", marginBottom: "var(--space-8)" }}>
        <Skeleton width="60px" height="24px" borderRadius="9999px" />
        <Skeleton width="80px" height="24px" borderRadius="9999px" />
        <Skeleton width="50px" height="24px" borderRadius="9999px" />
      </div>

      {/* Content sections */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} style={{ marginBottom: "var(--space-10)" }}>
          <Skeleton
            width="160px"
            height="22px"
            style={{ marginBottom: "var(--space-4)" }}
          />
          <Skeleton
            width="100%"
            height="14px"
            style={{ marginBottom: "var(--space-2)" }}
          />
          <Skeleton
            width="95%"
            height="14px"
            style={{ marginBottom: "var(--space-2)" }}
          />
          <Skeleton width="80%" height="14px" />
        </div>
      ))}
    </div>
  );
}
