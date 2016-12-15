const files = process.argv[4] === 'cov' ? ['.tmp/test/**-spec.js'] : ['src/index.ts', 'test/**-spec.ts'];
console.log(files)

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: files,
    exclude: [],
    preprocessors: {
      'src/index.ts': ['webpack'],
      'test/**-spec.ts': ['webpack'],
      '.tmp/test/**-spec.js': ['webpack']
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
          { test: /\.ts$/, loaders: ['ts-loader'] },
        ],
        postLoaders: [
          {
            test: /\.js$/,
            loader: 'istanbul-instrumenter',
            exclude: [
              /node_modules/,
              /-spec\.js$/
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
    singleRun: true,
    concurrency: Infinity,
    coverageReporter: {
      type: 'json'
    }
  })
}
