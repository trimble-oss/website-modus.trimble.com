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
| {{< img src="/img/in-field/btn-colour-mix-progression-primary.svg" dark="/img/in-field/btn-colour-mix-progression-primary-dark.svg" height="48" alt="Color Mix Progression" >}} | High     | Use to draw attention to the primary action on a screen. There should be only one Primary Button on a page at a time. Not all screens require a Primary Button.             |
| {{< img src="/img/in-field/btn-colour-mix-progression-secondary.svg" dark="/img/in-field/btn-colour-mix-progression-secondary-dark.svg" height="48" alt="Color Mix Progression" >}} | Medium   | Use for secondary actions on a screen. These Buttons can be used on most pages without constrictions. They appear most often in high volume use cases like Tables, or in an Action Bar.                               |
| {{< img src="/img/in-field/btn-colour-mix-progression-outline.svg" dark="/img/in-field/btn-colour-mix-progression-outline-dark.svg" height="48" alt="Color Mix Progression" >}} | Low  | Used for secondary actions to establish additional visual hierarchy. |
| {{< img src="/img/in-field/btn-colour-mix-progression-text-only.svg" dark="/img/in-field/btn-colour-mix-progression-text-only-dark.svg" height="48" alt="Color Mix Progression" >}} | Low      | Used for secondary actions to establish additional visual hierarchy. |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->


### Ancillary Buttons
<!-- prettier-ignore-start -->
| Example                              | Emphasis | When to use                                                          |
| ------------------------------------ | -------- | -------------------------------------------------------------------- |
| {{< img src="/img/in-field/btn-ancillary-icon-only.svg" dark="/img/in-field/btn-ancillary-icon-only-dark.svg" height="56" alt="Ancillary Buttons" >}} | Medium  | Primary use is in-line or in “Button Groups.” |
| {{< img src="/img/in-field/btn-ancillary-danger.svg" height="48" alt="Ancillary Buttons" >}} | Low  | Danger buttons have a different visual style to inform users of potentially destructive actions they are about to take. If using the danger button as a standalone, we recommend styling it as a secondary button. Within a set, the danger button should be styled as a primary button..|
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

**Note:** A yellow button in the Trimble brand color can be used **only in special use cases.**

## Specifications

- All buttons should be interactive and perform an action.
- They should be discoverable, easy to identify, and specific.
- Always have a text label within the button container. Icons are optional.
- Make buttons look and feel clickable.
- If using multiple buttons, label them distinctly.
- The size of the buttons should be used in proportion to the context and content around it.

<!-- prettier-ignore-start -->
| Type           | Example                                                                                                                        | Height |
|----------------| ------------------------------------------------------------------------------------------------------------------------------ | ------ |
| Small          | {{< img src="/img/in-field/btn-spec-small.svg" dark="/img/in-field/btn-spec-small-dark.svg" width="445" height="48" alt="" >}} | 48dp   |
| Default        | {{< img src="/img/in-field/btn-spec-default.svg" dark="/img/in-field/btn-spec-default-dark.svg" width="460" height="56" alt="" >}} | 56dp   |
| Large          | {{< img src="/img/in-field/btn-spec-large.svg" dark="/img/in-field/btn-spec-large-dark.svg" width="478" height="64" alt="" >}} | 64dp   |
| Floating       | {{< img src="/img/in-field/btn-spec-floating.svg" dark="/img/in-field/btn-spec-floating-dark.svg" width="515" height="56" alt="" >}} | 56dp   |
| Floating Large | {{< img src="/img/in-field/btn-spec-floating-large.svg" dark="/img/in-field/btn-spec-floating-large-dark.svg" width="530" height="64" alt="" >}} | 64dp |
| Stacked        | {{< img src="/img/in-field/btn-spec-stacked.svg" dark="/img/btn-spec-stacked-dark.svg" width="440" height="80" alt="" >}} | 80dp   |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

**Note**: All items spacing is 8dp, the stacked buttom is 4dp. Incab sizes only, see mobile for smaller options for in-field if required

### Behaviors

All buttons (including icon buttons) should have the following states:

- Default
- Hover
- Pressed
- Disabled

#### Color Mix States

