/** @type {import('next').NextConfig} */

const { withFaust, getWpHostname } = require('@faustwp/core');
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webVitalsAttribution: ["CLS", "LCP", "FCP", "FID", "INP", "TTFB"],
  },
  images: {
    domains: ["blog.rovae.in", "images.surferseo.art"]
  },
};

module.exports = withFaust(nextConfig);