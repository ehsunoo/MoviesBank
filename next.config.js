/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["image.tmdb.org", "localhost"],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    IMAGE_URL_BASE: process.env.IMAGE_BASE_URL,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/movies/popular/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
