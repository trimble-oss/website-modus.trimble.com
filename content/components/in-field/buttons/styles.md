---
title: "Buttons"
layout: "single"
description: "Buttons are interactive elements that trigger an action or an event."
components: true
hidden: true
component: buttons
tags: [in-field, styles]
---

<style>
body[data-url*="/buttons/"] #menu-left a[href*=radio-buttons] {
  background-color: transparent !important;
}
</style>

## Types

 In-field uses a mix of both color and structural progression for best contrast outside.

### Color Mix Progression

<!-- prettier-ignore-start -->
| Example                              | Emphasis | When to use                                                          |
| ------------------------------------ | -------- | -------------------------------------------------------------------- |
| {{< img src="" width="99" alt="" >}} | High     | Use to draw attention to the primary action on a screen.             |
| {{< img src="" width="99" alt="" >}} | Medium   | Use for secondary actions on a screen.                               |
| {{< img src="" width="99" alt="" >}} | Medium   | Used for secondary actions to establish additional visual hierarchy. |
| {{< img src="" width="99" alt="" >}} | Low      | Used for secondary actions to establish additional visual hierarchy. |
{class="table table-bordered table-thead-light d-none"}
<!-- prettier-ignore-end -->

{{< img src="/img/in-field/btn-color-mix-buttons.svg" dark="/img/in-field/btn-color-mix-buttons-dark.svg" alt="Color Mix Progresssion" class="w-100" lazyload="auto" >}}

### Ancillary Buttons

{{< img src="/img/in-field/btn-ancillary-buttons.svg" dark="/img/in-field/btn-ancillary-buttons-dark.svg" alt="Ancillary Buttons" class="w-100" >}}

**Note:** A yellow button in the Trimble brand color can be used **only in special use cases.**

## Specifications

- All buttons should be interactive and perform an action.
- They should be discoverable, easy to identify, and specific.
- Always have a text label within the button container. Icons are optional.
- Make buttons look and feel clickable.
- If using multiple buttons, label them distinctly.
- The size of the buttons should be used in proportion to the context and content around it.

{{< img src="/img/in-field/btn-spec.svg" dark="/img/in-field/btn-spec-dark.svg" class="w-100" alt="Buttons" >}}

**Note**: All items spacing is 8dp, the stacked buttom is 4dp. Incab sizes only, see mobile for smaller options for in-field if required

### Behaviors

All buttons (including icon buttons) should have the following states:

- Default
- Hover
- Pressed
- Disabled

#### Color Mix States

{{< img src="/img/in-field/btn-color-mix-states.svg" dark="/img/in-field/btn-color-mix-states-dark.svg" class="w-100" alt="Color Mix States" >}}

**Note:** Focus state uses new blue for High contrast.

#### Ancillary Button States

{{< img src="/img/in-field/btn-ancillary-states.svg" dark="/img/in-field/btn-ancillary-states-dark.svg" alt="Ancillary Button States" >}}

## OEM Branding

- Primary and secondary buttons can be branded for OEMs colors.
- Primary should one of the brand colors and needs to clearly to see in the Cab.
- Secondary should be keep to a tones of gray.

{{< img src="/img/in-field/btn-oem-branding.svg" dark="/img/in-field/btn-oem-branding-dark.svg" alt="OEM branding" >}}

Icon button state colors may vary based on product. Always make sure the colors of all states (except for disabled) meet [color contrast accessibility standards](/foundations/accessibility/).
