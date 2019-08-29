'use-strict';

const etherVersion = '0.3.2';
const etherIconsVersion = '1.1.0';
const guideVersion = '1.0.0';
const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};

exports.ether = {
  guideVersion: guideVersion,
  guideBuildDate: new Date(Date.now()).toLocaleString("en-US", dateOptions),
  etherVersion: etherVersion,
  etherIconsVersion: etherIconsVersion,
  devLinks: {
    etherIcons: 'https://styles-dev.trimblemaps.com/assets/fonts/ether-icons.css',
    etherCSS: 'https://styles-dev.trimblemaps.com/css/ether.min.css',
    etherLayoutCSS: 'https://styles-dev.trimblemaps.com/css/ether-layout.min.css',
    etherLayoutJS: 'https://styles-dev.trimblemaps.com/css/ether-layout.min.js'
  },
  prodLinks: {
    etherIcons: 'https://styles.trimblemaps.com/assets/' + etherIconsVersion + '/fonts/ether-icons.css',
    etherCSS: 'https://styles.trimblemaps.com/css/ether.min-' + etherVersion + '.css',
    etherLayoutCSS: 'https://styles.trimblemaps.com/css/ether-layout.min-' + etherVersion + '.css',
    etherLayoutJS: 'https://styles.trimblemaps.com/css/ether-layout.min-' + etherVersion + '.js'
  }
};
