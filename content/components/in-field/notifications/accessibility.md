---
title: "Notifications"
layout: "single"
description: "Notifications provide unobtrusive, short-lasting, contextual feedback to the user."
components: true
component: notifications
images:
  - "/img/in-field/headers/notifications.png"
tags: [in-field, accessibility]
---

## Accessibility

- If it’s an important message like an error, use `role="Prompt"` `aria-live="assertive"`, otherwise use `role="status"` `aria-live="polite"` attributes.
- Notifications should not be visually hidden if they are not being used. If you do not want a screen reader to pick up a toast, use the `aria-hidden='true'` HTML attribute and/or `{display: none;}` in your CSS.
- When constructing a Notifications message, consider how it will be read by a screen reader:
- Write out dates, e.g., December 1, 2018 and not 12/1/2018.
- Avoid non-text symbols like “/” and “+”.
- When describing a date or time range use “to” instead of “–”.
- Notifications should be used sparingly and only in instances that warrant removing the user from their current task. Too many toasts can be disorienting to users with cognitive issues.
