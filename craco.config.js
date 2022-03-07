const path = require('path');
module.exports = {
  webpack: {
    alias: {
      $images: path.resolve(__dirname, 'src/assets/img'),
      $pages: path.resolve(__dirname, 'src/pages'),
      $components: path.resolve(__dirname, 'src/components'),
    },
  },
};
