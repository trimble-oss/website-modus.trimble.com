---
title: "Menus"
layout: "single"
description: "A close space-efficient way to present and nest diverse commands."
components: true
component: menus
images:
  - "/img/xr/headers/menus.png"
keywords: menu
tags: [xr, usage]
---

{{< img src="/img/xr/MXR_Menu_Interaction.gif" width="854" height="481" loading="auto" >}}

## Overview

Menus appear when users interact with a button, action, or other control. They can be opened from a variety of elements, most commonly buttons.

However in XR, menus can also be assigned to a gesture or control command that takes care of invoking them.

Designers can define a variety of menus, depending on the use cases. Among them, most common menus could be:

- **General:** commands are constant across environments and experiences.
- **Contextual:** commands are exclusively relevant to a feature.

## Usage

**Use when**

- Displaying a list of command choices on a surface.
- Displaying multiple, non-obvious commands, and options.
- Offering an option to close and/or unpin.
- Enabling voice commands or gaze-control for users with limited accessibility.

**Don't use when**

- Performing actions with a model or spatial interfaces that could either interfere with the flow or perception of the center of attention.
- Immediate, decisive actions that require full user attention is needed.

## Types

Menus are qualified by positioning and interaction.

### Hand Menus:

Hand menus are interaction patterns that allow users to invoke features of an application and/or environment within an app, bounding actions to the palm-up gesture.

### Near Menus:

Near Menus by default tag along users’ radius. However, all variants have a grabbable version with a bottom handle that allow users to place the menu where they find it convenient.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Example</th>
      <th>Type </th>
      <th>When to use</th>
    </tr>
  </thead>
  <tbody>
      <td><img src="/img/xr/HandMenu_Classic_1x3.png" alt="Hand Menu 1 by 3" width="400" height="254" loading="lazy"></td>
      <td>Hand Menus</td>
      <td>
        Generic commands that allow users to move forward in the application. Users can seamlessly bring up hand-attached UIs for frequently used functions. They offer an opportunity to help users discover features by relying on this natural gesture.
      </td>
    </tr>
    <tr>
        <tr>
      <td><img src="/img/xr/NearMenu_Classic_3x1.png" alt="Near Menu 3 by 1" width="400" height="254" loading="lazy"></td>
      <td>Near Menus</td>
      <td>
        Contextual commands and actions that need to be taken in relation to a virtual object.  They usually emerge pop from another command and can contain multiple, diverse commands in them.
      </td>
    </tr>
    <tr>
  </tbody>
</table>
