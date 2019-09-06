var Pretty = require('pretty');
var Prism = require('prismjs');
require('prismjs/components/prism-sass');
require('prismjs/components/prism-bash');

const copyToClipboard = str => {
  const el = document.createElement('textarea'); // Create a <textarea> element
  el.value = str; // Set its value to the string that you want copied
  el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px'; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false; // Mark as false to know no selection existed before
  el.select(); // Select the <textarea> content
  document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el); // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection().addRange(selected); // Restore the original selection
  }
};

const swapStyleSheet = id => {
  document.getElementById('pagestyles').setAttribute('href', id);
};

const codePen = elem => {
  let el = $(elem[0]),
    HTML = '',
    CSS = '',
    JS = '';

  HTML = el.text();

  var data = {
    title: 'Modus Pen',
    description: '',
    html: HTML,
    html_pre_processor: 'none',
    css: 'body {padding: 40px}',
    css_pre_processor: 'none',
    css_starter: 'neither',
    css_prefix_free: false,
    js: JS,
    js_pre_processor: 'none',
    js_modernizr: false,
    js_library: '',
    html_classes: '',
    css_external:
      'https://styles.trimblemaps.com/css/ether.min-0.3.2.css;https://styles.trimblemaps.com/css/ether-layout.min-0.3.2.css;https://styles.trimblemaps.com/assets/1.1.0/fonts/ether-icons.css;https://fonts.googleapis.com/icon?family=Material+Icons',
    js_external: 'https://styles.trimblemaps.com/css/ether-layout.min-0.3.2.js',
    template: true
  };

  var JSONstring = JSON.stringify(data)
    // Quotes will screw up the JSON
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

  var form =
    `<form action="https://codepen.io/pen/define" method="POST" target="_blank">
    <input type="hidden" name="data" value="${JSONstring}">
    <button type="submit" value="Open in CodePen" class="btn btn-outline-primary btn-sm codepen-mover-button ml-2">
    <i class="icon-left modus-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" style="margin-top: -3px;">
        <path d="M13 25.2c-.2 0-.5-.1-.6-.2l-11-7.3-.3-.3v-.1c-.1-.2-.2-.4-.2-.6V9.3c0-.2.1-.4.2-.6l.3-.3 11-7.3c.4-.3.9-.3 1.3 0l11 7.3.3.3c.1.2.2.4.2.6v7.4c0 .2-.1.4-.2.6v.1l-.3.3-11 7.3c-.2.1-.5.2-.7.2zm1.2-8v4.6l7.8-5.2-3.5-2.3-4.3 2.9zm-10.1-.5l7.8 5.2v-4.6l-4.3-2.9-3.5 2.3zM9.6 13l3.4 2.3 3.4-2.3-3.4-2.3L9.6 13zm10.9 0l2.3 1.6v-3.1L20.5 13zM3.1 11.4v3.1L5.5 13l-2.4-1.6zm11.1-2.7l4.3 2.9L22 9.3l-7.8-5.2v4.6zm-10.1.6l3.5 2.3 4.3-2.9V4.1L4.1 9.3z"/>
      </svg>
    </i> Open in CodePen</button>
    </form>`;

  el.parent().siblings('.guide-code-options').append(form);
};

