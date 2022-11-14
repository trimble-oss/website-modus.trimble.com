---
title: "Lists"
layout: "single"
description: "Lists are made of list items. A list can be used to display content related to a single subject."
components: true
component: Lists
images:
  - "/img/components/headers/lists.png"
keywords: Lists, List
tags: [in-field, styles]
---

## Specifications

Each list item is represented as a text label. In addition to the item label, a list item may contain multiple pieces of information, such as an additional text detail and/or an icon. Depending on the purpose of the list, each row may also be accompanied by a control. Use when the user can benefit from viewing more information about each list item without needing to select the item first.

If needed, the user may reorder list items by touching the handle (6 dots at left side of line item) and dragging the list item to a different location.

The user can also select a row to perform an action on the corresponding item.
Where needed, lists can have groups of sub-categorized list items. Child list items are alternately shown/hidden using the arrow at the left side of the parent line item.

{{< img src="/img/in-field/lists-spec.svg" dark="/img/in-field/lists-spec-dark.svg" width="100%" class="w-100" alt="lists Specs" lazyload="auto" >}}

**Note:** Incab sizes only, see mobile for smaller options for in-field.

### Behaviors

- Basic lists contain a set of items displayed in rows. Each item is represented as a text label. Depending on the purpose of the list, each row may also be accompanied by a control, such as a checkbox or radio button. The user can also select a row to perform an action on the corresponding item.
- Complex lists contain a set of items displayed in rows. Each item is represented as a text label. In addition to the item label, the rows in a complex list contain multiple pieces of information for each item. Depending on the purpose of the list, each row may also be accompanied by a control. The user can also select a row to perform an action on the corresponding item.
- Use when the user can benefit from viewing more information about each list item without needing to select the item first.
- Use when the available space in the design does not let us display a table

<!-- prettier-ignore-start -->
| State    | Example                                                                                              |
| -------- | ---------------------------------------------------------------------------------------------------- |
| Default  | {{< img src="/img/in-field/lists-default.svg" width="199" alt="Example of a Default List Item" >}}   |
| Pressed  | {{< img src="/img/in-field/lists-pressed.svg" width="199" alt="Example of a Pressed List Item" >}}   |
| Focus    | {{< img src="/img/in-field/lists-focus.svg" width="199" alt="Example of a Focus List Item" >}}       |
| Selected | {{< img src="/img/in-field/lists-selected.svg" width="199" alt="Example of a Selected List Item" >}} |
| Disabled | {{< img src="/img/in-field/lists-disabled.svg" width="199" alt="Example of a Disabled List Item" >}} |
{class="table table-bordered table-thead-light d-none"}
<!-- prettier-ignore-end -->

{{< img src="/img/in-field/lists-states.png" dark="/img/in-field/lists-states-dark.png" width="100%" class="w-100" alt="lists States" lazyload="auto" >}}

#### Editorial

**Length**

- Generally, lists should be used to present simple pieces of information. For more complex sets of data, consider using a table.

**Order**

- Arrange list items in a logical way. For example, if the list is about resource use, the default order might be highest resource use to lowest. Grouping items in categories into smaller, more specific lists might be more meaningful in some contexts. Alternatively, organize in alphabetical or numeric order.

**Text**

- Use list items that are grammatically parallel. For example, do not mix passive voice with active voice or declarative sentences (statements) with imperative sentences (direct command).
- We don’t always have control over the content in a list. Sometimes a list displays user-generated content, such as customer names. The default order of such a list is alphabetical or numeric by date.
- When we have control over list content, present the list items in sentence case (example: Your business name). The default order is alphabetical or numeric by date.
- In instruction copy, use the words, “select” and “clear” to guide users to make selections. Don’t use the word “deselect.” It’s robotic and can’t be translated easily.
- Don’t use punctuation in list items unless one of the list items includes more than one sentence. In that case, all the list items will have end punctuation.