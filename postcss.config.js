module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: [
        './assets/js/*.js',
        './content/*.md',
        './content/community/*.md',
        './content/news/*.md',
        './content/**/*.md',
        './node_modules/bootstrap/scss/_tooltip.scss',
        './layouts/**/*.html',
        './static/js/*.js',
      ],
      safelist: [
        'active',
        'alert',
        'align-items-center',
        'anatomy-cell',
        'anatomy-display-element',
        'anatomy-display-static',
        'anatomy-display-table',
        'arrow',
        'autocomplete-suggestion',
        'autocomplete-suggestions',
        'bg-active',
        'bg-dark',
        'bg-light',
        'bg-primary',
        'bg-secondary',
        'bg-transparent',
        'bg-white',
        'border',
        'border-0',
        'border-right',
        'breadcrumb',
        'bs-popover-bottom',
        'bs-tooltip-auto',
        'bs-tooltip-bottom',
        'bs-tooltip-top',
        'btn-group-vertical',
        'btn-outline-secondary',
        'btn-primary',
        'btn',
        'card-body',
        'card-blog-brief',
        'card-header',
        'card-transactional-emails',
        'card',
        'chip',
        'chip-input',
        'chroma',
        'circle',
        'c1',
        'clearfix',
        'code',
        'col',
        'color',
        'color-preview',
        'col-12',
        'col-lg-4',
        'col-md-4',
        'col-lg-4',
        'container',
        'container-fluid',
        'container-xl',
        'copy-to-clipboard',
        'd-block',
        'd-flex',
        'd-inline-block',
        'd-lg-inline-flex',
        'd-none',
        'd-print-none',
        'd-xl-inline-block',
        'd-xl-none',
        'data-url',
        'display-1',
        'display-2',
        'display-3',
        'dropdown-item',
        'dropdown-menu-end',
        'dropdown-menu-icons',
        'dropdown-menu-right',
        'dropdown-menu',
        'dropdown-toggle',
        'dropdown',
        'fade',
        'filter-invert',
        'fixed-top',
        'flex-column',
        'flex-nowrap',
        'flex-sm-row',
        'flex-xl-row',
        'flex-xxl-row',
        'footer',
        'form-check',
        'form-control',
        'form-control-lg',
        'form-group',
        'form-group-item',
        'form-switch',
        'fw-bold',
        'h-100',
        'highlight',
        'hover-div',
        'hover-padding-text',
        'kd',
        'kr',
        'kt',
        'language-bash',
        'language-css',
        'language-html',
        'language-javascript',
        'language-js',
        'language-json',
        'language-ts',
        'language-xml',
        'line',
        'list',
        'list-group-item',
        'list-group-item-action',
        'list-group',
        'list-unstyled',
        'm-0',
        'm-1',
        'm-2',
        'mb-0',
        'mb-1',
        'mb-2',
        'mb-3',
        'mb-4',
        'mb-5',
        'menu-left',
        'menu-right',
        'message',
        'modal-backdrop',
        'modal-body',
        'modal-content',
        'modal-lg',
        'modal-open',
        'modal-static',
        'modal',
        'modus-icons',
        'moon-mask',
        'moon',
        'ms-xxl-4',
        'mt-auto',
        'mx-0',
        'mx-1',
        'mx-2',
        'mx-3',
        'mx-4',
        'mx-auto',
        'nav-item',
        'nav-link',
        'nav-tabs',
        'navbar',
        'navbar-blue',
        'navbar-brand',
        'navbar-nav',
        'na',
        'nb',
        'nt',
        'nx',
        'o',
        'opacity-50',
        'opacity-75',
        'open',
        'p',
        'p-1',
        'p-2',
        'p-3',
        'page-item',
        'page-link',
        'pagination-lg',
        'pagination-sm',
        'pagination',
        'pb-1',
        'pb-2',
        'pb-3',
        'pb-4',
        'pe-none',
        'popover',
        'popover-arrow',
        'popover-body',
        'popover-bottom',
        'popover-header',
        'popover-top',
        'position-absolute',
        'position-fixed',
        'pre',
        'pr-1',
        'pr-2',
        'pr-lg-4',
        'pr-lg-5',
        'pr-xl-5',
        'pt-1',
        'pt-2',
        'pt-3',
        'px-0',
        'px-1',
        'px-2',
        'px-3',
        'px-4',
        'py-0',
        'py-1',
        'py-2',
        'py-3',
        'py-4',
        'rounded',
        'row',
        'row-cols-md-2',
        'row-cols-xl-3',
        's',
        's1',
        's2',
        'search',
        'shadow',
        'shadow-lg',
        'shadow-sm',
        'show',
        'showBtn',
        'sidebar-menu',
        'small',
        'sr-only',
        'stretched-link',
        'sun-and-moon',
        'sun-beams',
        'sun',
        'table-bordered',
        'table-borderless',
        'table-dark',
        'table-sm',
        'table',
        'text-center',
        'text-dark',
        'text-decoration-none',
        'text-end',
        'text-left',
        'text-light',
        'text-muted',
        'text-right',
        'text-white',
        'thead-light',
        'theme-d',
        'theme-l',
        'theme-toggle',
        'toast-dark',
        'toast-primary',
        'toast-success',
        'toast',
        'tooltip-arrow',
        'tooltip-inner',
        'tooltip',
        'w-100',
      ],
      blocklist: ['btn-group', 'btn-group-vertical', 'carousel', 'carousel-item', 'display-4', 'jumbotron', 'media'],
    },
    autoprefixer: {},
  },
};
