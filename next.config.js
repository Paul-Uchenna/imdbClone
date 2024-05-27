/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
  },
};

// next.config.js
module.exports = {
  env: {
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
