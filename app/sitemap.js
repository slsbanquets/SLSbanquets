export default function sitemap() {
  const baseUrl = "https://sls-banquets.vercel.app";
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}


