---
title: "Modals"
layout: "single"
description: "Modal dialogs interrupt workflows and require user interaction."
components: true
componentsWeb: true
images:
  - "/img/components/headers/modals.png"
keywords: "modal, dialog"
bootstrapURL: "/docs/v2/components/modal/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-modal--default"
tags: [styles]
---

## Specifications

Both header and button container should be 64px in height.

<div class="guide-example-block my-3 bg-secondary bg-opacity-10">
  <div class="guide-content-sample modal-static pb-4 px-2">
    <div class="modal show d-block position-relative" tabindex="-1" style="z-index:1">
      <div class="modal-dialog show" style="max-width: 380px">
        <div class="modal-content">
          <div class="modal-header anatomy-display-static" data-anatomy-colors="false">
            <h4 class="modal-title">Modal header</h4>
            <button
              type="button"
              class="btn-close"
              aria-label="Close">
            </button>
          </div>
          <div class="modal-body">
            Content Area
          </div>
          <div class="modal-footer anatomy-display-static" data-anatomy-colors="false">
            <button
              type="button"
              class="btn btn-outline-secondary btn-outline-high-contrast justify-self-start"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary">
              Primary action
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

Dialogs consist of the following elements:

- Header, a brief title.
- Content area, which provides instructions.
- Page overlay, which partially blocks out the underlying page to focus attention on the modal content.
- Controls, which are usually [Buttons](/components/web/buttons/) placed on the bottom right side of the modal header. A dialog should **always include a single Primary button**. Primary button is often paired with an Outline or Text Only button. Primary button, representing the desired user action, should always appear to the right of other buttons.
- Close icon button, which closes the dialog and cancels user action. **Always include a close icon button on a modal.** It should display in the top right corner.

### Behaviors

- Dialogs are usually activated by user actions (such as activating a button) but may also be the result of a timed event (such as a session timeout warning) or other events.
- Dialogs can only be closed by either choosing an action represented by a button (e.g., Save or Cancel) or by clicking the Close icon. They cannot be dismissed by clicking outside of the modal.
- Once a dialog reaches its maximum height, the header will remain fixed and content will scroll within the container. Scrolling within a modal should be discouraged: avoid extensive copy or many elements.
- Dialogs are centered horizontally and vertically in the viewport.

### Editorial

- Use [title case](/foundations/writing-style/#capitalizations) for titles, unless the title is phrased as a question (e.g. Are you sure want to continue?). Use sentence case for questions.
- Titles should clearly describe what’s inside the modal and the action required. Consider using words from the context of the page that launched the modal.
- Content can scroll in the modal, if necessary. Avoid long copy in modals.
