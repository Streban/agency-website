import type { Express } from "express";
import { createServer, type Server } from "http";
import { getPublicSiteOrigin } from "./site-url";

const SITEMAP_PATHS: { loc: string; changefreq: string; priority: string }[] = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/projects", changefreq: "monthly", priority: "0.85" },
  { loc: "/hire", changefreq: "monthly", priority: "0.9" },
];

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/robots.txt", (_req, res) => {
    const origin = getPublicSiteOrigin();
    res.type("text/plain; charset=utf-8");
    res.send(
      `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
    );
  });

  app.get("/sitemap.xml", (_req, res) => {
    const origin = getPublicSiteOrigin();
    const lastmod = new Date().toISOString().slice(0, 10);
    const body = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...SITEMAP_PATHS.map(({ loc, changefreq, priority }) => {
        const url = new URL(loc, `${origin}/`).href;
        return [
          "  <url>",
          `    <loc>${escapeXml(url)}</loc>`,
          `    <lastmod>${lastmod}</lastmod>`,
          `    <changefreq>${changefreq}</changefreq>`,
          `    <priority>${priority}</priority>`,
          "  </url>",
        ].join("\n");
      }),
      "</urlset>",
    ].join("\n");
    res.type("application/xml; charset=utf-8");
    res.send(body);
  });

  return httpServer;
}
