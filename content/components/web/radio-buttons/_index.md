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

## Specifications

- Always stack radio buttons vertically. Horizontal variation should not be used.
- Uses the same `:hover` and `:active` styles as the primary [Button](/components/buttons/).
- A set of radio buttons should not default to having one option selected.
- A heading much accompany a set of radio buttons.

<table class="table table-bordered">
  <tr>
    <td width="50%">
      <div class="custom-control custom-radio">
        <input
          type="radio"
          checked=""
          class="custom-control-input"
          id="customRadio"
          name="example"
          value="customEx"
        />
        <label class="custom-control-label" for="customRadio">Radio 1</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="customRadio2"
          name="example"
          value="customEx2"
        />
        <label class="custom-control-label" for="customRadio2">Radio 2</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="customRadio3"
          name="example"
          value="customEx3"
        />
        <label class="custom-control-label" for="customRadio3">Radio 3</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          type="radio"
          class="custom-control-input"
          id="customRadio4"
          name="example"
          value="customEx4"
        />
        <label class="custom-control-label" for="customRadio4">Radio 4</label>
      </div>
    </td>
    <td>
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          checked=""
          class="custom-control-input"
          id="customRadio5"
          name="example2"
          value="customEx5"
        />
        <label class="custom-control-label" for="customRadio5">Radio 1</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          class="custom-control-input"
          id="customRadio6"
          name="example2"
          value="customEx6"
        />
        <label class="custom-control-label" for="customRadio6">Radio 2</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          class="custom-control-input"
          id="customRadio7"
          name="example2"
          value="customEx7"
        />
        <label class="custom-control-label" for="customRadio7">Radio 3</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          class="custom-control-input"
          id="customRadio8"
          name="example2"
          value="customEx8"
        />
        <label class="custom-control-label" for="customRadio8">Radio 4</label>
      </div>
    </td>
  </tr>
  <tr>
    <td class="do">
      <strong class="text-success">Do</strong> stack options for clear visual
      scanning
    </td>
    <td class="dont">
      <strong class="text-danger">Don’t</strong> span horizontally as it is more
      difficult to scan
    </td>
  </tr>
</table>

### Behaviors

- A set of radio buttons should default to having one option selected, generally the first option. However, if pre-selection of an option results in incorrect assumptions (i.e., "Male" or "Female") then no option should be selected by default.
- If selecting no option is a viable choice, include a radio button within the group with an appropriate label, i.e. “None”.
- A radio button’s label is part of the clickable area of the control.

### Editorial

- If necessary, a heading can accompany a set of radio buttons to provide further clarity for the user. Use sentence-case (only the first word in a phrase and any proper nouns capitalized).
- Always use a clear and concise label for radio buttons. Be explicit about the action that will follow if the radio button is selected. Labels appear to the right of radio buttons. Use sentence-style capitalization (only the first word in a phrase and any proper nouns capitalized) and no more than three words.

{{< whats-changed-table >}}

| Date       | Version | Notes                                                                       | Contributors                   |
| ---------- | ------- | --------------------------------------------------------------------------- | ------------------------------ |
| 11/23/2020 | 1.0.0   | Border color changed to be accessible. White background added for emphasis. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
