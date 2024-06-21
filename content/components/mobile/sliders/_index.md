---
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

{{< img src="/img/mobile/sliders.svg" dark="/img/mobile/sliders-dark.svg" width="961" height="260" class="w-100" alt="Sliders Example" >}}

## Overview

Sliders select a numeric value or range of values by moving a handle or set of handles along a bar. They are ideal for adjusting settings such as volume and brightness. The slider in its basic form should be accompanied by a label and a number input that doubles as a display for the slider’s current value.

## Usage

#### Use when

- Encouraging user exploration when setting a value or range of values, especially when that value has an immediate effect on a data visualization.
- A series of options is presented using a stepped slider.

#### Don't use when

- Gathering information in a form (e.g, age or salary). Instead, use an [Input](/components/mobile/inputs/) box.
- Precise amount is needed and the scale is too large to afford precise interaction with the slider.
- Adjusting settings with any delay in providing user feedback.

## Types

### Continuous Sliders

Continuous sliders allow users to make selections along a subjective range thus don’t require a specific value.

{{< img src="/img/mobile/sliders-continuous.svg" dark="/img/mobile/sliders-continuous-dark.svg" width="961" height="797" alt="Sliders Continuous With No Labels" >}}

### Discrete Sliders

Discrete sliders display a numeric value label upon dragging the handle, or allow users to input an exact value. Tick marks are also often used with discrete slides but are optional.

{{< img src="/img/mobile/sliders-discrete.svg" dark="/img/mobile/sliders-discrete-dark.svg" width="961" height="286" alt="Sliders Discrete with Tooltip showing" >}}

### Sliders with Steps

{{< img src="/img/mobile/sliders-steps.svg" dark="/img/mobile/sliders-steps-dark.svg" width="961" height="286" alt="Sliders with steps" >}}

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors                                                                                                                          |
| ---------- | ------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, I. Perez, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati |

{{</ whats-changed-table >}}
