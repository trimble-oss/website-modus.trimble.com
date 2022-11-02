---
title: "Inputs"
layout: "single"
description: ""
components: true
images:
  - "/img/components/headers/inputs.png"
component: inputs
tags: [in-field, styles]
---

## Specifications

- Label Text Color: {{< color-preview hexL="#252A2E" hexD="#6A6E79" >}}
- Input Text Color: {{< color-preview hexL="#252A2E" hexD="#FFFFFF" >}}
- Placeholder Text Color: {{< color-preview hexL="#90939F" hexD="#90939F" >}}
- Border Color: {{< color-preview hexL="#252A2E" hexD="#6A6E79" >}}
- Container Color: {{< color-preview hexL="#FFFFFF" hexD="#000000" >}}

{{< img src="/img/in-field/input-spec.png" dark="/img/in-field/input-spec-dark.svg" width="1088" height="243" class="w-100" alt="Inputs Specs" lazyload="auto" >}}

**Note:** Incab sizes only, see mobile for smaller options for in-field.

### Behaviors

- Form inputs that are in **Active** should have a 4dp border using our active color : {{< color-preview hex="#0C77BE" >}}. abled** should be: {{< color-preview hexL="#ByB9C3" hexD="#019AEB" >}}.
- Form inputs that are **invalid** should have a 4px border using our danger color: {{< color-preview hex="#da212c" >}}.
- Form inputs that are **disabled** should be: {{< color-preview hexL="#ByB9C3" hexD="#6A6E79" >}} Stroke {{< color-preview hexD="#353A40" >}}
- Form inputs that are **read only** have background color: {{< color-preview hexL="#E0E1E9" hexD="#353A40" >}}.

{{< img src="/img/in-field/input-states.png" dark="/img/in-field/input-states-dark.svg" width="100%" class="w-100" alt="Input States" >}}

#### Editorial

- When possible, add helper text below an input to further clarify selections or validation errors.
- Always mark required fields with an \* .
- Provide input constraints, such as a character limit within a text entry box, to - provide users with guidelines and improve form efficiency.
- Use multi-step forms when necessary by breaking up inputs into distinct categories.
- Provide clear and obvious action buttons. Form submission buttons should be primary.
