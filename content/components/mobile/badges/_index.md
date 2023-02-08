---
title: "Badges"
layout: "single"
description: "Badges are non-interactive labels which hold small amounts of information."
components: true
component: Badges
images:
  - "/img/mobile/headers/badges.png"
tags: [mobile, usage]
aliases:
  - badge
---
{{< img src="/img/mobile/badges.svg" dark="/img/mobile/badges-dark.svg" width="961" height="260" class="w-100" alt="Badges Example" >}}

## Overview

Badges notify the user of a status, for example that there are new or unread messages or notifications. They typically describe or relate to another element on the page. Badges scale so that their height matches the font-size of their immediate parent element by using relative font sizing and em units.

## Usage

**Use when**

- In proximity to notifications or user avatars with eye-catching appeal (e.g. displaying unread messages count).
- Use for displaying quick, easily digestible bits of information.

**Don’t use when**

- Displaying long strings of text.
- An interactive element is needed, such as a [Button](/components/mobile/buttons/) or [Chip](/components/mobile/chips/).

## Types

There are two types of badges: default and counter badges. They are available in three sizes: small, default, and large.

### Default Badges

Used when more emphasis is needed. **Default badges can look like [Buttons](/components/mobile/buttons/).** **Avoid using button colors to make sure the
user can tell the difference.**

{{< img src="/img/mobile/badges-default.svg" dark="/img/mobile/badges-default-dark.svg" width="945" height="226"  alt="Badges Default" loading="auto" >}}

### Counter Badges

Used to display up to 3 characters (usually a number in a counter). Counter badges can look like Chips , when too many characters are used. **Use a maximum of 3 characters or numbers.**

{{< img src="/img/mobile/badges-numbers.svg" dark="/img/mobile/badges-numbers-dark.svg" width="945" height="226"  alt="Badges Number Examples" loading="auto" >}}

## Badges In Other Elements

Badges can be inserted into other elements.

{{< img src="/img/mobile/badges-in-elements.svg" dark="/img/mobile/badges-in-elements-dark.svg" width="993" height="458" alt="Badges In Other Elements" loading="auto" >}}


{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati   |

{{</ whats-changed-table >}}
