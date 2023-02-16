---
title: "Radio Buttons"
layout: "single"
description: "Radio buttons are used when options are mutually exclusive."
components: true
componentsWeb: true
images:
  - "/img/components/headers/radio-buttons.png"
keywords: forms, form
aliases:
  - "/components/radio/"
  - "/components/radio-button/"
  - "/components/radio-buttons/"
bootstrapURL: "/components/radio-buttons/"
reactBootstrapURL: "/components/radio-buttons/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-radio-group--default"
tags: [usage]
---

## Overview

Radio buttons are used to afford a single selection from two or more options.

<div class="form-group">
  <div class="custom-control custom-radio">
    <input type="radio" checked="" class="custom-control-input" id="exampleRadio" name="exampleRadio" value="customEx">
    <label class="custom-control-label" for="exampleRadio">Radio 1</label>
  </div>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="exampleRadio2" name="exampleRadio" value="customEx">
    <label class="custom-control-label" for="exampleRadio2">Radio 2</label>
  </div>
</div>
<div class="form-group ml-3">
  <div class="custom-control custom-radio">
    <input type="radio" disabled="" checked="" class="custom-control-input" id="exampleRadio3" name="exampleRadio2" value="customEx">
    <label class="custom-control-label" for="exampleRadio3">Disabled</label>
  </div>
  <div class="custom-control custom-radio">
    <input type="radio" disabled="" class="custom-control-input" id="exampleRadio4" name="exampleRadio2" value="customEx">
    <label class="custom-control-label" for="exampleRadio4">Disabled</label>
  </div>
</div>

## Usage

**Use when**

- Options are mutually exclusive.
- Visibility and quick response is a priority.
- Comparison of options needs to be clear.
- You want to emphasize options.

**Don’t use when**

- User can make multiple selections. Instead, use [Checkboxes](/components/checkboxes/).
- You are providing more than 7 options.
- You are attempting to highlight a preferred choice. Instead, use a [Dropdown](/components/dropdowns/).
- When a large number of familiar options is available.


{{< whats-changed-table >}}

| Date       | Version | Notes                                                                       | Contributors                   |
| ---------- | ------- | --------------------------------------------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0   | Border color changed to be accessible. White background added for emphasis. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
