module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    deviceSizes: [320, 420, 575, 768, 1024, 1200],
    domains: ["images.prismic.io"],
  },
};