$(document).ready(function () {
  if (window.localStorage.getItem('color')) {
    const thisColor = window.localStorage.getItem('color');
    $('.bg-color-select').val(thisColor);
    $('.guide-sample').css('background-color', thisColor);
  } else {
    window.localStorage.setItem('color', 'White');
    $('.bg-color-select').val('#ffffff');
    $('.guide-sample').css('background-color', '#ffffff');
  }

  $('.guide-code').each(function (i, block) {
    var prev_html = Pretty(
      $(block)
        .siblings('.guide-sample')
        .html()
    );
    var html_code = Prism.highlight(prev_html, Prism.languages.markup, 'markup');
    var elem = $('<pre>')
      .addClass('codepen-able')
      .html(html_code)
      .appendTo('<code>');
    $(block).append(elem);
    codePen(elem);
  });

  $('.guide-copy-code').on('click', e => {
    var str = $(e.currentTarget)
      .parent().siblings('.guide-sample')
      .html();
    copyToClipboard(str);
    // Get the snackbar DIV
    var snack = $('#snackbar');

    // Add the "show" class to DIV
    snack.text('Code copied to clipboard.').addClass('show');

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      snack.removeClass('show');
    }, 3000);
  });

  $('.bg-color-select').on('change', e => {
    const thisColor = $(e.currentTarget).val();
    $('.bg-color-select').val(thisColor);
    $('.guide-sample').css('background-color', thisColor);
    window.localStorage.setItem('color', thisColor);
  });

  const close_popovers = () => {
    $('.hover-dimensions')
      .find('*')
      .removeClass('pop-highlight')
      .popover('dispose');
  };

  $('.hover-dimensions')
    .find('*')
    .not('p')
    .not('div')
    .on('mouseenter', e => {
      close_popovers();
      var elem = $(e.currentTarget);
      elem.addClass('pop-highlight');
      var pop = elem.popover({
        placement: 'top',
        content: `
        <p class="small text-primary font-weight-bold m-0">${elem.prop('tagName')}</p>
        <p class="small mb-0"><strong>Height:</strong> ${elem.outerHeight()}px</p>
        <p class="small mb-0"><strong>Font size:</strong> ${elem.css('font-size')}</p>
        <p class="small mb-0"><strong>Padding:</strong> ${elem.css('padding')}</p>
        <p class="small mb-0"><strong>Border:</strong> ${elem.css('border-width')}</p>
        `,
        html: true
      });
      elem.popover('show');
    });

  $('.hover-dimensions')
    .find('*')
    .on('mouseleave', e => {
      var elem = $(e.currentTarget);
      elem.removeClass('pop-highlight');
      elem.popover('dispose');
    });

  $('.anatomy-display-table')
    .find('*')
    // .not('p')
    .not('tr')
    .not('td')
    .not('th')
    .not('table')
    .not('thead')
    .not('tbody')
    .not('.anatomy-exclude')
    .on('mouseenter', e => {
      drawHover(e, false);
    });

  $('.anatomy-display')
    .find('*')
    .not('.anatomy-exclude')
    .on('mouseenter', e => {
      drawHover(e, false);
    });

  $('.anatomy-display-element')
    .not('.anatomy-exclude')
    .on('mouseenter', e => {
      drawHover(e, false);
    });

  const hexDigits = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');

  const rgbToHex = rgb => {
    if (!rgb.startsWith('rgba')) {
      var newrgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      return '#' + hex(newrgb[1]) + hex(newrgb[2]) + hex(newrgb[3]);
    }
  };

  const hex = x => {
    return isNaN(x) ? '00' : hexDigits[(x - (x % 16)) / 16] + hexDigits[x % 16];
  };

  const drawHover = (e, perm) => {
    // classes to use:
    //  anatomy-display: used on an element with multiple children, like a guide-sample
    //  anatomy-display-element: used on a single element, like a button
    //  anatomy-display-static: used on a single element, but does not need to be hovered over to activate, always on
    //  anatomy-display-table: used on a table, ignores all the table elements and gets only elements like buttons in it
    //  anatomy-exclude: ignores an element, use if you don't want the display to appear on an element that is a child of any of the classes above
    //  adding data-anatomy-popover="false", will have no popover
    //  adding data-anatomy-color="false", will have no color attributes
    let elem = null;
    if (e.currentTarget) {
      elem = $(e.currentTarget);
      if (
        $(e.currentTarget).attr('class') &&
        !$(e.currentTarget)
          .attr('class')
          .includes('anatomy-display-element')
      ) {
        let parent = elem.parent();
        while (
          $(parent).attr('class') === undefined ||
          !$(parent)
            .attr('class')
            .includes('anatomy-display')
        ) {
          $(parent).css({ position: 'relative' });
          parent = $(parent).parent();
        }
      }
    } else {
      elem = $(e);
      elem.parent().css({ position: 'relative' });
    }

    const h = elem.outerHeight();
    const w = elem.outerWidth();
    const pos = elem.position();
    const b = {
      top: parseInt(elem.css('border-top-width'), 10),
      bottom: parseInt(elem.css('border-bottom-width'), 10),
      left: parseInt(elem.css('border-left-width'), 10),
      right: parseInt(elem.css('border-right-width'), 10)
    };
    const m = {
      top: parseInt(elem.css('margin-top'), 10),
      bottom: parseInt(elem.css('margin-bottom'), 10),
      left: parseInt(elem.css('margin-left'), 10),
      right: parseInt(elem.css('margin-right'), 10)
    };
    const p = {
      top: parseInt(elem.css('padding-top'), 10),
      bottom: parseInt(elem.css('padding-bottom'), 10),
      left: parseInt(elem.css('padding-left'), 10),
      right: parseInt(elem.css('padding-right'), 10)
    };
    const br = parseInt(elem.css('border-radius'), 10);

    let classes = 'hover-div';
    if (!perm) {
      classes += ' not-perm';
    }

    let extraCSS = '';
    if (p.top > 0 || p.bottom > 0 || p.left > 0 || p.right > 0) {
      extraCSS = 'border: rgba(51, 168, 47, 0.2) solid 2px; background: rgba(51, 168, 47, 0.2)';
    }

    const html = `
      <div class="${classes}" style="width: ${w}px; height: ${h}px; top: ${m.top + pos.top}px; left: ${m.left + pos.left}px; ${extraCSS}">
        <div class="hover-div-inner" style="width: ${w - (p.left + p.right)}px; height: ${h - (p.top + p.bottom)}px; top: ${p.top -
      2}px; left: ${p.left - 2}px"></div>
        <div style="position: relative; ${p.top <= 0 ? 'display: none' : ''}">
          <div class="hover-line-padding-vert" style="height: ${p.top}px; top: -2px; left: ${w / 2 - 2}px"></div>
          <span class="hover-padding-text" style="top: -18px; left: ${w / 2 - 2}px">${p.top}px</span>
        </div>
        <div style="position: relative; ${p.bottom <= 0 ? 'display: none' : ''}">
          <div class="hover-line-padding-vert" style="height: ${p.bottom}px; top: ${h - p.bottom - 2}px; left: ${w / 2 - 2}px"></div>
          <span class="hover-padding-text" style="top: ${h - 2}px; left: ${w / 2 - 2}px">${p.bottom}px</span>
        </div>
        <div style="position: relative; ${p.left <= 0 ? 'display: none' : ''}">
          <div class="hover-line-padding-horz" style="width: ${p.left}px; top: ${h / 2 - 2}px; left: -2px"></div>
          <span class="hover-padding-text" style="top: ${h / 2 - 10}px; left: -30px">${p.left}px</span>
        </div>
        <div style="position: relative; ${p.right <= 0 ? 'display: none' : ''}">
          <div class="hover-line-padding-horz" style="width: ${p.right}px; top: ${h / 2 - 2}px; left: ${w - p.right - 2}px"></div>
          <span class="hover-padding-text" style="top: ${h / 2 - 10}px; left: ${w}px">${p.right}px</span>
        </div>
        <div style="position: relative; ${m.top <= 0 ? 'display: none' : ''}">
          <div class="hover-div-margin" style="width: ${w}px; height: ${m.top}px; top: ${-m.top - 2}px; left: -2px"></div>
          <div class="hover-line-margin-vert" style="height: ${m.top}px; top: ${-m.top - 2}px; left: ${2 * (w / 3) - 2}px"></div>
          <span class="hover-margin-text" style="top: ${-m.top - 18}px; left: ${2 * (w / 3) - 2}px">${m.top}px</span>
        </div>
        <div style="position: relative; ${m.bottom <= 0 ? 'display: none' : ''}">
          <div class="hover-div-margin" style="width: ${w}px; height: ${m.bottom}px; top: ${h - 2}px; left: -2px"></div>
          <div class="hover-line-margin-vert" style="height: ${m.bottom}px; top: ${h - 2}px; left: ${2 * (w / 3) - 2}px"></div>
          <span class="hover-margin-text" style="top: ${h + m.bottom - 2}px; left: ${2 * (w / 3) - 2}px">${m.bottom}px</span>
        </div>
        <div style="position: relative; ${m.left <= 0 ? 'display: none' : ''}">
          <div class="hover-div-margin" style="width: ${m.left}px; height: ${h}px; top: -2px; left: ${-m.left - 2}px"></div>
          <div class="hover-line-margin-horz" style="width: ${m.left}px; top: ${3 * (h / 4) - 2}px; left: ${-m.left}px"></div>
          <span class="hover-margin-text" style="top: ${3 * (h / 4) - 10}px; left: ${-m.left - 30}px">${m.left}px</span>
        </div>
        <div style="position: relative; ${m.right <= 0 ? 'display: none' : ''}">
          <div class="hover-div-margin" style="width: ${m.right}px; height: ${h}px; top: -2px; left: ${w - 2}px"></div>
          <div class="hover-line-margin-horz" style="width: ${m.right}px; top: ${3 * (h / 4) - 2}px; left: ${w}px"></div>
          <span class="hover-margin-text" style="top: ${3 * (h / 4) - 10}px; left: ${w + m.right - 2}px">${m.right}px</span>
        </div>
        <div class="hover-line-height" style="height: ${h}px; width: 10px; top: -2px; left: ${w + p.right + m.right + 7}px"></div>
        <span class="hover-height-text" style="top: ${h / 2 - 10}px; left: ${w + p.right + m.right + 19}px">${h}px</div>
      </div>
    `;

    const htmlStatic = `
      <div class="${classes}" style="width: ${w}px; height: ${h}px; top: ${m.top + pos.top}px; left: ${m.left + pos.left}px; border-radius: ${br}px; border: 1px dashed #e06cd2cc;">
        <div style="position: relative; ${p.left <= 0 ? 'display: none' : ''}">
          <div class="hover-padding-horz" style="width: ${p.left}px; left: 0; height: ${h - 2}px;"></div>
          <div class="hover-line-padding-horz" style="width: ${p.left}px; top: ${h / 2 - 2}px; left: -2px"></div>
          <span class="hover-padding-text" style="top: ${h / 2 - 10}px; right: ${w}px">${p.left}px</span>
        </div>
        <div style="position: relative; ${p.right <= 0 ? 'display: none' : ''}">
          <div class="hover-padding-horz" style="width: ${p.right}px; right: 0; height: ${h - 2}px;"></div>
          <div class="hover-line-padding-horz" style="width: ${p.right}px; top: ${h / 2 - 2}px; left: ${w - p.right - 2}px"></div>
          <span class="hover-padding-text" style="top: ${h / 2 - 10}px; left: ${w}px">${p.right}px</span>
        </div>
        <div style="position: relative; ${m.left <= 0 ? 'display: none' : ''}">
          <div class="hover-div-margin" style="width: ${m.left}px; height: ${h}px; top: -1px; left: ${-m.left - 1}px"></div>
          <div class="hover-line-margin-horz" style="width: ${m.left}px; top: ${3 * (h / 4) - 2}px; left: ${-m.left}px"></div>
          <span class="hover-margin-text" style="top: ${3 * (h / 4) - 10}px; left: ${-m.left - 30}px">${m.left}px</span>
        </div>
        <div style="position: relative; ${m.right <= 0 ? 'display: none' : ''}">
          <div class="hover-div-margin" style="width: ${m.right}px; height: ${h}px; top: -1px; left: ${w - 2}px"></div>
          <div class="hover-line-margin-horz" style="width: ${m.right}px; top: ${3 * (h / 4) - 2}px; left: ${w}px"></div>
          <span class="hover-margin-text" style="top: ${3 * (h / 4) - 10}px; left: ${w + m.right - 2}px">${m.right}px</span>
        </div>
        <div class="hover-line-height" style="height: ${h}px; width: 10px; top: -2px; left: ${w + p.right + m.right + 7}px"></div>
        <span class="hover-height-text" style="top: ${h / 2 - 10}px; left: ${w + p.right + m.right + 19}px">${h}px</div>
      </div>
    `;

    if(perm){
      elem.parent().append(htmlStatic);
    } else {
      elem.parent().append(html);
    }

    if ($('.hover-div.not-perm')[1] && !perm) {
      $('.hover-div.not-perm')[1].remove();
    }

    var place = 'top';
    if (perm) {
      place = 'left';
    }
    let popoverClasses =
      '.' +
      elem
        .prop('class')
        .replace(' ', '.')
        .replace('anatomy-display-static', '')
        .replace('anatomy-display-element', '');
    if (popoverClasses === '.') {
      popoverClasses = 'No Classes';
    }
    const showColors = (elem.data('anatomy-colors') || elem.data('anatomy-colors') === undefined);
    const offset = perm ?   8 + ',' + (m.left + 36) : 'top: ' + (m.top + 15) + ',';
    const popHeader = (perm) ? '' : `<p class="small text-primary font-weight-bold m-0">${popoverClasses}</p>`;
    const popBackground = (elem.css('background-color') !== 'rgba(0, 0, 0, 0)' && showColors ) ?
      `<p class="small mb-0" id="popover-bgc"><strong>background-color:</strong> ${rgbToHex(
        elem.css('background-color')
      )}<span class="rounded border border-light ml-1 d-inline-block" style="width: 10px; height: 10px; background: ${elem.css(
        'background-color'
      )}"></span></p>` : '';
    const popBorder = (elem.css('border-width') !== '0px' && showColors) ?
      `<p class="small mb-0" id="popover-bc"><strong>border-color:</strong> ${rgbToHex(
        elem.css('border-color')
      )}<span class="rounded border border-light ml-1 d-inline-block" style="width: 10px; height: 10px; background: ${elem.css(
        'border-color'
      )}"></span></p>` : '';
    const popFontColor = (showColors) ? `<p class="small mb-0" id="popover-c"><strong>${(perm)?'font-':''}color:</strong> ${rgbToHex(
        elem.css('color')
      )}<span class="rounded border border-light ml-1 d-inline-block" style="width: 10px; height: 10px; background: ${elem.css(
        'color'
      )}"></span></p>`  : '';
      const popBorderRadius = (elem.css('border-radius') !== '0px') ?
      `<p class="small mb-0"><strong>border-radius:</strong> ${elem.css('border-radius')}</p>` : '';
    const popFontSize = `<p class="small mb-0"><strong>font-size:</strong> ${elem.css('font-size')}</p>`;
    let pop = elem.popover({
      placement: place,
      container: elem.parent(),
      content: `${popHeader}
      ${popBackground}
      ${popBorder}
      ${popFontColor}
      ${popFontSize}
      ${popBorderRadius}
      `,
      html: true,
      offset: offset
    });

    if (elem.data('anatomy-popover') || elem.data('anatomy-popover') === undefined) {
      elem.popover('show');

      if (!perm) {
        const popovers = $('.popover');
        const popover = popovers[popovers.length - 1];
        $(popover).addClass('not-perm');
      }

      const popovers = $('.popover.not-perm');
      for (let i = 0; i < popovers.length - 1; i++) {
        const popover = $(popovers[i]);
        popover.remove();
      }
    }

    if (!perm) {
      elem.on('mouseleave', e => {
        $('.hover-div.not-perm').remove();
        elem.popover('dispose');
      });
    }
  };

  $('.anatomy-display-static')
    .find('*')
    .prevObject.map(e => {
      e = $('.anatomy-display-static').find('*').prevObject[e];
      drawHover(e, true);
    });

  const rightNavTemplate = id => {
    return `<h6 class="pl-3">Contents</h6>
    <nav class="nav flex-column" id="${id}"></nav>`;
  };

  const buildRightNav = (navItems, navId) => {
    $('.guide-right-nav')
      .children()
      .remove();
    const navPrefix = navId.substr(0, navId.indexOf('-') + 1);
    if (navItems.length > 0) {
      $('.guide-right-nav').append(rightNavTemplate(navId));
      $(
        '<li class="nav-item"><a class="nav-link font-weight-bold" href="#top">Top <i class="ml-auto material-icons">vertical_align_top</i></a></li>'
      ).appendTo($('#' + navId));
      $(navItems).each((i, e) => {
        const elem = $(e);
        const elemName = $(elem)
          .text()
          .replace(/\s+/g, '-')
          .toLowerCase();
        elem.wrapInner('<a name="' + navPrefix + elemName + '" />');
        const navItem = $('<li class="nav-item"></li>').appendTo($('#' + navId));
        const linkItem = $('<a class="nav-link" href="#' + navPrefix + elemName + '"></a>').text($(elem).text());
        if (elem.prop('tagName') == 'H2') {
          linkItem.wrapInner('<strong />');
        }
        linkItem.appendTo(navItem);
      });
      $('.guide-right-nav .nav li:first-child a').addClass('active');
    }
  };

  // Creates right nav based on active tab section
  $('#ContentTabs .nav-link').on('click', e => {
    setTimeout(() => {
      $('.anatomy-display-static').popover('update');
    }, 200);
    if ($(e.currentTarget).hasClass('active')) {
      return;
    } else {
      const elem = $('.tab-pane').not('.active');
      const thisNav = $(elem).attr('id') + '-nav';
      const navItems = $(elem).find('h2,h3,h4');
      buildRightNav(navItems, thisNav);
    }
    console.log('f2');
  });

  // Scrollspy for Right Nav
  $('.guide-body').on('scroll', e => {
    $(e.currentTarget)
      .find('.tab-section, .guide-section')
      .children('h2,h3,h4')
      .each((i, t) => {
        let elemOffset = $(t).offset().top - $(e.currentTarget).offset().top;
        if (elemOffset > -20 && elemOffset < 60) {
          const thisName = $(t)
            .find('a')
            .attr('name');
          $('.guide-right-nav a').removeClass('active');
          $('.guide-right-nav [href="#' + thisName + '"]').addClass('active');
        }
      });
  });

  const oghref = window.location.href.toString();
  const href = oghref.substring(oghref.indexOf('#'), oghref.length - 1);

  // This scrolls the page to an anchor point based on the URL
  if (href.includes('code-')) { // builds right nav for code tabs
    const elem = $('.tab-pane').not('.active');
    const thisNav = $(elem).attr('id') + '-nav';
    const navItems = $(elem).find('.tab-section').children('h2,h3,h4');
    buildRightNav(navItems, thisNav);
    // $('.guide-code-options').toggleClass('invisible');
    $('#code-tab').tab('show');
    setTimeout(() => {
      window.location.href = oghref;
    }, 200);
  } else if (href.includes('guide-')) { // builds right nav for guide tabs
    const elem = $('.tab-pane.active');
    const thisNav = $(elem).attr('id') + '-nav';
    const navItems = $(elem).find('.tab-section').children('h2,h3,h4');
    buildRightNav(navItems, thisNav);
    setTimeout(() => {
      window.location.href = oghref;
    }, 200);
  } else if (href.includes('Start-')) { // builds right nav for foundations section
    let elem = $('.guide-section');
    const thisNav = $(elem).attr('id') + '-nav';
    const navItems = $(elem).children('h2,h3,h4');
    buildRightNav(navItems, thisNav);
    setTimeout(() => {
      window.location.href = oghref;
    }, 200);
  } else if (href.includes('Foundations-')) { // builds right nav for foundations section
    let elem = $('.guide-section');
    const thisNav = $(elem).attr('id') + '-nav';
    const navItems = $(elem).children('h2,h3,h4');
    buildRightNav(navItems, thisNav);
    setTimeout(() => {
      window.location.href = oghref;
    }, 200);
  } else if (href.includes('Framework-')) { // builds right nav for framework section
    let elem = $('.guide-section');
    const thisNav = $(elem).attr('id') + '-nav';
    const navItems = $(elem).children('h2,h3,h4');
    buildRightNav(navItems, thisNav);
    setTimeout(() => {
      window.location.href = oghref;
    }, 200);
  } else { // builds right nav for other sections not formatted correctly
    let elem = $('.tab-pane.active');
    if (elem.length === 0) {
      elem = $('.guide-section');
      const thisNav = $(elem).attr('id') + '-nav';
      const navItems = $(elem).children('h2,h3,h4');
      buildRightNav(navItems, thisNav);
      return;
    }
    const thisNav = $(elem).attr('id') + '-nav';
    const navItems = $(elem).find('.tab-section').children('h2,h3,h4');
    buildRightNav(navItems, thisNav);
  }
});

