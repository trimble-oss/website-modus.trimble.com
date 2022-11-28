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
bootstrapURL: "/components/accordions/"
reactBootstrapURL: "/components/accordions/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-accordion--default"
tags: [usage]
---

## Overview

Accordions are containers that expand to reveal content progressively to limit the amount of information on the page or in a section to reduce clutter. The content can be expanded and collapsed based on the user's interest.

## Usage

**Use when**

- Some content can be hidden because it is not critical to the user’s task.
- You want to declutter the interface or shorten pages to reduce scrolling when content is not crucial to read in full.
- You want to simplify a complex process.
- There are options dependent upon a prior selection.
- All options and information are not critical to see at first.
- Allowing users to hide controls and content, so they can better focus on their task.

**Don’t use when**

- Providing an introductory element to a set of content which doesn’t need an expand and collapse functionality. Instead, use a [Navbar](/componets/web/navbar/).
- Hiding critical content solely to clean up the interface.
- Hiding an action if the user can easily do it without additional input.
- Hiding primary actions on the page.
- Revealing content that is not contextually relevant to the user.
- Nesting too many layers. In other words, don’t place accordions within accordions.
- Creating a set of visibly contained content, which doesn’t need an expand-and-collapse functionality. Instead, use a [Card](/components/web/cards/).

## Types

Accordions come in two sizes to accommodate space availability on the page or within a [Card](/components/web/cards/). Default size should be used when accordions display directly in the main content container on the page. Compact size is useful, when the accordion displays within a smaller container (e.g. card) or smaller section of the page.

### Default

<div class="guide-example-block">
  <div class="guide-sample">
    <div class="accordion" id="accordionCodeExample">
      <div class="card">
        <div
          class="card-header"
          id="accordionHeadingOne"
          data-toggle="collapse"
          data-target="#codeCollapseOne"
          aria-expanded="true"
          aria-controls="codeCollapseOne"
        >
          <h6 class="mb-0">
            Collapsible Group Item #1
          </h6>
        </div>
        <div
          id="codeCollapseOne"
          class="collapse show"
          aria-labelledby="accordionHeadingOne"
          data-parent="#accordionCodeExample"
        >
          <div class="card-body">
            Anim cliche, high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor wes anderson cred nets serpent ea president. Ad vegan except butcher vice lemons. Leggings course craft beer farm-to-table, raw denim aesthetic synth braking you probably haven't heard of them accuse abort sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="accordionHeadingTwo"
          data-toggle="collapse"
          data-target="#codeCollapseTwo"
          aria-expanded="false"
          aria-controls="codeCollapseTwo"
        >
          <h6 class="mb-0">
            Collapsible Group Item #2
          </h6>
        </div>
        <div
          id="codeCollapseTwo"
          class="collapse"
          aria-labelledby="accordionHeadingTwo"
          data-parent="#accordionCodeExample"
        >
          <div class="card-body">
            Anim cliche, high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor wes anderson cred nets serpent ea president. Ad vegan except butcher vice lemons. Leggings course craft beer farm-to-table, raw denim aesthetic synth braking you probably haven't heard of them accuse abort sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="accordionHeadingThree"
          data-toggle="collapse"
          data-target="#codeCollapseThree"
          aria-expanded="false"
          aria-controls="codeCollapseThree"
        >
          <h6 class="mb-0">
            Collapsible Group Item #3
          </h6>
        </div>
        <div
          id="codeCollapseThree"
          class="collapse"
          aria-labelledby="accordionHeadingThree"
          data-parent="#accordionCodeExample"
        >
          <div class="card-body">
            Anim cliche, high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor wes anderson cred nets serpent ea president. Ad vegan except butcher vice lemons. Leggings course craft beer farm-to-table, raw denim aesthetic synth braking you probably haven't heard of them accuse abort sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  </div>

### Compact

<div class="guide-example-block">
  <div class="guide-sample">
    <div class="accordion accordion-sm" id="smallAccordionCodeExample">
      <div class="card">
        <div
          class="card-header"
          id="smallAccordionHeadingOne"
          data-toggle="collapse"
          data-target="#smallCodeCollapseOne"
          aria-expanded="true"
          aria-controls="smallCodeCollapseOne"
        >
          <h6 class="mb-0">
            Collapsible Group Item #1
          </h6>
        </div>
        <div
          id="smallCodeCollapseOne"
          class="collapse show"
          aria-labelledby="smallAccordionHeadingOne"
          data-parent="#smallAccordionCodeExample"
        >
          <div class="card-body">
            Anim cliche, high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor wes anderson cred nets serpent ea president. Ad vegan except butcher vice lemons. Leggings course craft beer farm-to-table, raw denim aesthetic synth braking you probably haven't heard of them accuse abort sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="smallAccordionHeadingTwo"
          data-toggle="collapse"
          data-target="#smallCodeCollapseTwo"
          aria-expanded="false"
          aria-controls="smallCodeCollapseTwo"
        >
          <h6 class="mb-0">
            Collapsible Group Item #2
          </h6>
        </div>
        <div
          id="smallCodeCollapseTwo"
          class="collapse"
          aria-labelledby="smallAccordionHeadingTwo"
          data-parent="#smallAccordionCodeExample"
        >
          <div class="card-body">
            Anim cliche, high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor wes anderson cred nets serpent ea president. Ad vegan except butcher vice lemons. Leggings course craft beer farm-to-table, raw denim aesthetic synth braking you probably haven't heard of them accuse abort sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-header"
          id="smallAccordionHeadingThree"
          data-toggle="collapse"
          data-target="#smallCodeCollapseThree"
          aria-expanded="false"
          aria-controls="smallCodeCollapseThree"
        >
          <h6 class="mb-0">
            Collapsible Group Item #3
          </h6>
        </div>
        <div
          id="smallCodeCollapseThree"
          class="collapse"
          aria-labelledby="smallAccordionHeadingThree"
          data-parent="#smallAccordionCodeExample"
        >
          <div class="card-body">
            Anim cliche, high life terry richardson ad squid. 3 wolf moon official, non skateboard dolor brunch. Food truck quinoa. Brunch 3 wolf moon put a bird on it squid single-origin coffee null assume shoreditch et. Nihil anim keffiyeh helvetica, craft beer labor wes anderson cred nets serpent ea president. Ad vegan except butcher vice lemons. Leggings course craft beer farm-to-table, raw denim aesthetic synth braking you probably haven't heard of them accuse abort sustainable VHS.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{{< whats-changed-table >}}

| Date       | Version | Notes                               | Contributors |
| ---------- | ------- | ----------------------------------- | ------------ |
| 11/23/2020 | 1.0.0   | Spacing and typography adjustments. | E. Gunther   |

{{</ whats-changed-table >}}
