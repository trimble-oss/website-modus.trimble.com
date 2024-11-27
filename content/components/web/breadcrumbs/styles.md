---
title: "Breadcrumbs"
layout: "single"
description: "The breadcrumb element is a secondary navigation pattern that shows hierarchy among content."
components: true
componentsWeb: true
images:
  - "/img/components/headers/breadcrumbs.png"
bootstrapURL: "/docs/v2/components/breadcrumbs/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-breadcrumb--default"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
---

## Specifications

- Breadcrumbs progress from the highest level to the lowest, one step at a time.
- Breadcrumb navigation starts with the homepage and ends with the current page.
- All links, **except the last one**, in a breadcrumb should be clickable.
- Breadcrumb trails are displayed horizontally before a page's main content, in the top half of the page, below the primary navigation menu if a horizontal menu layout is used.
- The commonly accepted and most recognizable symbol for separating hyperlinks in breadcrumb trails is the “greater than” symbol (>). Typically, the > sign is used to denote hierarchy, as in the format of Parent category > Child category.
- Nothing should go on the same line as the breadcrumb navigation.

### Default

<div class="guide-example-block bg-secondary bg-opacity-10 p-5 pb-2">
  <div class="guide-sample" style="margin-left: 130px;">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-3">
        <li class="breadcrumb-item"><a href="#"
          data-bs-toggle="popover"
          data-bs-placement="left"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="bg-color b-radius height margin padding width"
        >Root</a></li>
        <li class="breadcrumb-item active" aria-current="page"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-custom-class="popover-css-inspector"
          data-css-inspector-hide="bg-color b-radius font-size height margin padding text-align width"
        >Current Page</li>
      </ol>
    </nav>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-3">
        <li class="breadcrumb-item"><a href="#">Root</a></li>
        <li class="breadcrumb-item"><a href="#">Subpage </a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
  </div>
</div>

### Breadcrumbs with Icons

<div class="guide-example-block d-inline-block">
  <div class="guide-sample my-2">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item d-flex align-items-center"><i class="modus-icons notranslate" aria-hidden="true">dashboard</i><a href="#">Home</a></li>
        <li class="breadcrumb-item d-flex align-items-center"><i class="modus-icons notranslate" aria-hidden="true">ticket_plane</i><a href="#">Library</a></li>
        <li class="breadcrumb-item d-flex align-items-center active" aria-current="page"><i class="modus-icons notranslate" aria-hidden="true">clipboard</i>Data</li>
      </ol>
    </nav>
  </div>
</div>

<style>
.breadcrumb-item i {
  margin-right: .5rem;
  color: rgba(var(--bs-link-color-rgb));
}

.breadcrumb-underline .breadcrumb-item a{
  text-decoration: underline;
}
</style>

### Accessible Option

<div class="guide-example-block d-inline-block">
  <div class="guide-sample">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-underline">
        <li class="breadcrumb-item"><a href="#">Root</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-underline">
        <li class="breadcrumb-item"><a href="#">Root</a></li>
        <li class="breadcrumb-item"><a href="#">Subpage </a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
  </div>
</div>

### Behaviors

- For implementations with large numbers of sub-directories, make use of ellipses and dropdowns as shown in the example below

<div class="guide-example-block d-inline-block">
  <div class="guide-sample" style="padding-bottom: 125px">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item"><a href="#">Root</a></li>
        <li class="breadcrumb-item">
          <div class="dropdown float-start">
            <button
              type="button"
              id="breadcrumbDropdown"
              data-bs-toggle="dropdown"
              class="border-0 px-1 bg-transparent"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ...
            </button>
            <div
              class="dropdown-menu show"
              aria-labelledby="breadcrumbDropdown"
            >
              <a href="#" class="dropdown-item text-decoration-none text-body">Subpage</a>
              <a href="#" class="dropdown-item text-decoration-none text-body">Subpage</a>
              <a href="#" class="dropdown-item text-decoration-none text-body">Subpage</a>
            </div>
          </div>
        </li>
        <li class="breadcrumb-item"><a href="#">Subpage</a></li>
        <li class="breadcrumb-item active" aria-current="page">Current Page</li>
      </ol>
    </nav>
  </div>
</div>

### Editorial

- Editorial will be provided by the hierarchy in a location based breadcrumb.
- Editorial for path-based breadcrumbs are always dynamically generated by the steps taken in a workflow.
