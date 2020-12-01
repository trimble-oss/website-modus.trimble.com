---
title: "Lists"
layout: "single"
description: "A list can be used to display content related to a single subject."
components: true
aliases:
  - "/lists.html"
---

## Overview

Lists are used to present information in well-formed and semantic way. The most basic list group is an unordered list.

<h6 id="list-items">List Items</h6>
<ul class="list-group">
  <li class="list-group-item active">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>

## Usage

**Use when**

- Creating vertical navigation.
- Displaying options within a menu.

**Don't use when**

- Displaying tabular data. Instead, use a [Table](/elements/tables/).

## Specifications

Lists are available in two sizes: default and condensed.

- Default list: 48px in height; 16px font size.
- Condensed list: 32px in height; 12 px font size.


<div class="guide-example-block my-2 py-4 bg-light pr-5">
  <div class="guide-content-sample anatomy-display-container pr-3">
    <ul class="list-group">
      <li
        class="list-group-item list-item-right-control active anatomy-display-static"
      >
        <span>List Item</span>
        <i class="icon modus-icons">check</i>
      </li>
      <li class="list-group-item list-item-right-control">
        <span>List Item with Menu</span>
        <div class="dropdown modus-icon">
          <button
            class="btn btn-icon-only btn-text-dark rounded-circle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="modus-icons">more_vertical</i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-right"
            x-placement="bottom-end"
            style="position: absolute; transform: translate3d(-171px, 33px, 0); top: 0; left: 0; will-change: transform;"
          >
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </li>
      <li class="list-group-item list-item-left-control">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="listCheckbox"
            name="example1"
          />
          <label class="custom-control-label" for="listCheckbox"></label>
        </div>
        <span class="anatomy-display-static" data-anatomy-colors="false"
          >List Item with Checkbox</span
        >
      </li>
      <li class="list-group-item list-item-left-control">
        <i class="icon modus-icons">dashboard</i>
        <span>List Item with Left Icon</span>
      </li>
    </ul>
  </div>
</div>

### Condensed List

<ul class="list-group list-group-condensed">
  <li class="list-group-item active">List Item (active)</li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-switch custom-control-inline">
      <input type="checkbox" checked="" class="custom-control-input" id="listSwitch-cond">
      <label class="custom-control-label" for="listSwitch-cond"></label>
    </div>
    <span>Left Switch</span>
  </li>
  <li class="list-group-item list-item-right-control">
    <span>Right Switch</span>
    <div class="custom-control custom-switch custom-control-inline">
      <input type="checkbox" checked="" class="custom-control-input" id="listSwitch-cond2">
      <label class="custom-control-label" for="listSwitch-cond2"></label>
    </div>
  </li>
  <li class="list-group-item list-item-left-control">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" checked="" class="custom-control-input" id="customCheck-cond1" name="cond1">
      <label class="custom-control-label" for="customCheck-cond1"></label>
    </div>
    <span>Left Checkbox</span>
  </li>
</ul>

### Behaviors

- Basic lists contain a set of items displayed in rows. Each item is represented as a text label. Depending on the purpose of the list, each row may also be accompanied by a control, such as a checkbox or radio button. The user can also select a row to perform an action on the corresponding item.
- Complex lists contain a set of items displayed in rows. Each item is represented as a text label. In addition to the item label, the rows in a complex list contain multiple pieces of information for each item. Depending on the purpose of the list, each row may also be accompanied by a control. The user can also select a row to perform an action on the corresponding item.
  - Use when the user can benefit from viewing more information about each list item without needing to select the item first.
  - Use when the available space in the design does not let us display a table.

### Editorial

**Length**

- Generally, lists should be used to present simple pieces of information. For more complex sets of data, consider using a [Table](/elements/tables/).

**Order**

- Arrange list items in a logical way. For example, if the list is about resource use, the default order might be highest resource use to lowest. Grouping items in categories into smaller, more specific lists might be more meaningful in some contexts. Alternatively, organize in alphabetical or numeric order.

**Text**

- Use list items that are grammatically parallel. For example, do not mix passive voice with active voice or declarative sentences (statements) with imperative sentences (direct command).
- We don’t always have control over the content in a list. Sometimes a list displays user-generated content, such as customer names. The default order of such a list is alphabetical or numeric by date.
- When we have control over list content, present the list items in sentence case (example: Your business name). The default order is alphabetical or numeric by date.
- In instruction copy, use the words, “select” and “clear” to guide users to make selections. Don’t use the word “deselect.” It’s robotic and can’t be translated easily.
- Don’t use punctuation in list items unless one of the list items includes more than one sentence. In that case, all the list items will have end punctuation.

### Accessibility

- Make sure the list is keyboard accessible. The tab order needs to be sequential.
