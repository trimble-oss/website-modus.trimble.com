---
sitemap_exclude: true
title: "Tabs"
layout: "single"
description: "Tabs are used to quickly navigate between views within the same context."
components: true
component: Tabs
images:
  - "/img/mobile/headers/tabs.png"
tags: [mobile, usage]
---
*Designers should use segmented controls when available due to usability issues with tabs. If that is not feasible, please follow the specifications below.*

{{< img src="/img/mobile/tabs.svg" dark="/img/mobile/tabs-dark.svg" width="961" height="260" class="w-100" alt="Tabs Example" >}}

## Overview

Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly horizontally, at the top edge. When a tabbed interface is initialized, one tab panel is always displayed.

## Atoms

{{< img src="/img/mobile/tabs-anatomy.svg" dark="/img/mobile/tabs-anatomy-dark.svg" width="1084" height="347" alt="Tabs Anatomy" loading="auto" >}}

## Usage

**Use when**

- You want to quickly switch between sibling views underneath a larger organizing principle/context.
- You want to organize content into meaningful sections that occupy less screen space.
- Add visual consistency.

**Don’t use when**

- You need primary means of navigation. (See footers)
- Grouping unrelated content.
- You want to organize content that needs to be seen by the user at the same time.
- You want to hide primary user action element.
- You want to hide critical content.

## Behavior

- Try to organize tabs so that the most relevant, pre-selected tab is also the leftmost tab.
- When clicked, tabs should transition between views and highlight the selected tab.
- Disabled tabs should have a reduced opacity, not have hover styles, and not be interactive.
- Tab content should not disrupt the overall page layout in ways that negatively impact user experience.
- At a smaller screen size, the tabs collapse into a dropdown.
- Tab labels should be in all uppercase.
- Avoid tab labels that contain more than 2 words.
- Avoid truncating tab labels.

## Specifications

- Tabs should always be placed on top of the content they represent.
- Tabs differ from primary forms of navigation, such as Navbars, in that they are considered to be related to each other (i.e. types of media, genres of music, etc…)
- Users shouldn’t need to simultaneously see content from multiple tabs.
- The currently selected tab should be appropriately highlighted.
- Always have one tab pre-selected.
- Tabs should be easy to scan and thus should have short, meaningful labels or icons. Avoid long text labels that don’t truncate or wrap.
- Labels should either be all text or all icons, not both intermixed.
- Avoid nesting tabs.
- Make unselected tabs visible to avoid potentially hiding features/content from the user.
- Maintain consistency by not removing tabs when their function is unavailable. Instead offer an explanation as to why a tab’s content is unavailable and present the user with an action to remedy it.
- Always arrange tabs in an order that makes sense for the user.

{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati  |

{{</ whats-changed-table >}}
