---
title: "Toolbar"
layout: "single"
description: "Toolbar consists of a series of icon buttons occupying minimum workspace."
components: true
componentsWeb: true
images:
  - "/img/components/headers/toolbar.png"
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
<div class="text-center p-5 bg-secondary bg-opacity-10" style="width: 214px;">
  <button type="button" class="btn btn-outline-secondary btn-icon-only border-0 shadow-lg rounded border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home">
    <i class="modus-icons notranslate" aria-hidden="true">home</i>
  </button>
  <button type="button" class="btn btn-outline-secondary btn-icon-only border-0 shadow-lg rounded border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="History">
    <i class="modus-icons notranslate" aria-hidden="true">history</i>
  </button>
  <button type="button" class="btn btn-outline-secondary btn-icon-only border-0 shadow-lg rounded border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Settings">
    <i class="modus-icons notranslate" aria-hidden="true">settings</i>
  </button>
</div>

### With Combined Buttons

Icon buttons are connected vertically or horizontally.

<div class="w-100 me-auto text-center py-5 bg-secondary bg-opacity-10" hidden>
<div>
  <div class="btn-group me-2 shadow-lg rounded border-0" role="group" aria-label="Second group">
    <button type="button" class="btn btn-outline-secondary btn-icon-only border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Undo">
      <i class="modus-icons notranslate" aria-hidden="true">undo</i>
    </button>
    <button type="button" class="btn btn-outline-secondary btn-icon-only border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Redo">
      <i class="modus-icons notranslate" aria-hidden="true">redo</i>
    </button>
    <button type="button" class="btn btn-outline-secondary btn-icon-only border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Expand">
      <i class="modus-icons notranslate" aria-hidden="true">expand</i>
    </button>
    <button type="button" class="btn btn-outline-secondary btn-icon-only border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Collapse">
      <i class="modus-icons notranslate" aria-hidden="true">collapse</i>
    </button>
    <div class="d-none">
      <div class="vr text-dark" style="height: 23px; margin-top: 4px;"></div>
    </div>
    <button type="button" class="btn btn-outline-secondary btn-icon-only border-0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Window Dock / Undock">
      <i class="modus-icons notranslate" aria-hidden="true">window_dock_undock</i>
    </button>
  </div>
</div>
</div>

{{< img src="/img/components/floating-toolbar-combined-vertical-example.svg" dark="/img/components/floating-toolbar-combined-vertical-example-dark.svg" class="bg-light" width="214" height="162" alt="Floating Toolbar vertical example" loading="lazy" >}}

<style>
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
