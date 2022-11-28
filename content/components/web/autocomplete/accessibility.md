---
title: "Autocomplete"
layout: "single"
description: "The autocomplete is a text input field enhanced by a panel of suggested options."
images:
  - "/img/components/headers/autocomplete.png"
components: true
componentsWeb: true
keywords: typeahead
tags: [accessibility]
---

### Accessibility

- Always use a `label`. Use a hidden `label`, or a `title` or `aria-label` attribute when a visible text label is not needed.
- Associate form labels with controls.
- Never replace `label` with `placeholder` text.
- Always specify the correct input type (e.g. `date`, `email`, `tel`, `number`)
- Match `for` and `id` values that associate the label with its form control. Because `id` attribute values must be unique on each page, a form control can only have one associated `label`.
- Whenever possible use the `autocomplete` ARIA attribute to help users (especially users with cognitive disabilities) fill out the form: `aria-autocomplete=true` (see additional resources for [Legacy ARIA 1.0 Combobox with Both List and Inline Autocomplete](https://www.w3.org/TR/wai-aria-practices-1.1/examples/combobox/aria1.0pattern/combobox-autocomplete-both.html) and [Editable Combobox with Both List and Inline Autocomplete](https://w3c.github.io/aria-practices/examples/combobox/combobox-autocomplete-both.html).
- On required fields, use the `required` attribute. It causes screen readers to announce “required” and also triggers the browser to warn the user with a visual tooltip if the user leaves the field blank. Screen readers also announce the tooltip content, when it appears.
- When performing form validation, apply the `aria-invalid="true"` attribute to a form control. It will cause screen readers to announce “invalid” when that control gets in focus.
- Use `aria-labelledby` to overcome the 1:1 limitations of label.
- Use `aria-describedby` (in addition to a label) to associate descriptive text to the form control.
- Make sure the form is keyboard accessible: all input fields need to be focusable. The tab sequence needs to be logical and intuitive.
- Do not rely on JavaScript alone for form submission, validation, and error recovery.
- Alert the user of any validation errors in an apparent and accessible manner. Provide informative feedback messages.
- Allow the user to easily access the form controls that need to be modified.
- Allow resubmission and revalidation of the form information.

