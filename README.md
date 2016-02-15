# Phaser ES6 Template
A template to quickly start building a game using all the neat features of ES6.   
Supports deploying to GitHub Pages in a single command.   
Using `babel` to transpile ES6 to ES5 to support all the modern browsers.  
Needs `node.js` to work.

## Directory structure     

- `src` - Actual game source in `ES6`
- `assets` - Game assets and CSS
- `lib` - Main library files, like `phaser.js`
- `js` - Compiled JavaScript in `ES5`
- `dist` - Full game ready to be distributed
- `index.html` - Game page
- `dist.zip` - Zipped version of `dist` folder

## Getting started

1. Clone this repository
2. Create a new GitHub repository
3. Set `origin` url to your repository by running `git remote set-url origin <your-repo-clone-url>`
1. Install dependencies by running `npm install`
2. Install `gulp` globally by running `npm install -g gulp`, this needs to be run with `sudo` on Linux, like `sudo npm install -g gulp`
3. Run `gulp watch server` to continuously monitor sources and rebuild as needed. This also starts HTTP server at http://localhost:8000
4. Run `gulp deploy` to push to GitHub Pages, this will make your game available at `http://<your-username>.github.io/<repo-name>`, like http://shvelo.github.io/phaser-es6-template

## Gulp tasks

- `default` - Copy libraries and compile source.
- `watch` - Monitor for changes in sources and recompile as needed
- `phaser` - Copy phaser.js files from `node_modules` to `lib`
- `webpack` - Compile game source
- `deploy` - Create `dist` and deploy it to `gh-pages` branch, this makes the game playable via [GitHub Pages](https://pages.github.com/)
- `clean` - Remove `dist` and `dist.zip`
- `dist` - Create `dist` folder by copying assets and compiled sources to it.
- `zip` - Create `dist.zip` from `dist`
