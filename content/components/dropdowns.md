---
title: "Dropdowns"
layout: "single"
description: "Dropdowns present a list of options that can be used to filter or sort existing content."
components: true
images:
  - "/img/headers/components/dropdowns.png"
keywords: menu
bootstrapURL: "/components/dropdowns/"
reactBootstrapURL: "/components/dropdowns/"
---

## Overview

Dropdowns (also known as a dropdown menu, drop menu, pull-down list, picklist) is a graphical control element, similar to a list box, that allows the user to choose one value from a list. When activated, it displays (drops down) a list of values, from which the user may select one. They can be used in menus and tabs.

## Usage

**Use when**

- Filtering or sorting content on a page.
- Single selection from a list is necessary.

**Don’t use when**

- Providing only two options. Instead, use a [Radio](/components/radio-buttons/) Group or a [Switch](/components/switches/).

## Specifications

- Dropdowns can be activated by clicking a button, an icon, or a header. See [Inputs](/components/inputs/) for dropdowns in form input fields.
- Dropdown functionality is indicated by a small trailing arrow or an ellipsis (not applicable to icon dropdowns).
- Within a dropdown, you can separate groups of related menu items with a divider.

<div class="guide-example-block d-inline-block mb-3">
  <div class="guide-sample" style="padding-bottom: 120px; padding-right: 90px;">
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <div
        class="dropdown-menu dropdown-menu-sm show"
        aria-labelledby="dropdownMenuButton"
        x-placement="bottom-start"
        style="position: absolute; will-change: transform; top: 0; left: 0; transform: translate3d(0, 32px, 0);"
      >
        <a class="dropdown-item active" href="#">Active item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
      </div>
    </div>
  </div>
</div>

### Behaviors

- Make sure the items in the list are in logical order (alphabetical, chronological, order of importance, etc.)
- If no item is preselected, use something like “Select a vendor” or “Select an account” in ghost or hint text format. If you can’t gray out the text, you can use some kind of indicator, like parentheses.
- If you need to, you can display ”None” as one of the options. It should have the same text formatting as the other options in the list.
- Dropdowns are activated by clicking, not hovering.

### Editorial

- Present drop-down selections in sentence case (“Select an account”). If the drop-down list contains formal names, such as customer names or accounts, then those selections will appear in title case.
- Don’t use “deselect.” Instead, use “clear.” The term “deselect” causes a problem for localization.
- The list of options should be sorted in a consistent order (alphabetical, chronological, the most selected option, or by order of importance).
- Don’t end text in a select with a period.
- Keep option names as brief as possible. Aim for under 5 words.

### Accessibility

- The element that opens the menu has role `button`.
- The element with role `button` has `aria-haspopup` set to either `menu` or `true`.
- When the menu is displayed, the element with role `button` has `aria-expanded` set to `true`. When the menu is hidden, it is recommended that `aria-expanded` is not present. If `aria-expanded` is specified when the menu is hidden, it is set to `false` .
- The element that contains the menu items displayed by activating the button has role `menu`.
- Optionally, the element with role `button` has a value specified for `aria-controls` that refers to the element with role `menu`.
- With focus on the button, "Enter" or "Space" opens the menu and places focus on the first menu item. Up and down arrows move focus through menu items.

{{< whats-changed-table >}}
| Date | Version | Notes | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 03/14/2022 | 1.3.0 | Removed contradictory directions. | W. Pritchard, E. Gunther |
{{</ whats-changed-table >}}
