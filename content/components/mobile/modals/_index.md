---
title: "Modals"
layout: "single"
description: "Modal dialogs interrupt workflows and require user interaction."
components: true
component: modals
images:
  - "/img/mobile/headers/modals.png"
tags: [mobile, usage]
---

{{< img src="/img/mobile/modals.svg" dark="/img/mobile/modals-dark.svg" width="961" height="260" class="w-100" alt="Modal Example" >}}

## Overview

A dialog or a modal is a window overlaid on the primary window. It interrupts the user and requires an action. It disables the main content until the user explicitly interacts with the modal dialog. Windows under a modal dialog are inert: users cannot interact with content outside an active dialog window. Inert content outside an active dialog is visually obscured or screened. Because a dialog is highly disruptive to the user, it should be used sparingly, **only when user’s interaction is required to continue.**

## Usage

#### Use when

- Content requires full attention.
- For important warnings, as a way to prevent or correct critical errors.
- Requesting a simple but critical action, like saving changes, necessary to the current process.
- Providing supplemental tasks required by the underlying page.

#### Don't use when

- Providing non-essential information related to the underlying page.
- Interrupting high-stake processes such as checkout flows.
- Conveying brief thoughts or status changes. Instead, use an [Alert](/components/mobile/alerts/). [Toast](/components/mobile/toasts/), or [Message](/components/mobile/messages/), depending on priority.
- Complex decision-making is needed by the user that requires additional sources of information unavailable in the modal.
- The modal content can be incorporated into the underlying page without complicating the page’s intent.

## Types

### Single Button

{{< img src="/img/mobile/modals-single-button.svg" dark="/img/mobile/modals-single-button-dark.svg" width="960" height="286" alt="Single Buttton Modal" loading="auto" >}}

### Two Buttons

{{< img src="/img/mobile/modals-two-buttons.svg" dark="/img/mobile/modals-two-buttons-dark.svg" width="960" height="286" alt="Two Butttons Modal" loading="auto" >}}

### Three Buttons

{{< img src="/img/mobile/modals-three-buttons.svg" dark="/img/mobile/modals-three-buttons-dark.svg" width="960" height="286" alt="Three Butttons Modal" loading="auto" >}}

### Icon in the Header

{{< img src="/img/mobile/modals-header-icon.svg" dark="/img/mobile/modals-header-icon-dark.svg" width="960" height="286" alt="Icon in the Header" loading="auto" >}}

### Dialog with Destructive Action

Buttons with destructive actions should be red: {{< color-preview hexL="#da212c" hexD="#da212c">}}

{{< img src="/img/mobile/modals-destruction.svg" dark="/img/mobile/modals-destruction-dark.svg" width="960" height="286" alt="Modals with Destructive Action" loading="auto" >}}

### Stacked Full-Width Button

{{< img src="/img/mobile/modals-stacked-full.svg" dark="/img/mobile/modals-stacked-full-dark.svg" width="960" height="286" alt="Stacked Full-Width Button" loading="auto" >}}

### Stacked Full-Width with a Single Button

{{< img src="/img/mobile/modals-stacked-full-single.svg" dark="/img/mobile/modals-stacked-full-single-dark.svg" width="960" height="286" alt="Stacked Full-Width with a Single Button" loading="auto" >}}

### Modal with Inputs

{{< img src="/img/mobile/modals-inputs.svg" dark="/img/mobile/modals-inputs-dark.svg" width="960" height="286" alt="Modal with Inputs" loading="auto" >}}

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors                                                                                                                          |
| ---------- | ------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, I. Perez, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati |

{{</ whats-changed-table >}}
