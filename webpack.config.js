module.exports = {
  entry: './lib/react-image-diff.js',
  output: {
    filename: './dist/react-image-diff.js',
    sourceMapFilename: './dist/react-image-diff.map',
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
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
    ]
  }
};
