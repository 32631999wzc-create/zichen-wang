import styles from "./Tag.module.css";

interface TagProps {
  label: string;
  variant?: "default" | "accent" | "outline";
  size?: "sm" | "md";
}

export default function Tag({
  label,
  variant = "default",
  size = "sm",
}: TagProps) {
  return (
    <span
      className={`${styles.tag} ${styles[variant]} ${styles[size]}`}
    >
      {label}
    </span>
  );
}
