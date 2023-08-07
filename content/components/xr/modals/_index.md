---
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

{{< img src="/img/xr/MXR_Modal_Interaction.gif" width="854" height="481" loading="auto" >}}

## Overview

Modals are overlaid on the primary environment the user is in. They interrupt the user, informing about processes, and in most cases requiring a user action. Modals overlay on the main content until the user takes the recommended action or interacts with the modal.

When modals are used within the context of other interfaces these are inert: users cannot interact with content outside an active dialog. Inert content outside an active dialog should be visually obscured or displaced beyond reach to direct the users’ attention to the dialog.

Because dialogs are highly disruptive to the user experience, they should be used sparingly, only when user’s interaction is required to continue.

## Usage

#### Use when

- Showing errors that block an app’s normal operation.
- Critical information that requires a specific user task, decision, or acknowledgement is needed.
- Needing far interaction for large and x-large dialogs.

#### Don't use when

- Scrollable, complex interaction dialogs.
- Providing non-essential information related to the underlying page. Use plain txt messages instead.

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
      <td><img src="/img/xr/Modals_Dialog_Small.png" alt="Dialog Small" width="400" height="280" loading="lazy"></td>
      <td>Small Dialog</td>
    </tr>
    <tr>
      <td><img src="/img/xr/Modals_Dialog_Medium.png" alt="Dialog Medium" width="400" height="320" loading="lazy"></td>
      <td>Medium Dialog</td>
    </tr>
    <tr>
      <td><img src="/img/xr/Modals_Dialog_Large.png" alt="Dialog Large" width="400" height="320" loading="lazy"></td>
      <td>Large Dialog</td>
    </tr>
      <tr>
      <td><img src="/img/xr/Modals_Dialog_XLarge.png" alt="Dialog Extra Large" width="400" height="320" loading="lazy"></td>
      <td>X-Large Dialog</td>
    </tr>
  </tbody>
</table>
