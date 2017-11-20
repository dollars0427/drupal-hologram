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
        "loaders": [
            {
                "test": /\.js$/,
                "loader": "babel-loader"
            },
        ]
    }
}
