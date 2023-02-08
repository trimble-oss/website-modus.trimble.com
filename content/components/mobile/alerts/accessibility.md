---
title: "Alerts"
layout: "single"
description: "Alerts provide contextual information about system status that persists until dismissed or resolved."
components: true
images:
  - "/img/components/headers/alerts.png"
aliases:
  - "/components/alerts/"
tags: [mobile, accessibility]
---

### Accessibility

- Include the `role="alert"` attribute.
- An alert is a special kind of assertive ARIA live region, so screen readers should immediately interrupt anything they were previously saying and instead read the announcement. Most screen readers say "Alert," before reading the text inside the alert.
- If user action is required in order to continue, use `role="alertdialog"`.
- Alerts should not be visually hidden if they are not being used. If you do not want a screen reader to pick up an alert, use the `aria-hidden='true'` HTML attribute and/or `{display: none;}` in your CSS.
- It's best to have only one alert message visible at a time because some screen readers will read all of the available alert messages each time that a new alert message is activated. When activating a new alert, it's best to deactivate any other alerts first.
- When constructing an alert message, consider how it will be read by a screen reader:
  - Write out dates, e.g., December 1, 2018 and not 12/1/2018.
  - Avoid non-text symbols like “/” and “+”.
  - When describing a date or time range use “to” instead of “–”.
