"use client";

import { useState } from "react";
import styles from "./ProjectGallery.module.css";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const [selected, setSelected] = useState(0);

  if (images.length === 0) {
    return (
      <div className={styles.empty}>
        <span className={styles.emptyIcon}>◆</span>
        <p className={styles.emptyText}>图片加载中...</p>
      </div>
    );
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        <div className={styles.placeholderLarge}>
          <span className={styles.placeholderIcon}>◆</span>
        </div>
      </div>
      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${
                i === selected ? styles.thumbActive : ""
              }`}
              onClick={() => setSelected(i)}
              aria-label={`查看图片 ${i + 1}`}
            >
              <span className={styles.thumbPlaceholder}>◆</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
