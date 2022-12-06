---
title: "Radio Buttons"
layout: "single"
description: "Radio buttons are used when options are mutually exclusive."
components: true
component: radio-buttons
images:
  - "/img/in-field/headers/radio-buttons.png"
keywords: forms, form
tags: [in-field, styles]
---

## Specifications

- Always stack radio buttons vertically. Horizontal variation should not be used.
- A set of radio buttons should not default to having one option selected.
- A heading much accompany a set of radio buttons.

{{< img src="/img/in-field/radios-specs.svg" dark="/img/in-field/radios-specs-dark.svg" width="100%" class="w-100" alt="Radio Buttons Specifications" lazyload="auto" >}}

**Note:**  In-cab size only. See mobile patterns (coming soon) for smaller options if required.

### Behaviors

- A set of radio buttons should default to having one option selected, generally the first option. However, if pre-selection of an option results in incorrect assumptions (i.e., “Male” or “Female”) then no option should be selected by default.
- If selecting no option is a viable choice, include a radio button within the group with an appropriate label, i.e. “None.”
- A radio button’s label is part of the clickable area of the control.

#### Checkboxes Progression

<!-- prettier-ignore-start -->
| State    | Off      | On  |
| -------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| Default  | {{< img src="/img/in-field/radio-btn-off.svg" width="48" alt="" >}} | {{< img src="/img/in-field/radio-btn-on.svg" dark="/img/in-field/radio-btn-on-dark.svg" width="48" alt="" >}} |
| Focus    | {{< img src="/img/in-field/radio-btn-off-focus.svg" width="48" alt="" >}} | {{< img src="/img/in-field/radio-btn-on-focus.svg" dark="/img/in-field/radio-btn-on-focus-dark.svg" width="48" alt="" >}} |
| Disabled | {{< img src="/img/in-field/radio-btn-off-disabled.svg" width="48" alt="" >}} | {{< img src="/img/in-field/radio-btn-on-disabled.svg" dark="/img/in-field/radio-btn-on-disabled-dark.svg" width="48" alt="" >}} |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

#### Labels


<!-- prettier-ignore-start -->
| Label Left                                                                                                     | Label Right                                                                                                      |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| {{< img src="/img/in-field/radio-button-label-left.svg" dark="/img/in-field/radio-button-label-left-dark.svg" width="100" alt="" >}} | {{< img src="/img/in-field/radio-button-label-right.svg" dark="/img/in-field/radio-button-label-right-dark.svg" width="100" alt="" >}} |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

#### Editorial

- If necessary, a heading can accompany a set of radio buttons to provide further clarity for the user. Use sentence-case (only the first word in a phrase and any proper nouns capitalized).
- Always use a clear and concise label for radio buttons. Be explicit about the action that will follow if the radio button is selected. Labels appear to the right of radio buttons. Use sentence-style capitalization (only the first word in a phrase and any proper nouns capitalized) and no more than three words.
