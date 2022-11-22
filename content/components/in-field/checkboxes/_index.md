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

Checkboxes should be used in forms that require submission and processing. The checkbox is shown as a square box that is ticked when it is activated. It allows the user to select one or more options among all the limited choices and requires a button press to confirm the user’s settings before they are committed.

**Note:** Checkboxes for touchscreen apps: this component includes a large, invisible touch target around the checkbox and Label to ensure high usability.

## Usage

**Use when**

- Affording a binary selection, like accepting terms and conditions.
- Affording multiple selections from a set of options.
- Enabling selection of an object, such as a [Card](/components/in-field/cards/).
- Affording selection of a row within a data [Table](/components/in-field/table/).
- There is a parent and child relationship. User may use a parent checkbox to make a bulk selection of all list items. Unchecking the parent deselects all of the list items. Alternatively, user may select children individually, when the parent is not selected.

**Don't use when**

- A user can select only one option from a list. Use [Radio Buttons](/components/in-field/radio-buttons/) instead. Checkboxes allow the user to select multiple items in a set whereas radio buttons allow the user to select only one option.
- Turning a feature, mode, or functionality on and off. Instead, use a [Switch](/components/in-field/switches/).
- Checking or unchecking elicits an immediate change in the UI or functionality, such as enabling a disabled field or revealing more controls. Instead, use a [Switch](/components/in-field/switches/).
- Checking or unchecking elicits a change in background functionality without affecting the UI, like disabling an email notification. Instead, use a [Switch](/components/in-field/switches/).

  {{< img src="/img/in-field/checkboxes-example.svg" dark="/img/in-field/checkboxes-example-dark.svg" width="100%" class="w-100" alt="Example of Checkboxes in Lists" >}}

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors |
| ---------- | ------- | -------------------- | ------------ |
| 05/09/2022 | 1.0.1   | Updated full layout. | M. Johns     |

{{</ whats-changed-table >}}
