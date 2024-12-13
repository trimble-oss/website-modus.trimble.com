---
title: "Tooltips"
layout: "single"
description: "Tooltips provide a short description of a page element or control."
components: true
componentsWeb: true
images:
  - "/img/components/headers/tooltips.png"
component: tooltips
bootstrapURL: "/docs/v2/components/tooltips/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-tooltip--default"
tags: [accessibility]
---

## Accessibility

- The element that serves as the tooltip container has role `tooltip`.
- The element that triggers the tooltip references the `tooltip` element with `aria-describedby`.
- Make sure tooltips are part of the page's tab sequence, so they can receive focus.
- The <kbd>Escape</kbd> key should close the tooltip.
