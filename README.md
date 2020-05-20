# Modus Framework Guide

The Modus Framework was developed as a common, open source platform for all of Trimble's web applications.

## Setup

You will need
- [Node](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/download)
- Install recommended VS Code Extensions: `cmd/ctrl-shift-P` "show recommended extensions"

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

The links to Modus's Development and Production builds can be found in `webpack/variables.js`. Simply changing the `modusVersion` and `modusIconsVersion` variables will change both the example texts in the style guide and the actual `<link>` and `<script>` tags used in the production builds.

The Development build of the style guide will always point towards the versionless development build of Modus.

---

### Features

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
