/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["image.tmdb.org","movies-bank.vercel.app", "localhost"],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
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
