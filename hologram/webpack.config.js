var path = require('path');

module.exports = {
  "entry": "./app/index.js",
  "output": {
    "path": __dirname + "/dist",
    "filename": "bundle.js"
  },
  "resolve": {
    "extensions": ['.js', '.jsx']
  },
  "module": {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  },
}
