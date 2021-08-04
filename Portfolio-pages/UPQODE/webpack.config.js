const path = require('path')

module.exports = {
    entry: {
        main: ['./src/menu.js', './src/adaptMenu.js', './src/services.js'],
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    }
}