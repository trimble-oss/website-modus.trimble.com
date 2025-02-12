---
title: "Radio Buttons"
layout: "single"
description: "Radio buttons are used when options are mutually exclusive."
components: true
componentsWeb: true
component: radio-buttons
keywords: forms, form
tags: [accessibility]
BootstrapURL: "/docs/v2/forms/checks-radios/#radios"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-radio-group--default"
hideToc: true
---

## Accessibility

- The radio buttons are contained in or owned by an element with role `radiogroup`.
- Each radio button element has role `radio`.
- If a radio button is selected, the `radio` element has `aria-checked` set to `true`. If it is not selected, it has `aria-checked` set to `false`.
- Each `radio` element is labelled by its content, has a visible label referenced by `aria-labelledby`, or has a label specified with `aria-label`.
- The `radiogroup` element has a visible label referenced by `aria-labelledby` or has a label specified with `aria-label`.
- If elements providing additional information about either the radio group or each radio button are present, those elements are referenced by the `radiogroup` element or radio elements with the `aria-describedby` property.
- Right and left arrow keys and up and down arrow keys move focus sequentially between radio button in the group. Once the focus comes to the first or last radio buttons in the group, it cycles again.
- If the focused radio button is not selected, <kbd>Space</kbd> key deselects the currently selected radio button and selects the focused radio button. It the focused radio button is selected, pressing the <kbd>Space</kbd> key does nothing.

### Further Reading

- [Radio Buttons - ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
