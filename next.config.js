// module.exports = {
//   reactStrictMode: true,
// };
// next.config.js
module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      crypto: false, // Or adjust as needed
    };
    return config;
  },
};
