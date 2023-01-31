---
title: "Checkboxes"
layout: "single"
description: "Checkboxes are used for a list of options where the user may select multiple options, including all or none."
components: true
component: checkboxes
keywords: forms
images:
  - "/img/mobile/headers/checkboxes.png"
tags: [mobile, usage]
aliases:
  - checkbox
---

{{< img src="/img/mobile/checkboxes.svg" dark="/img/mobile/checkboxes-dark.svg" width="961" height="260" class="w-100" alt="Checkboxes Example" >}}

## Overview

Checkboxes should be used in forms that require submission and processing. The checkbox is shown as a square box that is ticked when it is activated. It allows the user to select one or more options among all the limited choices and requires a button press to confirm the user’s settings before they are committed.

## Usage

**Use when**

- Affording a binary selection, like accepting terms and conditions.
- Affording multiple selections from a set of options.
- Enabling selection of an object, such as a [Card](/components/mobile/checkboxes/).
- Affording selection of a row within a data [Table](/components/mobile/tables/).

**Don’t use when**

- A user can select only one option from a list. Use [Radio Buttons](/components/mobile/radio-buttons/) instead. Checkboxes allow the user to select multiple items in a set whereas radio buttons allow the user to select only one option.
- Turning a feature, mode, or functionality on and off. Instead, use a [Switch](/components/mobile/switches/).
- Checking or unchecking elicits an immediate change in the UI or functionality, such as enabling a disabled field or revealing more controls. Instead, use a [Switch](/components/mobile/switches/).
- Checking or unchecking elicits a change in background functionality without affecting the UI, like disabling an email notification. Instead, use a [Switch](/components/mobile/switches/).

{{< img src="/img/mobile/checkbox-example.svg" dark="/img/mobile/checkbox-example-dark.svg" width="961" height="170" class="w-100" alt="Checkbox example" loading="auto" >}}



{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati   |

{{</ whats-changed-table >}}
