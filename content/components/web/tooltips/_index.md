---
title: "Tooltips"
layout: "single"
description: "Tooltips provide a short description of a page element or control."
components: true
componentsWeb: true
images:
  - "/img/components/headers/tooltips.png"
bootstrapURL: "/components/tooltips/"
reactBootstrapURL: "/components/tooltips/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-tooltip--default"
aliases:
  - "/components/tooltips/"
tags: [usage]
---

## Overview

A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. It typically appears after a small delay and disappears when <kbd>Esc</kbd> is pressed or on mouse out.

<div style="max-width: max-content">
  <div class="guide-sample">
    <div class="btn-group-vertical">
      <button id="tooltipExample" class="btn btn-icon-only btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Zoom in">
      <i class="modus-icons notranslate" aria-hidden="true">zoom_in</i>
      </button>
      <button class="btn btn-icon-only btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Zoom out">
      <i class="modus-icons notranslate" aria-hidden="true">zoom_out</i>
      </button>
      <button class="btn btn-icon-only btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Expand">
      <i class="modus-icons notranslate" aria-hidden="true">expand</i>
      </button>
      <button class="btn btn-icon-only btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Toggle layers">
      <i class="modus-icons notranslate" aria-hidden="true">map</i>
      </button>
    </div>
  </div>
</div>

## Usage

#### Use when

- Providing a short description of a page element or control.
- Describing the action of an icon-only button.
- Revealing the full text of truncated data.
- Revealing the purpose of a menu that has a dynamic title.

#### Don't use when

- Providing a description longer than 10 words.
- Your application exists on mobile devices. There is no hover state to activate the tooltip.

{{< whats-changed-table >}}

| Date       | Version | Notes                                             | Contributors                         |
| ---------- | ------- | ------------------------------------------------- | ------------------------------------ |
| 06/04/2023 | 1.2.0   | Relative pointer added to top and bottom variant. | J. de Wit, S. Kaukonen, R. Stillwell |
| 03/15/2023 | 1.1.0   | Background colors changed to be accessible.       | E. Gunther, S. Kaukonen              |

{{</ whats-changed-table >}}
