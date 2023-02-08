---
title: "Toasts"
layout: "single"
description: "Toasts provide non-intrusive, short-lasting contextual feedback to the user."
components: true
images:
  - "/img/components/headers/toasts.png"
keywords: alert
aliases:
  - "/components/toasts/"
tags: [mobile, accessibility]
---

## Accessibility

- Include the `role="alert"` attribute.
- Toasts should not be visually hidden if they are not being used. If you do not want a screen reader to pick up a toast, use the `aria-hidden='true'` HTML attribute and/or `{display: none;}` in your CSS.
- When constructing a toast message, consider how it will be read by a screen reader:
  - Write out dates, e.g., December 1, 2018 and not 12/1/2018.
  - Avoid non-text symbols like “/” and “+”.
  - When describing a date or time range use “to” instead of “–”.
- Toasts should be used sparingly and only in instances that warrant removing the user from their current task. Too many toasts can be disorienting to users with cognitive issues.
