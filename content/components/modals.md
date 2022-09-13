---
title: "Modals"
layout: "single"
description: "Modal dialogs interrupt workflows and require user interaction."
components: true
images:
  - "/img/components/headers/modals.png"
keywords: "modal, dialog"
bootstrapURL: "/components/modals/"
reactBootstrapURL: "/components/modals/"
---

## Overview

A dialog or a modal is a window overlaid on the primary window. It interrupts the user and requires an action. It disables the main content until the user explicitly interacts with the modal dialog. Windows under a modal dialog are inert: users cannot interact with content outside an active dialog window. Inert content outside an active dialog is visually obscured or screened. Because a dialog is highly disruptive to the user, it should be used sparingly, **only when user's interaction is required to continue**.

## Usage

**Use when**

- Content requires full attention.
- For important warnings, as a way to prevent or correct critical errors.
- Requesting a simple but critical action, like saving changes, necessary to the current process.
- Providing supplemental tasks required by the underlying page.

**Don’t use when**

- Providing non-essential information related to the underlying page.
- Interrupting high-stake processes such as checkout flows.
- Conveying brief thoughts or status changes. Instead, use an [Alert](/components/alerts/). [Toast](/components/toasts/), or [Message](/components/messages/), depending on priority.
- Complex decision-making is needed by the user that requires additional sources of information unavailable in the modal.
- The modal content can be incorporated into the underlying page without complicating the page’s intent.

## Specifications

Both header and button container should be 64px in height.

<div class="guide-example-block my-3 bg-light pr-n5">
  <div class="guide-content-sample modal-static" style="padding-bottom: 24px;">
    <div class="modal show d-block ml-5 position-relative" tabindex="-1" role="dialog" style="z-index:1">
      <div class="modal-dialog show" role="document">
        <div class="modal-content float-right" style="width: 80%;">
          <div class="modal-header anatomy-display-static" data-anatomy-colors="false" style="padding-top: 17px; padding-bottom: 18px;">
            <h4 class="modal-title">Modal Header</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            Content Area
          </div>
          <div class="modal-footer anatomy-display-static" data-anatomy-colors="false">
            <button
              type="button"
              class="btn btn-outline-dark justify-self-start"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
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
- Controls, which are usually [Buttons](/components/buttons/) placed on the bottom right side of the modal header. A dialog should **always include a single Primary button**. Primary button is often paired with an Outline or Text Only button. Primary button, representing the desired user action, should always appear to the right of other buttons.
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

### Accessibility

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
