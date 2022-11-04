---
title: "Dropdowns"
layout: "single"
description: ""
components: true
component: dropdowns
images:
  - "/img/components/headers/dropdowns.png"
tags: [in-field, accessibility]
---

## Accessibility

- The element that opens the menu has role button.
- The element with role button has aria-haspopup set to either menu or true.
- When the menu is displayed, the element with role button has aria-expanded set to true. When the menu is hidden, it is recommended that aria-expanded is not present. If aria-expanded is specified when the menu is hidden, it is set to false.
- The element that contains the menu items displayed by activating the button has role menu.
- Optionally, the element with role button has a value specified for aria-controls that refers to the element with role menu.
- With focus on the button, “Enter” or “Space” opens the menu and places focus on the first menu item. Up and down arrows move focus through menu items.
