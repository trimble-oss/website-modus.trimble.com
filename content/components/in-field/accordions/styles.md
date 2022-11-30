---
title: "Accordions"
layout: "single"
description: "The accordion element delivers large amounts of content in a small space through progressive disclosure."
components: true
component: accordions
images:
  - "/img/components/headers/accordions.png"
tags: [in-field, styles]
---

## Types

Accordions come in two sizes to accommodate space availability on the page or within a [Card](/components/in-field/cards/). Default size should be used when accordions display directly in the main content container on the page. Compact size is useful, when the accordion displays within a smaller container (e.g. card) or smaller section of the page.

## Specifications

<!-- prettier-ignore-start -->
| Type       | Example                                                                                                                                              | Height |
|------------| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Default    | {{< img src="/img/in-field/accordion-spec-default.svg" dark="/img/in-field/accordion-spec-default-dark.svg" width="498" height="63" alt="" >}}       | 54dp   |
| Focus      | {{< img src="/img/in-field/accordion-spec-focus.svg" dark="/img/in-field/accordion-spec-focus-dark.svg" width="498" height="63" alt="" >}}           | 54dp   |
| Subtitle   | {{< img src="/img/in-field/accordion-spec-subtile.svg" dark="/img/in-field/accordion-spec-subtile-dark.svg" width="498" height="63" alt="" >}}       | 72dp   |
| Line Below | {{< img src="/img/in-field/accordion-spec-line-below.svg" dark="/img/in-field/accordion-spec-line-below-dark.svg" width="498" height="63" alt="" >}} | 72dp   |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

**Note:** In-cab size only. See mobile patterns (coming soon) for smaller options if required.

### Behaviors

- Accordions allow a single section to expand at one time, while automatically collapsing the section that loses focus (default behavior), or they allow for all sections to expand at the same time.
- When an accordion expands and collapses, only its height should change; its width should stay consistent.
- The expand-and-collapse functionality of an accordion is tied to the entire header of the element with additional actions being triggered only by interaction within the bounds of their related UI element.
- Avoid “nested” accordions — that is, collapsible content within collapsible content. This type of pattern goes against UX best practices.

## Progression

<!-- prettier-ignore-start -->
| State    | Background                                                                   | Line Below                                                                         | Line Above |
| -------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------- |
| Default  | {{< img src="/img/in-field/accordion-background-default.svg" dark="/img/in-field/accordion-background-default-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/accordion-line-below-default.svg" dark="/img/in-field/accordion-line-below-default-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/accordion-line-above-default.svg" dark="/img/in-field/accordion-line-above-default-dark.svg" height="56" alt="" >}} |
| Focus    | {{< img src="/img/in-field/accordion-background-focus.svg" dark="/img/in-field/accordion-background-focus-dark.svg" height="56" alt="" >}} |  {{< img src="/img/in-field/accordion-background-focus.svg" dark="/img/in-field/accordion-background-focus-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/accordion-background-focus.svg" dark="/img/in-field/accordion-line-below-focus-dark.svg" height="56" alt="" >}} |
| Disabled | {{< img src="/img/in-field/accordion-background-disabled.svg" dark="/img/in-field/accordion-background-disabled-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/accordion-line-below-disabled.svg" dark="/img/in-field/accordion-line-below-disabled-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/accordion-line-above-disabled.svg" dark="/img/in-field/accordion-line-above-disabled-dark.svg" height="56" alt="" >}} |
| Expanded | {{< img src="/img/in-field/accordion-background-expanded.svg" dark="/img/in-field/accordion-background-expanded-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/accordion-line-below-expanded.svg" dark="/img/in-field/accordion-line-below-expanded-dark.svg" height="56" alt="" >}} | {{< img src="/img/in-field/accordion-line-above-expanded.svg" dark="/img/in-field/accordion-line-above-expanded-dark.svg" height="56" alt="" >}} |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

### Editorial

- Keep titles to five words, if possible, to avoid wrapping.
- Use title case and capitalize prepositions of four letters or more.
