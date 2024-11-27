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
aliases:
  - "/components/modals/"
  - "/components/web/modal/"
tags: [usage]
---

## Overview

A dialog or a modal is a window overlaid on the primary window. It interrupts the user and requires an action. It disables the main content until the user explicitly interacts with the modal dialog. Windows under a modal dialog are inert: users cannot interact with content outside an active dialog window. Inert content outside an active dialog is visually obscured or screened. Because a dialog is highly disruptive to the user, it should be used sparingly, **only when user's interaction is required to continue**.

<div class="guide-example-block my-3 bg-secondary bg-opacity-10">
  <div class="guide-content-sample modal-static pb-4 px-2">
    <div class="modal show d-block position-relative" tabindex="-1" style="z-index:1">
      <div class="modal-dialog show shadow-lg" style="max-width: 380px">
        <div class="modal-content">
          <div class="modal-header">
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
          <div class="modal-footer">
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

## Usage

#### Use when

- Content requires full attention.
- For important warnings, as a way to prevent or correct critical errors.
- Requesting a simple but critical action, like saving changes, necessary to the current process.
- Providing supplemental tasks required by the underlying page.

#### Don't use when

- Providing non-essential information related to the underlying page.
- Interrupting high-stake processes such as checkout flows.
- Conveying brief thoughts or status changes. Instead, use an [Alert](/components/web/alerts/). [Toast](/components/web/toasts/), or [Message](/components/web/messages/), depending on priority.
- Complex decision-making is needed by the user that requires additional sources of information unavailable in the modal.
- The modal content can be incorporated into the underlying page without complicating the page’s intent.
