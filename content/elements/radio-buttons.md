---
title: "Radio Buttons"
layout: "single"
description: "Radio buttons are used when options are mutually exclusive."
components: true
keywords: forms, form
aliases:
  - "/radio.html"
  - "/elements/radio/"
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

- User can make multiple selections. Instead, use [Checkboxes](/elements/checkboxes/).
- You are providing more than 7 options.
- You are attempting to highlight a preferred choice. Instead, use a [Dropdown](/elements/dropdowns/).
- When a large number of familiar options is available.

## Specifications

- Always stack radio buttons vertically. Horizontal variation should not be used.
- Uses the same `:hover` and `:active` styles as the primary [Button](/elements/buttons/).
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

### Accessibility

- The radio buttons are contained in or owned by an element with role `radiogroup`.
- Each radio button element has role `radio`.
- If a radio button is selected, the `radio` element has `aria-checked` set to `true`. If it is not selected, it has `aria-checked` set to `false`.
- Each `radio` element is labelled by its content, has a visible label referenced by `aria-labelledby`, or has a label specified with `aria-label`.
- The `radiogroup` element has a visible label referenced by `aria-labelledby` or has a label specified with `aria-label`.
- If elements providing additional information about either the radio group or each radio button are present, those elements are referenced by the `radiogroup` element or radio elements with the `aria-describedby` property.
- Right and left arrow keys and up and down arrow keys move focus sequentially between radio button in the group. Once the focus comes to the first or last radio buttons in the group, it cycles again.
- If the focused radio button is not selected, "Space" key deselects the currently selected radio button and selects the focused radio button. It the focused radio button is selected, pressing the "Space" key does nothing.

{{< whats-changed-table >}}
| Date       | Version | Notes          | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 11/23/2020 | 1.0.0   | Border color changed to be accessible. White background added for emphasis. | E. Bohn, L. Kause, N. Springer     |
{{</ whats-changed-table >}}
