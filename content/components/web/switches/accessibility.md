---
title: "Switches"
layout: "single"
description: "Switches are used to toggle functionality."
components: true
componentsWeb: true
component: switches
keywords: forms, form
bootstrapURL: "/docs/v2/forms/checks-radios/#switches"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/user-inputs-switch--default"
tags: [accessibility]
---

## Accessibility

- The switch has role `switch`.
- The switch has an accessible label provided by one of the following:
  - Visible text content contained within the element with role `switch`.
  - A visible label referenced by the value of `aria-labelledby` set on the element with role `switch`.
  - `aria-label` set on the element with role `switch`.
- When on, the switch element has state `aria-checked` set to `true`. When off, it has state `aria-checked` set to `false`.
- When the switch is in focus, pressing the <kbd>Space</kbd> key changes the state of the switch.
- Use a `fieldset` to create a switch group.

### Further Reading

- [Switch Pattern - ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
