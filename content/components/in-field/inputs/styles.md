---
title: "Inputs"
layout: "single"
description: ""
components: true
images:
  - "/img/in-field/headers/inputs.png"
component: inputs
tags: [in-field, styles]
---

## Specifications

- Label Text Color: {{< color-preview hexL="#252A2E" hexD="#6A6E79" >}}
- Input Text Color: {{< color-preview hexL="#252A2E" hexD="#FFFFFF" >}}
- Placeholder Text Color: {{< color-preview hexL="#90939F" hexD="#90939F" >}}
- Border Color: {{< color-preview hexL="#252A2E" hexD="#6A6E79" >}}
- Container Color: {{< color-preview hexL="#FFFFFF" hexD="#000000" >}}

<!-- prettier-ignore-start -->
| Size    | Example                                                                                                                | Height |
| ------- | ---------------------------------------------------------------------------------------------------------------------- |--------|
| Default | {{< img src="/img/in-field/input-spec.svg" dark="/img/in-field/input-spec-dark.svg" width="700" alt="Example Size" >}} | 56px   |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

**Note:** Incab sizes only, see mobile for smaller options for in-field.

### Behaviors

- Always have a label next to the text field, either above, on the left side or login in the input.
- Label text should always be visible.
- Display the validation state clearly. The validation message will replace Helper Text.
- Try to make Label text concise. Where it must be longer (due to language translation), the label text can wrap to a second line. Truncate label at end of second line if absolutely necessary.
- Don't add validation text under helper text, as its appearance will shift content.
- Form inputs that are in **Active** should have a 4dp border using our active color : {{< color-preview hex="#0C77BE" >}}. Labeled\*\* should be: {{< color-preview hexL="#B7B9C3" hexD="#019AEB" >}}.
- Form inputs that are **invalid** should have a 4px border using our danger color: {{< color-preview hex="#da212c" >}}.
- Form inputs that are **disabled** should be: {{< color-preview hexL="#B7B9C3" hexD="#6A6E79" >}} Stroke {{< color-preview hexD="#353A40" >}}
- Form inputs that are **read only** have background color: {{< color-preview hexL="#E0E1E9" hexD="#353A40" >}}.

<!-- prettier-ignore-start -->
| State     | Example                                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Default   | {{< img src="/img/in-field/inputs-default.svg" dark="/img/in-field/inputs-default-dark.svg" width="328" alt="Example of a Default Input" >}}    |
| Filled    | {{< img src="/img/in-field/inputs-filled.svg" dark="/img/in-field/inputs-filled-dark.svg" width="328" alt="Example of a filled Input" >}}       |
| Focus     | {{< img src="/img/in-field/inputs-focus.svg" dark="/img/in-field/inputs-focus-dark.svg" width="328" alt="Example of a focus Input" >}}          |
| Info      | {{< img src="/img/in-field/inputs-info.svg" dark="/img/in-field/inputs-info-dark.svg" width="328" alt="Example of a info Input" >}}             |
| Success   | {{< img src="/img/in-field/inputs-success.svg" dark="/img/in-field/inputs-success-dark.svg" width="328" alt="Example of a success Input" >}}    |
| Warning   | {{< img src="/img/in-field/inputs-warning.svg" dark="/img/in-field/inputs-warning-dark.svg" width="328" alt="Example of a warning Input" >}}    |
| Error     | {{< img src="/img/in-field/inputs-error.svg" dark="/img/in-field/inputs-error-dark.svg" width="328" alt="Example of a error Input" >}}          |
| Disabled  | {{< img src="/img/in-field/inputs-disabled.svg" dark="/img/in-field/inputs-disabled-dark.svg" width="328" alt="Example of a disabled Input" >}} |
| Read only | {{< img src="/img/in-field/inputs-readonly.svg" dark="/img/in-field/inputs-readonly-dark.svg" width="328" alt="Example of a readonly Input" >}} |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

**Label above or on the side**

For most applications, use the label above, but to reduce scrolling, use the side label for inputs.
{{< img src="/img/in-field/inputs-label-top-side.svg" dark="/img/in-field/inputs-label-top-side-dark.svg" width="700" alt="/Input label top and side" >}}

### Editorial

- When possible, add helper text below an input to further clarify selections or validation errors.
- Always mark **required** fields with an \* .
- Provide input constraints, such as a character limit within a text entry box, to - provide users with guidelines and improve form efficiency.
- Use multi-step forms when necessary by breaking up inputs into distinct categories.
- Provide clear and obvious action buttons. Form submission buttons should be primary.
