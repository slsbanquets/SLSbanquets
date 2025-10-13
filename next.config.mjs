/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow external images in JSON-LD references if needed in the future
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sls-banquets.vercel.app",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/logo.png",
      },
    ];
  },
};

export default nextConfig;
