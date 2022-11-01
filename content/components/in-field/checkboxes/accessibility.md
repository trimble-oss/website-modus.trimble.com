---
title: "Checkboxes"
layout: "single"
description: "Checkboxes are used for a list of options where the user may select multiple options, including all or none."
components: true
hidden: true
component: checkboxes
tags: [in-field, accessibility]
---

## Accessibility

- The checkbox has role `checkbox`.
- The checkbox has an accessible label provided by one of the following:
  - Visible text content contained within the element with role `checkbox`.
  - A visible label referenced by the value of `aria-labelledby` set on the element with role `checkbox`.
  - `aria-label` set on the element with role `checkbox`.
- When checked, the checkbox element has state `aria-checked` set to `true`. When not checked, it has state `aria-checked` set to `false`. When partially checked, it has state `aria-checked` set to `mixed`.
- If a set of checkboxes is presented as a logical group with a visible label, the checkboxes are included in an element with role `group` that has the property `aria-labelledby` set to the ID of the element containing the label.
- If the presentation includes additional descriptive static text relevant to a checkbox or checkbox group, the checkbox or checkbox group has the property `aria-describedby` set to the ID of the element containing the description.
- Use `fieldset` to create a checkbox group.
