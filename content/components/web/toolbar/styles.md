---
title: "Toolbar"
layout: "single"
description: "Toolbar consists of a series of icon buttons occupying minimum workspace."
components: true
componentsWeb: true
images:
  - "/img/components/headers/toolbar.png"
tags: [styles]
disableAnatomy: true
popoverCSSInspector: true
---

## Specifications

- Using secondary icon-only buttons at 32x32 is recommended. See [Buttons](/components/web/buttons/).
- To provide a distinction of the floating toolbar and create the floating effect, a shadow (Level 3) is used. See [Shadows & Depth](/foundations/shadows-and-depth/).
- The icon buttons can be aligned as a row (horizontally) or as a column (vertically).
- Vertically aligned toolbars float on top of the content and are usually located on the left or right side of the screen; horizontally aligned toolbars float at the top or bottom of the application window.
- The spacing between separated buttons is 4px.
- Icon buttons which are combined together have only outer corners of the toolbar rounded.
- Toolbar consisting of combined icon buttons can group related controls separated by a divider.

<div class="py-5 bg-secondary bg-opacity-10 mx-auto">
  <div class="btn-toolbar p-1 shadow-lg mx-auto"
        data-bs-placement="left"
        data-bs-toggle="popover"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="color font-size font-weight height margin padding text-align width"
        data-css-inspector-show="shadow"
        data-bs-title="Toolbar">
    <div class="btn-group border-0" role="group" aria-label="First group">
      <button
        type="button"
        class="btn btn-outline-secondary btn-icon-only border-0 me-1"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Undo"
        aria-label="Undo">
        <i class="modus-icons notranslate" aria-hidden="true">undo</i>
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary btn-icon-only border-0 me-1"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Redo"
        aria-label="Redo">
        <i class="modus-icons notranslate" aria-hidden="true">redo</i>
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary btn-icon-only border-0 me-1"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Expand"
        aria-label="Expand">
        <i class="modus-icons notranslate" aria-hidden="true">expand</i>
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary btn-icon-only border-0 me-1"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Collapse"
        aria-label="Collapse">
        <i class="modus-icons notranslate" aria-hidden="true">collapse</i>
      </button>
    </div>
    <div>
      <div class="vr h-100"></div>
    </div>
    <div class="btn-group border-0" role="group" aria-label="Second group">
      <button
        type="button"
        class="btn btn-outline-secondary btn-icon-only border-0 ms-1"
        data-bs-placement="right"
        data-bs-toggle="popover"
        data-bs-custom-class="popover-css-inspector"
        data-css-inspector-hide="font-size font-weight margin padding text-align"
        data-css-inspector-show="height width"
        data-bs-title="Toolbar Button">
        <i class="modus-icons notranslate" aria-hidden="true">window_dock_undock</i>
      </button>
    </div>
  </div>
</div>

<style>
.rounded-3 {
  border-radius: 4px !important;
}

.btn-toolbar {
  border-radius: 4px !important;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: .25rem !important;
  width: fit-content;
}

.btn-toolbar .btn,
.btn-toolbar .btn-group {
  border-radius: 4px !important;
}

[data-bs-theme="light"] .btn-group .vr {
  color: #e0e1e9;
  opacity: 1 !important;
}

[data-bs-theme="dark"] .btn-group .vr {
  color: #464b52;
  opacity: 1 !important;
}

[data-bs-theme="light"] .btn-toolbar,
[data-bs-theme="light"] .toolbar.btn-group {
  background-color: #fff;
  border-radius: 4px !important;
}

[data-bs-theme="dark"] .btn-toolbar,
[data-bs-theme="dark"] .toolbar.btn-group {
  background-color: #171C1E;
  border-radius: 4px !important;
}

[data-bs-theme="light"] .btn-outline-secondary:not(:hover) {
  background-color: #fff;
}
[data-bs-theme="dark"] .btn-outline-secondary:not(:hover) {
  background-color: #171c1e;
}
</style>

### Behaviors

- All buttons within the toolbar should have the following states:

  - Default
  - Hover
  - Pressed
  - Disabled

- All icon buttons should display a [Tooltip](/components/web/tooltips/) on hover.
- Make sure the controls are placed and grouped in a logical order.

### Editorial

- See [Tooltips](/components/web/tooltips/styles/).

<style>
  article ul li p {
    margin-bottom: 2px !important;
  }
  article ul ul {
    margin-bottom: 16px !important;
  }
</style>
