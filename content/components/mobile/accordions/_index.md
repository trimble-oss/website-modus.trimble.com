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

{{< img src="/img/mobile/accordion.svg" dark="/img/mobile/accordion-dark.svg" width="961" height="260" class="w-100" alt="Accordions Example" loading="auto" >}}

## Overview

Accordions are containers that expand to reveal content progressively to limit the amount of information on the page or in a section to reduce clutter. The content can be expanded and collapsed based on the user's interest.

## Usage

#### Use when

- Some content can be hidden because it is not critical to the user’s task.
- You want to declutter the interface or shorten pages to reduce scrolling when content is not crucial to read in full.
- You want to simplify a complex process.
- There are options dependent upon a prior selection.
- All options and information are not critical to see at first.
- Allowing users to hide controls and content, so they can better focus on their task.

#### Don't use when

- Providing an introductory element to a set of content which doesn’t need an expand and collapse functionality. Instead, use a [Top Navbar](/components/mobile/top-navbars/).
- Hiding critical content solely to clean up the interface.
- Hiding an action if the user can easily do it without additional input.
- Hiding primary actions on the page.
- Revealing content that is not contextually relevant to the user.
- Nesting too many layers. In other words, don’t place accordions within accordions.
- Creating a set of visibly contained content, which doesn’t need an expand-and-collapse functionality. Instead, use a [Card](/components/mobile/cards/).

## Types

Accordions come in two types to accommodate space availability on the page or within a [Card](/components/mobile/cards/): contained and separated.

### Contained

Use a contained accordion for most cases. Separate its items with a divider. This placement saves some vertical space.

{{< img src="/img/mobile/accordion-contained.svg" dark="/img/mobile/accordion-contained-dark.svg" width="960" height="464" alt="Contained Accordion" >}}

### Separated

There are some cases, when you can separate accordions with white space. Use this method, when you have available space.

{{< img src="/img/mobile/accordion-separated.svg" dark="/img/mobile/accordion-separated-dark.svg" width="960" height="488" alt="Separated Accordion" >}}

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors                                                                                                                          |
| ---------- | ------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 01/16/2023 | 1.0.0   | New component added. | D. Bedick, E. Bohn, N. Cadsawan, E. Gunther, I. Perez, J. A. Provin Silva, L. Saenz, C. Starbird, R. Stillwell, S. Kaukonen, N. Byati |

{{</ whats-changed-table >}}
