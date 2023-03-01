---
title: "Accordions"
layout: "single"
description: "The accordion element delivers large amounts of content in a small space through progressive disclosure."
components: true
component: accordions
images:
  - "/img/mobile/headers/accordions.png"
tags: [mobile, styles]
---

## Specifications

An accordion (aka expansion panel) is a vertically stacked, full-width list of options that can expand/collapse to reveal or hide more associated content.

- Accordions can display directly on the page or in a card container.
- The arrow icon acts as an affordance to indicate the functionality of the accordion, and as a visual marker of the state of the accordion through its rotation and direction.
- When stacking multiple accordions, use stack space constants to add margin-bottom to the block element.

### Anatomy

{{< img src="/img/mobile/accordion-anatomy.svg" dark="/img/mobile/accordion-anatomy-dark.svg" width="960" height="397" alt="Accordion Anatomy" loading="auto" >}}

### Sizing

{{< img src="/img/mobile/accordion-sizing.svg" dark="/img/mobile/accordion-sizing-dark.svg" width="960" height="312" alt="Sizing" >}}

### States

Default states for Accordion are:
- Collapsed
- Expanded
- Focused
- Disabled

{{< img src="/img/mobile/accordion-states.svg" dark="/img/mobile/accordion-states-dark.svg" width="960" height="288" alt="States" >}}

**Expanded Items**

Highlight expanded state to let a user recognize what is opened in case of multiple Accordions. There are several possible styles for the highlighting:
- Elevation Shadow
- Background Fill
- Outline Stroke

{{< img src="/img/mobile/accordion-expanded.svg" dark="/img/mobile/accordion-expanded-dark.svg" width="960" height="562" alt="Accordion Expanded Items" >}}

While the elevation works well on both smooth gray and white surfaces, you may fill the background of an expanded item with an appropriate Trimble color. You may also add an outline, if necessary.

{{< img src="/img/mobile/accordion-expanded-2.svg" dark="/img/mobile/accordion-expanded-2-dark.svg" width="960" height="708" alt="Accordion Expanded Items" >}}

### Chevron Placement

Chevron could be placed both at the **left** or **right**.

{{< img src="/img/mobile/accordion-chevrons.svg" dark="/img/mobile/accordion-chevrons-dark.svg" width="961" height="288" alt="Chevron Statement" >}}

## Behavior

- Chevron icon signal to the user that the accordion can be expanded. Once the accordion is tapped, the chevron rotates to indicate successful expansion. Collapsing the accordion by tapping again, returns the chevron to the previous position.
- Accordions allow a single section to expand at one time, while automatically collapsing the section that loses focus (default behavior), or they allow for all sections to expand at the same time.
- When an accordion expands and collapses, only its height should change; its width should stay consistent.
- The expand-and-collapse functionality of an accordion is tied to the entire header of the element with additional actions being triggered only by interaction within the bounds of their related UI element.
- Avoid “nested” accordions—that is, collapsible content within collapsible content. This type of pattern goes against UX best practices.

## Editorial

- Keep titles to five words, if possible, to avoid wrapping.
- Use title case and capitalize prepositions of four letters or more.
