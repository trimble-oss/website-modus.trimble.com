---
title: "Tabs"
layout: "single"
description: "Tabs are used to quickly navigate between views within the same context."
components: true
component: Tabs
images:
  - "/img/mobile/headers/tabs.png"
tags: [mobile, usage, hide-accessibility]
---

_Designers should use [Segmented Controls](/components/mobile/segmented-controls/) when available due to usability issues with tabs. If that is not feasible, please follow the specifications below._

{{< img src="/img/mobile/tabs.svg" dark="/img/mobile/tabs-dark.svg" width="961" height="260" class="w-100" alt="Tabs Example" loading="auto" >}}

## Overview

Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly horizontally, at the top edge. When a tabbed interface is initialized, one tab panel is always displayed.

## Usage

**Use when**

- You want to quickly switch between sibling views underneath a larger organizing principle/context.
- You want to organize content into meaningful sections that occupy less screen space.
- Add visual consistency.

**Don’t use when**

- You need primary means of navigation. Use [Bottom Navbar](/components/mobile/bottom-navbars/) instead.
- Grouping unrelated content.
- You want to organize content that needs to be seen by the user at the same time.
- You want to hide primary user action element.
- You want to hide critical content.

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors                                                                                                                |
| ---------- | ------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati |

{{</ whats-changed-table >}}
