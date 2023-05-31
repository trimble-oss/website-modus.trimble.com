---
title: "Spinners"
layout: "single"
description: Spinners indicate progress by showing users a loading state.
components: true
component: spinners
images:
  - "/img/mobile/headers/spinners.png"
tags: [mobile, usage]
---

{{< img src="/img/mobile/spinners.svg" dark="/img/mobile/spinners-dark.svg" width="961" height="260" class="w-100" alt="Progress Indicators" >}}

## Overview

Spinners are used as indeterminate progress indicators to show the user that there are processes happening in the background.

## Usage

**Use when**

- Indicating to the user that loading is occurring in the background.
- Loading times are indeterminate.

**Don't use when**

- A loading scenario needs to indicate progress, usually with particularly long load times. Use a dynamically updating [Progress Bar](/components/mobile/progress-bars/) instead.
- A main loading state is needed, such as an app initialization. In this case, forego our simple spinner, and opt to use a custom, branded one instead.

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors                                                                                                                |
| ---------- | ------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati |

{{</ whats-changed-table >}}
