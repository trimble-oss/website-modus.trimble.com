---
title: "Inputs"
layout: "single"
description: "Input fields collect information from users."
components: true
images:
  - "/img/mobile/headers/inputs.png"
component: inputs
tags: [mobile, styles]
---

## Specifications

- Label Text Color: {{< color-preview hexL="#353a40" hexD="#b7b9c3">}}
- Input Text Color: {{< color-preview hexL="#353a40" hexD="#ffffff">}}
- Placeholder Text Color: {{< color-preview hexL="#90939f" hexD="#7d808d">}}
- Border Color: {{< color-preview hexL="#353a40" hexD="#6a6e79">}}
- Focus: {{< color-preview hexL="#019aeb" hexD="#019aeb">}}
- Active: {{< color-preview hexL="#217cbb" hexD="#217cbb">}}

{{< img src="/img/mobile/inputs-specifications.svg" dark="/img/mobile/inputs-specifications-dark.svg" width="1087" height="254" alt="Input Specifications" loading="auto" >}}

- Always have a label next to the text field, either above, on the left side or login in the input.
- Label text should always be visible.
- Display the validation state clearly.  The validation message will replace Helper Text
- Try to make Label text concise. Where it must be longer (due to language translation), the label text can wrap to a second line. Truncate label at end of second line if absolutely necessary.
- Don't add validation text under helper text, as their appearance will shift content.

## Behavior

- Form inputs that are in Active should have a 2dp border using our active color: {{< color-preview hexL="#217cbb" hexD="#217cbb">}}
- Form inputs that are in Focus should have a 2dp border using our focus color: {{< color-preview hexL="#353a40" hexD="#6a6e79">}}
- Form inputs that are invalid should have a 2dp border using our danger color:
{{< color-preview hexL="#da212c" hexD="#da212c">}}
- Form inputs that are disabled should be 40% opacity.
- Form inputs that are read only have background color: {{< color-preview hexL="#e0e1e9" hexD="#171C1E">}}

{{< img src="/img/mobile/inputs-behavior.svg" dark="/img/mobile/inputs-behavior-dark.svg" width="1087" height="1098" alt="Inputs Behavior" >}}

## Editorial

- When possible, add helper text below an input to further clarify selections or validation errors.
- Always mark **required** fields with an * .
- Provide input constraints, such as a character limit within a text entry box, to provide users with guidelines and improve form efficiency.
- Use multi-step forms when necessary by breaking up inputs into distinct categories.
- Provide clear and obvious action buttons. Form submission [Buttons](/components/mobile/buttons/) should be primary.
