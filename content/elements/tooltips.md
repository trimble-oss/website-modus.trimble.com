---
title: "Tooltips"
layout: "single"
description: "Tooltips provide a short description of a page element or control."
components: true
images:
  - "/img/headers/elements/tooltips.png"
aliases:
  - "/tooltips.html"
---

## Overview

A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. It typically appears after a small delay and disappears when "Escape" is pressed or on mouse out.

   <div style="max-width: max-content">
      <div class="guide-sample">
      <div class="btn-group-vertical">
      <button id="tooltipExample" class="btn btn-icon-only btn-outline-dark" data-toggle="tooltip" data-placement="right" data-original-title="Zoom in">
      <i class="modus-icons">zoom_in</i>
      </button>
      <button class="btn btn-icon-only btn-outline-dark" data-toggle="tooltip" data-placement="right" data-original-title="Zoom out">
      <i class="modus-icons">zoom_out</i>
      </button>
      <button class="btn btn-icon-only btn-outline-dark" data-toggle="tooltip" data-placement="right" data-original-title="Expand">
      <i class="modus-icons">expand</i>
      </button>
      <button class="btn btn-icon-only btn-outline-dark" data-toggle="tooltip" data-placement="right" data-original-title="Toggle layers">
      <i class="modus-icons">map_layers</i>
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

## Specifications

- Icon tooltips and interactive tooltips may be positioned top, bottom, left, or right to the trigger item.
- The container of the tooltip text may be aligned to start, center or end.
- Do not make the tooltip larger than the element it appears from.

<div class="guide-example-block d-inline-block">
  <div class="guide-sample">
    <img
      src="/img/guide/elements--tooltips-positions.png"
      alt="Tooltip positions"
    />
  </div>
</div>

### Behaviors

- Icon tooltips appear on hover and focus.

### Editorial

- Keep it brief—aim for fewer than 10 words.
- End full sentences with a period. Using “&” is OK. No “!”.
- For brevity, don’t spell out numbers: Use 12, not twelve.
- Use tooltips to present small amounts of data. Tooltips are similar to toasts, or micro-conclusions, which give the user a short confirmation.
- Use the past tense rather than present perfect (was submitted vs. has been submitted). We avoid the past perfect tense because it lacks clarity for translators.
- Use sentence case for tooltips.
- Never add a link to text in a tooltip.

### Accessibility

- The element that serves as the tooltip container has role `tooltip`.
- The element that triggers the tooltip references the `tooltip` element with `aria-describedby`.
- Make sure tooltips are part of the page's tab sequence, so they can receive focus.

<script>
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
</script>
