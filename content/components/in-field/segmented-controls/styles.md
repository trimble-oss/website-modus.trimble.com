---
title: "Segmented Controls"
layout: "single"
description: "A segmented control is a linear set of two or more segments, each of which functions as a button."
components: true
component: segmented-controls
images:
  - "/img/in-field/headers/segmented-controls.png"
tags: [in-field, styles, hide-accessibility]
---

## Specifications

<!-- prettier-ignore-start -->
| State     | Example                                                                                           | Height | Use    |
| --------- | ------------------------------------------------------------------------------------------------- |--------|--------|
| Text only | {{< img src="/img/in-field/segmented-controls-spec-text.svg" dark="/img/in-field/segmented-controls-spec-text-dark.svg" width="743" alt="Segmented Controls With Text" loading="eager" >}}   | 56dp   | Form  |
| Default   | {{< img src="/img/in-field/segmented-controls-spec-icon.svg" dark="/img/in-field/segmented-controls-spec-icon-dark.svg" width="743" alt="Segmented Controls With Text" loading="eager" >}}   | 56dp   | Form  |
| Floating  | {{< img src="/img/in-field/segmented-controls-spec-floating.svg" dark="/img/in-field/segmented-controls-spec-floating-dark.svg" width="743" alt="Segmented Controls Floating" loading="eager" >}} | 56dp   | Floating content  |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

**Note:** In-cab size only. See mobile patterns (coming soon) for smaller options if required.

### Behaviors

- Within a segmented control, all segments are usually equal in width. Like buttons, segments can contain text or images. Segments can also have text labels beneath them (or beneath the control as a whole).
- In general, keep segment size consistent.

### Segments Controls Progression

All segments controls should have the following states:

- Default/Active
- Focus
- Disabled

<!-- prettier-ignore-start -->
| State    | Primary                                                                                           | Secondary |
| -------- | ------------------------------------------------------------------------------------------------- | --------- |
| Default  | {{< img src="/img/in-field/segmented-controls-primary-default.svg" dark="/img/in-field/segmented-controls-primary-default-dark.svg" width="423" alt="Segmented Controls Primary" >}}   | {{< img src="/img/in-field/segmented-controls-secondary-default.svg" dark="/img/in-field/segmented-controls-secondary-default-dark.svg" width="423" alt="Segmented Controls Secondary" >}}  |
| Focus    | {{< img src="/img/in-field/segmented-controls-primary-focus.svg" dark="/img/in-field/segmented-controls-primary-focus-dark.svg" width="423" alt="Segmented Controls Primary Focus" >}}   | {{< img src="/img/in-field/segmented-controls-secondary-focus.svg" dark="/img/in-field/segmented-controls-secondary-focus-dark.svg" width="423" alt="Segmented Secondary Focus" >}}   |
| Disabled | {{< img src="/img/in-field/segmented-controls-primary-disabled.svg" dark="/img/in-field/segmented-controls-primary-disabled-dark.svg" width="423" alt="Segmented Controls Primary Disabled" >}}   | {{< img src="/img/in-field/segmented-controls-secondary-disabled.svg" dark="/img/in-field/segmented-controls-secondary-disabled-dark.svg" width="423" alt="Segmented Controls Secondary Disabled" >}}   |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

### OEM Branding

- Use the primary and secondary button colors

{{< img src="/img/in-field/segmented-controls-oem.png" dark="/img/in-field/segmented-controls-oem-dark.png" width="962" height="180" alt="Segmented Controls OEM" >}}
