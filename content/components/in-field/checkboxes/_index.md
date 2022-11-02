---
title: "Checkboxes"
layout: "single"
description: "Checkboxes are used for a list of options where the user may select multiple options, including all or none."
components: true
component: checkboxes
images:
  - "/img/components/headers/checkboxes.png"
tags: [in-field, usage]
aliases:
  - checkbox
private: true
hidden: true
---

{{< img src="/img/in-field/checkboxes.svg" dark="/img/in-field/checkboxes-dark.svg" class="w-100" width="980" height="228" alt="Checkbox Example" lazyload="auto" >}}

## Overview

The user can select or alternatively deselect a checkbox. The user may select none, one, or multiple checkboxes, depending on their needs. A partial select is possible where parent/child checkbox lists occur. The state of the checkbox must be clear to the user. The checkbox should visually appear to depict if it is in a selected vs deselected state, or enabled vs disabled state

**Note:** Checkboxes for touchscreen apps, this component includes a large, invisible touch target around the Checkbox and Label to ensure high usability.

## Usage

**Use when**

- Filtering and batch action in lists and tables, on a full page, in modals, or on side panels.
- Filtering data either on a page, in a menu, or within a component. Checkboxes are found in the Data table for batch editing purposes.
- Requiring confirmation of terms and conditions. Selecting or deselecting the checkbox can indicate the user agrees to the terms.
- There is a parent and child relationship. You can use a parent checkbox to make a bulk selection of all list items. Unchecking the parent deselects all of the list items. Alternatively, you can select children individually when the parent is not selected, which is where the indeterminate state comes in to play.

**Don't use when**

- A user can select only one option from a list. Use [Radio Buttons](/components/in-field/radio-buttons/) instead. Checkboxes allow the user to select multiple items in a set whereas radio buttons allow the user to select only one option.
- A function needs to be turned on or off. Use a [Switch](/components/in-field/switches/) instead.

  {{< img src="/img/in-field/checkboxes-example.svg" dark="/img/in-field/checkboxes-example-dark.svg" width="100%" class="w-100" alt="Example of Checkboxes in Lists" >}}

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors |
| ---------- | ------- | -------------------- | ------------ |
| 05/09/2022 | 1.0.1   | Updated full layout. | M. Johns     |

{{</ whats-changed-table >}}
