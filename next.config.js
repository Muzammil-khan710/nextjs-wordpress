/** @type {import('next').NextConfig} */

const { withFaust, getWpHostname } = require('@faustwp/core');
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webVitalsAttribution: ["CLS", "LCP", "FCP", "FID", "INP", "TTFB"],
  },
  sassOptions: {
    includePath: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["blog.rovae.in"]
  },
};

module.exports = withFaust(nextConfig);