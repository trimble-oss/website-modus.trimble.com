---
draft: true
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

Accordion (aka expansion panel) is a vertically stacked, full-width, list of options that can expand/collapse to reveal or hide more associated content.

- Accordions can display directly on the page or in a card container.
- The arrow icon acts as an affordance to indicate the functionality of the accordion, and as a visual marker of the state of the accordion through its rotation and direction.
- When stacking multiple accordions, use stack space constants to add margin-bottom to the block element.

### Anatomy

{{< img src="/img/mobile/accordion-anatomy.svg" dark="/img/mobile/accordion-anatomy-dark.svg" width="961" height="170" class="w-100" alt="Accordion Anatomy" loading="auto" >}}

### Types

**Contained**

Use contained Accordion for most of the cases. Separate its items by a slightly visible divider. This placement either saves some vertical space.

{{< img src="/img/mobile/accordion-contained.svg" dark="/img/mobile/accordion-contained-dark.svg" width="961" height="170" class="w-100" alt="Contained Accordion" loading="auto" >}}

**Separated**

There are some cases when you can separate Accordions with whitespace. Use this method to divide when it’s needless to save vertical space.

{{< img src="/img/mobile/accordion-separated.svg" dark="/img/mobile/accordion-separated-dark.svg" width="961" height="170" class="w-100" alt="Separated Accordion" loading="auto" >}}

### Sizing

{{< img src="/img/mobile/accordion-sizing.svg" dark="/img/mobile/accordion-sizing-dark.svg" width="961" height="170" class="w-100" alt="Sizing" loading="auto" >}}

### States

Default states for Accordion are:
- Collapsed
- Expanded
- Focused
- Disabled

{{< img src="/img/mobile/accordion-states.svg" dark="/img/mobile/accordion-states-dark.svg" width="961" height="170" class="w-100" alt="States" loading="auto" >}}

### Chevron Placement

Chevron icon represents the opportunity to expand/collapse Accordion item. Once Accordion was clicked, the chevron rotates to indicate the successful expansion. Further collapse returns the chevron to a previous position.

Chevron could be placed both at the **left** or **right**.

{{< img src="/img/mobile/accordion-chevrons.svg" dark="/img/mobile/accordion-chevrons-dark.svg" width="961" height="170" class="w-100" alt="Chevron Statement" loading="auto" >}}

Instead of a chevron, you may use the following symbols:
- Up / down caret
- Plus / minus
- Up / down arrow

{{< img src="/img/mobile/accordion-chevron-alt.svg" dark="/img/mobile/accordion-chevron-alt-dark.svg" width="961" height="170" class="w-100" alt="Chevron Alternatives" loading="auto" >}}

### Additional Icon

In the case of **right-sided Accordion**, you may place additional icons to strengthen the meaning. **Use wisely** not to overload the component.

{{< img src="/img/mobile/accordion-icon.svg" dark="/img/mobile/accordion-icon-dark.svg" width="961" height="170" class="w-100" alt="Additional Icon" loading="auto" >}}

### Behavior

**Expanded Items**

Highlight expanded state to let a user recognize what is opened in case of multiple Accordions. There are several possible styles for the highlighting:
- Elevation Shadow
- Background Fill
- Outline Stroke

{{< img src="/img/mobile/accordion-expanded.svg" dark="/img/mobile/accordion-expanded-dark.svg" width="961" height="170" class="w-100" alt="Accordion Expanded Items" loading="auto" >}}

While the elevation works well on both smooth gray and white surfaces, you may fill the Accordion expanded item's background with an appropriate Trimble fill. Fits good for white surfaces. Add outline stroke, if necessary.

{{< img src="/img/mobile/accordion-expanded-2.svg" dark="/img/mobile/accordion-expanded-2-dark.svg" width="961" height="170" class="w-100" alt="Accordion Expanded Items" loading="auto" >}}

- Accordions allow a single section to expand at one time, while automatically collapsing the section that loses focus (default behavior), or they allow for all sections to expand at the same time.
- When an accordion expands and collapses, only its height should change; its width should stay consistent.
- The expand-and-collapse functionality of an accordion is tied to the entire header of the element with additional actions being triggered only by interaction within the bounds of their related UI element.
- Avoid “nested” accordions—that is, collapsible content within collapsible content. This type of pattern goes against UX best practices.

### Editorial

- Keep titles to five words, if possible, to avoid wrapping.
- Use title case and capitalize prepositions of four letters or more.


{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati|

{{</ whats-changed-table >}}
