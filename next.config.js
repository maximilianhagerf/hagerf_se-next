module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "https://github.com/maximilianhagerf/maximilianhagerf.github.io",
  },
};
