---
title: "Sliders"
layout: "single"
description: "Sliders allow users to make selections from a range of values."
components: true
keywords: forms, form, range
component: sliders
tags: [in-field, accessibility]
---

## Accessibility

- The element serving as the focusable slider control has role `slider`.
- The slider element has the `aria-valuenow` property set to a decimal value representing the current value of the slider.
- The slider element has the `aria-valuemin` property set to a decimal value representing the minimum allowed value of the slider.
- The slider element has the `aria-valuemax` property set to a decimal value representing the maximum allowed value of the slider.
- If the value of `aria-valuenow` is not user-friendly (e.g., the day of the week is represented by a number) the `aria-valuetext` property is set to a string that makes the slider value understandable (e.g., "Monday").
- If the slider has a visible label, it is referenced by `aria-labelledby` on the slider element. Otherwise, the slider element has a label provided by `aria-label`.
- If the slider is vertically oriented, it has `aria-orientation` set to `vertical`. The default value of `aria-orientation` for a slider is `horizontal`.
