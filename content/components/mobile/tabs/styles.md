---
title: "Tabs"
layout: "single"
description: "Tabs are used to quickly navigate between views within the same context."
components: true
component: tabs
images:
  - "/img/mobile/headers/tabs.png"
tags: [mobile, styles]
---

## Specifications

### Anatomy

{{< img src="/img/mobile/tabs-anatomy.svg" dark="/img/mobile/tabs-anatomy-dark.svg" width="1084" height="347" alt="Tabs Anatomy" loading="auto" >}}

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

### Sizing

The two sizes for tabs are Default (48px) and Small (32px).

{{< img src="/img/mobile/tabs-sizing.svg" dark="/img/mobile/tabs-sizing-dark.svg" width="1084" height="519" alt="Tabs Sizing" >}}

### States

The two states for tabs are Active and Default. The Active state has a primary and secondary option. Both the Active and Default options have two different placements for icons.  The Icon Above options are part of a separate Tab component.

{{< img src="/img/mobile/tabs-states.svg" dark="/img/mobile/tabs-states-dark.svg" width="1084" height="234" alt="Tabs States" >}}

## Behavior

- Try to organize tabs so that the most relevant, pre-selected tab is also the leftmost tab.
- When clicked, tabs should transition between views and highlight the selected tab.
- Disabled tabs should have a reduced opacity, not have hover styles, and not be interactive.
- Tab content should not disrupt the overall page layout in ways that negatively impact user experience.
- At a smaller screen size, the tabs collapse into a dropdown.

## Editorial

- Tab labels should be in all uppercase.
- Avoid tab labels that contain more than 2 words.
- Avoid truncating tab labels.
