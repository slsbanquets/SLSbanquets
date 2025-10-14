import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://sls-banquets.vercel.app";
  const today = new Date().toISOString().split("T")[0];

  const entries = [
    { loc: `${baseUrl}/`, lastmod: today, changefreq: "weekly", priority: "1.0" },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${entries
    .map(
      (e) => `
  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}


