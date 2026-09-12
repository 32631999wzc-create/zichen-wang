"use client";

import { useEffect } from "react";

export default function PreviewMode() {
  useEffect(() => {
    document.body.classList.add("designPreviewMode");
    return () => document.body.classList.remove("designPreviewMode");
  }, []);

  return null;
}
