---
draft: true
title: "Cards"
layout: "single"
description: "Cards contain content and actions about a single subject."
components: true
component: cards
keywords: card
images:
  - "/img/mobile/headers/cards.png"
tags: [mobile, usage]
aliases:
  - card
---
## Overview

Cards act as container or 'surface' for displaying relevant grouped information.  Cards can be used as a single entity or in lists or grids for browsing and are often interactive. Cards can contain a wide range of both static and interactive content.They should not be nested within other cards and cannot divide into multiple cards. The card container is the only required element in a card.

## Usage

**Use when**

- You need to group information in a digestible form.
- You need to offer a short entry point that is linked to more detailed content or a complex task.
- Lay out single or multiple sets of related information in the same region of the page. Cards may include an image, a text summary, chips, and actions. Cards typically have similar widths, but heights should accommodate varying content.
DO keep cards consistent for easy scanning

**Don’t use when**

- You need to show unrelated content types or actions in a single container.
- You need to show content in multiple columns.
- You need to display content in a table format.
- Grouping a large set of related information.
DON'T organize content in different ways when grouped together

{{< img src="/img/mobile/cards-comparison.svg" dark="/img/mobile/cards-comparison-dark.svg" width="961" height="170" class="w-100" alt="Cards Specifications" loading="auto" >}}

## Specifications

Card Container (2px radius, 16px padding, with Level 3 shadow) required.A card may contain a wide array of information and elements. Commom card elements are but not limited to:- Title (optional)
- Subtitle (optional)
- Card Text (optional)
- Buttons (optional)
- Icons (optional)
- Chips (optional)
- Lists (optional)
- Images (optional)

{{< img src="/img/mobile/cards-specifications.svg" dark="/img/mobile/cards-specifications-dark.svg" width="961" height="170" class="w-100" alt="Cards Specifications" loading="auto" >}}

{{< img src="/img/mobile/cards-specifications2.svg" dark="/img/mobile/cards-specifications2-dark.svg" width="961" height="170" class="w-100" alt="Cards Specifications" loading="auto" >}}

## Card Layouts & Sizing

Card layouts may vary to support the content within. The dimensions of a card will depend on the implementation of the card and as well as it's content and use case. Apply custom heights and width to meet product requirements.

# Layout Examples

{{< img src="/img/mobile/card-padding.svg" dark="/img/mobile/card-padding-dark.svg" width="961" height="170" class="w-100" alt="Card Padding" loading="auto" >}}

{{< img src="/img/mobile/card-variation.svg" dark="/img/mobile/card-variation-dark.svg" width="961" height="170" class="w-100" alt="Card Variation" loading="auto" >}}

## Card States

Cards can have a default, focus, and selected state. Selected states are optional and should be implemented based on use case. Mobile cards do not have a hover state.

{{< img src="/img/mobile/card-states.svg" dark="/img/mobile/card-states-dark.svg" width="961" height="170" class="w-100" alt="Card States" loading="auto" >}}

## Behavior & Interactions

Cards can have the following transitions and interactions:
- Cards themselves can be clickable
- Expand/Collapse
- Cards can be dragged

{{< img src="/img/mobile/card-behavior.svg" dark="/img/mobile/card-behavior-dark.svg" width="961" height="170" class="w-100" alt="Card Behavior" loading="auto" >}}

## Editorial

Label
Keep labels one to three words long, if possible, to avoid wrapping.

Title
Keep titles one to five words long, if possible, to avoid wrapping. Use title case and capitalize prepositions of four letters or more.

Caption
Use full sentences with punctuation, no longer than 40 words if possible.
Do not include multiple paragraphs.

Action
Follow the editorial guidelines for Buttons, Chips, etc. when using those elements.

Metadata
Keep metadata one to five words long to avoid wrapping.


{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati   |

{{</ whats-changed-table >}}
