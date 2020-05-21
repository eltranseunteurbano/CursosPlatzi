const webpack = require('webpack')
const path = require('path')
const config = require('sapper/config/webpack.js')
const pkg = require('./package.json')

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const alias = { svelte: path.resolve('node_modules', 'svelte') };
const extensions = [ '.mjs', '.js', '.json', '.svelte', '.html' ];
const mainFields = [ 'svelte', 'module', 'browser', 'main' ];

const svelteModuleClient = {
  test: /\.(svelte|html)$/,
  use: {
    loader: 'svelte-loader',
    options: {
      dev,
      hydrateble: true,
      hotReload: false
    }
  }
}

const svelteModuleServer = {
  test: /\.(svelte|html)$/,
  use: {
    loader: 'svelte-loader',
    options: {
      dev,
      css: false,
      generate: 'ssr',
    }
  }
}

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolver: { alias, extensions, mainFields },
    module: {
      rules: [ svelteModuleClient ]
    },
    mode,
    plugins: [
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.NODE_EN': JSON.stringify(mode)
      })
    ].filter(Boolean),
    devtool: dev && 'inline-source-map'
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: 'node',
    resolver: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat('encoding'),
    module: {
      rules: [ svelteModuleServer ]
    },
    mode: process.env.NODE_ENV,
    performance: {
      hints: false
    },
  }
}