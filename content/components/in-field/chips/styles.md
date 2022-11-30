---
title: "Chips"
layout: "single"
description: "Chips represent small blocks of information and are commonly used for input or filtering."
components: true
component: Chips
images:
  - "/img/components/headers/chips.png"
tags: [in-field, styles]
---

## Specifications

There are one size of Chips:

- By default, Chips should have a height of 48dp, border radius 30dp, a font size 22sp Bold and use Primary, Secondary, Alert, Error color options.

<!-- prettier-ignore-start -->
| Type    | Example                                                                                                          | Height |
|---------| ---------------------------------------------------------------------------------------------------------------- | ------ |
| Default | {{< img src="/img/in-field/chips-state.svg" dark="/img/in-field/chips-state-dark.svg" width="350" alt="" >}}     | 48dp   |
{class="table table-bordered table-thead-light"}

<!-- prettier-ignore-end -->

### Color Progression

<!-- prettier-ignore-start -->
| State    | Primary- solid                                                                   | Secondary - solid                                                                         | Alert - solid  | Danger - solid |
| ---------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------- | ------------------------ |
| Default  | {{< img src="/img/in-field/chips-color-progression-primary-default.svg" dark="/img/in-field/chips-color-progression-primary-default-dark.svg" width="150" alt="" >}} | {{< img src="/img/in-field/chips-color-progression-secondary-default.svg" dark="/img/in-field/chips-color-progression-secondary-default-dark.svg" width="150" alt="" >}} | {{< img src="/img/in-field/chips-color-progression-warning-default.svg" width="150" alt="" >}} |{{< img src="/img/in-field/chips-color-progression-error-default.svg" width="150" alt="" >}} |
| Pressed   | {{< img src="/img/in-field/chips-color-progression-primary-pressed.svg" dark="/img/in-field/chips-color-progression-primary-pressed-dark.svg"  width="150" alt="" >}} | {{< img src="/img/in-field/chips-color-progression-secondary-pressed.svg" dark="/img/in-field/chips-color-progression-secondary-pressed-dark.svg" width="150" alt="" >}} | {{< img src="/img/in-field/chips-color-progression-warning-pressed.svg" width="150" alt="" >}} | {{< img src="/img/in-field/chips-color-progression-error-pressed.svg" width="150" alt="" >}} |
| Focus | {{< img src="/img/in-field/chips-color-progression-primary-focus.svg" dark="/img/in-field/chips-color-progression-primary-focus-dark.svg" width="150" alt="" >}} | {{< img src="/img/in-field/chips-color-progression-secondary-focus.svg" dark="/img/in-field/chips-color-progression-secondary-focus-dark.svg" width="150" alt="" >}} | {{< img src="/img/in-field/chips-color-progression-warning-focus.svg" width="150" alt="" >}} | {{< img src="/img/in-field/chips-color-progression-error-focus.svg" width="150" alt="" >}} |
| Disabled | {{< img src="/img/in-field/chips-color-progression-primary-disabled.svg" dark="/img/in-field/chips-color-progression-primary-disabled-dark.svg" width="150" alt="" >}} | {{< img src="/img/in-field/chips-color-progression-secondary-disabled.svg" dark="/img/in-field/chips-color-progression-secondary-disabled-dark.svg" width="150" alt="" >}} | {{< img src="/img/in-field/chips-color-progression-warning-disabled.svg" width="150" alt="" >}} | {{< img src="/img/in-field/chips-color-progression-error-disabled.svg" width="150" alt="" >}} |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

### Behaviors

- Tap a chip to select it.
- Multiple chips may be selected or unselected.
