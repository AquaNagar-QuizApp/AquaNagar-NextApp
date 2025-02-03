/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/AquaNagar-NextApp" : "", // No org name needed
  assetPrefix: isProd ? "/AquaNagar-NextApp" : "",
};

module.exports = nextConfig;
