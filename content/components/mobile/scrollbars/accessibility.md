---
title: "Scrollbars"
layout: "single"
description: "Scrollbars allow user to scroll content within a window."
components: true
component: scrollbars
images:
  - "/img/mobile/headers/scrollbars.png"
tags: [mobile, accessibility]
---

## Accessibility

- Because scrolling often causes accessibility problems, all key information should be visible on the initial screen.
- Include the `role="scrollbar"` attribute.
- Set the `aria-controls` attribute on the scrollbar element to reference the scrollable area it controls.
- Set the `aria-valuenow`attribute to indicate the current thumb position.
- Define `aria-valuemin` and `aria-valuemax` to indicate the minimum and maximum thumb position.
- If the scrollbar has a visible label, it is referenced by `aria-labelledby` on the scrollbar element. Otherwise, the scrollbar element has a label provided by `aria-label`.
- If the scrollbar is vertically oriented, it has `aria-orientation` set to `vertical`. The default value of `aria-orientation` for a scrollbar is `horizontal`.
