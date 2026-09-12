"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";
import styles from "./TrueFocus.module.css";

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
  active?: boolean;
  onActivate?: () => void;
}

interface FocusRect { x: number; y: number; width: number; height: number; }
type FocusStyle = CSSProperties & { "--focus-border": string; "--focus-glow": string; };

export default function TrueFocus({
  sentence = "True Focus",
  separator = " ",
  manualMode = false,
  blurAmount = 4,
  borderColor = "#0099ff",
  glowColor = "rgba(0, 153, 255, 0.34)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = "",
  active,
  onActivate,
}: TrueFocusProps) {
  const words = useMemo(() => sentence.split(separator).filter(Boolean), [sentence, separator]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect | null>(null);
  const reduceMotion = useReducedMotion();
  const controlled = typeof active === "boolean";

  const measureFocus = useCallback(() => {
    const container = containerRef.current;
    const activeWord = wordRefs.current[currentIndex];
    if (!container || (!controlled && !activeWord)) return;

    const parentRect = container.getBoundingClientRect();
    const inset = 4;

    if (controlled) {
      setFocusRect({
        x: -inset,
        y: -inset,
        width: parentRect.width + inset * 2,
        height: parentRect.height + inset * 2,
      });
      return;
    }

    const activeRect = activeWord!.getBoundingClientRect();
    setFocusRect({
      x: activeRect.left - parentRect.left - inset,
      y: activeRect.top - parentRect.top - inset,
      width: activeRect.width + inset * 2,
      height: activeRect.height + inset * 2,
    });
  }, [controlled, currentIndex]);

  useEffect(() => {
    if (controlled || manualMode || reduceMotion || words.length < 2) return;

    const interval = window.setInterval(
      () => setCurrentIndex((previous) => (previous + 1) % words.length),
      (animationDuration + pauseBetweenAnimations) * 1000,
    );
    return () => window.clearInterval(interval);
  }, [animationDuration, controlled, manualMode, pauseBetweenAnimations, reduceMotion, words.length]);

  useEffect(() => {
    measureFocus();

    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(measureFocus);
    observer.observe(container);
    document.fonts?.ready.then(measureFocus);
    return () => observer.disconnect();
  }, [measureFocus]);

  const focusStyle: FocusStyle = {
    "--focus-border": borderColor,
    "--focus-glow": glowColor,
  };

  return (
    <span
      ref={containerRef}
      className={`${styles.container} ${className}`}
      aria-label={sentence}
      onFocus={onActivate}
      onMouseEnter={onActivate}
      style={focusStyle}
    >
      {words.map((word, index) => {
        const isActive = controlled ? active : index === currentIndex;
        return (
          <span
            aria-hidden="true"
            className={styles.word}
            key={`${word}-${index}`}
            onMouseEnter={() => manualMode && setCurrentIndex(index)}
            ref={(element) => { wordRefs.current[index] = element; }}
            style={{
              filter: reduceMotion || isActive ? "blur(0)" : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
            }}
          >
            {word}
          </span>
        );
      })}

      {focusRect && !reduceMotion && (!controlled || active) && (
        <motion.span
          aria-hidden="true"
          className={styles.frame}
          animate={{ x: focusRect.x, y: focusRect.y, width: focusRect.width, height: focusRect.height, opacity: 1 }}
          initial={false}
          transition={{ duration: animationDuration, ease: "easeInOut" }}
        >
          <span className={`${styles.corner} ${styles.topLeft}`} />
          <span className={`${styles.corner} ${styles.topRight}`} />
          <span className={`${styles.corner} ${styles.bottomLeft}`} />
          <span className={`${styles.corner} ${styles.bottomRight}`} />
        </motion.span>
      )}
    </span>
  );
}
