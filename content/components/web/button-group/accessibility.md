---
title: "Button group"
layout: "single"
description: "Group a series of buttons together on a single line."
components: true
componentsWeb: true
images:
  - "/img/components/headers/button-group.png"
# bootstrapURL: "/components/button-group/"
component: button-group
tags: [accessibility]
hidden: true
private: true
---

## Accessibility

- Button groups require an appropriate role attribute and explicit label to ensure assistive technologies like screen readers identify buttons as grouped and announce them. Use `role="group"` for button groups or `role="toolbar"` for button toolbars.
- Use `aria-label` or `aria-labelledby` to label them.
