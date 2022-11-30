---
title: "Tabs"
layout: "single"
description: "Tabs are used to quickly navigate between views within the same context."
components: true
component: tabs
images:
  - "/img/components/headers/tabs.png"
tags: [in-field, styles]
---

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

There are three types of tabs:

- Text only has boarder to clear to users.
- Icon text is the same as current Modus.
- Icon only.

Background Gray 0 is optional to make clearer than current white option.

{{< img src="/img/in-field/tabs-spec.png" dark="/img/in-field/tabs-spec-dark.png" alt="Tab-Spec" >}}

**Note:** In-cab size only. See mobile patterns (coming soon) for smaller options if required.

### Behaviors

- Try to organize tabs so that the most relevant, pre-selected tab is also the left most tab.
- When clicked, tabs should transition between views and highlight the selected tab.
- Disabled tabs should have a reduced opacity.
- Tab content should not disrupt the overall page layout in ways that negatively impact user experience.
- At a smaller screen size, the tabs collapse into a dropdown.

### OEM Branding

- This component can be branded for OEM's.

{{< img src="/img/in-field/tabs-oem.png" dark="/img/in-field/tabs-oem-dark.png" alt="Tab-OEM" >}}

### Editorial

- Tab labels should be in all uppercase.
- Avoid tab labels that contain more than two words.
- Avoid truncating tab labels.
