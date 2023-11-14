const close_popovers = () => {
  $('.hover-dimensions').find('*').removeClass('pop-highlight').popover('dispose');
};

$('.hover-dimensions')
  .find('*')
  .not('p')
  .not('div')
  .on('mouseenter', (e) => {
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
      html: true,
    });
    elem.popover('show');
  });

$('.hover-dimensions')
  .find('*')
  .on('mouseleave', (e) => {
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
  .on('mouseenter', (e) => {
    drawHover(e, false);
  });

$('.anatomy-display')
  .find('*')
  .not('.anatomy-exclude')
  .on('mouseenter', (e) => {
    drawHover(e, false);
  });

$('.anatomy-display-element')
  .not('.anatomy-exclude')
  .on('mouseenter', (e) => {
    drawHover(e, false);
  });

const hexDigits = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');

const rgbToHex = (rgb) => {
  if (!rgb.startsWith('rgba')) {
    var newrgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return '#' + hex(newrgb[1]) + hex(newrgb[2]) + hex(newrgb[3]);
  }
};

const hex = (x) => {
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
  //  adding data-anatomy-dimensions="false", will have no size attributes
  let elem = null;
  if (e.currentTarget) {
    elem = $(e.currentTarget);
    if ($(e.currentTarget).attr('class') && !$(e.currentTarget).attr('class').includes('anatomy-display-element')) {
      let parent = elem.parent();
      while ($(parent).attr('class') === undefined || !$(parent).attr('class').includes('anatomy-display')) {
        $(parent).css({ position: 'relative' });
        parent = $(parent).parent();
      }
    }
  } else {
    elem = $(e);
    elem.parent().css({ position: 'relative' });
  }
  const showColors = elem.data('anatomy-colors') || elem.data('anatomy-colors') === undefined;
  const showDimensions = elem.data('anatomy-dimensions') || elem.data('anatomy-dimensions') === undefined;

  const h = elem.outerHeight();
  const w = elem.outerWidth();
  const pos = elem.position();
  const b = {
    top: parseInt(elem.css('border-top-width'), 10),
    bottom: parseInt(elem.css('border-bottom-width'), 10),
    left: parseInt(elem.css('border-left-width'), 10),
    right: parseInt(elem.css('border-right-width'), 10),
  };
  const m = {
    top: parseInt(elem.css('margin-top'), 10),
    bottom: parseInt(elem.css('margin-bottom'), 10),
    left: parseInt(elem.css('margin-left'), 10),
    right: parseInt(elem.css('margin-right'), 10),
  };
  const p = {
    top: parseInt(elem.css('padding-top'), 10),
    bottom: parseInt(elem.css('padding-bottom'), 10),
    left: parseInt(elem.css('padding-left'), 10),
    right: parseInt(elem.css('padding-right'), 10),
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
        <div class="hover-div-inner" style="width: ${w - (p.left + p.right)}px; height: ${h - (p.top + p.bottom)}px; top: ${
          p.top - 2
        }px; left: ${p.left - 2}px"></div>
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
      <div class="${classes}" style="width: ${w}px; height: ${h}px; top: ${m.top + pos.top}px; left: ${
        m.left + pos.left
      }px; border-radius: ${br}px; border: 1px dashed #e06cd2cc;">
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

  if (perm) {
    if (showDimensions) {
      elem.parent().append(htmlStatic);
    }
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
    '.' + elem.prop('class').replace(' ', '.').replace('anatomy-display-static', '').replace('anatomy-display-element', '');
  if (popoverClasses === '.') {
    popoverClasses = 'No Classes';
  }

  const offset = perm ? 8 + ',' + (showDimensions ? m.left + 36 : 0) : m.top + 8 + ',0';
  const popHeader = perm ? '' : `<p class="small text-primary font-weight-bold m-0">${popoverClasses}</p>`;
  const popBackground =
    elem.css('background-color') !== 'rgba(0, 0, 0, 0)' && showColors
      ? `<p class="small mb-0" id="popover-bgc"><strong>background-color:</strong> ${rgbToHex(
          elem.css('background-color'),
        )}<span class="rounded border border-light ml-1 d-inline-block" style="width: 10px; height: 10px; background: ${elem.css(
          'background-color',
        )}"></span></p>`
      : '';
  const popBorder =
    elem.css('border-width') !== '0px' && showColors
      ? `<p class="small mb-0" id="popover-bc"><strong>border-color:</strong> ${rgbToHex(
          elem.css('border-color'),
        )}<span class="rounded border border-light ml-1 d-inline-block" style="width: 10px; height: 10px; background: ${elem.css(
          'border-color',
        )}"></span></p>`
      : '';
  const popFontColor = showColors
    ? `<p class="small mb-0" id="popover-c"><strong>${perm ? 'font-' : ''}color:</strong> ${rgbToHex(
        elem.css('color'),
      )}<span class="rounded border border-light ml-1 d-inline-block" style="width: 10px; height: 10px; background: ${elem.css(
        'color',
      )}"></span></p>`
    : '';
  const popBorderRadius =
    elem.css('border-radius') !== '0px' && showDimensions
      ? `<p class="small mb-0"><strong>border-radius:</strong> ${elem.css('border-radius')}</p>`
      : '';
  const popFontSize = showDimensions ? `<p class="small mb-0"><strong>font-size:</strong> ${elem.css('font-size')}</p>` : '';
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
    offset: offset,
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
    elem.on('mouseleave', (e) => {
      $('.hover-div.not-perm').remove();
      elem.popover('dispose');
    });
  }
};

$('.anatomy-display-static')
  .find('*')
  .prevObject.map((e) => {
    e = $('.anatomy-display-static').find('*').prevObject[e];
    drawHover(e, true);
  });
