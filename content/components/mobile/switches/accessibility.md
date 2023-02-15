---
title: "Switches"
layout: "single"
description: "Switches are used to toggle functionality."
components: true
images:
  - "/img/mobile/headers/switches.png"
component: switches
tags: [mobile, accessibility]
---

## Accessibility

- The switch has role `switch`.
- The switch has an accessible label provided by one of the following:
  - Visible text content contained within the element with role `switch`.
  - A visible label referenced by the value of `aria-labelledby` set on the element with role `switch`.
  - `aria-label` set on the element with role `switch`.
- When on, the switch element has state `aria-checked` set to `true`. When off, it has state `aria-checked` set to `false`.
- Use a `fieldset` to create a switch group.
