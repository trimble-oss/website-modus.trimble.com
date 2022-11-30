---
title: "Buttons"
layout: "single"
description: "Buttons are interactive elements that trigger an action or an event."
components: true
componentsWeb: true
images:
  - "/img/components/headers/buttons.png"
bootstrapURL: "/components/buttons/"
reactBootstrapURL: "/components/buttons/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-button--default"
component: buttons
tags: [accessibility]
---

## Accessibility

- Buttons have role of `button`. Using a native HTML `button` or `input type="submit"` element is a better choice than creating a custom ARIA button.
- Buttons should have accessible labels. By default, the accessible name is computed from any text content inside the button element.
- A button should be triggered by pressing "Spacebar," "Enter," or "Return."
- Make sure the mouse cursor is an arrow pointer, not a text selector or a hand icon.
- Disabled buttons should have `aria-disabled` set to `true`.
- When placing a button on a color other than standard background colors (Gray Light or White), make sure the colors of all states (except for disabled) still meet [color contrast accessibility standards](/foundations/accessibility/).
