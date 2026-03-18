/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
    output: "export",
  images: {
    loader: 'custom',
    loaderFile: './cf-image-loader.js',
  },
    trailingSlash: true,


};

export default nextConfig;
