---
title: "Modals"
layout: "single"
description: "Modal dialogs interrupt workflows and require user interaction."
components: true
component: modals
images:
  - "/img/components/headers/modals.png"
keywords: modals, modal, dialogs, dialog
tags: [in-field, styles]
---

## Specifications

{{< img src="/img/in-field/modals-spec.svg" dark="/img/in-field/modals-spec-dark.svg" width="1087" height="471" class="w-100" alt="Modals Specifications" lazyload="auto" >}}

**Note:** Incab sizes only, see mobile for smaller options for in-field.

Dialogs consist of the following elements:

- Header, a brief title.
- Content area, which provides instructions.
- Page overlay, which partially blocks out the underlying page to focus attention on the modal content.
- Controls, which are usually [Buttons](/components/in-field/buttons/) placed on the bottom right side of the modal header. A dialog should **always include a single Primary button**. Primary button is often paired with an Outline or Text Only button. Primary button, representing the desired user action, should always appear to the right of other buttons.
- Close icon button, which closes the dialog and cancels user action. **Always include a close icon button on a modal.** It should display in the top right corner.

### Behaviors

- Dialogs are usually activated by user actions (such as activating a button) but may also be the result of a timed event (such as a session timeout warning) or other events.
- Dialogs can only be closed by either choosing an action represented by a button (e.g., Save or Cancel) or by clicking the Close icon. They cannot be dismissed by clicking outside of the modal.
- Once a dialog reaches its maximum height, the header will remain fixed and content will scroll within the container. Scrolling within a modal should be discouraged: avoid extensive copy or many elements.
- Dialogs are centered horizontally and vertically in the viewport.

#### Editorial

- Use title case for titles, unless the title is phrased as a question (e.g. Are you sure want to continue?). Use sentence case for questions.
- Titles should clearly describe what’s inside the modal and the action required.
- Consider using words from the context of the page that launched the modal.
- Content can scroll in the modal, if necessary. Avoid long copy in modals.