// window.onload = initiate;

$(function () {
  // $('[data-toggle="popover"]').popover();

   $('#feedback-button').popover({
    // content: `
    // <h5>Feedback</h5>
    // <button id="issueButton" class="btn btn-warning mr-2">
    //       Report an Issue
    //     </button>
    //     <button id="featureButton" class="btn btn-primary">
    //       Request a Feature
    //     </button>
    // `,
    content: $('#feedbackPopoverContent'),
    container: 'body',
    html: true,
    trigger: 'click',
    placement: 'bottom',
    offset: '-50,0'
  });

  $('#feedback-button').on('show.bs.popover', function () {
    $('#feedbackPopoverContent').removeClass('hidden');
  });

  // $('#feedback-button').on('shown.bs.popover', function () {
  //   Init JIRA buttons
  //   window.ATL_JQ_PAGE_PROPS = $.extend(window.ATL_JQ_PAGE_PROPS, {
  //     '9127b19e' : {
  //       triggerFunction:
  //       function(showCollectorDialog) {
  //         console.log('b');
  //         $("#issueButton").click(function(e) {
  //           console.log('c');
  //           e.preventDefault();
  //           showCollectorDialog();
  //         });
  //       }
  //     },
  //     'eac08567' : {
  //       triggerFunction:
  //       function(showCollectorDialog) {
  //         $("#featureButton").click(function(e) {
  //           e.preventDefault();
  //           showCollectorDialog();
  //         });
  //       }
  //     }
  //   });
  // });

  function findAnchorElement(path) {
    const anchors = $('a[href]').toArray();
    const currentAnchor = anchors.find(node => node.href.endsWith(path));
    $(currentAnchor).addClass('active');
    return currentAnchor;
  }

  function findNavGroup(anchorElement) {
    if (!anchorElement) {
      return [];
    }

    const parentElement = $(anchorElement).parents('div');
    if (!parentElement || parentElement.length < 1) {
      return [];
    }

    const parentElementId = parentElement[0].id;
    return parentElementId === 'startSubnav'
    ? [$('#start'), $('#startSubnav')]
      : parentElementId === 'componentsSubnav'
      ? [$('#components'), $('#componentsSubnav')]
      : parentElementId === 'utilitiesSubnav'
        ? [$('#utilities'), $('#utilitiesSubnav')]
        : parentElementId === 'foundationsSubnav'
          ? [$('#foundations'), $('#foundationsSubnav')]
          : [];
  }

  function expandNavGroup([nav, subnav]) {
    if (!nav || !subnav) {
      return;
    }

    nav.removeClass('collapsed').attr('aria-expanded', true);
    subnav.addClass('show');
  }

  (function () {
    const anchorElement = findAnchorElement(window.location.pathname);
    // console.log(anchorElement);
    const navGroup = findNavGroup(anchorElement);
    // console.log(navGroup);
    expandNavGroup(navGroup);
  })();
});
