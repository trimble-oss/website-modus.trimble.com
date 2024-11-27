---
title: "Buttons"
layout: "single"
description: "Buttons are interactive elements that trigger an action or an event."
components: true
component: buttons
images:
  - "/img/in-field/headers/buttons.png"
tags: [in-field, styles]
---

<style>
body[data-url*="/buttons/"] #menu-left a[href*=radio-buttons] {
  background-color: transparent !important;
}
main td p,
main td p img {
  text-align: center;
}
</style>

## Specifications

- All buttons should be interactive and perform an action.
- They should be discoverable, easy to identify, and specific.
- Always have a text label within the button container. Icons are optional.
- Make buttons look and feel clickable.
- If using multiple buttons, label them distinctly.
- The size of the buttons should be used in proportion to the context and content around it.

<!-- prettier-ignore-start -->
| Type           | Example                                                                                                                                          | Height | Use                |
|----------------| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------------------ |
| Small          | {{< img src="/img/in-field/btn-spec-small.svg" dark="/img/in-field/btn-spec-small-dark.svg" width="445" height="48" alt="" >}}                   | 48dp   | In-page            |
| Default        | {{< img src="/img/in-field/btn-spec-default.svg" dark="/img/in-field/btn-spec-default-dark.svg" width="460" height="56" alt="" >}}               | 56dp   | Landscape Footer   |
| Large          | {{< img src="/img/in-field/btn-spec-large.svg" dark="/img/in-field/btn-spec-large-dark.svg" width="478" height="64" alt="" >}}                   | 64dp   | Landscape Footer   |
| Floating       | {{< img src="/img/in-field/btn-spec-floating.svg" dark="/img/in-field/btn-spec-floating-dark.svg" width="515" height="56" alt="" >}}             | 56dp   | Segmented Controls |
| Floating Large | {{< img src="/img/in-field/btn-spec-floating-large.svg" dark="/img/in-field/btn-spec-floating-large-dark.svg" width="530" height="64" alt="" >}} | 64dp   | Floating Screen    |
| Stacked        | {{< img src="/img/in-field/btn-spec-stacked.svg" dark="/img/in-field/btn-spec-stacked-dark.svg" width="440" height="80" alt="" >}}               | 80dp   | Portrait           |
{class="table table-bordered table-thead-light border border-opacity-50"}
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
| State    | Primary                                         | Secondary                                  | Outline    | Text Only |
| -------- | ----------------------------------------------- | ------------------------------------------ | ---------- |----------|
| Default  | {{< img src="/img/in-field/btn-primary-default.svg" dark="/img/in-field/btn-primary-default-dark.svg" width="90" alt="" >}} | {{< img src="/img/in-field/btn-secondary-default.svg" dark="/img/in-field/btn-secondary-default-dark.svg" width="90" alt="" >}} | {{< img src="/img/in-field/btn-outline-default.svg" dark="/img/in-field/btn-outline-default.svg" width="90" alt="" >}} | {{< img src="/img/in-field/btn-text-only-default.svg" dark="/img/in-field/btn-text-only-default-dark.svg"  width="90" alt="" >}} |
| Pressed   | {{< img src="/img/in-field/btn-primary-pressed.svg" dark="/img/in-field/btn-primary-pressed-dark.svg" width="90" alt="" >}} | {{< img src="/img/in-field/btn-secondary-pressed.svg" dark="/img/in-field/btn-secondary-pressed-dark.svg" width="90" alt="" >}} | {{< img src="/img/in-field/btn-outline-pressed.svg" dark="/img/in-field/btn-outline-pressed-dark.svg" width="90" alt="" >}} |{{< img src="/img/in-field/btn-text-only-pressed.svg" dark="/img/in-field/btn-text-only-pressed-dark.svg" width="90" alt="" >}} |
| Focus | {{< img src="/img/in-field/btn-primary-focused.svg" dark="/img/in-field/btn-primary-focused-dark.svg" width="90" alt="" >}} | {{< img src="/img/in-field/btn-secondary-focus.svg" dark="/img/in-field/btn-secondary-focus-dark.svg"width="90" alt="" >}} | {{< img src="/img/in-field/btn-outline-focus.svg" dark="/img/in-field/btn-outline-focus-dark.svg" width="90" alt="" >}} |{{< img src="/img/in-field/btn-text-only-focus.svg" dark="/img/in-field/btn-text-only-focus-dark.svg" width="90" alt="" >}} |
| Disabled | {{< img src="/img/in-field/btn-primary-disabled.svg" dark="/img/in-field/btn-primary-disabled-dark.svg" width="90" alt="" >}} | {{< img src="/img/in-field/btn-secondary-disabled.svg" dark="/img/in-field/btn-secondary-disabled-dark.svg" width="90" alt="" >}} | {{< img src="/img/in-field/btn-outline-disabled.svg" dark="/img/in-field/btn-outline-disabled-dark.svg" width="90" alt="" >}} |{{< img src="/img/in-field/btn-text-only-disabled.svg" dark="/img/in-field/btn-text-only-disabled-dark.svg" width="90" alt="" >}} |
{class="table table-bordered table-thead-light border border-opacity-50"}
<!-- prettier-ignore-end -->

