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

A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. It typically appears after a small delay and disappears when "Escape" is pressed or on mouse out.

<div style="max-width: max-content">
  <div class="guide-sample">
    <div class="btn-group-vertical">
      <button id="tooltipExample" class="btn btn-icon-only btn-outline-dark" data-toggle="tooltip" data-placement="right" data-original-title="Zoom in">
      <i class="modus-icons notranslate">zoom_in</i>
      </button>
      <button class="btn btn-icon-only btn-outline-dark" data-toggle="tooltip" data-placement="right" data-original-title="Zoom out">
      <i class="modus-icons notranslate">zoom_out</i>
      </button>
      <button class="btn btn-icon-only btn-outline-dark" data-toggle="tooltip" data-placement="right" data-original-title="Expand">
      <i class="modus-icons notranslate">expand</i>
      </button>
      <button class="btn btn-icon-only btn-outline-dark" data-toggle="tooltip" data-placement="right" data-original-title="Toggle layers">
      <i class="modus-icons notranslate">map_layers</i>
      </button>
    </div>
  </div>
</div>

## Usage

**Use when**

- Providing a short description of a page element or control.
- Describing the action of an icon-only button.
- Revealing the full text of truncated data.
- Revealing the purpose of a menu that has a dynamic title.

**Don’t use when**

- Providing a description longer than 10 words.
- Your application exists on mobile devices. There is no hover state to activate the tooltip.

