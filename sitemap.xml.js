// // app/sitemap.xml.js
// export const runtime = "edge"; // Optional, for faster Edge runtime

// export async function GET() {
//   const baseUrl = "https://sls-banquets.vercel.app";

//   // List all URLs
//   const urls = [
//     { loc: `${baseUrl}/`, changefreq: "weekly", priority: 1.0 },
//     { loc: `${baseUrl}/about`, changefreq: "monthly", priority: 0.8 },
//     { loc: `${baseUrl}/#services`, changefreq: "monthly", priority: 0.8 },
//     { loc: `${baseUrl}/#facilities`, changefreq: "monthly", priority: 0.8 },
//     { loc: `${baseUrl}/#gallery`, changefreq: "monthly", priority: 0.7 },
//     { loc: `${baseUrl}/#contact`, changefreq: "monthly", priority: 0.9 },
//   ];

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     ${urls
//       .map(
//         (url) => `<url>
//       <loc>${url.loc}</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>${url.changefreq}</changefreq>
//       <priority>${url.priority}</priority>
//     </url>`
//       )
//       .join("")}
//   </urlset>`;

//   return new Response(sitemap, {
//     headers: {
//       "Content-Type": "application/xml",
//     },
//   });
// }




// app/sitemap.xml.js
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://sls-banquets.vercel.app";

  // Current date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const sections = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    { path: "#home", priority: "0.9", changefreq: "weekly" },
    { path: "#about", priority: "0.8", changefreq: "weekly" },
    { path: "#services", priority: "0.8", changefreq: "weekly" },
    { path: "#facilities", priority: "0.8", changefreq: "weekly" },
    { path: "#gallery", priority: "0.7", changefreq: "monthly" },
    { path: "#contact", priority: "0.9", changefreq: "weekly" },
  ];

  const urls = sections
    .map(
      (section) => `
    <url>
      <loc>${baseUrl}${section.path}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${section.changefreq}</changefreq>
      <priority>${section.priority}</priority>
    </url>
  `
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
