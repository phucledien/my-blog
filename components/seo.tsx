import Head from "next/head";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  TWITTER_HANDLE,
  absoluteUrl,
  ogImageUrl,
} from "../lib/site";

type SeoProps = {
  title?: string;
  description?: string;
  path: string;
  // Small tag shown on the generated preview card, e.g. "Blog".
  label?: string;
  image?: { src: string; width: number; height: number; alt?: string };
  type?: "website" | "article";
  publishedTime?: string;
};

export default function Seo({
  title,
  description = SITE_DESCRIPTION,
  path,
  label,
  image,
  type = "website",
  publishedTime,
}: SeoProps) {
  const fullTitle = title ? `${title} · ${SITE_NAME}` : SITE_NAME;
  const url = absoluteUrl(path);
  const og = image ?? {
    src: ogImageUrl(title ?? SITE_NAME, label),
    width: 1200,
    height: 630,
  };
  const imageUrl = absoluteUrl(og.src);
  const imageAlt = og.alt ?? title ?? SITE_NAME;

  // `key` makes next/head dedupe tags if a page renders <Seo> more than once.
  return (
    <Head>
      <title key="title">{fullTitle}</title>
      <meta key="description" name="description" content={description} />
      <link key="canonical" rel="canonical" href={url} />

      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:type" property="og:type" content={type} />
      <meta key="og:title" property="og:title" content={title ?? SITE_NAME} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta key="og:image:width" property="og:image:width" content={String(og.width)} />
      <meta key="og:image:height" property="og:image:height" content={String(og.height)} />
      <meta key="og:image:alt" property="og:image:alt" content={imageAlt} />
      {publishedTime && (
        <meta
          key="article:published_time"
          property="article:published_time"
          content={publishedTime}
        />
      )}

      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:site" name="twitter:site" content={TWITTER_HANDLE} />
      <meta key="twitter:creator" name="twitter:creator" content={TWITTER_HANDLE} />
      <meta key="twitter:title" name="twitter:title" content={title ?? SITE_NAME} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />
      <meta key="twitter:image:alt" name="twitter:image:alt" content={imageAlt} />
    </Head>
  );
}
