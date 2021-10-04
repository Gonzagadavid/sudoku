const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    './js/functions/createHtmlElement.js',
    './js/functions/checkCompleted.js',
    './js/functions/getOptions.js',
    './js/functions/btnSelect.js',
    './js/functions/fetchBoard.js',
    './js/functions/index.js',
    './js/functions/renderOptions.js',
    './js/views/createBtnContainer.js',
    './js/views/finishedContainer.js',
    './js/views/clearNumber.js',
    './js/views/createCardGame.js',
    './js/views/createClearBtn.js',
    './js/views/createContactContainer.js',
    './js/views/createOptionsContainer.js',
    './js/views/index.js',
    './js/views/insertTitle.js',
    './js/views/renderNumber.js',
    './js/main.js',
    './public/css/style.css',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    publicPath: './build/',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
