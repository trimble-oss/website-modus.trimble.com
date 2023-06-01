---
title: "Progress Bars"
layout: "single"
description: "Progress indicators express an unspecified wait time or display the length of a process."
components: true
component: progress-bars
images:
  - "/img/in-field/headers/progress-bars.png"
tags: [in-field, accessibility]
---

## Accessibility

- Use `aria-valuetext` to provide more specific information about the content being loaded. For example, “Please wait, this data table is loading…”.
- Add `aria-busy="true"` to a container or element to indicate the element is loading. Once loaded, change the value from `true` to `false`. For example:
  - If loading an entire page, add the attribute to `<body>` or wrapper.
  - If loading a specific component (e.g, table), add the attribute to the container of that component.
  - If loading content inside a modal, add the attribute to the modal element.
  - The intervals are announced to screen reader users via an `aria-live` region. Don't overwhelm screen reader users with continuous reading of every instant in a progress bar's trajectory. Announcing the progress at certain timed intervals (e.g. every 5 seconds), or at certain percentage intervals (e.g. every 10% or every 20%) is best.
