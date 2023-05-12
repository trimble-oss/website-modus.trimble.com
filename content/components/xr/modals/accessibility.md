---
title: "Modals"
layout: "single"
description: "Modal dialogs interrupt workflows and require user interaction."
components: true
component: modals
images:
  - "/img/xr/headers/modals.png"
keywords: Modals, Modal, Dialogs, Dialog
tags: [xr, accessibility]
---

XR Interfaces are bound to interaction types. Modus XR Menus cater touch interactions with UIs placed by default at 50cm (~20 Inch) from users. However Hand and Near Menus' positions are controlled by users and highly dependent on their freedom of movement, impacting readability and discoverability. Therefore experiences using menus need careful attention in the relation between users, content, action and impact.

## Accessibility

- When a dialog opens, focus moves to an element inside the dialog and depends on the nature and size of the content (usually the header element).
  - If content is large enough that focusing the first interactive element could cause the beginning of content to scroll out of view, it is advisable to split the content and access it through static elements, such as scroll buttons or "next/previous" options.
  - If a dialog contains the final step in a process that is not easily reversible, such as deleting data or completing a financial transaction, it may be advisable to set focus on the least destructive action, especially if undoing the action is difficult or impossible.
  - If a dialog is limited to interactions that either provide additional information or continue processing, it may be advisable to set focus to the element that is likely to be most frequently used, such as an OK or Continue button.
- When a dialog closes, focus returns to the element that invoked the dialog unless either:
  - The invoking element no longer exists. Then, focus is set on another element that provides logical workflow.
  - The workflow design includes the following conditions that can occasionally make focusing a different element a more logical choice: - It is very unlikely users need to immediately re-invoke the dialog. - The task completed in the dialog is directly related to a subsequent step in the workflow.

**On Dialog Behavior**

- Implement exclusively horizontal radial solvers around the vertical axis.
  - Provide generous angles of rotation way beyond 60DEG from the standard line of sight.
