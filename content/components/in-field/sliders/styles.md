---
title: "Sliders"
layout: "single"
description: "Sliders allow users to make selections from a range of values."
components: true
images:
  - "/img/in-field/headers/sliders.png"
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

<!-- prettier-ignore-start -->
| Size    | Example                                                                                           | Height | Use |
| ------- | ------------------------------------------------------------------------------------------------- |--------|--------|
| Default | {{< img src="/img/in-field/slider-spec.svg" dark="/img/in-field/slider-spec-dark.svg" width="600" alt="Slider Spec" loading="auto" >}} | 56dp   | Form   |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

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

### Sliders Progression

<!-- prettier-ignore-start -->
| State    | Primary                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------- |
| Default  | {{< img src="/img/in-field/slider-default.svg" dark="/img/in-field/slider-default-dark.svg" width="220" alt="Slider Default" >}}   |
| Pressed  | {{< img src="/img/in-field/slider-pressed.svg" dark="/img/in-field/slider-pressed-dark.svg" width="220" alt="Slider Pressed" >}}  |
| Focus    | {{< img src="/img/in-field/slider-focus.svg" dark="/img/in-field/slider-focus-dark.svg" width="220" alt="Segmented Controls Primary Disabled" >}}   |
| Disabled | {{< img src="/img/in-field/slider-disabled.svg" dark="/img/in-field/slider-focus-dark.svg" width="220" alt="Slider Disabled" >}}   |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

#### Combination

The slider can have many different combination like icons, input, buttons.
<!-- prettier-ignore-start -->
| Label  | Variations                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------- |
| Left | {{< img src="/img/in-field/slider-label left-icon-left-right-number.svg" dark="/img/in-field/slider-label left-icon-left-right-number-dark.svg" width="559" alt="Slider Options left label" >}}   |
Above| {{< img src="/img/in-field/slider-label above-input-buttons-right.svg" dark="/img/in-field/slider-label above-input-buttons-right-dark.svg" width="508" alt="Slider Pressed" >}}  |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

### OEM Branding

- This can be branded with primary color.

{{< img src="/img/in-field/sliders-with-labels-oem.svg" dark="/img/in-field/sliders-with-labels-oem-dark.svg" width="1088" height="162" class="w-100" alt="Sliders example" loading="auto" >}}
