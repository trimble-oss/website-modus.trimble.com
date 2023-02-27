---
title: "Top Navbars"
layout: "single"
description: "The top navbar provides context through globally accessible menu options."
components: true
component: Top Navbars
images:
  - "/img/mobile/headers/top-navbars.png"
tags: [mobile, accessibility]
---

## Accessibility

- Availability of top navbar items to assistive technology requires the use of `aria-controls`.
- Navbars must be contained in `<nav>` elements with unique accessible labels for each navigational element on the page, if there's more than one.
- The name of each item should include the attribute `role="button"`.
- Provide a label for all menu items that can be read by assistive technologies. You may use `visually-hidden` text or add an `aria-label` to each menu item. If you need the menu item name to be translatable, use `visually-hidden`.
- Provide alt text for product logo.
- Provide tooltips for icons.
