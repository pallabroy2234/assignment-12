/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roar.media",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
