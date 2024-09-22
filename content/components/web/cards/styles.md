---
title: "Cards"
layout: "single"
description: "Cards provide a set of content which acts as an entry point to more detailed information."
components: true
componentsWeb: true
images:
  - "/img/components/headers/cards.png"
bootstrapURL: "/docs/v2/components/cards/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-card--default"
tags: [styles]
---

## Specifications

A Card may contain any of the following elements (with the minimum of one), but they are all optional:

- Card Container (with 1px border, 2px radius, 16px padding). Hover state with [Level 3 shadow](/foundations/shadows-and-depth/)) _required if card is a link_
- Image (top of card, no padding) _optional_
- Title _optional_
- Subtitle _optional_
- Card Text _optional_
- Button _optional_
- Chips _optional_
- Lists _optional_

<br>

- Card dimensions are based on its content and the container in which it resides.
- Apply custom heights and width to meet product requirements.

<table class="table table-bordered">
  <tr>
    <td class="w-50 text-center">
    {{< img src="/img/components/card_04.svg" dark="/img/components/card_04-dark.svg" class="border bg-light mx-auto text-center mt-2" width="302" height="191" alt="card example" >}}
    </td>
    <td class="w-50 text-center">
    {{< img src="/img/components/card_03.svg" dark="/img/components/card_03-dark.svg" class="border bg-light mx-auto text-center mt-2" width="302" height="191" alt="card example" >}}
    </td>
  </tr>
  <tr>
    <td class="do">
    <strong class="text-success">Do</strong> keep cards consistent for easy scanning.
    </td>
    <td class="dont">
      <strong class="text-danger">Don't</strong> organize content in different ways when grouped together.
    </td>
  </tr>
</table>

### Behaviors

- Cards should only contain a single action, which is tied to a UI component within the action element or to the whole card (using a card as a link).

### Editorial

- **Label:** Keep labels one to three words long, if possible, to avoid wrapping.
- **Title:** Keep titles one to five words long, if possible, to avoid wrapping. Use title case and capitalize prepositions of four letters or more.
- **Caption:** Use full sentences with punctuation, no longer than 40 words if possible. Do not include multiple paragraphs.
- **Action:** Follow the editorial guidelines for [Buttons](/components/web/buttons/), [Chips](/components/web/chips/), etc. when using those elements.
- **Metadata:** Keep metadata one to five words long to avoid wrapping.
