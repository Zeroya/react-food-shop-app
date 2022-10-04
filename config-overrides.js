const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@hooks': 'src/hooks',
    '@models': 'src/models',
    '@pages': 'src/pages',
    '@store': 'src/store',
    '@utils': 'src/utils',
    '@constants': 'src/constants/constants',
    '@assets': 'src/assets',
  })(config);

  return config;
};
