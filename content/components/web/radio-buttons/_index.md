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
BootstrapURL: "/docs/v2/forms/checks-radios/#radios"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-radio-group--default"
tags: [usage]
---

## Overview

Radio buttons are used to afford a single selection from two or more options.

<div class="w-50 p-3 pt-0">
<div class="form-check py-1">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check py-1">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
<div class="form-check py-1">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
  <label class="form-check-label" for="flexRadioDisabled">
    Disabled radio
  </label>
</div>
<div class="form-check py-1">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexRadioCheckedDisabled">
    Disabled checked radio
  </label>
</div>
</div>

## Usage

#### Use when

- Options are mutually exclusive.
- Visibility and quick response is a priority.
- Comparison of options needs to be clear.
- You want to emphasize options.

#### Don't use when

- User can make multiple selections. Instead, use [Checkboxes](/components/web/checkboxes/).
- You are providing more than 7 options.
- You are attempting to highlight a preferred choice. Instead, use a [Dropdown](/components/web/dropdowns/).
- When a large number of familiar options is available.

{{< whats-changed-table >}}

| Date       | Version | Notes                                                                       | Contributors                   |
| ---------- | ------- | --------------------------------------------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0   | Border color changed to be accessible. White background added for emphasis. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
