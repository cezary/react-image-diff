module.exports = {
  entry: './src/react-image-diff.js',
  output: {
    filename: './dist/react-image-diff.js',
    libraryTarget: 'umd',
    library: 'ImageDiff'
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader'
    }]
  }
};
