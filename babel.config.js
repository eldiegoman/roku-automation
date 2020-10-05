const path = require('path');

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-modules-commonjs'],
    [
      'module-resolver',
      {
        root: [path.resolve('./')],
        alias: {
          rokulib: './submodules/roku-automation',
          config: './config.js',
        },
      },
    ],
  ],
};
