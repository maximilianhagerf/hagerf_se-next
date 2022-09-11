const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: isProd ? "https://hagerf.se" : "http://localhost:3000",
  },
};
