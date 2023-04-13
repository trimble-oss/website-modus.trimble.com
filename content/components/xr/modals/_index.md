---
draft: true
title: "Modals"
layout: "single"
description: "Modal dialogs interrupt workflows and require user interaction."
components: true
component: modals
images:
  - "/img/xr/headers/modals.png"
keywords: modal, Dialogs, Dialog
tags: [xr, usage]
---

{{< img src="/img/xr/MXR_Menu_Interaction.gif" dark="/img/xr/MXR_Card_Interaction.gif" width="962" height="160" class="w-100" loading="auto" >}}

## Overview

Modals are overlaid on the primary environment the user is in. They interrupt the user, informing about processes, and in most cases requiring a user action. Modals overlay on the main content until the user takes the recommended action or interacts with the modal.

When modals are used within the context of other interfaces these are inert: users cannot interact with content outside an active dialog. Inert content outside an active dialog should be visually obscured or displaced beyond reach to direct the users’ attention to the dialog.

Because dialogs are highly disruptive to the user experience, they should be used sparingly, only when user’s interaction is required to continue.

## Usage

**Use when**

- Errors that block an app’s normal operation.
- Critical information that requires a specific user task, decision, or acknowledgement.
- Contextual and should welcome & foster users to remain standing.
- Consider to use far interaction for large & x-large dialogs.
- For non-essential information, consider using plain txt messages.


**Don't use when**

- Scrollable, complex interaction dialogs.
- Providing non-essential information related to the underlying page.


## Types

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Example</th>
      <th>Type </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="/img/xr/Modals_Dialog_Small.png" alt="Dialog Small" width="400"height="280"></td>
      <td>Small Dialog</td>
    </tr>
    <tr>
      <td><img src="/img/xr/Modals_Dialog_Medium.png" alt="Dialog Medium" width="400"height="320"></td>
      <td>Medium Dialog</td>
    </tr>
    <tr>
      <td><img src="/img/xr/Modals_Dialog_Large.png" alt="Dialog Large" width="400"height="320"></td>
      <td>Large Dialog</td>
    </tr>
      <tr>
      <td><img src="/img/xr/Modals_Dialog_XLarge.png" alt="Dialog Extra Large" width="400"height="320"></td>
      <td>X-Large Dialog</td>
    </tr>
  </tbody>
</table>
