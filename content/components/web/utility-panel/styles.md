---
title: "Utility Panel"
layout: "single"
description: "Utility panel is a container which provides extra content alongside with the primary screen content."
components: true
componentsWeb: true
images:
  - "/img/components/headers/utility-panel.png"
tags: [styles]
---

## Specifications

There are three criteria to address for the utility panel. Those are: placement, shadows, and sizing.

**Placement**

- The utility panel is the top most element.
- The utility panel is always on the opposite side of the screen than the [Side Navigation](/components/web/side-navigation/).
- The footer is displayed below the side navigation menu.
- TBD WHEN PANEL FROM ELSEWHERE THAN THE SIDE?

**Shadows**

- Use Level 2 shadow on the left side of the utility panel.

**Sizing**

- If the text is too long, continue on the next row.
- (Optional) The user can resize the width of the utility panel.
  - This feature is not supported on mobile.
  - The minimal width is 320px.

### Colors

### Typography

### Structure

### Behaviors

**Accordions Sections**

- The Accordion sections are optional to use. But could help to organise the content.

{{< img src="/img/components/sentiment-scale-five-example.svg" dark="/img/components/sentiment-scale-five-example-dark.svg" class="border bg-light" width="200" alt="Five-tier Sentiment Scale example" loading="auto" >}}

- If the content exceeds the side panel height, a scrollbar can be used on the right side of the content. The header and footer must be on top of the content.

The utility panel can expand by clicking and drag on the left side.
Minimal width is 320px.

**Tabs**

- Tabs can be used to organize information in more than one panel for additional information.

{{< img src="/img/components/sentiment-scale-five-example.svg" dark="/img/components/sentiment-scale-five-example-dark.svg" class="border bg-light" width="200" alt="Five-tier Sentiment Scale example" loading="auto" >}}

**Footer**

- The footer contains two buttons. A primary button can be used, for example, Save, Commit, Create, Edit.

{{< img src="/img/components/sentiment-scale-five-example.svg" dark="/img/components/sentiment-scale-five-example-dark.svg" class="border bg-light" width="200" alt="Five-tier Sentiment Scale example" loading="auto" >}}

### Editorial

- bla
- Follow the editorial guidelines for [Radio Buttons](/components/web/radio-buttons/), [Buttons](/components/web/buttons/), and [Chips](/components/web/chips/).
