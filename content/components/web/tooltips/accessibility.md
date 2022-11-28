---
title: "Tooltips"
layout: "single"
description: "Tooltips provide a short description of a page element or control."
components: true
componentsWeb: true
component: tooltips
tags: [accessibility]
---

## Accessibility

- The element that serves as the tooltip container has role `tooltip`.
- The element that triggers the tooltip references the `tooltip` element with `aria-describedby`.
- Make sure tooltips are part of the page's tab sequence, so they can receive focus.
