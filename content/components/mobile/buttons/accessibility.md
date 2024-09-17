---
title: "Buttons"
layout: "single"
description: "Buttons are interactive elements that trigger an action or an event."
components: true
component: Buttons
images:
  - "/img/mobile/headers/buttons.png"
tags: [mobile, accessibility]
---

## Accessibility

- Buttons have role of `button`. Using a native HTML `button` or `input type="submit"` element is a better choice than creating a custom ARIA button.
- Buttons should have accessible labels. By default, the accessible name is computed from any text content inside the button element.
- A button should be triggered by pressing "Spacebar," "Enter," or "Return."
- The mouse cursor should be a hand icon (`cursor: pointer`).
- Disabled buttons should have `aria-disabled` set to `true`.
- When placing a button on a color other than standard background colors (Gray Light or White), make sure the colors of all states (except for disabled) still meet [color contrast accessibility standards](/foundations/accessibility/).
- **The use of disabled buttons is discouraged.** Disabled buttons are not required to meet color contrast requirements according to WCAG–Inactive User Interface Components; they make it difficult for users to see and are ignored by assistive technologies such as screen readers. Additionally, disabled buttons provide no feedback on why the user cannot submit the information or what to fix that will enable the disabled button(s). Only use a button in a disabled state when an option is not available:
  - When an item or product is unavailable;
  - A request is actively being processed, and a duplicate request will be submitted;
  - When the user is editing an existing record, but no changes have been made.
