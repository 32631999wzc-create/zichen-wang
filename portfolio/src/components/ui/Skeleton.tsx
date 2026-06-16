import styles from "./Skeleton.module.css";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
}

export default function Skeleton({
  width = "100%",
  height = "1em",
  borderRadius,
  style,
}: SkeletonProps) {
  return (
    <div
      className={styles.skeleton}
      style={{
        width,
        height,
        borderRadius: borderRadius || "var(--border-radius-sm)",
        ...style,
      }}
    />
  );
}
