/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({ test: /\.node/, use: "raw-loader" });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '10.0.0.100',
        port: '8080',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
