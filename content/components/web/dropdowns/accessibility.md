---
title: "Dropdowns"
layout: "single"
description: "Dropdowns present a list of options that can be used to filter or sort existing content."
components: true
componentsWeb: true
component: dropdowns
keywords: menu
tags: [accessibility]
---

## Accessibility

- The element that opens the menu has role `button`.
- The element with role `button` has `aria-haspopup` set to either `menu` or `true`.
- When the menu is displayed, the element with role `button` has `aria-expanded` set to `true`. When the menu is hidden, it is recommended that `aria-expanded` is not present. If `aria-expanded` is specified when the menu is hidden, it is set to `false` .
- The element that contains the menu items displayed by activating the button has role `menu`.
- Optionally, the element with role `button` has a value specified for `aria-controls` that refers to the element with role `menu`.
- With focus on the button, "Enter" or "Space" opens the menu and places focus on the first menu item. Up and down arrows move focus through menu items.

### Modus Bootstrap

The [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/TR/wai-aria/) standard defines an actual [`role="menu"` widget](https://www.w3.org/TR/wai-aria/#menu), but this is specific to application-like menus which trigger actions or functions. <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.

Modus Bootstrap's dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Modus Bootstrap does not expect (nor automatically add) any of the `role` and `aria-` attributes required for true <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus. Authors will have to include these more specific attributes themselves.
