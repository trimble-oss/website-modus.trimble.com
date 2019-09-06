'use-strict';

const modusVersion = '0.9.0';
const modusIconsVersion = '0.5.0';
const guideVersion = '0.9.0 Beta';
const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};

exports.ether = {
  guideVersion: guideVersion,
  guideBuildDate: new Date(Date.now()).toLocaleString("en-US", dateOptions),
  modusVersion: modusVersion,
  modusIconsVersion: modusIconsVersion,
  devLinks: {
    modusIcons: 'https://styles-dev.trimblemaps.com/assets/fonts/modus-icons.css',
    modusCSS: 'https://styles-dev.trimblemaps.com/css/modus.min.css',
    modusLayoutCSS: 'https://styles-dev.trimblemaps.com/css/modus-layout.min.css',
    modusLayoutJS: 'https://styles-dev.trimblemaps.com/css/modus-layout.min.js'
  },
  prodLinks: {
    modusIcons: 'https://modus.trimble.com/assets/' + modusIconsVersion + '/fonts/modus-icons.css',
    modusCSS: 'https://modus.trimble.com/css/modus.min-' + modusVersion + '.css',
    modusLayoutCSS: 'https://modus.trimble.com/css/modus-layout.min-' + modusVersion + '.css',
    modusLayoutJS: 'https://modus.trimble.com/css/modus-layout.min-' + modusVersion + '.js'
  }
};
