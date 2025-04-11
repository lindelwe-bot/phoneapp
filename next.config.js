/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      preprocess: false,
    },
  },
  reactStrictMode: true,
}

module.exports = nextConfig 