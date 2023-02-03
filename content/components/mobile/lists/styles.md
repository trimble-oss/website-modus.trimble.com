---
sitemap_exclude: true
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
### Styles

Width - A list should always stack vertically in a single column and have a container set to a fixed width.  This allows the atom.list-item elements to scale appropriately when set to “fill container” as their width.

Height - A list can extend infinitely in a vertical direction and scroll with a fixed height.

Borders - These are defined by placing  a background color on the list container and then allowing the list items to separate by the thickness of the border.  In the examples above, they use a 1px separation to generate a 1px border.

Scrollable - Lists can be scrolled within a fixed height.  This just compresses the list by the size of the scroll bar area and positions to the left of the scrollbar.  The scrollbar track color should inherent the list background color (same as the border color).

Sectioning - Lists are not required to have a border between each item.  They can be divided into sections of items or divided by each item.  Whichever speaks to the user with a clearer context is the best option.

Border Radius - List items do not have a border radius while the entire list container does have a border radius of 4px.

Row Striping - Modus does not recommend row striping, but if you have to a state has been provided for Alt Row.

{{< img src="/img/mobile/list-sizes.svg" dark="/img/mobile/list-sizes-dark.svg" width="960" height="282" alt="List Sizes" loading="auto" >}}

## Customization Examples

{{< img src="/img/mobile/list-examples.svg" dark="/img/mobile/list-examples-dark.svg" width="960" height="130" alt="List Examples" loading="auto" >}}
