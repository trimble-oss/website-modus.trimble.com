---
title: "Lists"
layout: "single"
description: "Lists are made of list items. A list can be used to display content related to a single subject."
components: true
component: Lists
images:
  - "/img/mobile/headers/lists.png"
keywords: Lists, List
tags: [mobile, styles]
---
## Specifications

### Anatomy of a List Item

{{< img src="/img/mobile/list-anatomy.svg" dark="/img/mobile/list-anatomy-dark.svg" width="960" height="170" alt="List Anatomy" loading="auto" >}}

### Controls

A list item can contain a control or icon on the left, right or both.  These controls are provided in the context of their own atom.

{{< img src="/img/mobile/list-controls.svg" dark="/img/mobile/list-controls-dark.svg" width="960" height="170" alt="List Controls" loading="auto" >}}

### Anatomy of a List

{{< img src="/img/mobile/list-full-anatomy.svg" dark="/img/mobile/list-full-anatomy-dark.svg" width="960" height="170" alt="Full List Anatomy" loading="auto" >}}

- **Width:** A list should always stack vertically in a single column and have a container set to a fixed width.  This allows the atom.list-item elements to scale appropriately when set to “fill container” as their width.
- **Height:** A list can extend infinitely in a vertical direction and scroll with a fixed height.
- **Borders:** 1px border, {{< color-preview hexL="#e0e1e9" hexD="#464B52">}}
- **Scroll bars:** Lists can be scrolled within a fixed height. The scrollbar track color inherits the list background color (same as the border color).
- **Sectioning:** Lists are not required to have a border between each item.  They can be divided into sections of items or divided by each item.  Whichever speaks to the user with a clearer context is the best option.
- **Border Radius:** List items do not have a border radius, but the list container does have a border radius of 4px.
- **Row Striping:** Modus does not recommend row striping.

### Sizes

{{< img src="/img/mobile/list-sizes.svg" dark="/img/mobile/list-sizes-dark.svg" width="960" height="282" alt="List Sizes" loading="auto" >}}