<!-- prettier-ignore-start -->
| State    | Primary | Secondary                                                                         | Outline | Text Only |
| -------- | ----------------------------------------------- | ------------------------------------------ | ---------- |----------|
| Default  | {{< img src="/img/in-field/btn-primary-default.svg" dark="/img/in-field/btn-primary-default-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/btn-secondary-default.svg" dark="/img/in-field/btn-secondary-default-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/btn-secondary-pressed.svg" dark="/img/in-field/btn-secondary-pressed-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/btn-text-only-default.svg" dark="/img/in-field/btn-text-only-default-dark.svg"  height="56" alt="" >}} |
| Pressed   | {{< img src="/img/in-field/btn-primary-pressed" dark="/img/in-field/btn-primary-pressed-dark.svg" height="56" alt="" >}} | {{< img src="/img/btn-secondary-pressed.svg" dark="/img/in-field/btn-secondary-pressed-dark.svg" height="56" alt="" >}} | {{< img src="/img/btn-outline-pressed.svg" dark="/img/in-field/btn-outline-pressed-dark.svg" height="56" alt="" >}} |{{< img src="/img/in-field/btn-text-only-pressed.svg" dark="/img/in-field/btn-text-only-pressed-dark.svg" height="56" alt="" >}} |
| Focus | {{< img src="/img/in-field/btn-primary-focused.svg" dark="/img/in-field/btn-primary-focused-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/btn-secondary-focus.svg" dark="/img/in-field/btn-secondary-focus-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/btn-outline-focus.svg" dark="/img/in-field/btn-outline-focus-dark.svg" height="56" alt="" >}} |{{< img src="/img/in-field/btn-text-only-focus.svg" dark="/img/in-field/btn-text-only-focus-dark.svg" height="56" alt="" >}} |
| Disabled | {{< img src="/img/in-field/btn-primary-disabled.svg" dark="/img/in-field/btn-primary-disabled-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/btn-secondary-disabled.svg" dark="/img/in-field/btn-secondary-disabled-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/btn-outline-disabled.svg" dark="/img/in-field/btn-outline-disabled-dark.svg" height="56" alt="" >}} |{{< img src="/img/in-field/btn-text-only-disabled.svg" dark="/img/in-field/btn-text-only-disabled-dark.svg" height="56" alt="" >}} |
{class="table table-bordered table-thead-light d-none"}
<!-- prettier-ignore-end -->

**Note:** Focus state uses new blue for High contrast.

#### Ancillary Button States

<!-- prettier-ignore-start -->
| State    | background                                                                   | Line Below                                                                         |
| -------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------- |
| Default  | {{< img src="/img/in-field/accordion-background-default.svg" dark="/img/in-field/accordion-background-default-dark.svg" width="98" height="53" alt="" >}} | {{< img src="/img/in-field/accordion-line-below-default.svg" dark="/img/in-field/accordion-line-below-default-dark.svg" width="98" height="53" alt="" >}} |
| Pressed   | {{< img src="/img/in-field/accordion-background-focus.svg" dark="/img/in-field/accordion-background-focus-dark.svg" width="98" height="53" alt="" >}} | {{< img src="/img/accordion-line-below-focus.svg" dark="/img/in-field/accordion-line-below-focus-dark.svg" width="98" height="53" alt="" >}} |
| Focus | {{< img src="/img/in-field/accordion-background-disabled.svg" dark="/img/in-field/accordion-background-disabled-dark.svg" width="98" height="53" alt="" >}} | {{< img src="/img/in-field/accordion-line-below-disabled.svg" dark="/img/in-field/accordion-line-below-disabled-dark.svg" width="98" height="53" alt="" >}} |
| Disabled| {{< img src="/img/in-field/accordion-background-expanded.svg" dark="/img/in-field/accordion-background-expanded-dark.svg" width="98" height="53" alt="" >}} | {{< img src="/img/in-field/accordion-line-below-expanded.svg" dark="/img/in-field/accordion-line-below-expanded-dark.svg" width="98" height="53" alt="" >}} |
{class="table table-bordered table-thead-light d-none"}
<!-- prettier-ignore-end -->


## OEM Branding

- Primary and secondary buttons can be branded for OEMs colors.
- Primary should one of the brand colors and needs to clearly to see in the Cab.
- Secondary should be keep to a tones of gray.

{{< img src="/img/in-field/btn-oem-branding.svg" dark="/img/in-field/btn-oem-branding-dark.svg" alt="OEM branding" >}}

Icon button state colors may vary based on product. Always make sure the colors of all states (except for disabled) meet [color contrast accessibility standards](/foundations/accessibility/).
