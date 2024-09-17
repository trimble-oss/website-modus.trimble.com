---
title: "Button Groups"
layout: "single"
description: "Button groups allow selection from a similar or related set of options."
components: true
componentsWeb: true
images:
  - "/img/components/headers/button-groups.png"
bootstrapURL: "/docs/v2/components/button-group/"
webComponentsURL: https://modus-web-components.trimble.com/?path=/story/components-button-group--default
component: button-group
tags: [accessibility]
---

## Accessibility

- Button groups require an appropriate role attribute and explicit label to ensure assistive technologies like screen readers identify buttons as grouped and announce them. Use `role="group"` for button groups or `role="toolbar"` for button toolbars.
- Use `aria-label` or `aria-labelledby` to label them.
- Use the `<button type="button">` element. Don’t use `<a>` or `<span>` because screen readers won’t recognize it as a usable button.
- Make sure all the buttons within the button group are focusable and part of a linear tabbing sequence.
- When using an icon-only button group, each button must have a [Tooltip](/components/web/tooltips/).
