---
title: "Accordions"
layout: "single"
description: "The accordion element delivers large amounts of content in a small space through progressive disclosure."
components: true
component: accordions
images:
  - "/img/mobile/headers/accordions.png"
tags: [mobile, usage]
---

{{< img src="/img/mobile/accordion.svg" dark="/img/mobile/accordion-dark.svg" width="961" height="260" class="w-100" alt="Accordions Example" >}}

## Overview

Accordions are containers that expand to reveal content progressively to limit the amount of information on the page or in a section to reduce clutter. The content can be expanded and collapsed based on the user's interest. Accordion (aka Expansion panel) — is a vertically stacked, full-width, list of options that can expand/collapse to reveal or hide more associated content.

## Usage

**Use when**

- Some content can be hidden because it is not critical to the user’s task.
- You want to declutter the interface or shorten pages to reduce scrolling when content is not crucial to read in full.
- You want to simplify a complex process.
- There are options dependent upon a prior selection.
- All options and information are not critical to see at first.
- Allowing users to hide controls and content, so they can better focus on their task.

**Don’t use when**

- Providing an introductory element to a set of content which doesn’t need an expand and collapse functionality. Instead, use a [Top Navbar](/componets/mobile/top-navbars/).
- Hiding critical content solely to clean up the interface.
- Hiding an action if the user can easily do it without additional input.
- Hiding primary actions on the page.
- Revealing content that is not contextually relevant to the user.
- Nesting too many layers. In other words, don’t place accordions within accordions.
- Creating a set of visibly contained content, which doesn’t need an expand-and-collapse functionality. Instead, use a [Card](/components/mobile/cards/).

## Types

Accordions come in two sizes to accommodate space availability on the page or within a [Card](/components/mobile/cards/). Default size should be used when accordions display directly in the main content container on the page. Compact size is useful, when the accordion displays within a smaller container (e.g. card) or smaller section of the page.


{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati  |

{{</ whats-changed-table >}}
