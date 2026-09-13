"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import styles from "./RoundCarousel.module.css";

export interface RoundCarouselImage {
  src: string;
  position?: string;
}

interface RoundCarouselProps {
  images: RoundCarouselImage[];
  imageWidth?: number;
  imageHeight?: number;
  spacing?: number;
  speed?: number;
  direction?: "right" | "left";
  drag?: boolean;
  sensitivity?: number;
  tilt?: number;
  perspective?: number;
  cornerRadius?: number;
  innerDim?: number;
  className?: string;
}

export default function RoundCarousel({
  images,
  imageWidth = 220,
  imageHeight = 300,
  spacing = 2.2,
  speed = 3.5,
  direction = "right",
  drag = true,
  sensitivity = 4,
  tilt = -6,
  perspective = 2200,
  cornerRadius = 20,
  innerDim = .32,
  className = "",
}: RoundCarouselProps) {
  const items = useMemo(() => {
    if (!images.length) return [];
    const minimumFaces = 6;
    return Array.from({ length: Math.max(minimumFaces, images.length) }, (_, index) => images[index % images.length]);
  }, [images]);
  const count = items.length;
  const angle = count ? 360 / count : 0;
  const factor = 1 + spacing * .15;
  const radius = count > 1 ? (imageWidth * factor) / (2 * Math.tan(Math.PI / count)) : 0;
  const degreesPerSecond = speed * 6 * (direction === "left" ? -1 : 1);

  const viewportRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);
  const dragRef = useRef({ active: false, x: 0 });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateScale = () => {
      const ringWidth = (radius + imageWidth / 2) * 2;
      setScale(Math.min(1, Math.max(.5, (viewport.clientWidth - 28) / ringWidth)));
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [imageWidth, radius]);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring || !count) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const apply = () => {
      ring.style.transform = `translateZ(${-radius}px) rotateY(${rotationRef.current}deg)`;
    };
    apply();

    if (reduceMotion) return;
    const draw = (now: number) => {
      const elapsed = lastTimeRef.current ? (now - lastTimeRef.current) / 1000 : 0;
      lastTimeRef.current = now;
      const delta = Math.min(elapsed, .1);
      if (!dragRef.current.active) {
        if (Math.abs(velocityRef.current) > .01) {
          rotationRef.current += velocityRef.current * delta;
          velocityRef.current *= .94;
        } else {
          rotationRef.current += degreesPerSecond * delta;
        }
      }
      apply();
      frameRef.current = requestAnimationFrame(draw);
    };
    frameRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frameRef.current);
      lastTimeRef.current = 0;
    };
  }, [count, degreesPerSecond, radius]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag) return;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    dragRef.current = { active: true, x: event.clientX };
    velocityRef.current = 0;
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const movement = event.clientX - dragRef.current.x;
    dragRef.current.x = event.clientX;
    const multiplier = .3 * sensitivity;
    rotationRef.current += movement * multiplier;
    velocityRef.current = movement * multiplier * 60;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    event.currentTarget.releasePointerCapture?.(event.pointerId);
    dragRef.current.active = false;
  };

  if (!count) return null;

  return (
    <div
      ref={viewportRef}
      className={`${styles.viewport} ${className}`}
      aria-label="个人照片环形画廊，可左右拖动旋转"
      onPointerCancel={onPointerUp}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      role="group"
      style={{ perspective: `${perspective}px` }}
      tabIndex={0}
    >
      <div className={styles.scene} style={{ transform: `scale(${scale}) rotateX(${tilt}deg)` }}>
        <div ref={ringRef} className={styles.ring} style={{ width: imageWidth, height: imageHeight }}>
          {items.map((image, index) => {
            const faceStyle = {
              backgroundImage: `url("${image.src}")`,
              backgroundPosition: image.position ?? "center",
              borderRadius: cornerRadius,
            } as CSSProperties;
            return (
              <div className={styles.item} key={`${image.src}-${index}`} style={{ transform: `rotateY(${index * angle}deg) translateZ(${radius}px)` }}>
                <div className={styles.face} style={faceStyle} />
                <div className={`${styles.face} ${styles.back}`} style={{ ...faceStyle, filter: `brightness(${innerDim}) saturate(.72)` }} />
              </div>
            );
          })}
        </div>
      </div>
      <span className={styles.hint}>DRAG TO ROTATE ↔</span>
    </div>
  );
}
