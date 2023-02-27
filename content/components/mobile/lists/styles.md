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

#### Controls

A list item can contain a control or icon on the left, right, or both.  These controls are provided in the context of their own atom.

{{< img src="/img/mobile/list-controls.svg" dark="/img/mobile/list-controls-dark.svg" width="960" height="170" alt="List Controls" loading="auto" >}}

### Anatomy of a List

{{< img src="/img/mobile/list-full-anatomy.svg" dark="/img/mobile/list-full-anatomy-dark.svg" width="960" height="170" alt="Full List Anatomy" loading="auto" >}}

- **Width:** A list should always stack vertically in a single column and have a container set to a fixed width.  This allows the atom.list-item elements to scale appropriately when set to “fill container” as their width.
- **Height:** A list can extend infinitely in a vertical direction and scroll with a fixed height.
- **Borders:** 1px border, {{< color-preview hexL="#e0e1e9" hexD="#464B52">}}
- **Scroll Bars:** Lists can be scrolled within a fixed height. The scrollbar track color inherits the list background color (same as the border color).
- **Sectioning:** Lists are not required to have a border between each item. They can be divided into sections of items or divided by each item.
- **Border Radius:** List items do not have a border radius, but the list container does have a border radius of 4px.
- **Row Striping:** Modus does not recommend row striping.

### Sizes

{{< img src="/img/mobile/list-sizes.svg" dark="/img/mobile/list-sizes-dark.svg" width="960" height="282" alt="List Sizes" loading="auto" >}}

### Behaviors

- Basic lists contain a set of items displayed in rows. Each item is represented as a text label. Depending on the purpose of the list, each row may also be accompanied by a control, such as a checkbox or radio button. The user can also select a row to perform an action on the corresponding item.
- Complex lists contain a set of items displayed in rows. Each item is represented as a text label. In addition to the item label, the rows in a complex list contain multiple pieces of information for each item. Depending on the purpose of the list, each row may also be accompanied by a control. The user can also select a row to perform an action on the corresponding item.
  - Use when the user can benefit from viewing more information about each list item without needing to select the item first.
  - Use when the available space in the design does not let us display a table.

### Editorial

**Length**

- Generally, lists should be used to present simple pieces of information. For more complex sets of data, consider using a [Table](/components/mobile/tables/).

**Order**

- Arrange list items in a logical way. For example, if the list is about resource use, the default order might be highest resource use to lowest. Grouping items in categories into smaller, more specific lists might be more meaningful in some contexts. Alternatively, organize in alphabetical or numeric order.

**Text**

- Use list items that are grammatically parallel. For example, do not mix passive voice with active voice or declarative sentences (statements) with imperative sentences (direct command).
- We don’t always have control over the content in a list. Sometimes a list displays user-generated content, such as customer names. The default order of such a list is alphabetical or numeric by date.
- When we have control over list content, present the list items in sentence case (example: Your business name). The default order is alphabetical or numeric by date.
- In instruction copy, use the words, “select” and “clear” to guide users to make selections. Don’t use the word “deselect.” It’s robotic and can’t be translated easily.
- Don’t use punctuation in list items unless one of the list items includes more than one sentence. In that case, all the list items will have end punctuation.
