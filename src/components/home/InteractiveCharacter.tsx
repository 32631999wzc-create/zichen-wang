"use client";

import { useEffect, useRef } from "react";
import { assetPath } from "@/lib/paths";
import styles from "./InteractiveCharacter.module.css";

type Side = "left" | "right";

const LEFT_EDGE = 0.42;
const RIGHT_EDGE = 0.58;
const NEUTRAL_EPSILON = 0.045;
const LERP_FACTOR = 0.18;

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

export default function InteractiveCharacter() {
  const leftRef = useRef<HTMLVideoElement>(null);
  const rightRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    const canvas = canvasRef.current;
    if (!left || !right || !canvas) return;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    const scratch = document.createElement("canvas");
    const scratchContext = scratch.getContext("2d", { willReadFrequently: true });
    const backgroundStrip = document.createElement("canvas");
    const backgroundContext = backgroundStrip.getContext("2d", { willReadFrequently: true });
    if (!context || !scratchContext || !backgroundContext) return;

    const videos: Record<Side, HTMLVideoElement> = { left, right };
    const durations: Record<Side, number> = { left: 0, right: 0 };
    const smoothedTime: Record<Side, number> = { left: 0, right: 0 };
    const queuedSeek: Record<Side, number | null> = { left: null, right: null };
    let activeSide: Side = "left";
    let requestedSide: Side | null = null;
    let desiredTime = 0;
    let rafId = 0;
    let enabled = false;
    let lastDraw = 0;
    let pointerX = 0.5;

    const setVisibleSide = (side: Side) => {
      activeSide = side;
      left.dataset.active = side === "left" ? "true" : "false";
      right.dataset.active = side === "right" ? "true" : "false";
    };

    const seek = (side: Side, time: number) => {
      const video = videos[side];
      const duration = durations[side];
      if (!duration) return;
      const next = clamp(time, 0, Math.max(0, duration - 0.016));
      if (video.seeking) {
        queuedSeek[side] = next;
        return;
      }
      if (Math.abs(video.currentTime - next) < 0.012) return;
      try {
        video.currentTime = next;
      } catch {
        queuedSeek[side] = next;
      }
    };

    const onSeeked = (side: Side) => {
      const queued = queuedSeek[side];
      queuedSeek[side] = null;
      if (queued !== null) seek(side, queued);
    };

    const onMetadata = (side: Side) => {
      const video = videos[side];
      durations[side] = Number.isFinite(video.duration) ? video.duration : 0;
      video.pause();
      seek(side, 0);
    };

    const drawCharacter = (side: Side, now: number) => {
      if (now - lastDraw < 32) return;
      const video = videos[side];
      if (video.readyState < 2 || !video.videoWidth || !video.videoHeight) return;
      lastDraw = now;

      const bounds = canvas.getBoundingClientRect();
      const outputWidth = Math.max(1, Math.min(480, Math.round(bounds.width)));
      const outputHeight = Math.max(1, Math.min(760, Math.round(bounds.height)));
      if (canvas.width !== outputWidth || canvas.height !== outputHeight) {
        canvas.width = scratch.width = outputWidth;
        canvas.height = scratch.height = outputHeight;
        backgroundStrip.width = 1;
        backgroundStrip.height = outputHeight;
      }

      const sourceAspect = video.videoWidth / video.videoHeight;
      const outputAspect = outputWidth / outputHeight;
      let sourceWidth = video.videoWidth;
      let sourceHeight = video.videoHeight;
      let sourceX = 0;
      let sourceY = 0;
      if (sourceAspect > outputAspect) {
        sourceWidth = video.videoHeight * outputAspect;
        sourceX = (video.videoWidth - sourceWidth) * 0.5;
      } else {
        sourceHeight = video.videoWidth / outputAspect;
        sourceY = (video.videoHeight - sourceHeight) * 0.5;
      }

      scratchContext.clearRect(0, 0, outputWidth, outputHeight);
      scratchContext.drawImage(
        video,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        0,
        0,
        outputWidth,
        outputHeight,
      );

      const sampleX = video.videoWidth - 2;
      backgroundContext.drawImage(
        video,
        sampleX,
        sourceY,
        1,
        sourceHeight,
        0,
        0,
        1,
        outputHeight,
      );

      const frame = scratchContext.getImageData(0, 0, outputWidth, outputHeight);
      const background = backgroundContext.getImageData(0, 0, 1, outputHeight).data;
      const pixels = frame.data;
      for (let y = 0; y < outputHeight; y += 1) {
        const backgroundIndex = y * 4;
        const br = background[backgroundIndex];
        const bg = background[backgroundIndex + 1];
        const bb = background[backgroundIndex + 2];
        for (let x = 0; x < outputWidth; x += 1) {
          const index = (y * outputWidth + x) * 4;
          const dr = pixels[index] - br;
          const dg = pixels[index + 1] - bg;
          const db = pixels[index + 2] - bb;
          const distance = Math.sqrt(dr * dr + dg * dg + db * db);
          const inFaceArea = y < outputHeight * 0.43 && x > outputWidth * 0.22 && x < outputWidth * 0.78;
          const alpha = clamp((distance - (inFaceArea ? 9 : 24)) / 40);
          pixels[index + 3] = Math.round(alpha * 255);
        }
      }

      context.clearRect(0, 0, outputWidth, outputHeight);
      context.putImageData(frame, 0, 0);
    };

    const returnToNeutral = () => {
      desiredTime = 0;
      requestedSide = null;
    };

    const timeForSide = (side: Side) => {
      const progress = side === "left"
        ? clamp((LEFT_EDGE - pointerX) / LEFT_EDGE)
        : clamp((pointerX - RIGHT_EDGE) / (1 - RIGHT_EDGE));
      return progress * durations[side];
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!enabled || event.pointerType === "touch") return;
      const mouseX = clamp(event.clientX / window.innerWidth);
      pointerX = mouseX;

      if (mouseX < LEFT_EDGE) {
        const progress = clamp((LEFT_EDGE - mouseX) / LEFT_EDGE);
        if (activeSide === "left") {
          requestedSide = null;
          desiredTime = progress * durations.left;
        } else {
          requestedSide = "left";
          desiredTime = 0;
        }
      } else if (mouseX > RIGHT_EDGE) {
        const progress = clamp((mouseX - RIGHT_EDGE) / (1 - RIGHT_EDGE));
        if (activeSide === "right") {
          requestedSide = null;
          desiredTime = progress * durations.right;
        } else {
          requestedSide = "right";
          desiredTime = 0;
        }
      } else {
        returnToNeutral();
      }
    };

    const tick = (now: number) => {
      const video = videos[activeSide];
      smoothedTime[activeSide] += (desiredTime - smoothedTime[activeSide]) * LERP_FACTOR;
      seek(activeSide, smoothedTime[activeSide]);
      drawCharacter(activeSide, now);

      if (requestedSide && Math.max(video.currentTime, smoothedTime[activeSide]) <= NEUTRAL_EPSILON) {
        const nextSide = requestedSide;
        requestedSide = null;
        desiredTime = timeForSide(nextSide);
        smoothedTime[nextSide] = 0;
        seek(nextSide, 0);
        setVisibleSide(nextSide);
      }

      rafId = window.requestAnimationFrame(tick);
    };

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateCapability = () => {
      enabled = finePointer.matches && !reducedMotion.matches;
      if (!enabled) {
        returnToNeutral();
        smoothedTime.left = 0;
        smoothedTime.right = 0;
        seek("left", 0);
        seek("right", 0);
        setVisibleSide("left");
      }
    };

    const leftSeeked = () => onSeeked("left");
    const rightSeeked = () => onSeeked("right");
    const leftMetadata = () => onMetadata("left");
    const rightMetadata = () => onMetadata("right");

    setVisibleSide("left");
    updateCapability();
    left.addEventListener("loadedmetadata", leftMetadata);
    right.addEventListener("loadedmetadata", rightMetadata);
    left.addEventListener("seeked", leftSeeked);
    right.addEventListener("seeked", rightSeeked);
    finePointer.addEventListener("change", updateCapability);
    reducedMotion.addEventListener("change", updateCapability);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", returnToNeutral);
    rafId = window.requestAnimationFrame(tick);

    if (left.readyState >= 1) leftMetadata();
    if (right.readyState >= 1) rightMetadata();

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", returnToNeutral);
      finePointer.removeEventListener("change", updateCapability);
      reducedMotion.removeEventListener("change", updateCapability);
      left.removeEventListener("loadedmetadata", leftMetadata);
      right.removeEventListener("loadedmetadata", rightMetadata);
      left.removeEventListener("seeked", leftSeeked);
      right.removeEventListener("seeked", rightSeeked);
    };
  }, []);

  return (
    <div className={styles.stage} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
      <video
        ref={leftRef}
        className={styles.video}
        data-active="true"
        muted
        playsInline
        preload="auto"
        src={assetPath("/animation-left.mp4")}
      />
      <video
        ref={rightRef}
        className={styles.video}
        data-active="false"
        muted
        playsInline
        preload="auto"
        src={assetPath("/animation-right.mp4")}
      />
    </div>
  );
}
