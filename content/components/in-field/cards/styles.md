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

<!-- prettier-ignore-start -->
| Type       | Example                                                                                                                        | Height |
|------------| ------------------------------------------------------------------------------------------------------------------------------ | ------ |
| Horizontal | {{< img src="/img/in-field/card-spec-horizontal.svg" dark="/img/in-field/card-spec-horizontal-dark.svg" height="72" alt="" >}} | 72dp   |
| Vertical   | {{< img src="/img/in-field/card-spec-vertical.svg" dark="/img/in-field/card-spec-vertical-dark.svg" height="271" alt="" >}}    | 268dp  |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->



**Note:** In-cab sizes only. See mobile patterns (coming soon) for smaller options for in-field.

### Behaviors

- Cards should only contain a single action, which is tied to a UI component within the action element or to the whole card (using a card as a link).

#### States

<!-- prettier-ignore-start -->
| State    | Vertical                                                                   | Horizontal
| -------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------- |
| Default  | {{< img src="/img/in-field/card-vertical-states-default.svg" dark="/img/in-field/card-vertical-states-default-dark.svg" height="156" alt="" >}} | {{< img src="/img/in-field/card-horizontal-states-default.svg" dark="/img/in-field/card-horizontal-states-default-dark.svg" height="72" alt="" >}} |
| Pressed    | {{< img src="/img/in-field/card-vertical-states-pressed.svg" dark="/img/in-field/card-vertical-states-pressed-dark.svg" height="156" alt="" >}} | {{< img src="/img/card-horizontal-states-pressed.svg" dark="/img/in-field/card-horizontal-states-pressed-dark.svg" height="72" alt="" >}} |
| Focus | {{< img src="/img/in-field/card-vertical-states-focus.svg" dark="/img/in-field/card-vertical-states-focus-dark.svg" height="156" alt="" >}} | {{< img src="/img/in-field/card-horizontal-states-focus.svg" dark="/img/in-field/card-horizontal-states-focus-dark.svg" height="72" alt="" >}} |
| Error | {{< img src="/img/in-field/card-vertical-states-error.svg" dark="/img/in-field/card-vertical-states-error-dark.svg" height="156" alt="" >}} | {{< img src="/img/in-field/card-horizontal-states-error.svg" dark="/img/in-field/card-horizontal-states-error-dark.svg" height="72" alt="" >}} |
| Disabled| {{< img src="/img/in-field/card-vertical-states-disabled.svg" dark="/img/in-field/card-vertical-states-disabled-dark.svg" height="156" alt="" >}} | {{< img src="/img/in-field/card-horizontal-state-disabled.svg" dark="/img/in-field/card-horizontal-state-disabled-dark.svg" height="72" alt="" >}} |
{class="table table-bordered table-thead-light"}
<!-- prettier-ignore-end -->

**Note:** Focus state uses “global blue.”

#### OEM Branding

- Tones of gray are recommended.
- If using brand colors, avoid using red. It signals an error state.

{{< img src="/img/in-field/cards-oem.svg" dark="/img/in-field/cards-oem-dark.svg" width="100%" class="w-100" alt="Cards OEM" >}}

### Editorial

**Label**

- Keep labels one to three words long, if possible, to avoid wrapping.

**Title**

- Keep titles one to five words long, if possible, to avoid wrapping. Use title case and capitalize prepositions of four letters or more.

**Caption**

- Use full sentences with punctuation, no longer than 40 words if possible.
- Do not include multiple paragraphs.

**Action**

- Follow the editorial guidelines for Buttons, Chips, etc. when using those elements.

**Metadata**

- Keep metadata one to five words long to avoid wrapping.
