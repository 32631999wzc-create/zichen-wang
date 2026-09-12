"use client";

import { useState } from "react";
import Image from "next/image";
import { assetPath } from "@/lib/paths";
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
        <Image src={assetPath(images[selected])} alt={`${title}项目图片 ${selected + 1}`} fill sizes="(max-width: 1023px) 100vw, 820px" priority={selected === 0} />
      </div>
      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.map((image, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${
                i === selected ? styles.thumbActive : ""
              }`}
              onClick={() => setSelected(i)}
              aria-label={`查看图片 ${i + 1}`}
            >
              <Image src={assetPath(image)} alt="" fill sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
