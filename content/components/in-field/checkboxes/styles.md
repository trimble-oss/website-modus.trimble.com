---
title: "Checkboxes"
layout: "single"
description: "Checkboxes are used for a list of options where the user may select multiple options, including all or none."
components: true
hidden: true
component: checkboxes
tags: [in-field, styles]
---

## Specifications

- A checkbox must have a visible label that clearly conveys what option a user is choosing.

<!-- prettier-ignore-start -->
| Type    | Example                                                                                                                          | Height |
|---------| -------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Default | {{< img src="/img/in-field/checkbox-spec-default.svg" dark="/img/in-field/checkbox-spec-default-dark" height="56" alt="" >}}     | 56dp   |
| Focus   | {{< img src="/img/in-field/checkbox-spec-focus-dark.svg" dark="/img/in-field/checkbox-spec-focus-dark.svg" height=56" alt="" >}} | 56dp   |
{class="table table-bordered table-thead-light d-none"}
<!-- prettier-ignore-end -->

**Note:** In-cab sizes only. See mobile patterns for smaller options for in-field.

### Behaviors

All checkboxes should have the following states:

- Active
- Active Focus
- Active Disabled
- Active Error
- Default
- Default Focus
- Default Disabled
- Default Error
- Indeterminate
- Indeterminate Focus
- Indeterminate Disabled
- Indeterminate Error

#### Checkboxes Progression

<!-- prettier-ignore-start -->
| State    | Active                                                       | Default                                                  | Indeterminate       |
| -------- | ------------------------------------------------------------ | -------------------------------------------------------- | ------------------- |
| Default  | {{< img src="/img/in-field/checkbox-progression-active-default.svg" dark="/img/in-field/checkbox-progression-active-default-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/checkbox-progression-not-active-default.svg" height="56" alt="" >}} | {{< img src="/img/in-field/checkbox-progression-indeterminate-default.svg" height="56" alt="" >}} |
| Focus    | {{< img src="/img/in-field/checkbox-progression-focus.svg" dark="/img/in-field/checkbox-progression-focus-dark.svg" height="56" alt="" >}} | {{< img src="/img/checkbox-progression-not-active-focus.svg" height="56" alt="" >}} | {{< img src="/img/checkbox-progression-indeterminate-focus" height="56" alt="" >}} |
| Error | {{< img src="/img/in-field/checkbox-progression-active-error.svg" dark="/img/in-field/checkbox-progression-active-error-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/checkbox-progression-not-active-error.svg" height="56" alt="" >}} | {{< img src="/img/in-field/checkbox-progression-indeterminate-error.svg" height="56" alt="" >}} |
| Disabled | {{< img src="/img/in-field/checkbox-progression-active-disabled.svg" dark="/img/in-field/checkbox-progression-active-disabled-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/checkbox-progression-not-active-disabled.svg" height="56" alt="" >}} | {{< img src="/img/in-field/checkbox-progression-indeterminate-disabled.svg" height="56" alt="" >}} |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

**Note:** Focus state uses “global blue.”

#### Labels

<!-- prettier-ignore-start -->
| Label Right                                          | Label Left                                                                         |
|------------------------------------------------------| ---------------------------------------------------------------------------------- |
| {{< img src="/img/in-field/checkbox-label-right.svg" dark="/img/in-field/checkbox-label-right-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/checkbox-label-left-dark.svg" dark="/img/in-field/checkbox-label-left-dark.svg" height=56" alt="" >}} | 56dp   |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

### OEM Branding

- Checkboxes may be branded based on the primary color or other complementary colors for the best visibility in the cab.

{{< img src="/img/in-field/checkboxes-oem.svg" dark="/img/in-field/checkboxes-oem-dark.svg" width="100%" class="w-100" alt="Checkboxes OEM" >}}

#### Editorial

- Checkbox labels may be capitalized in two ways, depending on their length and placement on the UI:
  - Use title case for short labels (fewer than three words) that are to the left or above a checkbox.
  - Use sentence case for longer labels (more than three words) that are placed to the right of a checkbox, especially if the label reads like a phrase.

**Default**

- Use full sentences with punctuation.
- If user is consenting to something, start the sentence with “I,” and also run the phrasing you choose by compliance.

**Groups**

- Use full sentences with punctuation for the checkbox group label.
- Try to keep checkbox labels brief and start them with verbs.
