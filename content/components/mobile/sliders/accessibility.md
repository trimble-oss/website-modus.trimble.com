---
title: "Sliders"
layout: "single"
description: "Sliders allow users to make selections from a range of values."
components: true
keywords: forms, form, range
component: sliders
images:
  - "/img/mobile/headers/sliders.png"
tags: [mobile, accessibility]
---

## Accessibility

- The element serving as the focusable slider control has role `slider`.
- The slider element has the `aria-valuenow` property set to a decimal value representing the current value of the slider.
- The slider element has the `aria-valuemin` property set to a decimal value representing the minimum allowed value of the slider.
- The slider element has the `aria-valuemax` property set to a decimal value representing the maximum allowed value of the slider.
- If the value of `aria-valuenow` is not user-friendly (e.g., the day of the week is represented by a number) the `aria-valuetext` property is set to a string that makes the slider value understandable (e.g., "Monday").
- If the slider has a visible label, it is referenced by `aria-labelledby` on the slider element. Otherwise, the slider element has a label provided by `aria-label`.
- If the slider is vertically oriented, it has `aria-orientation` set to `vertical`. The default value of `aria-orientation` for a slider is `horizontal`.
- Make sure the thumb is in the page tab sequence.
- Right and Up arrows increase the value of the slider by one step; Left and Down arrows decrease the value of the slider by one step.
- When using a multi-thumb slider, each thumb is in the page tab sequence and has the same keyboard interaction as a single-thumb slider.
