import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  ogType?: "website" | "article";
  schemaType?: "WebPage" | "Article";
}

export default function SEO({
  title,
  description,
  image,
  url,
  ogType = "website",
  schemaType = "WebPage",
}: SEOProps) {
  const siteTitle = "Evangelismo Digital";
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultImage = "/default-article-image.jpg";
  const siteUrl = "https://www.findhope.digital";

  const normalizePath = (path: string) =>
    path.startsWith("/") ? path : `/${path}`;

  const fullUrl = url
    ? `${siteUrl}${normalizePath(url)}`
    : siteUrl;

  const fullImage = image
    ? `${siteUrl}${normalizePath(image)}`
    : `${siteUrl}${normalizePath(defaultImage)}`;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const createdElements: HTMLElement[] = [];

    document.title = fullTitle;

    const setMetaTag = (
      attr: string,
      value: string,
      content: string
    ) => {
      let element = document.querySelector(
        `meta[${attr}="${value}"]`
      ) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, value);
        document.head.appendChild(element);
        createdElements.push(element);
      }

      element.setAttribute("content", content);
    };

    // ✅ Standard SEO
    setMetaTag("name", "description", description);
    setMetaTag("name", "robots", "index, follow");

    // ✅ Open Graph
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", fullImage);
    setMetaTag("property", "og:url", fullUrl);
    setMetaTag("property", "og:site_name", siteTitle);

    // ✅ Twitter
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", fullImage);

    // ✅ Canonical
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
      createdElements.push(canonical);
    }

    canonical.href = fullUrl;

    // ✅ JSON-LD
    const jsonLdId = "jsonld-seo";
    let jsonLdScript = document.getElementById(
      jsonLdId
    ) as HTMLScriptElement | null;

    if (!jsonLdScript) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.id = jsonLdId;
      jsonLdScript.type = "application/ld+json";
      document.head.appendChild(jsonLdScript);
      createdElements.push(jsonLdScript);
    }

    jsonLdScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": schemaType,
      headline: fullTitle,
      description,
      image: fullImage,
      url: fullUrl,
      author: {
        "@type": "Organization",
        name: siteTitle,
      },
    });

    // ✅ Full cleanup on route change/unmount (SPA-safe)
    return () => {
      document.title = siteTitle;
      createdElements.forEach((el) => el.remove());
    };
  }, [
    fullTitle,
    description,
    fullImage,
    fullUrl,
    ogType,
    schemaType,
    siteTitle,
  ]);

  return null;
}
