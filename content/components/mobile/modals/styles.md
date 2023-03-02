---
title: "Modals"
layout: "single"
description: "Modal dialogs interrupt workflows and require user interaction."
components: true
component: modals
images:
  - "/img/mobile/headers/modals.png"
tags: [mobile, styles]
---

## Specifications

### Anatomy

{{< img src="/img/mobile/modals-atoms.svg" dark="/img/mobile/modals-atoms-dark.svg" width="961" height="524" alt="Modal Atoms" loading="auto" >}}

Dialogs consist of the following elements:

- Header, a brief title.
- Content area, which provides instructions.
- Page overlay, which partially blocks out the underlying page to focus attention on the modal content.
- Controls, which are usually [Buttons](/components/mobile/buttons/) placed on the bottom right side of the modal header. A dialog should **always include a single Primary button**. Primary button is often paired with an Outline and/or Text Only button. Primary button, representing the desired user action, should always appear to the right of other buttons.
- Close icon button, which closes the dialog and cancels user action. **Always include a close icon button on a modal.** It should display in the top right corner.

### Sizing

{{< img src="/img/mobile/modals-sizing.svg" dark="/img/mobile/modals-sizing-dark.svg" width="960" height="286" alt="Dialog Sizing" loading="auto" >}}

### Behaviors

- Dialogs are usually activated by user actions (such as activating a button) but may also be the result of a timed event (such as a session timeout warning) or other events.
- Dialogs can only be closed by either choosing an action represented by a button (e.g., Save or Cancel) or by clicking the Close icon. They cannot be dismissed by clicking outside of the modal.
- Once a dialog reaches its maximum height, the header will remain fixed and content will scroll within the container. Scrolling within a modal should be discouraged: avoid extensive copy or many elements.
- Dialogs are centered horizontally and vertically in the viewport.

### Editorial

- Use title case for titles, unless the title is phrased as a question (e.g. Are you sure want to continue?). Use sentence case for questions.
- Titles should clearly describe what’s inside the modal and the action required. Consider using words from the context of the page that launched the modal.
- Content can scroll in the modal, if necessary. Avoid long copy in modals.
