---
title: "Accordions"
layout: "single"
description: "The accordion element delivers large amounts of content in a small space through progressive disclosure."
components: true
hidden: true
component: accordions
tags: [in-field, styles]
---

## Types

Accordions come in two sizes to accommodate space availability on the page or within a Card. Default size should be used when accordions display directly in the main content container on the page. Compact size is useful, when the accordion displays within a smaller container (e.g. card) or smaller section of the page.

## Specifications

{{< img src="/img/in-field/accordion-specs.svg" dark="/img/in-field/accordion-specs-dark.svg" width="929" height="532" class="w-100" alt="Accordions Example" lazyload="auto" >}}

<!-- prettier-ignore-start -->
| State      | Example                                                                            | Height |
|------------| ---------------------------------------------------------------------------------- | ------ |
| Default    | {{< img src="/img/in-field/accordion-specs.svg" width="298" height="53" alt="" >}} | 72dp   |
| Focus      | {{< img src="/img/in-field/accordion-specs.svg" width="298" height="53" alt="" >}} | 74dp   |
| Subtitle   | {{< img src="/img/in-field/accordion-specs.svg" width="298" height="53" alt="" >}} | 74dp   |
| Line Below | {{< img src="/img/in-field/accordion-specs.svg" width="298" height="53" alt="" >}} | 74dp   |
{class="table table-bordered table-thead-light d-none"}
<!-- prettier-ignore-end -->

**Note:** Incab size only, see mobile for smaller options if required.

### Behaviors

- Accordions can allow a single section to expand at one time, while automatically collapsing the section that loses focus (default behavior), or it can allow for all sections to expand at the same time.
- When an accordion expands and collapses only its height should change; its width should stay consistent.
- The expand-and-collapse functionality of an accordion is tied to the entire header of the element, with additional actions being triggered only by interaction within the bounds of their related UI element.
- Avoid “nested” accordions — that is, collapsible content within collapsible content. This type of pattern goes against UX best practices.

## Progression

{{< img src="/img/in-field/accordion-progression.svg" dark="/img/in-field/accordion-progression-dark.svg" width="917" height="401" class="w-100" alt="Accordions Example" >}}

<!-- prettier-ignore-start -->
| State    | White background                                                                   | Line Below                                                                         | Line Above |
| -------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------- |
| Default  | {{< img src="/img/in-field/accordion-specs.svg" width="98" height="53" alt="" >}} | {{< img src="/img/in-field/accordion-specs.svg" width="98" height="53" alt="" >}} | {{< img src="/img/in-field/accordion-specs.svg" width="98" height="53" alt="" >}} |
| Focus    | {{< img src="/img/in-field/accordion-specs.svg" width="98" height="53" alt="" >}} | {{< img src="/img/in-field/accordion-specs.svg" width="98" height="53" alt="" >}} | {{< img src="/img/in-field/accordion-specs.svg" width="98" height="53" alt="" >}} |
| Disabled | {{< img src="/img/in-field/accordion-specs.svg" width="98" height="53" alt="" >}} | {{< img src="/img/in-field/accordion-specs.svg" width="98" height="53" alt="" >}} | {{< img src="/img/in-field/accordion-specs.svg" width="98" height="53" alt="" >}} |
| Expanded | {{< img src="/img/in-field/accordion-specs.svg" width="98" height="53" alt="" >}} | {{< img src="/img/in-field/accordion-specs.svg" width="98" height="53" alt="" >}} | {{< img src="/img/in-field/accordion-specs.svg" width="98" height="53" alt="" >}} |
{class="table table-bordered table-thead-light d-none"}
<!-- prettier-ignore-end -->

### Editorial

- Keep titles to five words, if possible, to avoid wrapping.
- Use title case and capitalize prepositions of four letters or more.
