---
title: "Navbars"
layout: "single"
description: "The navbar provides context through globally accessible menu options."
components: true
componentsWeb: true
BootstrapURL: "/docs/v2/components/navbars/"
webComponentsURL: https://modus-web-components.trimble.com/?path=/docs/components-navbar--default
images:
  - "/img/components/headers/navbar.png"
component: navbar
tags: [accessibility]
---

## Accessibility

- Availability of navbar items to assistive technology requires the use of `aria-controls`.
- Navbars must be contained in `<nav>` elements with unique accessible labels for each navigational element on the page, if there's more than one.
- The name of each item should include the attribute `role="button"`.
- Provide a label for all menu items that can be read by assistive technologies. You may use `visually-hidden` text or add an `aria-label` to each menu item. If you need the menu item name to be translatable, use `visually-hidden`.
- Provide alt text for product logo.
- Provide tooltips for icons.
- Provide logical tab sequence.

### "Skip to Main Content" Link

- This link bypasses header links and ‘skips’ to the screen’s main content.
- Provides increased usability for people using screen readers or keyboard navigation.
- This link is invisible until it receives keyboard focus via the Tab key.
- “Skip to main content” wording explains best where people are navigating to.
  Example:
  ```html
  <div><a href="#main">Skip to main content</a></div>
  ```

{{< img src="/img/components/navbar-skip-content.png" width="949" height="62" alt="skip to content screenshot" >}}

Reference for more detail: [https://webaim.org/techniques/skipnav/](https://webaim.org/techniques/skipnav/)
