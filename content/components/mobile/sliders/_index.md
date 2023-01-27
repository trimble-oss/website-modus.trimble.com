---
sitemap_exclude: true
title: "Sliders"
layout: "single"
description: "Sliders allow users to make selections from a range of values."
components: true
images:
  - "/img/mobile/headers/sliders.png"
keywords: forms, form, range
component: sliders
tags: [mobile, usage]
---

## Overview

Sliders select a numeric value or range of values by moving a handle or set of handles along a bar. They are ideal for adjusting settings such as volume and brightness. The slider in its basic form should be accompanied by a label and a number input that doubles as a display for the slider’s current value.

{{< img src="/img/mobile/sliders-anatomy.svg" dark="/img/mobile/sliders-anatomy-dark.svg" width="1001" height="307" alt="Sliders Anatomy" loading="auto" >}}

## Usage

**Use when**

- Encouraging user exploration when setting a value or range of values, especially when that value has an immediate effect on a data visualization.
- A series of options is presented using a stepped slider.

**Don’t use when**

- Gathering information in a form (e.g, age or salary). Instead, use an Input box.
- Precise amount is needed and the scale is too large to afford precise interaction with the slider.
- Adjusting settings with any delay in providing user feedback.

## Specifications

- Always use with a label, even if that label is hidden.
- When a label is visible, it should clearly communicate the purpose of the range input and its values (min, max, step, value).
- Label sliders as optional when input is not required.
- Validate input as soon as users have finished interacting with a field (but not before).
- Always use with two text field components when range slider has dual thumbs to provide accessible alternatives to both the lower and upper thumbs.


## Behaviors

- Adjust a slider’s value(s) by clicking and dragging its handle(s), or by clicking anywhere on its bar.
- Changes made with sliders are immediate.

{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati  |

{{</ whats-changed-table >}}
