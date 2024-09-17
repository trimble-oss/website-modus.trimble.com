---
title: "Accordions"
layout: "single"
description: "The accordion element delivers large amounts of content in a small space through progressive disclosure."
images:
  - "/img/components/headers/accordions.png"
components: true
componentsWeb: true
aliases:
  - "/components/accordions/"
bootstrapURL: "/docs/v2/components/accordions/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-accordion--default"
tags: [usage]
---

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

- Providing an introductory element to a set of content which doesn’t need an expand and collapse functionality. Instead, use a [Navbar](/components/web/navbar/).
- Hiding critical content solely to clean up the interface.
- Hiding an action if the user can easily do it without additional input.
- Hiding primary actions on the page.
- Revealing content that is not contextually relevant to the user.
- Nesting too many layers. In other words, don’t place accordions within accordions.
- Creating a set of visibly contained content, which doesn’t need an expand-and-collapse functionality. Instead, use a [Card](/components/web/cards/).

## Types

Accordions come in two sizes to accommodate space availability on the page or within a [Card](/components/web/cards/). Default size should be used when accordions display directly in the main content container on the page. Compact size is useful, when the accordion displays within a smaller container (e.g. card) or smaller section of the page.

### Default

<div class="accordion accordion-flush mb-4" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>

### Compact

<div class="accordion accordion-sm accordion-flush" id="accordionSmallFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOneSmall" aria-expanded="false" aria-controls="flush-collapseOneSmall">
        Accordion item #1
      </button>
    </h2>
    <div id="flush-collapseOneSmall" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwoSmall" aria-expanded="false" aria-controls="flush-collapseTwoSmall">
        Accordion item #2
      </button>
    </h2>
    <div id="flush-collapseTwoSmall" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleSmall">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThreeSmall" aria-expanded="false" aria-controls="flush-collapseThreeSmall">
        Accordion item #3
      </button>
    </h2>
    <div id="flush-collapseThreeSmall" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExampleSmall">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>

{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 11/23/2020 | 1.0.0   | Spacing and typography adjustments. | E. Gunther   |

{{</ whats-changed-table >}}

<style>
.nav-figma {
  display: block !important;
}
</style>
