/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/sarthak-final" : "",
  assetPrefix: isProd ? "/sarthak-final/" : "",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
