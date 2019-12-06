const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    "drum-machine": '.src/drum-machine/index.js',
    "javascript-calculator": '.src/javascript-calculator/index.js',
    "markdown-previewer": '.src/markdown-previewer/index.js',
    "pomodoro-clock": '.src/pomodoro-clock/index.js',
    "random-quote-machine": '.src/random-quote-machine/index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
};