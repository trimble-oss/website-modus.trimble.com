---
title: "Sliders"
layout: "single"
description: "Sliders allow users to make selections from a range of values."
components: true
componentsWeb: true
images:
  - "/img/components/headers/sliders.png"
keywords: forms, form, range
bootstrapURL: "/components/sliders/"
reactBootstrapURL: "/components/sliders/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-slider--default"
aliases:
  - "/components/sliders/"
tags: [usage]
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

{{< whats-changed-table >}}

| Date       | Version | Notes                                      | Contributors                   |
| ---------- | ------- | ------------------------------------------ | ------------------------------ |
| 11/23/2020 | 1.0.0   | Range bar color adjusted to be accessible. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
