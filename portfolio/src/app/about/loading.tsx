import Skeleton from "@/components/ui/Skeleton";

export default function AboutLoading() {
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
        {/* Avatar */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
          <Skeleton
            width="120px"
            height="120px"
            borderRadius="50%"
            style={{ margin: "0 auto var(--space-6)" }}
          />
          <Skeleton
            width="150px"
            height="28px"
            style={{ margin: "0 auto var(--space-2)" }}
          />
          <Skeleton
            width="250px"
            height="18px"
            style={{ margin: "0 auto var(--space-6)" }}
          />
          <Skeleton
            width="80%"
            height="16px"
            style={{ margin: "0 auto var(--space-1)" }}
          />
          <Skeleton
            width="60%"
            height="16px"
            style={{ margin: "0 auto" }}
          />
        </div>

        {/* Skills section */}
        <div style={{ marginBottom: "var(--space-12)" }}>
          <Skeleton
            width="80px"
            height="22px"
            style={{ marginBottom: "var(--space-6)" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i}>
                <Skeleton
                  width="100px"
                  height="16px"
                  style={{ marginBottom: "var(--space-3)" }}
                />
                <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                  <Skeleton width="60px" height="28px" borderRadius="9999px" />
                  <Skeleton width="80px" height="28px" borderRadius="9999px" />
                  <Skeleton width="70px" height="28px" borderRadius="9999px" />
                  <Skeleton width="90px" height="28px" borderRadius="9999px" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact section */}
        <div>
          <Skeleton
            width="80px"
            height="22px"
            style={{ marginBottom: "var(--space-6)" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Skeleton width="100%" height="48px" borderRadius="var(--border-radius-md)" />
            <Skeleton width="100%" height="48px" borderRadius="var(--border-radius-md)" />
          </div>
        </div>
      </div>
    </div>
  );
}
