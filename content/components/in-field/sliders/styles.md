---
title: "Sliders"
layout: "single"
description: "Sliders allow users to make selections from a range of values."
components: true
images:
  - "/img/components/headers/sliders.png"
keywords: forms, form, range
component: sliders
tags: [in-field, styles]
---

## Specifications

- Always use with a label, even if that label is hidden.
- When a label is visible, it should clearly communicate the purpose of the range input and its values (min, max, step, value).
- Label sliders as optional when input is not required.
- Validate input as soon as users have finished interacting with a field (but not before).
- Always use with two text field components when range slider has dual thumbs to provide accessible alternatives to both the lower and upper thumbs.

{{< img src="/img/in-field/sliders-spec.svg" dark="/img/in-field/sliders-spec-dark.svg" width="100%" class="w-100" alt="Sliders Specifications" lazyload="auto" >}}

**Note:** In-cab size only. See mobile patterns (coming soon) for smaller options if required.

### Behaviors

- Adjust a slider’s value(s) by clicking and dragging its handle(s), or by clicking anywhere on its bar.
- Hovering over an active slider’s handle will change the default cursor to the grab cursor; clicking will change it to the grab cursor.
- Changes made with sliders are immediate.

All sliders should have the following states:

- Default
- Active
- Focus
- Disabled
- Error

### Sliders Progression

{{< img src="/img/in-field/sliders-states.svg" dark="/img/in-field/sliders-states-dark.svg" width="100%" class="w-100" alt="Sliders Progression" >}}

#### Labels

{{< img src="/img/in-field/sliders-label.svg" dark="/img/in-field/sliders-label-dark.svg" width="100%" class="w-100" alt="Sliders labels" >}}

#### Icon/ Buttons

![Slider with Icons and Buttons](/img/in-field/sliders-icons.svg)

#### Input

![Slider with Input](/img/in-field/sliders-input.svg)

### OEM Branding

- This can be branded with primary color.
  ![OEM branded slider](/img/in-field/sliders-with-labels-oem.svg)
