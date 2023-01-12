---
draft: true
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
## Overview

Checkboxes should be used in forms that require submission and processing. The checkbox is shown as a square box that is ticked when it is activated. It allows the user to select one or more options among all the limited choices and requires a button press to confirm the user’s settings before they are committed.

## Usage

**Use when**

- Affording a binary selection, like accepting terms and conditions.
- Affording multiple selections from a set of options.
- Enabling selection of an object, such as a Card.
- Affording selection of a row within a data Table.

**Don’t use when**

- Turning a feature, mode, or functionality on and off. Instead, use a Switch.
- Checking or unchecking elicits an immediate change in the UI or functionality, such as enabling a disabled field or revealing more controls. Instead, use a Switch.
- Checking or unchecking elicits a change in background functionality without affecting the UI, like disabling an email notification. Instead, use a Switch.

{{< img src="/img/mobile/cards-comparison.svg" dark="/img/mobile/cards-comparison-dark.svg" width="961" height="170" class="w-100" alt="Cards Specifications" loading="auto" >}}

# Behaviors

- Reflects the affirmative (“yes” or “true”) of its label when checked.
- Choices made via checkbox should always be submitted or saved using a Button.
- A checkbox’s label is included in the clickable target area.
- The default view of a set of checkboxes is having no option selected.


{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati   |

{{</ whats-changed-table >}}
