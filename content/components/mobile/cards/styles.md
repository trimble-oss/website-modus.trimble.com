---
title: "Cards"
layout: "single"
description: "Cards contain content and actions about a single subject."
components: true
component: cards
keywords: cards, Card
images:
  - "/img/mobile/headers/cards.png"
tags: [mobile, styles]
---

## Specifications

A Card may contain any of the following elements (with the minimum of one), but they are all optional:

- Card Container (2px radius, 16px padding, with [Level 3 shadow](/foundations/shadows-and-depth/)) _required_
- Title _optional_
- Subtitle _optional_
- Card Text _optional_
- Buttons _optional_
- Icons _optional_
- Chips _optional_
- Lists _optional_
- Images _optional_

{{< img src="/img/mobile/card-specifications.svg" dark="/img/mobile/card-specifications-dark.svg" width="934" height="847" alt="Card Specifications" loading="auto" >}}

Card layouts may vary to support the content within. The dimensions of a card will depend on the implementation of the card and as well as it's content and use case. Apply custom heights and width to meet product requirements.

## Layout Examples

{{< img src="/img/mobile/card-variation.svg" dark="/img/mobile/card-variation-dark.svg" width="962" height="1699" alt="Card Variation" >}}

## Card States

Cards can have a default, focus, and selected state. Selected states are optional and should be implemented based on use case. Mobile cards do not have a hover state.

{{< img src="/img/mobile/card-states.svg" dark="/img/mobile/card-states-dark.svg" width="946" height="781" alt="Card States" >}}

## Behaviors

Cards can have the following transitions and interactions:
- Cards themselves can be tapped
- Expand/Collapse
- Cards can be dragged

{{< img src="/img/mobile/card-behavior.svg" dark="/img/mobile/card-behavior-dark.svg" width="962" height="1478" alt="Card Behavior" >}}

## Editorial

- **Label:** Keep labels one to three words long, if possible, to avoid wrapping.
- **Title:** Keep titles one to five words long, if possible, to avoid wrapping. Use title case and capitalize prepositions of four letters or more.
- **Caption:** Use full sentences with punctuation, no longer than 40 words if possible. Do not include multiple paragraphs.
- **Action:** Follow the editorial guidelines for [Buttons](/components/mobile/buttons/), [Chips](/components/mobile/chips/), etc. when using those elements.
- **Metadata:** Keep metadata one to five words long to avoid wrapping.

