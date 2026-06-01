/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Opt into the non-default quality used by the full-screen background image.
    qualities: [75, 100],
  },
}

module.exports = nextConfig
