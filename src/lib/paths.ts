const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix public assets when the site is hosted below a domain sub-path. */
export function assetPath(source: string): string {
  if (!source.startsWith("/") || source.startsWith(`${basePath}/`)) return source;
  return `${basePath}${source}`;
}
