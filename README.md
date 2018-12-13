# Project Ether Styleguide

## Initial Setup

1. Download Hugo: https://github.com/gohugoio/hugo/releases/download/v0.52/hugo_extended_0.52_Windows-64bit.zip
2. Extract the ZIP so it's like so: `C:\Hugo\bin\hugo.exe`
3. Set the path so you can run Hugo globally. This video helped me set it up: https://gohugo.io/getting-started/installing/#windows

## Commands

- View live server with `hugo serve` (site will then be viewable in browser at: http://localhost:1313/)
- Make a build with `hugo`
- Make a build with minified HTML (good to do before moving to production to save a few KB) `hugo --minify`

## Notes

- To make CSS changes edit `static\css\hugo-theme.css` (I haven't setup the SCSS compiler which is a Hugo feature)
