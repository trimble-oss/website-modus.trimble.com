---
title: "Tooltips"
layout: "single"
description: "Tooltips provide a short description of a page element, control or object."
components: true
component: tooltips
images:
  - "/img/xr/headers/tooltips.png"
tags: [xr, usage]
---

{{< img src="/img/xr/MXR_Tooltips_Interaction.gif" width="854" height="481" class="w-100 bg-light" loading="auto" >}}

## Overview

Tooltips are overlaid on the primary object of attention for the user. They extend information truncated or vague to allow users to take informed decisions.

Tooltips remain informative and should not be considered actionable.

In XR they are also used to provide insight into a virtual object thorugh tooltips that are bound/anchored/attached to a model's part. Use them as well to provide insight into a real object, which has been identified or was previously embedded in the device’s memory.

In the case of truncated interface texts, tooltips complete information, so that users can take a decision or start an action.  These are triggered through interactions like proximity, gaze or hover and are therefore temporary.

## Usage

**Use when**

- Providing a short description of a page element or control.
- Revealing the full text of truncated data.
- For non-essential information, consider using plain text messages

**Don't use when**

- Providing a description longer than 10 words.
- Ancillary buttons that require more information. This can be taken care of through voice command hints.

## Types

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th class="w-50">Example</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="/img/xr/tooltip-object.png" alt="Object Tooltip" width="320" height="233" loading="lazy"></td>
      <td>Object Tooltip</td>
    </tr>
    <tr>
      <td><img src="/img/xr/tooltip-ui.png" alt="UI Tooltip" width="320" height="233" loading="lazy"></td>
      <td>UI Tooltip</td>
    </tr>
  </tbody>
</table>
