---
title: "Radio Buttons"
layout: "single"
description: "Radio buttons are used when options are mutually exclusive."
components: true
component: radio-buttons
images:
  - "/img/components/headers/radio-buttons.png"
keywords: forms, form
tags: [in-field, accessibility]
---

## Accessibility

- The radio buttons are contained in or owned by an element with role `radiogroup`.
- Each radio button element has role `radio`.
- If a radio button is selected, the `radio` element has `aria-checked` set to `true`. If it is not selected, it has `aria-checked` set to `false`.
- Each `radio` element is labelled by its content, has a visible label referenced by `aria-labelledby`, or has a label specified with `aria-label`.
- The `radiogroup` element has a visible label referenced by `aria-labelledby` or has a label specified with `aria-label`.
- If elements providing additional information about either the radio group or each radio button are present, those elements are referenced by the `radiogroup` element or radio elements with the `aria-describedby` property.
