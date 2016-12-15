module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'src/index.ts',
      'test/**-spec.ts'
    ],
    exclude: [],
    preprocessors: {
      'src/index.ts': ['webpack'],
      'test/**-spec.ts': ['webpack']
    },
    webpack: {
      entry: {},
      devtool: 'inline-source-map',
      output: {
        filename: './dist/bundle.js'
      },
      resolve: {
        extensions: ['', '.ts', '.js']
      },
      module: {
        loaders: [
          { test: /\.ts$/, loaders: ['webpack-espower-loader', 'ts-loader'] },
          { test: /\.json$/, loader: 'json' }
        ],
        postLoaders: [
          {
            test: /\.ts$/,
            loader: 'istanbul-instrumenter-loader',
            exclude: [
              'node_modules',
              /\-spec\.ts$/
            ]
          }
        ]
      }
    },
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    coverageReporter: {
      type: 'html'
    }
  })
}
