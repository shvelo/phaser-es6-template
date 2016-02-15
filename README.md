# phaser-es6-template
Phaser game template in ES6   
Using `babel` to transpile ES6 to ES5 to support all modern browsers.  
Needs `node.js` to work.

## Directory structure     

- `src` - Actual game source in `ES6`
- `assets` - Game assets and CSS
- `lib` - Main library files copied from `bower_components`, like `phaser.js`
- `js` - Compiled JavaScript in `ES5`
- `dist` - Full game ready to be distributed
- `index.html` - Game page
- `dist.zip` - Zipped version of `dist` folder

## Getting started

1. Install dependencies by running `npm install`
2. Install `gulp` globally by running `npm install -g gulp`, this needs to be run with `sudo` on Linux, like `sudo npm install -g gulp`
3. Optionally update Phaser by running `gulp bower`
4. Run `gulp watch server` to continuously monitor sources and rebuild as needed. This also starts HTTP server at http://localhost:8000`

## Gulp tasks

- `default` - Copy libraries and compile source.
- `watch` - Monitor for changes in sources and recompile as needed
- `lib` - Copy library files from `bower_components` to `lib`
- `webpack` - Compile game source
- `deploy` - Create `dist` and deploy it to `gh-pages` branch, this makes the game playable via [GitHub Pages](https://pages.github.com/)
- `bower` - Install dependencies listed in `bower.json`
- `clean` - Remove `dist` and `dist.zip`
- `dist` - Create `dist` folder by copying assets and compiled sources to it.
- `zip` - Create `dist.zip` from `dist`
