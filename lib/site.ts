export const SITE_URL = "https://www.phucld.com";
export const SITE_NAME = "Oliver.Le";
export const SITE_DESCRIPTION =
  "Oliver Le's corner of the internet: things I'm learning, projects I've built, and some random thoughts.";
export const TWITTER_HANDLE = "@phucledien";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function ogImageUrl(title: string, label?: string): string {
  const params = new URLSearchParams({ title });
  if (label) params.set("label", label);
  return `/api/og?${params.toString()}`;
}
