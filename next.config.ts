/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "./MaruthuNagar-NextApp" : "", // No org name needed
  assetPrefix: isProd ? "./MaruthuNagar-NextApp" : "",
  reactStrictMode: true,
  swcMinify: true, // Ensures minification
};

module.exports = nextConfig;
