---
title: "Cards"
layout: "single"
description: "Cards contain content and actions about a single subject."
components: true
component: cards
keywords: card
images:
  - "/img/xr/headers/cards.png"
tags: [xr, usage]
aliases:
  - card
---

{{< img src="/img/xr/MXR_Card_Interaction.gif" width="854" height="481" loading="auto" >}}

## Overview

Cards are containers for displaying relevant and actionable information on a single topic. A card serves as a single, contained unit and is independent of surrounding content. It cannot be nested within cards and cannot divide into multiple cards.

The appearance of cards helps users understand how their contents are related, but it might make sense to provide more detail about the relationship.

Cards act like buttons, that means by default they react to the trigger by users.

They can encompass 2 outcomes, which can exclusively be combined through a pre-command, usually a button, that would toggle the 2 default interactions, namely:
- Open = access relevant information
- Select = mark card(s) for further action, example delete

## Usage

**Use when**

- You need to group information in a digestible form.
- You need to offer a short entry point that is linked to more detailed content or a complex task.
- Lay out single or multiple sets of related information in the same region of the page. Cards may include an image, a text summary, and actions.

**Don't use when**

- You need to show unrelated content types or actions in a single container.
- You need to show content in multiple columns.
- You need to display content in a table format.
- Grouping a large set of related information.

## Types

Cards are qualified by content type.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th>Example</th>
      <th>Content Type </th>
      <th>When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="/img/xr/Card_Text_Default.png" alt="Default Text Cards" width="400" height="254"></td>
      <td>Text, no Action</td>
      <td>
        Use it to provide previews of nested text-heavy contents, that allow users to determine actions required on a glimpse.
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/Card_Text_Action.png" alt="Action Text Cards" width="400" height="254"></td>
      <td>Text, Action</td>
      <td>
        Use it to provide previews of nested text-heavy contents, that allow users to execute quick actions required on a glimpse.
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/Card_Image_Default.png" alt="Default Image Cards" width="400" height="254"></td>
      <td>Image, no Action</td>
      <td>
        Use it to provide previews of content better understandable through images (i.e. 3D-model), that allow users to determine actions required on a glimpse.
      </td>
    </tr>
    <tr>
      <td><img src="/img/xr/Card_Image_Action.png" alt="Action Image Cards" width="400" height="254"></td>
      <td>Image, Action</td>
      <td>
        Use it to provide previews of content better understandable through images (i.e. 3D-model), that allow users to execute quick actions required on a glimpse.
      </td>
    </tr>
  </tbody>
</table>
