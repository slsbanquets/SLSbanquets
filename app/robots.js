export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://sls-banquets.vercel.app/sitemap.xml",
    host: "https://sls-banquets.vercel.app",
  };
}


