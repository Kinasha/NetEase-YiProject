const path = require('path');
const fs = require('fs');
module.exports = {
  webpack: {
    alias: {
      $images: path.resolve(__dirname, 'src/assets/img'),
    },
  },
};