**Note:** Focus state uses Highlight Blue for high contrast.

#### Ancillary Button States

<!-- prettier-ignore-start -->
| State    | Background                                                                         | Line Below                                                                         |
| -------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Default  | {{< img src="/img/in-field/btn-ancillary-states-icon-default.svg" dark="/img/in-field/btn-ancillary-states-icon-pressed-dark.svg" height="56" alt="" >}}   | {{< img src="/img/in-field/btn-ancillary-states-danger-default.svg" width="90" alt="" >}} |
| Pressed  | {{< img src="/img/in-field/btn-ancillary-states-icon-pressed.svg" dark="/img/in-field/btn-ancillary-states-icon-pressed-dark.svg" height="56" alt="" >}}   | {{< img src="/img/in-field/btn-ancillary-states-danger-pressed.svg" dark="/img/in-field/btn-ancillary-states-danger-pressed.svg" width="90" alt="" >}} |
| Focus    | {{< img src="/img/in-field/btn-ancillary-states-icon-focus.svg" dark="/img/in-field/btn-ancillary-states-icon-focus-dark.svg" height="56" alt="" >}}       | {{< img src="/img/in-field/btn-ancillary-states-danger-focused.svg" width="90" alt="" >}}  |
| Disabled | {{< img src="/img/in-field/btn-ancillary-states-icon-disabled.svg" dark="/img/in-field/btn-ancillary-states-icon-disabled-dark.svg" height="53" alt="" >}} | {{< img src="/img/in-field/btn-ancillary-states-danger-disabled.svg"width="90" alt="" >}} |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

#### Disabled Buttons

**The use of disabled buttons is highly discouraged.** There are a few acceptable uses:

- When an option is unavailable, such as an item or product.
- The button has been clicked, and the system is processing the initial request. The button can be disabled to prevent the user from trying to submit a duplicate request and hitting the server multiple times.
- When a user is editing a form, but the application has not detected any changes made by the user.

### OEM Branding

- Primary and secondary buttons may be branded for OEM colors.
- Primary button should be one of the brand colors and needs to be clearly visible in the cab under variable light conditions. Make sure it meets [color contrast accessibility standards](/foundations/accessibility/).
- Secondary button should be restricted to a tone of gray.

{{< img src="/img/in-field/btn-oem-branding.svg" dark="/img/in-field/btn-oem-branding-dark.svg" alt="OEM branding" >}}

Icon button state colors may vary based on product. Always make sure the colors of all states (except for disabled) meet [color contrast accessibility standards](/foundations/accessibility/).
