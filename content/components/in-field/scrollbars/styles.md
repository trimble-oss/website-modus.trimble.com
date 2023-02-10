---
title: "Scrollbars"
layout: "single"
description: "Scrollbars indicates a user's location in a document that is larger than the viewing space."
components: true
component: scrollbars
tags: [in-field, styles]
---

## Specifications

<!-- prettier-ignore-start -->
| Type             | Example                                                                                                                            | Height |
|------------------| ---------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Default          | {{< img src="/img/in-field/scrollbar-spec-default.svg" dark="/img/in-field/scrollbar-spec-default-dark.svg" width="182" alt="" >}} | 16dp   |
| Button Scrolling | {{< img src="/img/in-field/scrollbar-spec-buttons.svg" dark="/img/in-field/scrollbar-spec-buttons-dark.svg" width="289" alt="" >}} | 48dp   |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

**Note:** In-cab sizes only. See mobile patterns for smaller options for in-field.

### Anatomy of a Scrollbar

- Always offer a visible scrollbar if an area has scrolling content. Do not rely on auto-scrolling or on dragging. The user might not realize there is more content to scroll through.
- Hide scrollbards if all content is visible. If users see a scrollbar, they assume there's additional content and will be frustrated if they can't scroll.
- Avoid horizontal scrolling.
- Scrollbars with arrows offer the best usability.

## Types

- **Minimal:** Minimal scrollbars are best, when you need to eliminate all possible distractions. They are visually unobtrusive but may create usability problems, especially for users with disabilities.
- **Default:** Recommended option for mobile interfaces.
- **With Buttons:** These scrollbars are larger and easier to use especially in the field. They offer the best usability.

{{< img src="/img/in-field/scrollbar-example.svg" dark="/img/in-field/scrollbar-example-dark.svg" width="100%" class="w-100" alt="Example of scrollbar in Lists" >}}

## Behavior

Users may scroll by

- Clicking in the trough,
- Clicking on the arrows,
- Dragging the slider


