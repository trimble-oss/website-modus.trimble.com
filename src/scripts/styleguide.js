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

// const initiate = () => {
//   console.log("Script Initialized");
//   var toggle = document.getElementById("style-switch");
//   toggle.onchange = function (e) {
//     if (e.target.checked) {
//       swapStyleSheet("../assets/ether-dark.min.css");
//     } else {
//       swapStyleSheet("../assets/ether.min.css");
//     }
//   };
// };

const PrevNext = (current, future) => {
  var list = [];
  //find current
  // href current + 1 or current - 1;
};

const codePen = elem => {
  let el = $(elem[0]),
    HTML = '',
    CSS = '',
    JS = '';

  HTML = el.text();

  var data = {
    title: 'Ether Pen',
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
    '<form action="https://codepen.io/pen/define" method="POST" target="_blank">' +
    '<input type="hidden" name="data" value=\'' +
    JSONstring +
    "'>" +
    '<button type="submit" value="Open in CodePen" class="btn btn-link codepen-mover-button">Open in CodePen</button>' +
    '</form>';

  el.after(form);
};

$(document).ready(function() {
  if (window.localStorage.getItem('color')) {
    const thisColor = window.localStorage.getItem('color');
    $('.bg-color-select').val(thisColor);
    $('.guide-code-options')
      .siblings('.guide-sample')
      .css('background-color', thisColor);
  } else {
    window.localStorage.setItem('color', 'White');
  }

  $('.guide-code').each(function(i, block) {
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

  $('.guide-copy-code,.guide-code').on('click', e => {
    var str = $(e.currentTarget)
      .siblings('.guide-sample')
      .html();
    copyToClipboard(str);
    // Get the snackbar DIV
    var snack = $('#snackbar');

    // Add the "show" class to DIV
    snack.text('Code copied to clipboard.').addClass('show');

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
      snack.removeClass('show');
    }, 3000);
  });

  $('.bg-color-select').on('change', e => {
    const thisColor = $(e.currentTarget).val();
    $('.bg-color-select').val(thisColor);
    $('.guide-code-options')
      .siblings('.guide-sample')
      .css('background-color', thisColor);
    window.localStorage.setItem('color', thisColor);
  });

  $('#copyExampleButton').on('click', () => {
    var str = $('#interactiveExample').html();
    copyToClipboard(str);
    // Get the snackbar DIV
    var snack = $('#snackbar');

    // Add the "show" class to DIV
    snack.text('Code copied to clipboard.').addClass('show');

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
      snack.removeClass('show');
    }, 3000);
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

  $('.anatomy-display')
    .find('*')
    .not('p')
    .on('mouseenter', e => {
      drawHover(e, false);
    });

  const hexDigits = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');

  const rgbToHex = rgb => {
    if (!rgb.startsWith('rgba')) {
      var rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
  };

  const hex = x => {
    return isNaN(x) ? '00' : hexDigits[(x - (x % 16)) / 16] + hexDigits[x % 16];
  };

  const drawHover = (e, perm) => {
    // anatomy-display-static class adds a permanent ouline
    // anatomy-display class adds a on hover outline
    if (e.currentTarget) {
      var elem = $(e.currentTarget);
    } else {
      var elem = $(e);
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

    var classes = 'hover-div';
    if (!perm) {
      classes += ' not-perm';
    }

    var mainDiv = $('<div/>', { class: classes, id: 'hover-div' })
      .width(w)
      .height(h)
      .css({ top: m.top + pos.top, left: m.left + pos.left });
    if (p.top > 0 || p.bottom > 0 || p.left > 0 || p.right > 0) {
      mainDiv.css({ border: 'rgba(51, 168, 47, 0.5) solid 2px', background: 'rgba(51, 168, 47, 0.3)' });
    }
    elem.parent().append(mainDiv);

    var innerLine = $('<div/>', { class: 'hover-div-inner' })
      .width(w - (p.left + p.right))
      .height(h - (p.top + p.bottom))
      .css({ top: p.top - 2, left: p.left - 2 });
    mainDiv.append(innerLine);

    if (p.top > 0) {
      var pTopLine = $('<div/>', { class: 'hover-line-padding-vert' })
        .height(p.top)
        .css({ top: -2, left: w / 2 - 2 });
      mainDiv.append(pTopLine);
      var pTopLabel = $('<span/>', { class: 'hover-padding-text' })
        .css({ top: -18, left: w / 2 - 2 })
        .text(p.top + 'px');
      mainDiv.append(pTopLabel);
    }

    if (p.bottom > 0) {
      var pBottomLine = $('<div/>', { class: 'hover-line-padding-vert' })
        .height(p.bottom)
        .css({ top: h - p.bottom - 2, left: w / 2 - 2 });
      mainDiv.append(pBottomLine);
      var pBottomLabel = $('<span/>', { class: 'hover-padding-text' })
        .css({ top: h - 2, left: w / 2 - 2 })
        .text(p.bottom + 'px');
      mainDiv.append(pBottomLabel);
    }

    if (p.left > 0) {
      var pLeftLine = $('<div/>', { class: 'hover-line-padding-horz' })
        .width(p.left)
        .css({ top: h / 2 - 2, left: -2 });
      mainDiv.append(pLeftLine);
      var pLeftLabel = $('<span/>', { class: 'hover-padding-text' })
        .css({ top: h / 2 - 2 - 8, left: -30 })
        .text(p.left + 'px');
      mainDiv.append(pLeftLabel);
    }

    if (p.right > 0) {
      var pRightLine = $('<div/>', { class: 'hover-line-padding-horz' })
        .width(p.right)
        .css({ top: h / 2 - 2, left: w - p.right - 2 });
      mainDiv.append(pRightLine);
      var pRightLabel = $('<span/>', { class: 'hover-padding-text' })
        .css({ top: h / 2 - 2 - 8, left: w })
        .text(p.right + 'px');
      mainDiv.append(pRightLabel);
    }

    if (m.top > 0) {
      var mBox = $('<div/>', { class: 'hover-div-margin' })
        .width(w)
        .height(m.top)
        .css({ top: -m.top - 2, left: -2 });
      mainDiv.append(mBox);
      var mTopLine = $('<div/>', { class: 'hover-line-margin-vert' })
        .height(m.top)
        .css({ top: -m.top - 2, left: 2 * (w / 3) - 2 });
      mainDiv.append(mTopLine);
      var mTopLabel = $('<span/>', { class: 'hover-margin-text' })
        .css({ top: -m.top - 18, left: 2 * (w / 3) - 2 })
        .text(m.top + 'px');
      mainDiv.append(mTopLabel);
    }

    if (m.bottom > 0) {
      var mBox = $('<div/>', { class: 'hover-div-margin' })
        .width(w)
        .height(m.bottom)
        .css({ top: h - 2, left: -2 });
      mainDiv.append(mBox);
      var mBottomLine = $('<div/>', { class: 'hover-line-margin-vert' })
        .height(m.bottom)
        .css({ top: h - 2, left: 2 * (w / 3) - 2 });
      mainDiv.append(mBottomLine);
      var mBottomLabel = $('<span/>', { class: 'hover-margin-text' })
        .css({ top: h + m.bottom - 2, left: 2 * (w / 3) - 2 })
        .text(m.bottom + 'px');
      mainDiv.append(mBottomLabel);
    }

    if (m.left > 0) {
      var mBox = $('<div/>', { class: 'hover-div-margin' })
        .width(m.left)
        .height(h)
        .css({ top: -2, left: -m.left - 2 });
      mainDiv.append(mBox);
      var mLeftLine = $('<div/>', { class: 'hover-line-margin-horz' })
        .width(m.left)
        .css({ top: 3 * (h / 4) - 2, left: -m.left });
      mainDiv.append(mLeftLine);
      var mLeftLabel = $('<span/>', { class: 'hover-margin-text' })
        .css({ top: 3 * (h / 4) - 2 - 8, left: -m.left - 30 })
        .text(m.left + 'px');
      mainDiv.append(mLeftLabel);
    }

    if (m.right > 0) {
      var mBox = $('<div/>', { class: 'hover-div-margin' })
        .width(m.right)
        .height(h)
        .css({ top: -2, left: w - 2 });
      mainDiv.append(mBox);
      var mRightLine = $('<div/>', { class: 'hover-line-margin-horz' })
        .width(m.right)
        .css({ top: 3 * (h / 4) - 2, left: w });
      mainDiv.append(mRightLine);
      var mRightLabel = $('<span/>', { class: 'hover-margin-text' })
        .css({ top: 3 * (h / 4) - 2 - 8, left: w + m.right - 2 })
        .text(m.right + 'px');
      mainDiv.append(mRightLabel);
    }

    var hLine = $('<div/>', { class: 'hover-line-height-vert' })
      .height(h)
      .css({ top: -2, left: w + p.right + m.right + 15 });
    mainDiv.append(hLine);
    var hTopLine = $('<div/>', { class: 'hover-line-height-horz' })
      .width(10)
      .css({ top: -2, left: w + p.right + m.right + 5 });
    mainDiv.append(hTopLine);
    var hBottomLine = $('<div/>', { class: 'hover-line-height-horz' })
      .width(10)
      .css({ top: h - 4, left: w + p.right + m.right + 5 });
    mainDiv.append(hBottomLine);
    var hLabel = $('<span/>', { class: 'hover-height-text' })
      .css({ top: h / 2 - 2 - 8, left: w + p.right + m.right + 19 })
      .text(h + 'px');
    mainDiv.append(hLabel);

    if ($('.hover-div.not-perm')[1] && !perm) {
      $('.hover-div.not-perm')[1].remove();
    }

    var place = 'top';
    if (perm) {
      place = 'right';
    }
    const offset = 'top: ' + (p.top + m.top + 15) + ',';
    var pop = elem.popover({
      placement: place,
      content: `
      <p class="small text-primary font-weight-bold m-0">${'.' + elem.prop('class').replace(' ', '.').replace('anatomy-display-static', '')}</p>
      <p class="small mb-0" id="popover-bgc"><strong>background-color:</strong> ${rgbToHex(elem.css('background-color'))}<span class="rounded border border-light ml-1 d-inline-block" style="width: 10px; height: 10px; background: ${elem.css('background-color')}"></span></p>
      <p class="small mb-0" id="popover-bc"><strong>border-color:</strong> ${rgbToHex(elem.css('border-color'))}<span class="rounded border border-light ml-1 d-inline-block" style="width: 10px; height: 10px; background: ${elem.css('border-color')}"></span></p>
      <p class="small mb-0" id="popover-c"><strong>color:</strong> ${rgbToHex(elem.css('color'))}<span class="rounded border border-light ml-1 d-inline-block" style="width: 10px; height: 10px; background: ${elem.css('color')}"></span></p>
      <p class="small mb-0"><strong>font-size:</strong> ${elem.css('font-size')}</p>
      `,
      html: true,
      offset: offset,
    });

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
    return `<h5 class="border-bottom border-primary">Contents</h5>
    <nav class="nav flex-column" id="${id}"></nav>`;
  };

  const buildRightNav = (navItems, navId) => {
    $('.guide-right-nav')
      .children()
      .remove();
    const navPrefix = navId.substr(0, navId.indexOf('-') + 1);
    if (navItems.length > 0) {
      $('.guide-right-nav').append(rightNavTemplate(navId));
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

  $('.guide-tab-panes .tab-pane.active').each((idx, t) => {
    // $(".guide-right-nav").css("margin-top", $(t).parent().offset().top - 108);
    const thisNav = $(t).attr('id') + '-nav';
    const navItems = $(t).find('h2,h3,h4');
    buildRightNav(navItems, thisNav);
  });

  $('#ContentTabs .nav-link').on('click', e => {
    if ($(e.currentTarget).hasClass('active')) {
      return;
    } else {
      const elem = $('.tab-pane').not('.active');
      const thisNav = $(elem).attr('id') + '-nav';
      const navItems = $(elem).find('h2,h3,h4');
      buildRightNav(navItems, thisNav);
    }
  });

  $('.guide-section').each((idx, t) => {
    // $(".guide-right-nav").css("margin-top", $(t).offset().top - 150);
    const navItems = $(t).children('h2,h3,h4');
    buildRightNav(navItems, 'section-nav');
  });

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

  if ($('#ContentTabs').length !== 0) {
    const tabs = $('#ContentTabs');
    const scrollContainer = $('.guide-scroll-container');
    const guideContent = $('.guide-content');
    const pos = tabs.offset().top;

    guideContent.on('scroll', () => {
      if (guideContent.scrollTop() + $('.guide-header').outerHeight() >= pos) {
        //stick tabs
        tabs.addClass('sticky');
        scrollContainer.addClass('has-sticky');
      } else {
        //unstick tabs
        tabs.removeClass('sticky');
        scrollContainer.removeClass('has-sticky');
      }
    });
  }
});

// window.onload = initiate;

$(function() {
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
    return parentElementId === 'componentsSubnav'
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

  (function() {
    const anchorElement = findAnchorElement(window.location.pathname);
    // console.log(anchorElement);
    const navGroup = findNavGroup(anchorElement);
    // console.log(navGroup);
    expandNavGroup(navGroup);
  })();
});
