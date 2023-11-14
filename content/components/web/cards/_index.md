---
title: "Cards"
layout: "single"
description: "Cards provide a set of content which acts as an entry point to more detailed information."
components: true
componentsWeb: true
images:
  - "/img/components/headers/cards.png"
bootstrapURL: "/components/cards/"
reactBootstrapURL: "/components/cards/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-card--default"
aliases:
  - "/components/cards/"
tags: [usage]
---

## Overview

Cards act as container or surface for displaying relevant grouped information. Cards can be used as a single entity or in lists or grids for browsing and are often interactive. Cards can contain a wide range of both static and interactive content. They should not be nested within other cards and cannot divide into multiple cards. The card container is the only required element in a card.

<div class="card" style="width: 18rem;">
  <div class="card-header">Card Header</div>
  <div class="card-body">
    <h4 class="card-title">Card Title</h4>
    <h5 class="card-subtitle mb-2 text-muted">Card Subtitle</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div>
  <div class="card-footer">Card Footer</div>
</div>

## Usage

#### Use when

- You need to group information in a digestible form.
- You need to offer a short entry point that is linked to more detailed content or a complex task.
- Laying out single or multiple sets of related information in the same region of the page. Cards may include an image, a text summary, chips, and actions. Cards typically have similar widths, but heights should accommodate varying content.
- Cards are commonly used on home or dashboard screens.

#### Don't use when

- You need to show unrelated content types or actions in a single container.
- You need to show content in multiple columns.
- You need to display content in a table format.
- Grouping a large set of related information.

{{< whats-changed-table >}}

| Date       | Version | Notes                                                                      | Contributors                 |
| ---------- | ------- | -------------------------------------------------------------------------- | ---------------------------- |
| 11/23/2020 | 1.0.0   | Shadow depth identified for hover state. Padding adjusted to fit the grid. | E. Bohn, E. Gunther, L. Cook |

{{</ whats-changed-table >}}
