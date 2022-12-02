---
title: "Navbar"
layout: "single"
description: "The navbar provides context through globally accessible menu options."
components: true
component: Navbar
images:
  - "/img/in-field/headers/navbar.png"
tags: [in-field, accessibility]
---

## Accessibility

- Use unordered list `<ul>` groups for navbar items.
- Place navbar (the list group) in a `nav` element. The `nav` element should also be marked with `aria-label="main navigation"` to clearly describe the type of navigation.
- Place the `nav` element within the `<header>` region.
- Use the `aria-current="true"` attribute to indicate the item that is currently selected, or—in a navigational context—use `aria-current="page"` to indicate the page that is currently selected. The `aria-current` attribute should be updated when the user makes a selection.
- Provide alt text for product logo.
- Provide tooltips for icons.
