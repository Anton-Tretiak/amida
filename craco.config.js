const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const oneOfRule = webpackConfig.module.rules.find((rule) => Array.isArray(rule.oneOf));
      if (oneOfRule) {
        const cssRule = oneOfRule.oneOf.find((rule) => rule.test && rule.test.toString().includes('css'));
        if (cssRule) {
          cssRule.use.push({
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          });
        }
      }
      return webpackConfig;
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '\\.(scss)$': require.resolve('identity-obj-proxy'),
      },
    },
  },
};
