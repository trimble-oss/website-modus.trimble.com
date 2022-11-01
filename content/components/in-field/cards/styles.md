---
title: "Cards"
layout: "single"
description: "Cards contain content and actions about a single subject."
components: true
component: cards
keywords: cards, Card
tags: [in-field, styles]
---

## Specifications

A Card may contain any of the following elements (with the minimum of one), but they are all optional:

- Card Container (with 1dp border, 4dp radius, 16dp padding, Level 2 shadow and pressed is Level 3 shadow).
- Image (top of card, padding optional)
- Title _(optional)_
- Subtitle _(optional)_
- Card Text _(optional)_
- Button _(optional)_
- Chips _(optional)_
- Lists _(optional)_

{{< img src="/img/in-field/cards-spec.svg" dark="/img/in-field/cards-spec-dark.svg" width="100%" class="w-100" alt="Card Specifications" >}}

**Note:** Incab sizes only, see mobile for smaller options for in-field.

### Behaviors

- A set of radio buttons should default to having one option selected, generally the first option. However, if pre-selection of an option results in incorrect assumptions (i.e., “Male” or “Female”) then no option should be selected by default.
- If selecting no option is a viable choice, include a radio button within the group with an appropriate label, i.e. “None.”
- A radio button’s label is part of the clickable area of the control.

#### States

{{< img src="/img/in-field/card-states.svg" dark="/img/in-field/card-states-dark.svg" width="100%" class="w-100" alt="Card States" >}}

**Note:** Focus state uses “global blue”.

#### OEM Branding

- Use tones of gray’s are recommended
- If using brand colors, avoid using Red due to the error state

{{< img src="/img/in-field/cards-oem.svg" dark="/img/in-field/cards-oem-dark.svg" width="100%" class="w-100" alt="Cards OEM" >}}

#### Editorial

**Label**

- Keep labels one to three words long, if possible, to avoid wrapping.

**Title**

- Keep titles one to five words long, if possible, to avoid wrapping. Use title case and capitalize prepositions of four letters or more.

**Caption**

- Use full sentences with punctuation, no longer than 40 words if possible.
  Do not include multiple paragraphs.

**Action**

- Follow the editorial guidelines for Buttons, Chips, etc. when using those elements.

**Metadata**

- Keep metadata one to five words long to avoid wrapping.
