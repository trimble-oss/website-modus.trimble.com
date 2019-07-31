# Ether Framework Guide

The Ether Framework was developed as a common, open source platform for all of Trimble's web applications.

## Installation

```bash
npm install
```

## Start Dev Server

```bash
npm start
```

## Start Prod Server

Starts a local server that uses `webpack.config.prod.js`

```bash
npm run start:prod
```

## Build Dev Version

```bash
npm run build:dev
```

## Build Prod Version

```bash
npm run build
```

---
## Developer Notes

The links to Ether's Development and Production builds can be found in `webpack/variables.js`. Simply changing the `etherVersion` and `etherIconsVersion` variables will change both the example texts in the style guide and the actual `<link>` and `<script>` tags used in the production builds.

The Development build of the style guide will always point towards the versionless development build of Ether.

---

### Features

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
