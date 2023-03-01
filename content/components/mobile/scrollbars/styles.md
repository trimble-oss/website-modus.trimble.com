---
title: "Scrollbars"
layout: "single"
description: "Scrollbars allow user to scroll content within a window."
components: true
component: scrollbars
images:
  - "/img/mobile/headers/scrollbars.png"
tags: [mobile, styles]
---
## Specifications

### Anatomy of a Scrollbar

{{< img src="/img/mobile/scrollbar-anatomy.svg" dark="/img/mobile//scrollbar-anatomy-dark.svg" width="1078" height="422" alt="Scrollbar Anatomy" loading="auto" >}}

- Always offer a scrollbar if an area has scrolling content. Do not rely on auto-scrolling or on dragging. The user might not realize there is more content to scroll through. It has become a convention for mobile UIs that a scrollbar remains invisible until the user starts scrolling, but use it with caution (see Minimal Scrollbar below).
- Hide scrollbards if all content is visible. If users see a scrollbar, they assume there's additional content and will be frustrated if they can't scroll.
- Avoid horizontal scrolling.
- Scrollbars with arrows offer the best usability.

## Types

- **Minimal:** Minimal scrollbars are best, when you need to eliminate all possible distractions. They are visually unobtrusive but may create usability problems, especially for users with disabilities.
- **Default:** Recommended option for mobile interfaces.
- **With Buttons:** These scrollbars are larger and easier to use especially in the field. They offer the best usability.

## Behavior

Users may scroll by

- Clicking in the trough,
- Clicking on the arrows,
- Dragging the slider.

### Minimal Scrollbars

{{< img src="/img/mobile/scrollbar-minimal-nointeraction.svg" dark="/img/mobile/scrollbar-minimal-nointeraction-dark.svg" width="960" height="337" alt="Scrollbar Minimal No Interaction" loading="auto" >}}

### Default Scrollbars

{{< img src="/img/mobile/scrollbar-default.svg" dark="/img/mobile//scrollbar-default-dark.svg" width="944" height="447" alt="Scrollbar Minimal Not Scrolling" loading="auto" >}}


### Button Scrolling

{{< img src="/img/mobile/scrollbar-button-scrolling.svg" dark="/img/mobile//scrollbar-button-scrolling-dark.svg" width="944" height="447" alt="Button Scrolling" loading="auto" >}}
