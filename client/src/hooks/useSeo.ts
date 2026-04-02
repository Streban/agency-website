import { useEffect } from "react";

const DEFAULT_DESCRIPTION =
  "Premium portfolio for a MERN and React Native developer — sophisticated motion, Apple-inspired craft, and full-stack delivery.";

function ensureMeta(selector: string, create: () => HTMLMetaElement): HTMLMetaElement {
  const existing = document.head.querySelector(selector);
  if (existing instanceof HTMLMetaElement) return existing;
  const el = create();
  document.head.appendChild(el);
  return el;
}

function setCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

type SeoOptions = {
  title: string;
  description?: string;
  path: string;
  noindex?: boolean;
};

export function useSeo({ title, description, path, noindex }: SeoOptions) {
  useEffect(() => {
    document.title = title;
    const desc = description ?? DEFAULT_DESCRIPTION;

    const metaDesc = ensureMeta(
      'meta[name="description"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        return m;
      },
    );
    metaDesc.setAttribute("content", desc);

    const robots = ensureMeta(
      'meta[name="robots"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "robots");
        return m;
      },
    );
    robots.setAttribute("content", noindex ? "noindex, nofollow" : "index, follow");

    const origin = window.location.origin;
    const pathname = path.startsWith("/") ? path : `/${path}`;
    const canonical = `${origin}${pathname}`;
    setCanonical(canonical);

    const ogTitle = ensureMeta(
      'meta[property="og:title"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:title");
        return m;
      },
    );
    ogTitle.setAttribute("content", title);

    const ogDesc = ensureMeta(
      'meta[property="og:description"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:description");
        return m;
      },
    );
    ogDesc.setAttribute("content", desc);

    const ogUrl = ensureMeta(
      'meta[property="og:url"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:url");
        return m;
      },
    );
    ogUrl.setAttribute("content", canonical);

    const twTitle = ensureMeta(
      'meta[name="twitter:title"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "twitter:title");
        return m;
      },
    );
    twTitle.setAttribute("content", title);

    const twDesc = ensureMeta(
      'meta[name="twitter:description"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "twitter:description");
        return m;
      },
    );
    twDesc.setAttribute("content", desc);
  }, [title, description, path, noindex]);
}
