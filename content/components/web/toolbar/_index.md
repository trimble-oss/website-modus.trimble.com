---
title: "Toolbar"
layout: "single"
description: "Toolbar consists of a series of icon buttons occupying minimum workspace."
components: true
componentsWeb: true
images:
  - "/img/components/headers/toolbar.png"
webComponentsURL: https://modus-web-components.trimble.com/?path=/docs/components-toolbar--default
tags: [usage]
---

## Overview

A toolbar is a floating element consisting of a row or a column of icon butttons used to activate controls in an application. It can consist of a series of icon buttons separated or combined together. Toolbars are fixed in one position on the screen.

A toolbar allows for a maximum workspace and maintains an unobstructed view of the UI content.

## Usage

### Use when

- Full-screen usage and unobstructed view of the content is critical, e.g., in graphic applications.
- Providing a contextual menu benefits the user’s productivity.
- Offering tools near to the objects being worked on is essential.

### Don't use when

- You need to navigate between content within the application. Instead, use [Side Navigation](/components/web/side-navigation/) or [Content Tree](/components/web/content-tree/).
- A more robust set of tools needs to be displayed. Instead, use [Utility Panel](/components/web/utility-panel/).
- Actions are directly coupled with specific elements on the page.

## Types

Toolbars can be classified by their layout as follows:

### With Separate Buttons

Icon buttons are aligned next to each other (horizontally or vertically), but not connected.

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-solid/fonts/modus-icons.css">
<div class="text-center p-5 bg-secondary bg-opacity-10 w-100">
  <div class="p-1 d-inline-block shadow-lg rounded-3 bg-body">
    <button type="button" class="btn btn-outline-secondary btn-icon-only border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home" aria-label="Home">
      <i class="modus-icons notranslate" aria-hidden="true">home</i>
    </button>
  </div>
  <div class="p-1 d-inline-block shadow-lg rounded-3 bg-body">
    <button type="button" class="btn btn-outline-secondary btn-icon-only rounded border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="History" aria-label="History">
      <i class="modus-icons notranslate" aria-hidden="true">history</i>
    </button>
  </div>
  <div class="p-1 d-inline-block shadow-lg rounded-3 bg-body">
    <button type="button" class="btn btn-outline-secondary btn-icon-only rounded border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Settings" aria-label="Settings">
      <i class="modus-icons notranslate" aria-hidden="true">settings</i>
    </button>
  </div>
</div>

### With Combined Buttons

Icon buttons are connected vertically or horizontally.

<div class="py-5 bg-secondary bg-opacity-10 mx-auto">
  <div class="btn-toolbar p-1 shadow-lg mx-auto">
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
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Window Dock / Undock">
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

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors                                              |
| ---------- | ------- | -------------------- | --------------------------------------------------------- |
| 09/18/2023 | 1.0.0   | New component added. | K. Davies, E. Gunther, S. Kaukonen, S.A. Reda, D. Silcock |

{{</ whats-changed-table >}}
