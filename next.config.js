module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  // basePath: "",
  // assetPrefix: "./",
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  // images: {
  //   loader: "imgix",
  //   path: "/",
  // },
  images: {
    loader: "akamai",
    path: "",
  },
};
