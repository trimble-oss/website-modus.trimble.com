---
title: "Cards"
layout: "single"
description: "Cards provide a set of content which acts as an entry point to more detailed information."
components: true
aliases:
  - "/cards.html"
---

## Overview

Cards are containers for displaying relevant and actionable information on a single topic. A card serves as a single, contained unit and is independent of surrounding content. It cannot be nested within cards and cannot divide into multiple cards.

<div class="card border shadow" style="width: 18rem;">
  <div class="card-header">Card Header</div>
  <div class="card-body">
    <h4 class="card-title" id="card-title-2">Card Title</h4>
    <h5 class="card-subtitle mb-2 text-muted" id="card-subtitle-2">Card Subtitle</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div>
  <div class="card-footer">Card Footer</div>
</div>

## Usage

**Use when**

- You need to group information in a digestible form.
- You need to offer a short entry point that is linked to more detailed content or a complex task.
- Lay out single or multiple sets of related information in the same region of the page. Cards may include an image, a text summary, chips, and actions. Cards typically have similar widths, but heights should accommodate varying content.

**Don’t use when**

- You need to show unrelated content types or actions in a single container.
- You need to show content in multiple columns.
- You need to display content in a table format.
- Grouping a large set of related information.

## Specifications

A card may contain any of the following elements (with the minimum of one), but they are all optional:

- Card Container (with 1px border, 2px radius, 16px padding, and hover state with [Level 3 shadow](/foundations/shadows-and-depth/)) _required_
- Image (top of card, no padding) _optional_
- Title _optional_
- Subtitle _optional_
- Card Text _optional_
- Button _optional_
- Chips _optional_

<br>

- Card dimensions are based on its content and the container in which it resides.
- Apply custom heights and width to meet product requirements.

<table class="table table-bordered bg-white">
  <tr>
    <td width="50%">
    <img src="/img/guide/card_04.png" alt="" width="372" height="338" class="img-fluid" loading="lazy">
    </td>
    <td width="50%">
    <img src="/img/guide/card_03.png" alt="" width="372" height="338" class="img-fluid" loading="lazy">
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

**Label**

- Keep labels one to three words long, if possible, to avoid wrapping.

**Title**

- Keep titles one to five words long, if possible, to avoid wrapping.
  Use title case and capitalize prepositions of four letters or more.

**Caption**

- Use full sentences with punctuation, no longer than 40 words if possible.
- Do not include multiple paragraphs.

**Action**

- Follow the editorial guidelines for [Buttons](/components/buttons/), [Chips](/components/chips/), etc. when using those components.

**Metadata**

- Keep metadata one to five words long to avoid wrapping.

### Accessibility

- Cards should use an underlying `article` element to maintain usability for some screen reader users.
- Make sure all interactive elements within cards are part of a tab sequence.
- Avoid keyboard traps when adding components to cards. For example, the user focuses on an element within a card, but is unable to tab to the next focusable element.
- Although the card component passes accessibility testing, content authors need to ensure the content within the card is accessible. For example, if you add an image to the card you need to include alternative text to pass accessibility testing.

{{< whats-changed-table >}}
| Date       | Version | Notes          | Contributors |
| ---------- | ------- | -------------- | ------------ |
| 11/23/2020 | 1.0.0   | Shadow depth identified for hover state. Padding adjusted to fit the grid.  | E. Bohn, E. Gunther, L. Cook |
{{</ whats-changed-table >}}
