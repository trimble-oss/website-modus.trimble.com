$(document).ready(function () {
  $('[data-css-inspector]').each(function () {
    var styles = window.getComputedStyle(this);
    var bgColor = styles.getPropertyValue('background-color');
    var borderColor = styles.getPropertyValue('border-color');
    var borderBottomColor = styles.getPropertyValue('border-bottom-color');
    var color = styles.getPropertyValue('color');
    var content = "<table class='small' style='margin: 0; padding: 0;font-size:12px'>";
    if (
      styles.getPropertyValue('accent-color') &&
      styles.getPropertyValue('accent-color') !== '' &&
      styles.getPropertyValue('accent-color') !== null &&
      /accent-color/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-accent-color"><td>accent-color:</td>' + '<td>' + styles.getPropertyValue('accent-color') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('animation') &&
      styles.getPropertyValue('animation') !== '' &&
      styles.getPropertyValue('animation') !== null &&
      /(?<!-)\banimation\b(?!-)/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-animation"><td>animation:</td>' + '<td>' + styles.getPropertyValue('animation') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('animation-name') &&
      styles.getPropertyValue('animation-name') !== 'none' &&
      styles.getPropertyValue('animation-name') !== '' &&
      styles.getPropertyValue('animation-name') !== null &&
      !/animation-name/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content +=
        '<tr class="css-animation-name"><td>animation-name:</td>' + '<td>' + styles.getPropertyValue('animation-name') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('animation-duration') &&
      styles.getPropertyValue('animation-duration') !== '0s' &&
      styles.getPropertyValue('animation-duration') !== '' &&
      styles.getPropertyValue('animation-duration') !== null &&
      !/animation-duration/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content +=
        '<tr class="css-animation-duration"><td>animation-duration:</td>' +
        '<td>' +
        styles.getPropertyValue('animation-duration') +
        '</td></tr>';
    }
    if (
      styles.getPropertyValue('appearance') &&
      styles.getPropertyValue('appearance') !== 'none' &&
      styles.getPropertyValue('appearance') !== '' &&
      styles.getPropertyValue('appearance') !== null &&
      /appearance/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-appearance"><td>appearance:</td>' + '<td>' + styles.getPropertyValue('appearance') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('aspect-ratio') &&
      styles.getPropertyValue('aspect-ratio') !== '' &&
      styles.getPropertyValue('aspect-ratio') !== null &&
      /aspect-ratio/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-aspect-ratio"><td>aspect-ratio:</td>' + '<td>' + styles.getPropertyValue('aspect-ratio') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('background-color') &&
      styles.getPropertyValue('background-color') !== 'none' &&
      styles.getPropertyValue('background-color') !== '' &&
      styles.getPropertyValue('background-color') !== null &&
      !/bg-color/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content +=
        '<tr class="css-background-color"><td>background-color:</td>' +
        '<td>' +
        '<div class="css-swatch" style="background-color:' +
        rgbToHex(bgColor) +
        '"></div><span>' +
        rgbToHex(bgColor) +
        '</td></tr>';
    }
    if (
      styles.getPropertyValue('background-image') &&
      styles.getPropertyValue('background-image') !== 'none' &&
      styles.getPropertyValue('background-image') !== '' &&
      styles.getPropertyValue('background-image') !== null &&
      /bg-image/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content +=
        '<tr class="css-background-image"><td>background-image:</td>' + '<td>' + styles.getPropertyValue('background-image') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('background-position') &&
      styles.getPropertyValue('background-position') !== 'none' &&
      styles.getPropertyValue('background-position') !== '' &&
      styles.getPropertyValue('background-position') !== null &&
      /bg-position/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content +=
        '<tr class="css-background-position"><td>background-position:</td>' +
        '<td>' +
        styles.getPropertyValue('background-position') +
        '</td></tr>';
    }
    if (
      styles.getPropertyValue('background-repeat') &&
      styles.getPropertyValue('background-repeat') !== 'none' &&
      styles.getPropertyValue('background-repeat') !== '' &&
      styles.getPropertyValue('background-repeat') !== null &&
      /bg-repeat/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content +=
        '<tr class="css-background-repeat"><td>background-repeat:</td>' +
        '<td>' +
        styles.getPropertyValue('background-image') +
        '</td></tr>';
    }
    if (
      styles.getPropertyValue('background-size') &&
      styles.getPropertyValue('background-size') !== 'none' &&
      styles.getPropertyValue('background-size') !== '' &&
      styles.getPropertyValue('background-size') !== null &&
      /bg-size/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content +=
        '<tr class="css-background-size"><td>background-size:</td>' + '<td>' + styles.getPropertyValue('background-size') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('border') &&
      styles.getPropertyValue('border') !== 'none' &&
      styles.getPropertyValue('border') !== '' &&
      styles.getPropertyValue('border') !== null &&
      /(?<!-)\bborder\b(?!-)/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-border"><td>border:</td>' + '<td>' + styles.getPropertyValue('border') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('border-bottom-color') &&
      styles.getPropertyValue('border-bottom-color') !== 'none' &&
      styles.getPropertyValue('border-bottom-color') !== '' &&
      styles.getPropertyValue('border-bottom-color') !== null &&
      /b-bottom-color/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content +=
        '<tr class="css-bottom-border-color"><td>border-bottom-color:</td>' +
        '<td>' +
        '<div class="css-swatch" style="background-color:' +
        rgbToHex(borderBottomColor) +
        '"></div><span>' +
        rgbToHex(borderBottomColor) +
        '</td></tr>';
    }
    if (
      styles.getPropertyValue('border-bottom-width') &&
      styles.getPropertyValue('border-bottom-width') !== 'none' &&
      styles.getPropertyValue('border-bottom-width') !== '' &&
      styles.getPropertyValue('border-bottom-width') !== null &&
      /b-bottom-width/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content +=
        '<tr class="css-border-bottom-width"><td>border-bottom-width:</td>' +
        '<td>' +
        styles.getPropertyValue('border-bottom-width') +
        '</td></tr>';
    }
    if (
      styles.getPropertyValue('border-color') &&
      styles.getPropertyValue('border-color') !== 'none' &&
      styles.getPropertyValue('border-color') !== '' &&
      styles.getPropertyValue('border-color') !== null &&
      /b-color/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content +=
        '<tr class="css-border-color"><td>border-color:</td>' +
        '<td>' +
        '<div class="css-swatch" style="background-color:' +
        rgbToHex(borderColor) +
        '"></div><span>' +
        rgbToHex(borderColor) +
        '</td></tr>';
    }
    if (
      styles.getPropertyValue('border-left-width') &&
      styles.getPropertyValue('border-left-width') !== 'none' &&
      styles.getPropertyValue('border-left-width') !== '' &&
      styles.getPropertyValue('border-left-width') !== null &&
      /b-left-width/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content +=
        '<tr class="css-border-left-width"><td>border-left-width:</td>' +
        '<td>' +
        styles.getPropertyValue('border-left-width') +
        '</td></tr>';
    }
    if (
      styles.getPropertyValue('border-radius') &&
      styles.getPropertyValue('border-radius') !== 'none' &&
      styles.getPropertyValue('border-radius') !== '' &&
      styles.getPropertyValue('border-radius') !== null &&
      !/b-radius/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-border-radius"><td>border-radius:</td>' + '<td>' + styles.getPropertyValue('border-radius') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('border-style') &&
      styles.getPropertyValue('border-style') !== '' &&
      styles.getPropertyValue('border-style') !== null &&
      /b-style/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-border-style"><td>border-style:</td>' + '<td>' + styles.getPropertyValue('border-style') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('border-width') &&
      styles.getPropertyValue('border-width') !== 'none' &&
      styles.getPropertyValue('border-width') !== '0px' &&
      styles.getPropertyValue('border-width') !== '' &&
      styles.getPropertyValue('border-width') !== null &&
      !/b-width/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-border-width"><td>border-width:</td>' + '<td>' + styles.getPropertyValue('border-width') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('box-shadow') &&
      styles.getPropertyValue('box-shadow') !== 'none' &&
      styles.getPropertyValue('box-shadow') !== '' &&
      styles.getPropertyValue('box-shadow') !== null &&
      /box-shadow/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-box-sizing"><td>box-shadow:</td>' + '<td>' + styles.getPropertyValue('box-shadow') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('box-sizing') &&
      styles.getPropertyValue('box-sizing') !== 'none' &&
      styles.getPropertyValue('box-sizing') !== '' &&
      styles.getPropertyValue('box-sizing') !== null &&
      /box-sizing/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-box-sizing"><td>box-sizing:</td>' + '<td>' + styles.getPropertyValue('box-sizing') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('color') &&
      styles.getPropertyValue('color') !== 'none' &&
      styles.getPropertyValue('color') !== '' &&
      styles.getPropertyValue('color') !== null &&
      !/(?<!-)\bcolor\b(?!-)/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content +=
        '<tr class="css-color"><td>color:</td>' +
        '<td>' +
        '<div class="css-swatch" style="background-color:' +
        rgbToHex(color) +
        '"></div><span>' +
        rgbToHex(color) +
        '</td></tr>';
    }
    if (
      styles.getPropertyValue('color-scheme') &&
      styles.getPropertyValue('color-scheme') !== 'none' &&
      styles.getPropertyValue('color-scheme') !== '' &&
      styles.getPropertyValue('color-scheme') !== null &&
      /color-scheme/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-color-scheme"><td>color-scheme:</td>' + '<td>' + styles.getPropertyValue('color-scheme') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('cursor') &&
      styles.getPropertyValue('cursor') !== 'none' &&
      styles.getPropertyValue('cursor') !== '' &&
      styles.getPropertyValue('cursor') !== null &&
      /cursor/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-cursor"><td>cursor:</td>' + '<td>' + styles.getPropertyValue('cursor') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('display') &&
      styles.getPropertyValue('display') !== 'none' &&
      styles.getPropertyValue('display') !== '' &&
      styles.getPropertyValue('display') !== null &&
      /display/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-display"><td>display:</td>' + '<td>' + styles.getPropertyValue('display') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('float') &&
      styles.getPropertyValue('float') !== 'none' &&
      styles.getPropertyValue('float') !== '' &&
      styles.getPropertyValue('float') !== null &&
      /float/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-float"><td>float:</td>' + '<td>' + styles.getPropertyValue('float') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('font-family') &&
      styles.getPropertyValue('font-family') !== 'none' &&
      styles.getPropertyValue('font-family') !== '' &&
      styles.getPropertyValue('font-family') !== null &&
      /font-family/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-font-family"><td>font-family:</td>' + '<td>' + styles.getPropertyValue('font-family') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('font-size') &&
      styles.getPropertyValue('font-size') !== 'none' &&
      styles.getPropertyValue('font-size') !== '' &&
      styles.getPropertyValue('font-size') !== null &&
      !/font-size/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-font-size"><td>font-size:</td>' + '<td>' + styles.getPropertyValue('font-size') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('font-style') &&
      styles.getPropertyValue('font-style') !== 'none' &&
      styles.getPropertyValue('font-style') !== 'normal' &&
      styles.getPropertyValue('font-style') !== '' &&
      styles.getPropertyValue('font-style') !== null &&
      !/font-style/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-font-style"><td>font-style:</td>' + '<td>' + styles.getPropertyValue('font-style') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('font-weight') &&
      styles.getPropertyValue('font-weight') !== 'none' &&
      styles.getPropertyValue('font-weight') !== '400' &&
      styles.getPropertyValue('font-weight') !== '' &&
      styles.getPropertyValue('font-weight') !== null &&
      !/font-weight/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-font-weight"><td>font-weight:</td>' + '<td>' + styles.getPropertyValue('font-weight') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('height') &&
      styles.getPropertyValue('height') !== 'none' &&
      styles.getPropertyValue('height') !== '' &&
      styles.getPropertyValue('height') !== null &&
      !/(?<!-)\bheight\b(?!-)/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-height"><td>height:</td>' + '<td>' + styles.getPropertyValue('height') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('justify-content') &&
      styles.getPropertyValue('justify-content') !== 'none' &&
      styles.getPropertyValue('justify-content') !== '' &&
      styles.getPropertyValue('justify-content') !== null &&
      /justify-content/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content +=
        '<tr class="css-justify-content"><td>justify-content:</td>' + '<td>' + styles.getPropertyValue('justify-content') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('letter-spacing') &&
      styles.getPropertyValue('letter-spacing') !== 'none' &&
      styles.getPropertyValue('letter-spacing') !== '' &&
      styles.getPropertyValue('letter-spacing') !== null &&
      /letter-spacing/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content +=
        '<tr class="css-letter-spacing"><td>letter-spacing:</td>' + '<td>' + styles.getPropertyValue('letter-spacing') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('line-break') &&
      styles.getPropertyValue('line-break') !== 'none' &&
      styles.getPropertyValue('line-break') !== '' &&
      styles.getPropertyValue('line-break') !== null &&
      /line-break/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-line-break"><td>line-break:</td>' + '<td>' + styles.getPropertyValue('line-break') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('line-height') &&
      styles.getPropertyValue('line-height') !== 'none' &&
      styles.getPropertyValue('line-height') !== '' &&
      styles.getPropertyValue('line-height') !== null &&
      /line-height/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-line-height"><td>line-height:</td>' + '<td>' + styles.getPropertyValue('line-height') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('list-style') &&
      styles.getPropertyValue('list-style') !== 'none' &&
      styles.getPropertyValue('list-style') !== '' &&
      styles.getPropertyValue('list-style') !== null &&
      /list-style/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-list-style"><td>list-style:</td>' + '<td>' + styles.getPropertyValue('list-style') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('margin') &&
      styles.getPropertyValue('margin') !== 'none' &&
      styles.getPropertyValue('margin') !== '0px' &&
      styles.getPropertyValue('margin') !== '' &&
      styles.getPropertyValue('margin') !== null &&
      !/(?<!-)\bmargin\b(?!-)/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-margin"><td>margin:</td>' + '<td>' + styles.getPropertyValue('margin') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('margin-bottom') &&
      styles.getPropertyValue('margin-bottom') !== 'none' &&
      styles.getPropertyValue('margin-bottom') !== '0px' &&
      styles.getPropertyValue('margin-bottom') !== '' &&
      styles.getPropertyValue('margin-bottom') !== null &&
      /margin-bottom/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-margin-bottom"><td>margin-bottom:</td>' + '<td>' + styles.getPropertyValue('margin-bottom') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('margin-left') &&
      styles.getPropertyValue('margin-left') !== 'none' &&
      styles.getPropertyValue('margin-left') !== '0px' &&
      styles.getPropertyValue('margin-left') !== '' &&
      styles.getPropertyValue('margin-left') !== null &&
      /margin-top/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-margin-left"><td>margin-left:</td>' + '<td>' + styles.getPropertyValue('margin-left') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('margin-right') &&
      styles.getPropertyValue('margin-right') !== 'none' &&
      styles.getPropertyValue('margin-right') !== '0px' &&
      styles.getPropertyValue('margin-right') !== '' &&
      styles.getPropertyValue('margin-right') !== null &&
      /margin-right/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-margin-right"><td>margin-right:</td>' + '<td>' + styles.getPropertyValue('margin-right') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('margin-top') &&
      styles.getPropertyValue('margin-top') !== 'none' &&
      styles.getPropertyValue('margin-top') !== '0px' &&
      styles.getPropertyValue('margin-top') !== '' &&
      styles.getPropertyValue('margin-top') !== null &&
      /margin-top/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-margin-top"><td>margin-top:</td>' + '<td>' + styles.getPropertyValue('margin-top') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('max-height') &&
      styles.getPropertyValue('max-height') !== 'none' &&
      styles.getPropertyValue('max-height') !== '' &&
      styles.getPropertyValue('max-height') !== null &&
      !/max-height/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-max-height"><td>max-height:</td>' + '<td>' + styles.getPropertyValue('max-height') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('max-width') &&
      styles.getPropertyValue('max-width') !== 'none' &&
      styles.getPropertyValue('max-width') !== '' &&
      styles.getPropertyValue('max-width') !== null &&
      !/max-width/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-max-width"><td>max-width:</td>' + '<td>' + styles.getPropertyValue('max-width') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('min-height') &&
      styles.getPropertyValue('min-height') !== 'none' &&
      styles.getPropertyValue('min-height') !== '0px' &&
      styles.getPropertyValue('min-height') !== '' &&
      styles.getPropertyValue('min-height') !== null &&
      /min-height/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-min-width"><td>min-height:</td>' + '<td>' + styles.getPropertyValue('min-height') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('min-width') &&
      styles.getPropertyValue('min-width') !== 'none' &&
      styles.getPropertyValue('min-width') !== '0px' &&
      styles.getPropertyValue('min-width') !== '' &&
      styles.getPropertyValue('min-width') !== null &&
      /min-width/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-min-width"><td>min-width:</td>' + '<td>' + styles.getPropertyValue('min-width') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('opacity') &&
      styles.getPropertyValue('opacity') !== 'none' &&
      styles.getPropertyValue('opacity') !== '1' &&
      styles.getPropertyValue('opacity') !== '' &&
      styles.getPropertyValue('opacity') !== null &&
      !/opacity/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-opacity"><td>opacity:</td>' + '<td>' + styles.getPropertyValue('opacity') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('overflow') &&
      styles.getPropertyValue('overflow') !== '' &&
      styles.getPropertyValue('overflow') !== null &&
      /(?<!-)\boverflow\b(?!-)/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-overflow"><td>overflow:</td>' + '<td>' + styles.getPropertyValue('overflow') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('overflow-x') &&
      styles.getPropertyValue('overflow-x') !== '' &&
      styles.getPropertyValue('overflow-x') !== null &&
      /(?<!-)\boverflow-x\b(?!-)/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-overflow-x"><td>overflow-x:</td>' + '<td>' + styles.getPropertyValue('overflow-x') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('overflow-y') &&
      styles.getPropertyValue('overflow-y') !== '' &&
      styles.getPropertyValue('overflow-y') !== null &&
      /(?<!-)\boverflow-y\b(?!-)/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-overflow-x"><td>overflow-y:</td>' + '<td>' + styles.getPropertyValue('overflow-y') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('padding') &&
      styles.getPropertyValue('padding') !== 'none' &&
      styles.getPropertyValue('padding') !== '' &&
      styles.getPropertyValue('padding') !== null &&
      !styles.getPropertyValue('padding').includes('.') &&
      !/(?<!-)\bpadding\b(?!-)/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-padding"><td>padding:</td>' + '<td>' + styles.getPropertyValue('padding') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('position') &&
      styles.getPropertyValue('position') !== '' &&
      styles.getPropertyValue('position') !== null &&
      /(?<!-)\bposition\b(?!-)/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-position"><td>position:</td>' + '<td>' + styles.getPropertyValue('position') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('text-align') &&
      styles.getPropertyValue('text-align') !== 'none' &&
      styles.getPropertyValue('text-align') !== 'start' &&
      styles.getPropertyValue('text-align') !== '' &&
      styles.getPropertyValue('text-align') !== null &&
      !/text-align/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-text-align"><td>text-align:</td>' + '<td>' + styles.getPropertyValue('text-align') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('text-decoration') &&
      styles.getPropertyValue('text-decoration') !== 'none' &&
      styles.getPropertyValue('text-decoration') !== 'start' &&
      styles.getPropertyValue('text-decoration') !== '' &&
      styles.getPropertyValue('text-decoration') !== null &&
      /text-decoration/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content +=
        '<tr class="css-text-decoration"><td>text-decoration:</td>' + '<td>' + styles.getPropertyValue('text-decoration') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('text-indent') &&
      styles.getPropertyValue('text-indent') !== 'none' &&
      styles.getPropertyValue('text-indent') !== '' &&
      styles.getPropertyValue('text-indent') !== null &&
      /text-indent/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-text-indent"><td>text-indent:</td>' + '<td>' + styles.getPropertyValue('text-indent') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('text-shadow') &&
      styles.getPropertyValue('text-shadow') !== 'none' &&
      styles.getPropertyValue('text-shadow') !== '' &&
      styles.getPropertyValue('text-shadow') !== null &&
      /text-shadow/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-text-shadow"><td>text-shadow:</td>' + '<td>' + styles.getPropertyValue('text-shadow') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('text-transform') &&
      styles.getPropertyValue('text-transform') !== 'none' &&
      styles.getPropertyValue('text-transform') !== '' &&
      styles.getPropertyValue('text-transform') !== null &&
      !/text-transform/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content +=
        '<tr class="css-text-transform"><td>text-transform:</td>' + '<td>' + styles.getPropertyValue('text-transform') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('text-wrap') &&
      styles.getPropertyValue('text-wrap') !== 'none' &&
      styles.getPropertyValue('text-wrap') !== '' &&
      styles.getPropertyValue('text-wrap') !== null &&
      /text-wrap/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-text-wrap"><td>text-wrap:</td>' + '<td>' + styles.getPropertyValue('text-wrap') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('transform') &&
      styles.getPropertyValue('transform') !== 'none' &&
      styles.getPropertyValue('transform') !== '' &&
      styles.getPropertyValue('transform') !== null &&
      /transform/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-transform"><td>transform:</td>' + '<td>' + styles.getPropertyValue('transform') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('transition') &&
      styles.getPropertyValue('transition') !== 'none' &&
      styles.getPropertyValue('transition') !== '' &&
      styles.getPropertyValue('transition') !== null &&
      /(?<!-)\btransition\b(?!-)/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-transition"><td>transition:</td>' + '<td>' + styles.getPropertyValue('transition') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('user-select') &&
      styles.getPropertyValue('user-select') !== '' &&
      styles.getPropertyValue('user-select') !== null &&
      /user-select/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-user-select"><td>user-select:</td>' + '<td>' + styles.getPropertyValue('user-select') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('vertical-align') &&
      styles.getPropertyValue('vertical-align') !== 'none' &&
      styles.getPropertyValue('vertical-align') !== '' &&
      styles.getPropertyValue('vertical-align') !== null &&
      /vertical-align/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content +=
        '<tr class="css-vertical-align"><td>vertical-align:</td>' + '<td>' + styles.getPropertyValue('vertical-align') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('white-space') &&
      styles.getPropertyValue('white-space') !== 'none' &&
      styles.getPropertyValue('white-space') !== 'normal' &&
      styles.getPropertyValue('white-space') !== '' &&
      styles.getPropertyValue('white-space') !== null &&
      !styles.getPropertyValue('white-space').includes('.') &&
      /white-space/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-white-space"><td>white-space:</td>' + '<td>' + styles.getPropertyValue('white-space') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('width') &&
      styles.getPropertyValue('width') !== 'none' &&
      styles.getPropertyValue('width') !== '' &&
      styles.getPropertyValue('width') !== null &&
      !styles.getPropertyValue('width').includes('.') &&
      !/(?<!-)\bwidth\b(?!-)/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-width"><td>width:</td>' + '<td>' + styles.getPropertyValue('width') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('word-break') &&
      styles.getPropertyValue('word-break') !== 'none' &&
      styles.getPropertyValue('word-break') !== '' &&
      styles.getPropertyValue('word-break') !== null &&
      /word-break/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-word-break"><td>word-break:</td>' + '<td>' + styles.getPropertyValue('word-break') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('word-spacing') &&
      styles.getPropertyValue('word-spacing') !== 'none' &&
      styles.getPropertyValue('word-spacing') !== '' &&
      styles.getPropertyValue('word-spacing') !== null &&
      /word-spacing/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-word-spacing "><td>word-spacing :</td>' + '<td>' + styles.getPropertyValue('word-spacing ') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('word-wrap') &&
      styles.getPropertyValue('word-wrap') !== 'none' &&
      styles.getPropertyValue('word-wrap') !== '' &&
      styles.getPropertyValue('word-wrap') !== null &&
      /word-wrap/.test(this.getAttribute('data-css-inspector-show'))
    ) {
      content += '<tr class="css-word-wrap "><td>word-wrap :</td>' + '<td>' + styles.getPropertyValue('word-wrap ') + '</td></tr>';
    }
    if (
      styles.getPropertyValue('z-index') &&
      styles.getPropertyValue('z-index') !== 'none' &&
      styles.getPropertyValue('z-index') !== '' &&
      styles.getPropertyValue('z-index') !== null &&
      !styles.getPropertyValue('z-index').includes('.') &&
      /z-index/.test(this.getAttribute('data-css-inspector-hide'))
    ) {
      content += '<tr class="css-z-index"><td>z-index:</td>' + '<td>' + styles.getPropertyValue('z-index') + '</td></tr>';
    }
    content +=
      '</table>' +
      '<style>' +
      ".popover-css-inspector {z-index: 1010 !important; display: block; max-width: 285px; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', Arial, sans-serif; font-style: normal; text-align: left; text-decoration: none; text-shadow: none; text-transform: none; font-size: 0.875rem; border: 1px solid rgba(133, 133, 133, .3); border-radius: .5rem} " +
      '.popover-css-inspector .popover-body {padding: .75rem} ' +
      '.popover-css-inspector .popover-body td {height: 1.1rem; padding: 0; font-size: 12px; } ' +
      '.popover-css-inspector .popover-body td:nth-child(1) {font-weight: bold; padding-right: .5rem; text-wrap: nowrap !important}' +
      ".popover-css-inspector .popover-body td:nth-child(2) {font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace}" +
      '.popover-css-inspector .popover-body td:nth-child(2):not(:has(div)) {opacity: .7}' +
      ".popover-css-inspector .popover-body td:nth-child(2) span {opacity: .7; font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace}" +
      '.popover-css-inspector .css-swatch {border: 1px solid rgba(133, 133, 133, .3); border-radius: 50%; display: inline-block; height: 12px; width: 12px; margin-bottom: -2px; margin-right: .25rem}' +
      '</style>';

    $(this).attr('data-content', content);
  });
  $('[data-toggle="popover"]')
    .popover({
      html: true,
      sanitize: false,
    })
    .popover('show');
});

function rgbToHex(rgb) {
  var match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) {
    return rgb;
  }
  return '#' + hex(match[1]) + hex(match[2]) + hex(match[3]);
}

function hex(x) {
  return ('0' + parseInt(x).toString(16)).slice(-2);
}
