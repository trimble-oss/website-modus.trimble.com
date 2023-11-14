---
title: "Switches"
layout: "single"
description: "Switches are used to toggle functionality."
components: true
component: switches
images:
  - "/img/in-field/headers/switches.png"
tags: [in-field, styles]
---

## Specifications

- A switch must have a visible label that clearly conveys what option a user will turn on or off.

<!-- prettier-ignore-start -->
| Type    | Example                                                                                                          | Height |
|---------| ---------------------------------------------------------------------------------------------------------------- | ------ |
| Default | {{< img src="/img/in-field/switches-spec.svg" dark="/img/in-field/switches-spec-dark.svg" width="300" alt="" >}} | 48dp   |
{class="table table-bordered table-thead-light border border-opacity-50"}

<!-- prettier-ignore-end -->

**Note:** In-cab size only. See mobile patterns (coming soon) for smaller options if required.

### Behaviors

All checkboxes should have the following states:

- Active
- Active Focus
- Active Disabled
- Default
- Default Focus
- Default Disabled

#### Switch Progression

<!-- prettier-ignore-start -->
| State  | On                                                                                                                                      | Off |
| ------ | ----------------------------------------------- |--------|
| Default  | {{< img src="/img/in-field/switches-on-default.svg" dark="/img/in-field/switches-on-default-dark.svg" width="70" alt="Example of Default Switch" >}} | {{< img src="/img/in-field/switches-off-default.svg" dark="/img/in-field/switches-off-default-dark.svg" width="70" alt="Example of Default Switch" >}}   |
| Focus | {{< img src="/img/in-field/switches-on-focus.svg" dark="/img/in-field/switches-on-focus-dark.svg" width="70" alt="Example of Default Switch" >}} | {{< img src="/img/in-field/switches-off-focus.svg" dark="/img/in-field/switches-off-focus-dark.svg" width="70" alt="Example of Default Switch" >}}   |
| Disabled  | {{< img src="/img/in-field/switches-on-disabled.svg" dark="/img/in-field/switches-on-disabled-dark.svg" width="70" alt="Example of Default Switch" >}}    | {{< img src="/img/in-field/switches-off-disabled.svg" dark="/img/in-field/switches-off-disabled-dark.svg" width="70" alt="Example of Default Switch" >}}  |
{class="table table-bordered table-thead-light border border-opacity-50"}
<!-- prettier-ignore-end -->

#### Labels & Icons

<!-- prettier-ignore-start -->
| Label Left   | Label right | Icon Right    | Icon Left | Check icon |
| ------- | ------- | --------- | ------------ | -------- |
| {{< img src="/img/in-field/switch-label-left.svg" dark="/img/in-field/switch-label-left-dark.svg" width="124" alt="" >}}   | {{< img src="/img/in-field/switch-label-right.svg" dark="/img/in-field/switch-label-right-dark.svg" width="124" alt="" >}}     | {{< img src="/img/in-field/switch-icon-left.svg" dark="/img/in-field/switch-icon-left-dark.svg" width="124" alt="" >}}    | {{< img src="/img/in-field/switch-icon-right.svg" dark="/img/in-field/switch-icon-right-dark.svg" width="124" alt="" >}}   | {{< img src="/img/in-field/switch-tick.svg" dark="/img/in-field/switch-tick-dark.svg" width="80" alt="" >}}
{class="table table-bordered table-thead-light border border-opacity-50"}
<!-- prettier-ignore-end -->

### OEM Branding

- This can be branded for OEMs as primary or brand colors.

{{< img src="/img/in-field/switches-oem.svg"  dark="/img/in-field/switches-oem-dark.svg" width="100%" class="bg-light" alt="OEM Branding" >}}

### Editorial

- Avoid acronyms.
- Use 2-5 words.
- Use the same label text for on and off states.
