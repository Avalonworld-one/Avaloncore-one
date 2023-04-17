const withImages = require('@svgr/webpack');

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});
