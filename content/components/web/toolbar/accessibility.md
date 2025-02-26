---
title: "Toolbar"
layout: "single"
description: "Toolbar consists of a series of icon buttons occupying minimum workspace"
components: true
componentsWeb: true
component: toolbar
tags: [accessibility]
webComponentsURL: https://modus-web-components.trimble.com/?path=/docs/components-toolbar--default
hideToc: true
---

## Accessibility

- Place the toolbar in a `div` element with an `role="toolbar"`. Use a descriptive `aria-label` to let the user know what the toolbar is for (e.g. text formatting or map controls).
- Make sure the toolbar is keyboard accessible.
- Provide tooltips for all icons. See [Tooltips](/components/web/tooltips/accessibility).
- Provide logical tab sequence.
- See [Buttons](/components/web/buttons/accessibility/) for accessibility guidelines.

### Further Reading

- [Toolbar Pattern - ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)
