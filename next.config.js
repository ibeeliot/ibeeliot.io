const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const nextConfig = {
  webpack: config => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsConfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsConfigPathsPlugin()];
    }

    return config;
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret'
  },
  env: {
    // Will be available on both server and client
    API_URL: process.env.REACT_APP_SERVICE_URL,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  }
};

// next.config.js
module.exports = withPlugins([withCss], nextConfig);
