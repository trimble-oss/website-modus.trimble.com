---
draft: true
title: "Scrollbars"
layout: "single"
description: ""
components: true
component: scrollbars
images:
  - "/img/mobile/headers/scrollbars.png"
tags: [mobile, usage]
---

## Overview

The scrollbar is for both showing a user that content in a container overflows and for the user to control the scrolling content of that container.

## Anatomy of a Scrollbar

{{< img src="/img/mobile/scrollbar-anatomy.svg" dark="/img/mobile//scrollbar-anatomy-dark.svg" width="961" height="170" class="w-100" alt="Scrollbar Anatomy" loading="auto" >}}

## Minimal

Minimal - A list should always stack vertically and have a container set to a fixed width.  This allows the atom.list-item elements to scale appropriately when set to “fill container” as their width.

## Behavior & Interaction

{{< img src="/img/mobile/scrollbar-minimal-nointeraction.svg" dark="/img/mobile//scrollbar--minimal-nointeraction-dark.svg" width="961" height="170" class="w-100" alt="Scrollbar Minimal No Interaction" loading="auto" >}}

{{< img src="/img/mobile/scrollbar-minimal-interaction.svg" dark="/img/mobile//scrollbar--minimal-interaction-dark.svg" width="961" height="170" class="w-100" alt="Scrollbar Minimal Interaction - Scrollbar Shows" loading="auto" >}}

## Default Behavior

Not Scrollable:
When a list is not scrollable, there is no scrollbar
present or taking up space.
{{< img src="/img/mobile/scrollbar-minimal-notscrollable.svg" dark="/img/mobile//scrollbar--minimal-notscrollable-dark.svg" width="961" height="170" class="w-100" alt="Scrollbar Minimal Not Scrolling" loading="auto" >}}

Scrollable:
List remains the same width
Scrollbar track is also list background color / divider color
List items shrink in width to fill space.
{{< img src="/img/mobile/scrollbar-minimal-scrollable.svg" dark="/img/mobile//scrollbar--minimal-scrollable-dark.svg" width="961" height="170" class="w-100" alt="Scrollbar Minimal Scrollable" loading="auto" >}}

## Usage

**Use when**

- Options are mutually exclusive.
- Visibility and quick response is a priority.
- Comparison of options needs to be clear.
- You want to emphasize options.

**Don’t use when**

- User can make multiple selections. Instead, use Checkboxes.
- You are providing more than 7 options.
- You are attempting to highlight a preferred choice. Instead, use a Dropdown.
- When a large number of familiar options is available.

## Progress Indicators

# Atoms

{{< img src="/img/mobile/progress-atoms.svg" dark="/img/mobile//progress-atoms-dark.svg" width="961" height="170" class="w-100" alt="Progress Indicators Atoms" loading="auto" >}}

## Spinners

# Atoms

{{< img src="/img/mobile/progress-spinners.svg" dark="/img/mobile//progress-spinners-dark.svg" width="961" height="170" class="w-100" alt="Progress Indicators Spinners" loading="auto" >}}

## Sizes

{{< img src="/img/mobile/progress-size.svg" dark="/img/mobile//progress-sizes-dark.svg" width="961" height="170" class="w-100" alt="Progress Indicators Sizes" loading="auto" >}}


{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati  |

{{</ whats-changed-table >}}
