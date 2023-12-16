const withImages = require('next-optimized-images');

module.exports = withImages({
  esModule: true,
  optpng: {
    optimizationLevel: 3,
  },
});
