---
title: "Sliders"
layout: "single"
description: "Sliders allow users to make selections from a range of values."
components: true
componentsWeb: true
images:
  - "/img/components/headers/sliders.png"
keywords: forms, form, range
bootstrapURL: "/docs/v2/components/sliders/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-slider--default"
aliases:
  - "/components/sliders/"
tags: [usage]
---

## Overview

Sliders select a numeric value or range of values by moving a handle or set of handles along a bar. They are ideal for adjusting settings such as volume and brightness. The slider in its basic form should be accompanied by a label and a number input that doubles as a display for the slider’s current value.

<div class="mx-auto w-75">
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range mb-3" id="customRange1">

<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled>

</div>

## Usage

#### Use when

- Encouraging user exploration when setting a value or range of values, especially when that value has an immediate effect on a data visualization.
- A series of options is presented using a stepped slider.

#### Don't use when

- Gathering information in a form (e.g, age or salary). Instead, use an [Input](/components/web/inputs/) box.
- Precise amount is needed and the scale is too large to afford precise interaction with the slider.
- Adjusting settings with any delay in providing user feedback.

{{< whats-changed-table >}}

| Date       | Version | Notes                                      | Contributors                   |
| ---------- | ------- | ------------------------------------------ | ------------------------------ |
| 11/23/2020 | 1.0.0   | Range bar color adjusted to be accessible. | E. Bohn, L. Kause, N. Springer |

{{</ whats-changed-table >}}
