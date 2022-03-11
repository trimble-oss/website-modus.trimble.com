---
title: "Sliders"
layout: "single"
description: "Sliders allow users to make selections from a range of values."
components: true
images:
  - "/img/headers/components/sliders.png"
keywords: forms, form, range
aliases:
  - "/elements/sliders/"
bootstrapURL: "/components/sliders/"
reactBootstrapURL: "/components/sliders/"
---

## Overview

Sliders select a numeric value or range of values by moving a handle or set of handles along a bar. They are ideal for adjusting settings such as volume and brightness. The slider in its basic form should be accompanied by a label and a number input that doubles as a display for the slider’s current value.

<label for="customRange1">Example range</label>
<input type="range" class="custom-range" id="customRange1">

<label for="disabledRange">Disabled range</label>
<input type="range" class="custom-range" disabled="" id="disabledRange">

## Usage

**Use when**

- Encouraging user exploration when setting a value or range of values, especially when that value has an immediate effect on a data visualization.
- A series of options is presented using a stepped slider.

**Don’t use when**

- Gathering information in a form (e.g, age or salary). Instead, use an [Input](/components/inputs/) box.
- Precise amount is needed and the scale is too large to afford precise interaction with the slider.
- Adjusting settings with any delay in providing user feedback.

## Specifications

- Always use with a label, even if that label is hidden.
- When a label is visible, it should clearly communicate the purpose of the range input and its values (min, max, step, value).
- Label sliders as optional when input is not required.
- Validate input as soon as users have finished interacting with a field (but not before).
- Always use with two text field components when range slider has dual thumbs to provide accessible alternatives to both the lower and upper thumbs.

### Behaviors

- Adjust a slider’s value(s) by clicking and dragging its handle(s), or by clicking anywhere on its bar.
- Hovering over an active slider’s handle will change the default cursor to the grab cursor; clicking will change it to the grab cursor.
- Changes made with sliders are immediate.

### Accessibility

- The element serving as the focusable slider control has role `slider`.
- The slider element has the `aria-valuenow` property set to a decimal value representing the current value of the slider.
- The slider element has the `aria-valuemin` property set to a decimal value representing the minimum allowed value of the slider.
- The slider element has the `aria-valuemax` property set to a decimal value representing the maximum allowed value of the slider.
- If the value of `aria-valuenow` is not user-friendly (e.g., the day of the week is represented by a number) the `aria-valuetext` property is set to a string that makes the slider value understandable (e.g., "Monday").
- If the slider has a visible label, it is referenced by `aria-labelledby` on the slider element. Otherwise, the slider element has a label provided by `aria-label`.
- If the slider is vertically oriented, it has `aria-orientation` set to `vertical`. The default value of `aria-orientation` for a slider is `horizontal`.
- Make sure the thumb is in the page tab sequence.
- Right and Up arrows increase the value of the slider by one step; Left and Down arrows decrease the value of the slider by one step.
- When using a multi-thumb slider, each thumb is in the page tab sequence and has the same keyboard interaction as a single-thumb slider.

{{< whats-changed-table >}}
| Date | Version | Notes | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 11/23/2020 | 1.0.0 | Range bar color adjusted to be accessible. | E. Bohn, L. Kause, N. Springer |
{{</ whats-changed-table >}}
