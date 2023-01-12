---
draft: true
title: "Tables"
layout: "single"
description: "Tables are largely based on the List component.  Tables can be stacked horizontally and vertically in multiple rows and columns, whereas Lists can only be stacked vertically in a single column."
components: true
component: tables
images:
  - "/img/mobile/headers/tables.png"
tags: [mobile, styles]
---

### Styles

## Horizontal Filled Layout

{{< img src="/img/mobile/tables-horizontal.svg" dark="/img/mobile/tables-horizontal-dark.svg" width="961" height="170" class="w-100" alt="Tables Horizontal" loading="auto" >}}

# Width

- A table can have a set static width or dynamically fill the width of a page or screen.  It is important to make sure that the cells have the appropriate settings to scale accordingly as well.

# Height

- The height of a table cell is inherited from the List Item size.

# Dividers
- The tables component comes with the option to show or hide dividers depending on preference.  Modus recommends not using dividers, but it’s up to you.

# Scrollable

- Tables can be scrollable just like lists if they are at a fixed size.  For more information, see List Scrolling.

## Compact Mobile Layout (Row Cards)

{{< img src="/img/mobile/tables-row.svg" dark="/img/mobile/tables-row-dark.svg" width="961" height="170" class="w-100" alt="Tables Row" loading="auto" >}}

# Mobile Stacking

- In some instances, it may be desirable to display a large amount of information in a limited horizontal space, such as a mobile phone.  The compact display option for tables converts each row into a card, complete with its own header column.  This is designed to scroll infinitely if needed.

# Row Striping

- Modus does not recommend row striping, but if you have to a state has been provided for Alt Row.
