---
title: "Modals"
layout: "single"
description: "Modal dialogs interrupt workflows and require user interaction."
components: true
component: modals
images:
  - "/img/components/headers/modals.png"
keywords: modal, Dialogs, Dialog
tags: [in-field, usage]
---

{{< img src="/img/in-field/modals.png" src="/img/in-field/modals-dark.png" class="w-100 bg-light" width="1087" height="471" alt="Modals Specifications" lazyload="auto" >}}

## Overview

A dialog or a modal is a window overlaid on the primary window. It interrupts the user and requires an action. It disables the main content until the user explicitly interacts with the modal dialog. Windows under a modal dialog are inert: users cannot interact with content outside an active dialog window. Inert content outside an active dialog is visually obscured or screened. Because a dialog is highly disruptive to the user, it should be used sparingly, only when user’s interaction is required to continue.

## Usage

**Use when**

- Content requires full attention.
  For important warnings, as a way to prevent or correct critical errors.
  Requesting a simple but critical action, like saving changes, necessary to the current process.
  Providing supplemental tasks required by the underlying page.

**Don't use when**

- Providing non-essential information related to the underlying page.
- Interrupting high-stake processes such as checkout flows.
- Conveying brief thoughts or status changes. Instead, use an Prompts. Notification, or Message, depending on priority.
- Complex decision-making is needed by the user that requires additional sources of information unavailable in the modal.
- The modal content can be incorporated into the underlying page without complicating the page’s intent.

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors |
| ---------- | ------- | -------------------- | ------------ |
| 06/02/2022 | 1.0.1   | Updated full layout. | M. Johns     |

{{</ whats-changed-table >}}
