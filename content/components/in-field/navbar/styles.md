---
title: "Navbar"
layout: "single"
description: "The navbar provides context through globally accessible menu options."
components: true
component: Navbar
images:
  - "/img/in-field/headers/navbar.png"
tags: [in-field, styles]
---

## Specifications

<!-- prettier-ignore-start -->
| Size    | Example                                                                                                                           | Height | Use Case |
| ------- | --------------------------------------------------------------------------------------------------------------------------------- |--------|----------|
| Default | {{< img src="/img/in-field/nav-spec.svg" dark="/img/in-field/nav-spec-dark.svg" width="706" alt="Example Size" loading="auto" >}} | 60px   | Header   |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

**Note:** When logo is left to the edge, increase padding to 16dp. In-cab size only. See mobile patterns (coming soon) for smaller options if required.

- Navbar background color should be white or Trimble Blue Dark.
- Divider line: use a 1px bottom border when there is a sub-header or side panel or when page background is white (rather than the standard Trimble Gray Light).
- Shadow: use Level 2 shadow in the event page content scrolls behind and underneath the header. Level 3 shadow should be used for menu overlays.
  Product logo and Profile avatar are the only required elements. Other elements are optional and contextual.
- Product name should be used in the header communicated via an approved logo. The product logo is relevant to the company brand providing the service (e.g., Trimble, Tekla, SketchUp, Viewpoint) and follows Trimble product logo guidelines.
  Don’t use the Trimble corporate logo.
- Don’t combine the Trimble corporate logo and name of the application.
- Don’t use the Trimble corporate logo and a customer logo side-by-side.
- Customer logos: some existing applications allow for a customer logo replacement.
- Only a single product logo should display in the header.
- Solid icon style should be used in the header (for consistency across apps).
- Display order of app header elements:

### Color Options

- Navbar background color can be white or Trimble Dark Blue and buttons are only Trimble Gray and Reversed.

### Navbar Button State Examples

<!-- prettier-ignore-start -->
| Size     | Trimble Background                                                                                    | Trimble Blue Background |
| -------- | ----------------------------------------------------------------------------------------------------- |-------------------------|
| Default  | {{< img src="/img/in-field/nav-state-white-default.svg" dark="/img/in-field/nav-state-default-dark.svg" width="200" alt="State Default" >}}    | {{< img src="/img/in-field/nav-state-blue-default.svg" width="200" alt="State Pressed Blue" >}}  |
| Pressed  | {{< img src="/img/in-field/nav-state-white-pressed.svg" dark="/img/in-field/nav-state-pressed-dark.svg" width="200" alt="State Pressed" >}}    | {{< img src="/img/in-field/nav-state-blue-pressed.svg" width="200" alt="State Pressed Blue" >}}   |
| Focus    | {{< img src="/img/in-field/nav-state-focus.svg" dark="/img/in-field/nav-state-focus-dark.svg" width="200" alt="State Focus" >}}          | {{< img src="/img/in-field/nav-state-blue-focus.svg" width="200" alt="State Focus Blue" >}}       |
| Disabled | {{< img src="/img/in-field/nav-state-white-disabled.svg" dark="/img/in-field/nav-state-disabled-dark.svg" width="200" alt="State Disabled" >}} | {{< img src="/img/in-field/nav-state-blue-disabled.svg" width="200" alt="State Disabled Blue" >}} |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

### OEM Branding

- This bar can branded for OEMs.

- Colours and brand logo can be changed.

{{< img src="/img/in-field/navbar-oem.svg" dark="/img/in-field/navbar-oem-dark.svg" class="w-100" width="100%" alt="Navbar OEM example" >}}

### Editorial

- Capitalize proper nouns.
- Use title case for menu titles (e.g. Notifications).
- Use sentence case for app descriptions and buttons (while preserving proper nouns).
