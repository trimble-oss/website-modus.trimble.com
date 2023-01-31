---
sitemap_exclude: true
title: "Lists"
layout: "single"
description: "Lists are made of list items. A list can be used to display content related to a single subject."
components: true
component: lists
images:
  - "/img/mobile/headers/lists.png"
keywords: List
tags: [mobile, usage]
---

{{< img src="/img/mobile/lists.svg" dark="/img/mobile/lists-dark.svg" width="961" height="260" class="w-100" alt="Lists Example" >}}

## Overview

Lists are vertically stacked indexes of text items, icons, controls or images, with a uniform spacing between them.  The atomic component of a List is the List Item.

List includes atomic components List Item, Icon, Label, Control.

## Anatomy of a List Item

{{< img src="/img/mobile/list-anatomy.svg" dark="/img/mobile/list-anatomy-dark.svg" width="960" height="170" alt="List Anatomy" loading="auto" >}}

## Controls

A list item can contain a control or icon on the left, right or both.  These controls are provided in the context of their own atom.

{{< img src="/img/mobile/list-controls.svg" dark="/img/mobile/list-controls-dark.svg" width="960" height="170" alt="List Controls" loading="auto" >}}

## Anatomy of a List

{{< img src="/img/mobile/list-full-anatomy.svg" dark="/img/mobile/list-full-anatomy-dark.svg" width="960" height="170" alt="Full List Anatomy" loading="auto" >}}


## Usage

**Use when**

- Some content can be hidden because it is not critical to the user’s task.
- You want to declutter the interface or shorten pages to reduce scrolling when content is not crucial to read in full.
- You want to simplify a complex process.
- There are options dependent upon a prior selection.
- All options and information are not critical to see at first.
- Allowing users to hide controls and content, so they can better focus on their task.

**Don’t use when**

- Providing an introductory element to a set of content which doesn’t need an expand and collapse functionality. Instead, use a [Navbar](/componets/mobile/navbars/).
- Hiding critical content solely to clean up the interface.
- Hiding an action if the user can easily do it without additional input.
- Hiding primary actions on the page.
- Revealing content that is not contextually relevant to the user.
- Nesting too many layers. In other words, don’t place accordions within accordions.
- Creating a set of visibly contained content, which doesn’t need an expand-and-collapse functionality. Instead, use a [Card](/components/mobile/cards/).


{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati  |

{{</ whats-changed-table >}}
