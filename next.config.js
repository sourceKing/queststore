const path = require('path');

module.exports = {
  en: {
    API_URL: 'http://localhost:1337',
  },
  webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    config.resolve.alias['lib'] = path.join(__dirname, 'lib');

    return config;
  }
}
