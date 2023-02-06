---
title: "Bottom Navbars"
layout: "single"
description: "Bottom navigation bars allow movement between primary destinations in an app."
components: true
component: bottom navbars
images:
  - "/img/mobile/headers/bottom-navbars.png"
tags: [mobile, accessibility]
---

## Accessibility

- Availability of navbar items to assistive technology requires the use of `aria-controls`.
- Navbars must be contained in `<nav>` elements with unique accessible labels for each navigational element on the page, if there's more than one.
- The name of each item should include the attribute `role="button"`.
- Provide a label for all menu items that can be read by assistive technologies. You may use `visually-hidden` text or add an `aria-label` to each menu item. If you need the menu item name to be translatable, use `visually-hidden`.
- When a navigation item is tapped, provide visual feedback to the user that the item is selected: The active indicator appears and the icon state changes from default to selected.
- When hovered, the active indicator appears, providing a visual cue to the user that the destination is interactive.
- If the bottom navbar is the only interactive element on the screen, initial focus should be directly on the first navigation item.
- "Tab"	focus lands on the first navigation destination. "Space" / "Enter"
selects the focused navigation destination.
- The accessibility label for a navigation item should typically be the same as the destination name.
