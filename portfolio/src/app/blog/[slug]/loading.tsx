import Skeleton from "@/components/ui/Skeleton";

export default function BlogPostLoading() {
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
          padding: "var(--space-12) var(--space-6)",
        }}
      >
        {/* Back link */}
        <Skeleton
          width="80px"
          height="16px"
          style={{ marginBottom: "var(--space-6)" }}
        />

        {/* Header */}
        <div
          style={{
            marginBottom: "var(--space-10)",
            paddingBottom: "var(--space-8)",
            borderBottom: "1px solid var(--color-border-light)",
          }}
        >
          <Skeleton
            width="120px"
            height="14px"
            style={{ marginBottom: "var(--space-3)" }}
          />
          <Skeleton
            width="80%"
            height="32px"
            style={{ marginBottom: "var(--space-4)" }}
          />
          <Skeleton
            width="100%"
            height="16px"
            style={{ marginBottom: "var(--space-1)" }}
          />
          <Skeleton
            width="70%"
            height="16px"
            style={{ marginBottom: "var(--space-4)" }}
          />
          <div style={{ display: "flex", gap: "var(--space-2)" }}>
            <Skeleton width="70px" height="24px" borderRadius="9999px" />
            <Skeleton width="90px" height="24px" borderRadius="9999px" />
          </div>
        </div>

        {/* Content */}
        <Skeleton
          width="100%"
          height="18px"
          style={{ marginBottom: "var(--space-2)" }}
        />
        <Skeleton
          width="100%"
          height="18px"
          style={{ marginBottom: "var(--space-2)" }}
        />
        <Skeleton
          width="95%"
          height="18px"
          style={{ marginBottom: "var(--space-2)" }}
        />
        <Skeleton
          width="80%"
          height="18px"
          style={{ marginBottom: "var(--space-6)" }}
        />

        <Skeleton
          width="100%"
          height="18px"
          style={{ marginBottom: "var(--space-2)" }}
        />
        <Skeleton
          width="90%"
          height="18px"
          style={{ marginBottom: "var(--space-2)" }}
        />
        <Skeleton
          width="60%"
          height="18px"
          style={{ marginBottom: "var(--space-6)" }}
        />

        <Skeleton
          width="100%"
          height="18px"
          style={{ marginBottom: "var(--space-2)" }}
        />
        <Skeleton
          width="85%"
          height="18px"
        />
      </div>
    </div>
  );
}
