---
title: "Side Navigation"
layout: "single"
description: "Vertical, collapsible navigation on the left side of the application."
components: true
componentsWeb: true
component: side-navigation
images:
  - "/img/components/headers/side-navigation.png"
webComponentsURL: https://modus-web-components.trimble.com/?path=/docs/components-side-navigation--default
tags: [accessibility]
---

## Accessibility

- Use unordered list `<ul>` groups for side navigation.
- Place side navigation (the list group) in a `nav` element. The `nav` element should also be marked with `aria-label="side navigation"` to clearly describe the type of navigation.
- Use the `aria-current="true"` attribute to indicate the item that is currently selected, or—in a navigational context—use `aria-current="page"` to indicate the page that is currently selected. The `aria-current` attribute should be updated when the user makes a selection.
- Make sure the tab order matches the hierarchy and that the user can navigate through all levels and items with a keyboard.
