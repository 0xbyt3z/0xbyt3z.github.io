/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icons8.com",
        pathname: "/icon/**",
      },
    ],
  },
};

export default nextConfig;
