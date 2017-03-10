var path = require('path');

module.exports = {
    "entry": "./app/index.js",
    "output": {
        "path": __dirname + "/public/assets",
        "filename": "bundle.js"
    },
    "resolve": {
        "react": path.resolve('./node_modules/react'),
        "extensions": ['', '.js', '.jsx']
    },
    "module": {
        "loaders": [
            {
                "test": /\.js$/,
                "loader": "babel"
            },
        ]
    }
}
