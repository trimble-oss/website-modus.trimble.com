---
title: "Navbar"
layout: "single"
description: "The navbar provides context through globally accessible menu options."
components: true
componentsWeb: true
bootstrapURL: "/components/navbars/"
reactBootstrapURL: "/components/navbar/"
webComponentsURL: https://modus-web-components.trimble.com/?path=/docs/components-navbar--default
images:
  - "/img/components/headers/navbar.png"
component: navbar
tags: [accessibility]
---

## Accessibility

- Provide alt text for product logo.
- Provide tooltips for icons.

### "Skip to Main Content" Link

- This link bypasses header links and ‘skips’ to the screen’s main content.
- Provides increased usability for people using screen readers or keyboard navigation.
- This link is invisible until it receives keyboard focus via the Tab key.
- “Skip to main content” wording explains best where people are navigating to.
  Example: `<div id="skiptocontent"><a href="#maincontent">Skip to main content</a></div>`

{{< img src="/img/components/navbar-skip-content.svg" dark="/img/components/navbar-skip-content-dark.svg" class="w-100" alt="skip to content" >}}

Reference for more detail: [https://webaim.org/techniques/skipnav/](https://webaim.org/techniques/skipnav/)
