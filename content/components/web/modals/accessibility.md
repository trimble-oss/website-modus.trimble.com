---
title: "Modals"
layout: "single"
description: "Modal dialogs interrupt workflows and require user interaction."
components: true
componentsWeb: true
component: modals
keywords: "modal, dialog"
bootstrapURL: "/docs/v2/components/modal/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-modal--default"
tags: [accessibility]
---

## Accessibility

- The element that serves as the modal container has a role of `dialog`.
- All elements required to operate the dialog are descendants of the element that has role `dialog`.
- The dialog container element has `aria-modal` set to `true`.
- The dialog has either:
  - A value set for the `aria-labelledby` property that refers to a visible dialog title.
  - A label specified by `aria-label`.
- When a dialog opens, focus moves to an element inside the dialog and depends on the nature and size of the content (usually the header element).
  - If content is large enough that focusing the first interactive element could cause the beginning of content to scroll out of view, it is advisable to add `tabindex=-1` to a static element at the top of the modal, such as the modal header or first paragraph.
  - If a dialog contains the final step in a process that is not easily reversible, such as deleting data or completing a financial transaction, it may be advisable to set focus on the least destructive action, especially if undoing the action is difficult or impossible.
  - If a dialog is limited to interactions that either provide additional information or continue processing, it may be advisable to set focus to the element that is likely to be most frequently used, such as an OK or Continue button.
- When a dialog closes, focus returns to the element that invoked the dialog unless either:
  - The invoking element no longer exists. Then, focus is set on another element that provides logical workflow.
  - The workflow design includes the following conditions that can occasionally make focusing a different element a more logical choice:
    - It is very unlikely users need to immediately re-invoke the dialog.
    - The task completed in the dialog is directly related to a subsequent step in the workflow.
- The tab sequence of all dialogs needs to include the Close icon button.

### Further Reading

- [Dialog/Modal Pattern - ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
