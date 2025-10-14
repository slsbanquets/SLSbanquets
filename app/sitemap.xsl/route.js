import { NextResponse } from "next/server";

export async function GET() {
  const xsl = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>XML Sitemap</title>
        <style>
          body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; margin: 24px; color: #111827; }
          h1 { font-size: 20px; margin: 0 0 16px; }
          .meta { color: #6b7280; margin-bottom: 16px; }
          table { border-collapse: collapse; width: 100%; }
          thead th { text-align: left; font-weight: 600; font-size: 14px; color: #374151; border-bottom: 1px solid #e5e7eb; padding: 10px 8px; }
          tbody td { border-bottom: 1px solid #f3f4f6; padding: 10px 8px; font-size: 14px; }
          a { color: #2563eb; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <div class="meta">Human-friendly view. Search engines read the raw XML.</div>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Change Frequency</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="/*[local-name()='urlset']/*[local-name()='url']">
              <tr>
                <td class="mono"><a href="{*[local-name()='loc']}"><xsl:value-of select="*[local-name()='loc']"/></a></td>
                <td><xsl:value-of select="*[local-name()='lastmod']"/></td>
                <td><xsl:value-of select="*[local-name()='changefreq']"/></td>
                <td><xsl:value-of select="*[local-name()='priority']"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;

  return new NextResponse(xsl, {
    headers: { "Content-Type": "text/xsl; charset=utf-8" },
  });
}


