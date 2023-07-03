---
title: "Accordions"
layout: "single"
description: "The accordion element delivers large amounts of content in a small space through progressive disclosure."
components: true
component: accordions
images:
  - "/img/in-field/headers/accordions.png"
tags: [in-field, usage]
---

{{< img src="/img/in-field/accordion.svg" dark="/img/in-field/accordion-dark.svg" width="961" height="170" class="w-100" alt="Accordions Example" loading="auto" >}}

## Overview

Accordions are containers that expand to reveal content progressively to limit the amount of information on the page or in a section to reduce clutter. The content can be expanded and collapsed based on the user’s interest.

## Usage

#### Use when

- Some content can be hidden because it is not critical to the user’s task.
- You want to declutter the interface or shorten pages to reduce scrolling when content is not crucial to read in full.
- You want to simplify a complex process.
- There are options dependent upon a prior selection.
- All options and information are not critical to see at first.
- Allowing users to hide controls and content, so they can better focus on their task.

#### Don't use when

- Providing an introductory element to a set of content which doesn’t need an expand and collapse functionality. Instead, use a [Navbar](/components/in-field/navbar/).
- Hiding critical content solely to clean up the interface.
- Hiding an action if the user can easily do it without additional input.
- Hiding primary actions on the page.
- Revealing content that is not contextually relevant to the user.
- Nesting too many layers. In other words, don’t place accordions within accordions.
- Creating a set of visibly contained content, which doesn’t need an expand-and-collapse functionality. Instead, use a [Card](/components/in-field/cards/).

{{< img src="/img/in-field/accordion-examples.svg" dark="/img/in-field/accordion-examples-dark.svg" width="850" alt="" >}}

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors |
| ---------- | ------- | -------------------- | ------------ |
| 06/01/2022 | 1.0.1   | Updated full layout. | M. Johns     |

{{</ whats-changed-table >}}
